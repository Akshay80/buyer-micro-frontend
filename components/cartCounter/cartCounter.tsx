"use client"
import { GraphQLQuery } from '@aws-amplify/api';
import { API } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const customGetProduct = /* GraphQL */ `query GetProduct($id: ID!) {
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
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
  `
interface CounterProps {
    ProductID: string;
}

const Counter = (props: CounterProps) => {
    const [count, setCount] = useState(1);
    const [prod, setProd] = useState<any>([]);     
    
    useEffect(() => {
        handleGetProduct()
    }, [])

    const handleGetProduct = async () => {
        const ProductData = await API.graphql<GraphQLQuery<any>>({
            query: customGetProduct,
            variables: {
                id: props?.ProductID
            }
        })
        setProd(ProductData?.data?.getProduct)
    }

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };
    const handleAddToCartLocal = () => {
        if (prod.stock > count) {
            // Call handleAddToCart from your store.js file
            const existingCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
                const existingCartItem = existingCartItems.find((item: any) => item.id === prod.id);
                if (existingCartItem) {
                    existingCartItem.quantity += count;
                } else {                    
                    const cartItem = {
                        id: prod?.id,
                        name: prod?.name,
                        price: prod?.listPrice,
                        quantity: count,
                        rating: null,
                        review: null,
                        sellerId: prod?.sellerId,
                        image: prod?.image,
                        thumbnail: prod?.image,
                        tierPrice: prod?.tierPrice,
                        unit: prod?.unitType,
                        weight: prod?.weight,
                        stock: prod?.stock,
                        unitPrice: prod?.unitPrice,
                    };
                    existingCartItems.push(cartItem);
                }
                localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
               setTimeout(() =>{
                window.location.reload();
               }, 1000)
            toast.success("Item Added to cart");
        } else {
            toast.error("Out of stock!!");
        }
    };


    return (
        <>
            <div>
                <div className="input-group input-spinner">
                    <input
                        className="button-minus btn btn-sm"
                        type="button"
                        value="-"
                        onClick={handleDecrement}
                    />
                    <input
                        className="button-plus btn btn-sm mx-2"
                        type="number"
                        value={count}
                        readOnly
                        style={{width: '34px'}}
                    />
                    <input
                        className="button-plus btn btn-sm"
                        type="button"
                        value="+"
                        onClick={handleIncrement}
                    />
                </div>
            </div>
            <div className="mt-3 row justify-content-start g-2 align-items-center">
                <div className="col-xxl-4 col-lg-4 col-md-5 col-5 d-grid">
                    <button type="button" className="btn btn-dark" onClick={handleAddToCartLocal}><i className="feather-icon icon-shopping-bag me-2" />
                        Add to Cart
                    </button>
                </div>
            </div>
            <Toaster />
        </>
    );
};

export default Counter;