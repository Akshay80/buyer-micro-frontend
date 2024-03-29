import { API, GraphQLQuery } from "@aws-amplify/api";
import SellerChat from "./sellerChat";
// import { getProduct } from "src/graphql/queries";

const getSeller = /* GraphQL */ `query GetSeller($id: ID!) {
    getSeller(id: $id) {
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
      products {
        nextToken
        __typename
      }
      orders {
        nextToken
        __typename
      }
      users {
        nextToken
        __typename
      }
      chats {
        nextToken
        __typename
      }
      messages {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
  `
type Props = {
    params: { id: string, sellerId: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

async function getSellerById(sellerId: string) {
    const response: any = await API.graphql<GraphQLQuery<any>>({
        query: getSeller,
        variables: { id: sellerId }
    })
    const product = response.data.getSeller;
    if (product?.address) product.address = JSON.parse(product.address)
    if (product?.images) product.images = JSON.parse(product.images)
    if (product?.documents) product.documents = JSON.parse(product.documents)
    if (product?.bank) product.bank = JSON.parse(product.bank)
    return product;
}

// async function getProductById(prodId: string) {
//     const response: any = await API.graphql<GraphQLQuery<any>>({
//       query: getProduct,
//       variables: { id: prodId }
//     })

//     const product = response.data.getProduct;
//     product.tierPrice = JSON.parse(product?.tierPrice)
//     product.attributes = JSON.parse(product?.attributes)
//     product.documents = JSON.parse(product?.documents)
//     product.images = JSON.parse(product?.images)
//     if (product.seller?.address) product.seller.address = JSON.parse(product.seller.address)
  
//     return product;
//   }
  

export default async function Id({ params }: Props) {
    const sellerId = params.sellerId
    // const prodId = params?.id
    const product = await getSellerById(sellerId)
    // const productDetail = await getProductById(prodId)
    
    // console.log(product, "product");
    // console.log(sellerId, "sellerId");
    

    return (
        <div className="container-fluid">
            <div key={product?.id}>
                <div className="row mx-auto mb-14 mt-10">
                    <div className="col-lg-8 mx-auto">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="mb-8 mb-md-0 text-center text-md-start">
                                    <h1 className="mb-6">{product?.name}</h1>
                                    <p className="mb-0 lead"> {product?.profile.substring(0, 250)} </p>
                                    <div className="row mt-3">
                                        <div className="col-lg-5">
                                            <p className="mb-0 lead"> Phone:- <a href={`tel:${product?.phone}`}>{product?.phone}</a> </p>
                                        </div>
                                        <div className="col-lg-7">
                                            <p className="mb-0 lead"> Email:- <a href={`mailto:${product?.email}`}>{product?.email}</a> </p>
                                        </div>
                                    </div>
                                   <div className="row">
                                   <div className="col-lg-12 mt-3">
                                        <p className="mb-0 lead"> website:- <a href={product?.website}>{product?.website}</a> </p>
                                    </div>
                                    
                                   </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="me-6">
                                    <img
                                        src={product.image ? product.image : 'https://wtx-cdn.s3.amazonaws.com/img/profile.png'}
                                        alt={product?.name}
                                        className="img-fluid rounded"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row mt-10">
                            <div className="col-lg-6">
                                <div className="card p-6 card-product">
                                    <div className="mt-4">
                                        <h2 className="mb-1 h5">Address</h2>
                                        <p className="mb-0 lead"> Country:- {product?.address?.country} </p>
                                        <p className="mb-0 lead"> Address1:- {product?.address?.address_line1} </p>
                                        <p className="mb-0 lead"> Address2:- {product?.address?.address_line2} </p>
                                        <p className="mb-0 lead"> City:- {product?.address?.city} </p>
                                        <p className="mb-0 lead"> state:- {product?.address?.state} </p>
                                        <p className="mb-0 lead"> label:- {product?.address?.label} </p>
                                        <p className="mb-0 lead"> postal code:- {product?.address?.postal_code} </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card p-6 card-product">
                                    <div className="mt-4">
                                        <h2 className="mb-1 h5">Bank Details</h2>
                                        <p className="mb-0 lead"> Account No:- {product?.bank?.account_number} </p>
                                        <p className="mb-0 lead"> Account Name:- {product?.bank?.account_name} </p>
                                        <p className="mb-0 lead"> Bank Name:- {product?.bank?.bank_name} </p>
                                        <p className="mb-0 lead"> Routing Num:- {product?.bank?.routing_number} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        


                    <div className="mt-5">
                    <h2>Certificates</h2>
                    <div className="row">
                    {product?.images?.certificates?.map((item: any, i: any) => (
                    <div key={i} className="col-lg-4">
                        {item?.type === "image" ?
                        <div className=''>
                        <a href={item?.url} target='_blank'>
                            <img alt='docx' src={item?.url} style={{ cursor: 'pointer', objectFit: "cover", borderRadius: 7 }} className="img-fluid rounded" />
                        </a>
                        </div> :
                        <div className=''>
                        <a href={item?.url} target='_blank'>
                            <img alt='docx' src={"https://wtx-cdn.s3.amazonaws.com/img/PDF_file_icon.svg.png"} className="img-fluid rounded"  style={{ cursor: 'pointer', objectFit: "contain", borderRadius: 7 }} />
                        </a>
                        </div>
                        }
                        </div> 
                        ))}
                        </div>
                        </div>

                        <div className="row mt-10">
                        <h2>Documents</h2>
                        {product?.documents[0]?.medias?.map((item: any, i: any) => (
                        <div key={i} className="col-lg-4">
                        {item?.type === "image" ?
                        <div className=''>
                        <a href={item?.url} target='_blank'>
                            <img alt='docx' src={item?.url} style={{ cursor: 'pointer', objectFit: "cover", borderRadius: 7 }} className="img-fluid rounded" />
                        </a>
                        </div> :
                        <div className=''>
                        <a href={item?.url} target='_blank'>
                            <img alt='docx' src={"https://wtx-cdn.s3.amazonaws.com/img/PDF_file_icon.svg.png"} className="img-fluid rounded"  style={{ cursor: 'pointer', objectFit: "contain", borderRadius: 7 }} />
                        </a>
                        </div>
                        }
                        </div> 
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

