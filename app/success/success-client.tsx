"use client"
import { GraphQLQuery } from '@aws-amplify/api';
import { API } from 'aws-amplify';
import React, { useEffect, useState } from 'react'

const paymentsByPaymentIntentId = /* GraphQL */ `query PaymentsByPaymentIntentId(
    $paymentIntentId: String!
    $sortDirection: ModelSortDirection
    $filter: ModelPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    paymentsByPaymentIntentId(
      paymentIntentId: $paymentIntentId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
        items {
            id
            orders {
              items {
                id
                items
              }
            }
          }
      nextToken
      __typename
    }
  }
  `
interface Item {
  unitPrice: number;
  image: string;
}

interface OrderItem {
  id: string;
  items: Item[];
}
const SuccessClient = () => {

  const [clientSecret, setClientSecret] = useState("")
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);  

  useEffect(() => {
    setClientSecret(JSON.parse(window.localStorage.getItem("clientSecret") || "")?.split('_secret')[0])
  }, [])

  const parseItems = (items: string): any[] => {
    try {
      return JSON.parse(items);
    } catch (error) {
      console.error('Error parsing items:', error);
      return [];
    }
  };

  const fetchOrdersByPayment = async () => {
    try {
      const response = await API.graphql<GraphQLQuery<any>>({
        query: paymentsByPaymentIntentId,
        variables: { paymentIntentId: clientSecret }
      });
      const fetchedOrderItems: OrderItem[] = response?.data?.paymentsByPaymentIntentId?.items[0]?.orders?.items || [];
      const parsedOrderItems = fetchedOrderItems.map((item) => ({
        ...item,
        items: typeof item?.items === 'string' ? parseItems(item?.items) : item?.items || [],
      }));

      setOrderItems(parsedOrderItems);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  useEffect(() => {
    fetchOrdersByPayment()
  }, [clientSecret])

  return (
    <>
      <div className="row">
       <div className="col-lg-10 mx-auto">
        <div className="row">
        <div className="col-lg-4">
          <div className="d-flex flex-column">
            <img src="https://wtx-cdn.s3.amazonaws.com/img/order-placed-new.png" alt="" className="img-fluid" style={{ width: '500px' }} />
          </div>
        </div>
        <div className="col-lg-8 my-auto">
          <div className="mt-4 mt-lg-0">
            <div className="card shadow-sm">
              <h5 className="px-6 py-4 bg-transparent mb-0">Order Details</h5>
              <ul className="list-group list-group-flush">
                {
                  orderItems?.map((orderItem: any) => {
                    return (
                      <>
                        <div key={orderItem.id}>
                          {orderItem?.items?.map((item: any) => (
                            <li className="list-group-item px-4 py-3" key={item?.id}>
                              <div className="row align-items-center">
                                <div className="col-2 col-md-2">
                                  <img
                                    src={item?.image}
                                    alt={item?.name}
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="col-5 col-md-4">
                                  <a href={`/app/orders/${orderItem?.id}`}> <h6 className="mb-0">{item?.name}</h6></a>
                                  <span>
                                    <small className="text-muted">${item?.unitPrice} / {item?.unit}</small>
                                  </span>
                                </div>
                                <div className="col-2 col-md-2 text-center text-muted">
                                  <span>{item?.quantity}</span>
                                </div>
                                <div className="col-3 text-lg-end text-start text-md-end col-md-2">
                                  <span className="fw-bold">${item?.price}</span>
                                </div>
                                <div className="col-lg-2">
                                <a href={`/app/orders/${orderItem?.id}`} className='btn btn-dark'>View</a>
                                </div>
                              </div>
                            </li>
                          ))}
                        </div>
                      </>
                    );
                  })
                }
              </ul>
            </div>
          </div>
        </div>
        </div>
       </div>
      </div>
    </>
  )
}

export default SuccessClient


