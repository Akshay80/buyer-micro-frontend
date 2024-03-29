/* eslint-disable */
// @ts-ignore
// @ts-nocheck
'use client';
import { GraphQLQuery } from '@aws-amplify/api';
import { useEffect, useState } from "react";
import { API, Auth } from 'aws-amplify';
import moment from 'moment'
import Spinner from '../../../libs/shared/ui/src/components/spinner/spinner';

interface getBuyerByUserProps {
  buyerUsersByUserId: {
    userId: string,
    items: any
  }
}

interface fetchOrdersProps {
  searchOrders: {
    items: any
  }
}

const searchOrders = /* GraphQL */ `query SearchOrders(
  $filter: SearchableOrderFilterInput
  $sort: [SearchableOrderSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableOrderAggregationInput]
) {
  searchOrders(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      id
      code
      items
      rating
      buyerId
      sellerId
      paymentId
      userId
      phone
      currency
      taxTotal
      deliveryTotal
      subTotal
      total
      reason
      pickupAddress
      billingAddress
      deliveryAddress
      orderStatus
      changeLog
      shipmentDetails
      orderDate
      extCarrierId
      serviceCode
      extShipmentId
      rateId
      specialInstructions
      deliveryInstructions
      createdAt
      updatedAt
      __typename
    }
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` 

function OrderList() {
const [orders, setOrders] = useState<any[]>([])
const [spinner, setSpinner] = useState(false)
const [selectFilter, setSelectFilter] = useState<any>('ALL');

  useEffect(() => {
    setSpinner(true)
    try {
      Auth.currentUserInfo().then((user: any) => {
        if(user?.attributes?.sub){
          async function getbuyerId(){
            const res = await API.graphql<GraphQLQuery<getBuyerByUserProps>>({
              query: buyerUsersByUserId,
              variables: {
                userId: user?.attributes?.sub,
              }
            })
  
            if(res?.data?.buyerUsersByUserId?.items[0].buyerId){
              let sort = { field: 'createdAt', direction: 'desc' }
              let filter: any = { buyerId: { eq: res?.data?.buyerUsersByUserId?.items[0].buyerId} };
              if (selectFilter !== 'ALL') {
                filter = { ...filter, orderStatus: { eq: selectFilter } };
              }  
              const orders = await API.graphql<GraphQLQuery<fetchOrdersProps>>({
                query: searchOrders,
                variables: {
                  limit: 100,
                  filter: filter,
                  sort: sort,
                }
              })
              setOrders(orders?.data?.searchOrders?.items)
              setSpinner(false)
            }
          }
          getbuyerId()
        }else{
          setSpinner(false)
        }
    })
    } catch (error) {
      setSpinner(false)
    }
  },[selectFilter])



  return (
    <Spinner show={spinner}>
    <div className='container'>
      <div className="row mt-10">
        <div className="col-md-12">
          <h2>Your Orders</h2>
        </div>
      </div>
      <div className='h-100 '>
        <div className="row justify-content-between mb-5">
          {/* <div className="col-md-4 col-12 mb-2 mb-md-0">
            <form className="d-flex" role="search">
              <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
            </form>
          </div> */}
          <div className="col-lg-2 col-md-4 col-12 ms-auto">
            <select className="form-select" value={selectFilter} defaultValue="" onChange={(e)=> setSelectFilter(e.target.value)}>
              <option selected>ALL</option>
              <option value="DELIVERED">DELIVERED</option>
              <option value="OPEN">OPEN</option>
              <option value="IN_TRANSIT">IN_TRANSIT</option>
              <option value="READY_FOR_PICKUP">READY_FOR_PICKUP</option>
              <option value="CANCELLED">CANCELLED</option>
            </select>
          </div>
        </div>
        <div className="table-responsive-xxl border-0">
          <table className="table mb-0 text-nowrap table-centered ">
            <thead className="bg-light">
              <tr>
                <th>Order Id</th>
                <th>Date</th>
                <th>Items</th>
                <th>Status</th>
                <th>Amount</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              {orders?.length ? orders?.map((item: any, index) => {                
                return (
                  <tr key={index}>
                <td className="align-middle border-top-0">
                  <a href={`/app/orders/${item?.id}`} className="text-inherit text-uppercase">#{item?.id?.split('-')[0]}</a>
                </td>
                <td className="align-middle border-top-0">
                 {moment(item?.createdAt).format('DD-MM-yyyy')}
                </td>
                <td className="align-middle border-top-0">
                  {JSON.parse(item?.items).length}
                </td>
                <td className="align-middle border-top-0">
                  <span className="badge bg-warning">{item?.orderStatus}</span>
                </td>
                <td className="align-middle border-top-0">
                  ${item.total}
                </td>
                <td className="text-muted align-middle border-top-0">
                  <a href={`/app/orders/${item?.id}`} className="text-inherit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="View"><i className="feather-icon icon-eye" /></a>
                </td>
              </tr>
                )
              }) : 
              <tr>
                <td>No Orders</td>
              </tr>
              }
            </tbody>
          </table>
        </div>
        {/* <div className="border-top d-md-flex justify-content-between align-items-center p-6">
          <span>Showing 1 to 8 of 12 entries</span>
          <nav className="mt-2 mt-md-0">
          <ul className="pagination mb-0 ">
          <li className="page-item disabled"><a className="page-link " href="#!">Previous</a></li>
          <li className="page-item"><a className="page-link active" href="#!">1</a></li>
              <li className="page-item"><a className="page-link" href="#!">2</a></li>
              <li className="page-item"><a className="page-link" href="#!">3</a></li>
              <li className="page-item"><a className="page-link" href="#!">Next</a></li>
            </ul>
          </nav>
        </div> */}
      </div>
    </div>
    </Spinner>
  );
}

export default OrderList;


const buyerUsersByUserId = /* GraphQL */ `
  query BuyerUsersByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBuyerUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    buyerUsersByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        buyerId
        userId
        role
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;

