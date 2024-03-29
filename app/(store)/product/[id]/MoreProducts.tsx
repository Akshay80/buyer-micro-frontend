"use client"

import { API } from "aws-amplify"
import { useEffect, useState } from "react"

const productsBySellerId = /* GraphQL */ `query ProductsBySellerId(
    $sellerId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productsBySellerId(
      sellerId: $sellerId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        productCategoryId
        productSubCategoryId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
  `
  interface ProductCategory {
    sellerId: number;
  }

  interface Product {
    id: string;
    code: string | null;
    name: string;
    description: string;
    image: string;
    images: string; 
    documents: string; 
    listPrice: number;
    unitPrice: number;
    tierPrice: number | null;
    unitType: string;
    taxCategoryId: string | null;
    attributes: string; 
    weight: number;
    active: boolean;
    verified: boolean;
    taxExempt: boolean;
    keywords: string[];
    leadTime: string;
    rating: number | null;
    stock: number;
    sellerId: string;
    productCategoryId: string;
    productSubCategoryId: string;
    createdAt: string;
    updatedAt: string;
    __typename: string;
  }
  
  // Example usage:
  

const MoreProducts = (props: ProductCategory) => {
    

    const [products, setProducts] = useState<Product[]>([]);
    

    useEffect(() =>{
        if(props?.sellerId){
            fetchProductsWithSellerId()
        }
    }, [])

    const fetchProductsWithSellerId = async () =>{
        try {
            const response = await API.graphql<any>({
                query: productsBySellerId,
                variables: { sellerId: props?.sellerId }
              });
              setProducts(response?.data?.productsBySellerId?.items)
        } catch (error) {
            console.log(error);
        }
    }

    return (
    <>
     <div className="container my-5">
        <div className="row">
            <h2>More Products From the Seller</h2>
            {
                products?.slice(0,12).map((item:any) =>{
                    return (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3" key={item?.id}>
                        <div
                        className="item"
                        tabIndex={0}
                        style={{ width: 202 }}
                        data-slick-index={5}
                        aria-hidden="false"
                        >
                        <a
                            href={`${item?.id}`}
                            className="text-decoration-none text-inherit"
                            tabIndex={0}
                        >
                            <div className="card card-product mb-lg-4">
                            <div className="card-body text-center py-8">
                                <img
                                style={{height: '150px'}}
                                src={item?.image}
                                alt={item?.name}
                                className="mb-3 img-fluid"
                                />
                                <div className="text-truncate">{item?.name}</div>
                                <div className="text-truncate">USD {item?.listPrice}</div>
                            </div>
                            </div>
                        </a>
                        </div>
            </div>
                    )
                })
            }
        </div>
     
     </div>

    </>
  )
}

export default MoreProducts