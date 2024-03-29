import { GraphQLQuery } from "@aws-amplify/api";
// import Layout from "apps/buyer/components/layout/layout";
import { API } from "aws-amplify";
import { Metadata } from "next";
// import { getProduct } from "src/graphql/queries";
import SwiperCarousel from "../../../../libs/shared/ui/src/lib/swiperCarousel/swiperCarousel";
// import Counter from "apps/buyer/components/cartCounter/cartCounter";
import Counter from "../../../../components/cartCounter/cartCounter";
import MoreProducts from "./MoreProducts";
import moment from "moment";
import SellerChat from "./[sellerId]/sellerChat";
import RequestForQuote from "../../../../components/request-for-quote/request-for-quote";

const getProduct = /* GraphQL */ `query GetProduct($id: ID!) {
  getProduct(id: $id) {
    id
    code
    name
    description
    image
    images
    documents
    listPrice
    unitPrice
    tierPrice
    unitType
    taxCategoryId
    attributes
    weight
    active
    verified
    taxExempt
    keywords
    leadTime
    rating
    stock
    sellerId
    seller {
      id
      name
      profile
      image
      taxId
      active
      verified
      phone
      email
      website
      address
      attributes
      images
      documents
      rating
      bank
      age
      gender
      createdAt
      updatedAt
      __typename
    }
    productCategoryId
    productCategory {
      id
      productType
      name
      image
      active
      sort
      createdAt
      updatedAt
      __typename
    }
    productSubCategoryId
    productSubCategory {
      id
      name
      image
      active
      sort
      productCategoryId
      createdAt
      updatedAt
      __typename
    }
    feedbacks {
      items {
        createdAt
        comment
        buyerUserId
        isVerified
        media
        id
        productFeedbackSellerId
        productId
        rating
        updatedAt
        buyerUser {
          user {
            name
            photo
          }
        }
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
`

async function getProductById(id: string) {
  const response: any = await API.graphql<GraphQLQuery<any>>({
    query: getProduct,
    variables: { id: id }
  })

  const product = response.data.getProduct;
  product.tierPrice = JSON.parse(product?.tierPrice)
  product.attributes = JSON.parse(product?.attributes)
  product.documents = JSON.parse(product?.documents)
  product.images = JSON.parse(product?.images)
  if (product.seller?.address) product.seller.address = JSON.parse(product.seller.address)

  return product;
}

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id
  const product = await getProductById(id)
  return {
    title: `${product.name} - WorldTradeX`,
  }
}

