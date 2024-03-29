
import { GraphQLQuery } from '@aws-amplify/api';
import { API } from 'aws-amplify';
import { Metadata } from "next";
import moment from 'moment'
import { getOrder } from '@/graphql/queries';
import AddReview from '../add-review';


interface getBuyerByUserProps {
  getOrder: {
    id: string,
    items: any
  }
}

async function getOrderById(id: string) {
  const res: any = await API.graphql<GraphQLQuery<getBuyerByUserProps>>({
    query: getOrder,
    variables: {
      id: id,
    }
  })

  let data = res?.data?.getOrder
  data.items = JSON.parse(data?.items)
  return data
}

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params?.id
  const order = await getOrderById(id);
  return {
    title: `WorldTradeX - ${order?.id?.split('-'[0])}`,
  }
}

export default async function Id({ params }: Props) {
  const id = params.id
  const orderData = await getOrderById(id);  

  const productId = orderData?.items?.[0].id;
  const userId = orderData?.user?.id;
  
  
  return (
    <div className='container'>
      <div className="card h-100 card-lg mt-10 mb-10">
        <div className="card-body p-6">
          <div className="d-md-flex justify-content-between">
            <div className="d-flex align-items-center mb-2 mb-md-0">
              <h2 className="mb-0 text-uppercase">Order ID: #{orderData?.id.split('-')[0]}</h2>
              <span className="badge bg-light-warning text-dark-warning ms-2">{orderData?.orderStatus}</span>
            </div>
            <div className="d-md-flex">
              <div>
                {/* Cancel Button modal */}
                {/* <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                  Cancel Order
                </button> */}
                {/* Cancel Modal */}
                <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalCenterTitle">Order #FC0001</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                          {/* <span aria-hidden="true">×</span> */}
                        </button>
                      </div>
                      <div className="modal-body">
                        Are you sure you want to cancel this order?
                      </div>
                      {/* <div className="modal-footer">
                        <button type="button" className="btn btn-dark">Yes, I am sure </button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No, don't cancel</button>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-12">
                <div className="mb-6">
                  <h6>Seller Details</h6>
                  <p className="mb-1 lh-lg">{orderData?.seller?.name}<br />
                    {orderData?.seller?.email}<br />
                    {orderData?.seller?.phone}</p>
                  {/* <a href="#">View Profile</a> */}
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-12">
                <div className="mb-6">
                  <h6>Shipping Address</h6>
                  <h6>{orderData?.deliveryAddress &&
                    `${JSON.parse(orderData?.deliveryAddress)?.label}
                    `}</h6>
                  <p className="mb-1 lh-lg">
                    {orderData?.deliveryAddress &&
                      `${JSON.parse(orderData?.deliveryAddress)?.address_line1 && JSON.parse(orderData?.deliveryAddress)?.address_line1},
                    ${JSON.parse(orderData?.deliveryAddress)?.address_line2 && JSON.parse(orderData?.deliveryAddress)?.address_line2},
                    ${JSON.parse(orderData?.deliveryAddress)?.city && JSON.parse(orderData?.deliveryAddress)?.city},
                    ${JSON.parse(orderData?.deliveryAddress)?.state && JSON.parse(orderData?.deliveryAddress)?.state},
                    ${JSON.parse(orderData?.deliveryAddress)?.postal_code && JSON.parse(orderData?.deliveryAddress)?.postal_code}
                    `}
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-12">
                <div className="mb-6">
                  <h6>Billing Address</h6>
                  <p className="mb-1 lh-lg">
                    {orderData?.seller?.address &&
                      `${JSON.parse(orderData?.seller?.address)?.address_line1 ? JSON.parse(orderData?.seller?.address)?.address_line1 : ''}
                    ${JSON.parse(orderData?.seller?.address)?.address_line2 ? JSON.parse(orderData?.seller?.address)?.address_line2 : ''}
                    ${JSON.parse(orderData?.seller?.address)?.city ? JSON.parse(orderData?.seller?.address)?.city : ''}
                    ${JSON.parse(orderData?.seller?.address)?.state ? JSON.parse(orderData?.seller?.address)?.state : ''}
                    ${JSON.parse(orderData?.seller?.address)?.postal_code ? JSON.parse(orderData?.seller?.address)?.postal_code : ''}
                    `}
                  </p>
                </div>
              </div>
              {/* address */}
              <div className="col-lg-3 col-md-3 col-12">
                <div className="mb-6">
                  <h6>Order Details</h6>
                  <p className="mb-1 lh-lg">Order ID: <span className="text-dark">#{orderData?.id.split('-')[0]}</span><br />
                    Order Date: <span className="text-dark"> {moment(orderData?.createdAt).format('DD-MM-yyyy')}</span><br />
                    Order Total: <span className="text-dark">${orderData?.total}</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="table-responsive">
              {/* Table */}
              <table className="table mb-0 text-nowrap table-centered">
                {/* Table Head */}
                <thead className="bg-light">
                  <tr>
                    <th>Products</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    {/* <th>Review</th> */}
                  </tr>
                </thead>
                {/* tbody */}
                <tbody>
                  {orderData?.items && orderData?.items?.map((item: any, index: number) => {                    
                    return (
                      <tr key={index}>
                      <td>
                        <a href={`/product/${item.id}`} className="text-inherit">
                          <div className="d-flex align-items-center">
                            <div>
                              <img src={item?.thumbnail} className="icon-shape icon-lg" />
                            </div>
                            <div className="ms-lg-4 mt-2 mt-lg-0">
                              <h5 className="mb-0 h6">
                                {item?.name}
                              </h5>
                            </div>
                          </div>
                        </a>
                      </td>
                      <td><span className="text-body">${item?.price}</span></td>
                      <td>{item?.quantity}</td>
                      <td>${item?.price * item?.quantity}</td>
                      {/* <td>
                      <a href="#" className="btn btn-dark">Review Product</a>
                    </td> */}
                    </tr>
                    )
                  })}

                  <tr>
                    <td className="border-bottom-0 pb-0" />
                    <td className="border-bottom-0 pb-0" />
                    <td colSpan={1} className="fw-medium text-dark ">
                      {/* text */}
                      Sub Total :
                    </td>
                    <td className="fw-medium text-dark ">
                      {/* text */}
                      ${orderData?.subTotal}
                    </td>
                  </tr>
                  <tr>
                    <td className="border-bottom-0 pb-0" />
                    <td className="border-bottom-0 pb-0" />
                    <td colSpan={1} className="fw-medium text-dark ">
                      {/* text */}
                      Tax
                    </td>
                    <td className="fw-medium text-dark  ">
                      {/* text */}
                      ${orderData?.taxTotal}
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td />
                    <td colSpan={1} className="fw-semi-bold text-dark ">
                      {/* text */}
                      Grand Total
                    </td>
                    <td className="fw-semi-bold text-dark ">
                      {/* text */}
                      ${orderData?.total}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

         <div className="row my-5">
          <AddReview productId={productId} userId={userId} />
         </div>
    </div>
  );
}