export default async function Id({ params }: Props) {
  const id = params.id
  const product = await getProductById(id);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <SwiperCarousel images={product?.images} />
          </div>
          <div className="col-md-6">
            <div className="ps-lg-10 mt-6 mt-md-0">
              <h1 className="mb-1">{product?.name}</h1>
              <div className="mb-4">
                {/* {
                  product?.rating && <StarRatings rating={product?.rating} starRatedColor="#FFCD3C" starDimension="16px" starSpacing="2px" />
                } */}
              </div>

              <div className="fs-4 d-flex gap-2">
                {
                  product?.tierPrice == null ? (<b>${product?.listPrice}</b>) : (
                    <>
                      {
                        product?.tierPrice.map((data: any, index: any) => (
                          <div className="btn btn-outline-secondary" key={index}>
                            <div className="m0">{`$${data?.discountPrice}`}</div>
                            <div>Qty {data?.minQty} to {data?.maxQty}</div>
                          </div>
                        ))
                      }
                    </>
                  )
                }
              </div>
              <hr className="my-6" />
              <Counter ProductID={product?.id} />
              <hr className="my-6" />

              <table className="table table-borderless mb-0">
                <tbody>
                  <tr>
                    <td>Product Code:</td>
                    <td>{product?.code}</td>
                  </tr>
                  <tr>
                    <td>Availability:</td>
                    <td>{product?.stock > 0 ? 'In Stock' : 'Out of Stock'}</td>
                  </tr>
                  <tr>
                    <td>Type:</td>
                    <td>{product?.productCategory?.name} / {product?.productSubCategory?.name}</td>
                  </tr>
                  <tr>
                    <td>Shipping:</td>
                    <td><small>{product?.leadTime} day shipping</small></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <ul className="nav nav-pills nav-lb-tab" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="product-tab" data-bs-toggle="tab" data-bs-target="#product-tab-pane" type="button" role="tab" aria-controls="product-tab-pane" aria-selected="true">
              Product Description
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews-tab-pane" type="button" role="tab" aria-controls="reviews-tab-pane" aria-selected="false" tabIndex={-1}>
              Reviews
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="seller-tab" data-bs-toggle="tab" data-bs-target="#seller-tab-pane" type="button" role="tab" aria-controls="seller-tab-pane" aria-selected="false" tabIndex={-1}>
              Seller Info
            </button>
          </li>
          <li className="nav-item mt-2" >
            <SellerChat sellerId={product?.sellerId} />
          </li>
          <li className="nav-item mt-2">
            <RequestForQuote product={product} />
          </li>

        </ul>
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade active show" id="product-tab-pane" role="tabpanel" aria-labelledby="product-tab" tabIndex={0}>
            <div className="my-4">
              <p className="mb-0">{product?.description} </p>
              <div>

              </div>
            </div>

            <table className="table table-striped">
              <tbody>
                {
                  product?.attributes?.map((data: any, index: any) => (
                    <tr key={index}>
                      <td>{data?.name}</td>
                      <td>{data?.value}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>

          <div className="tab-pane fade" id="reviews-tab-pane" role="tabpanel" aria-labelledby="reviews-tab" tabIndex={0}>
            {
              product?.feedbacks?.items.length !== 0 ? (
                <div className="my-8">
                  {/* row */}
                  <div className="row">
                    <div className="col-md-12">
                      <div className="d-flex justify-content-between align-items-center mb-8">
                        <div>
                          <h4>Reviews</h4>
                        </div>
                        {/* <div>
                            <select className="form-select">
                              <option>Top Review</option>
                              <option value={1}>One</option>
                              <option value={2}>Two</option>
                              <option value={3}>Three</option>
                            </select>
                          </div> */}
                      </div>
                      {
                        product?.feedbacks?.items?.map((item: any, index: number) => {
                          const { createdAt, rating } = item;
                          const itemCreatedAt = createdAt;
                          const formattedDate = moment(itemCreatedAt).format('YYYY-MM-DD');
                          const formattedTime = moment(itemCreatedAt).format('hh:mm:ss A');

                          return (
                            <div className="mb-10" key={index}>
                              <div className="d-flex border-bottom pb-6 mb-6">
                                <img src={item?.buyerUser?.user?.photo ? item?.buyerUser?.user?.photo : 'https://wtx-cdn.s3.amazonaws.com/img/profile.png'} className="rounded-circle avatar-lg" />
                                <div className="ms-5">
                                  <h6 className="mb-1">
                                    {item?.buyerUser?.user?.name}
                                  </h6>

                                  <p className="small"> <span className="text-muted">{formattedDate} {formattedTime}</span></p>

                                  <div className=" mb-2">
                                    Rating:
                                    <div className="star-rating">
                                      {[...Array(rating).slice(0, 5)].map((star, index) => {
                                        index += 1;
                                        return (
                                          <span className="star" key={index}>  <i className="bi bi-star-fill text-warning" /> </span>
                                        );
                                      })}
                                    </div>
                                  </div>
                                  {/* text*/}
                                  <p>{item?.comment}</p>
                                </div>
                              </div>
                              {/* <div>
                          <a href="#" className="btn btn-outline-gray-400 text-muted">Read More Reviews</a>
                        </div> */}
                            </div>
                          )
                        })
                      }

                    </div>
                  </div>
                </div>
              ) : (
                <div className="my-4">
                  <div className="col-md-4">
                    <h2>No Reviews Found</h2>
                  </div>
                </div>
              )
            }

          </div>

          <div className="tab-pane fade" id="seller-tab-pane" role="tabpanel" aria-labelledby="seller-tab" tabIndex={0}>
            <div className="my-4">
              <p className="mb-0">{product?.seller?.profile} </p>
              <div>
                <a href={`/product/${id}/${product?.sellerId}`} className="btn btn-dark my-4">View Seller Profile</a>
              </div>
            </div>
            <table className="table table-striped">
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>{product?.seller?.name}</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>{`${product?.seller?.address?.address_line1}, ${product?.seller?.address?.city}, ${product?.seller?.address?.country}`}</td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td>{product?.seller?.phone}</td></tr>
                <tr>
                  <td>Email</td>
                  <td>{product?.seller?.email}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <MoreProducts sellerId={product?.sellerId} />

      </div>
    </>
  );
}