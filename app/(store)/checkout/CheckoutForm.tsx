"use client"
import { PaymentElement } from '@stripe/react-stripe-js';
import { API } from 'aws-amplify';
import { FunctionComponent, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const updateCart = /* GraphQL */ `mutation UpdateCart(
  $input: UpdateCartInput!
  $condition: ModelCartConditionInput
) {
  updateCart(input: $input, condition: $condition) {
    id
    buyer {
      id
      buyerType
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
      categories
      rating
      age
      gender
      createdAt
      updatedAt
      buyerCartId
      __typename
    }
    items
    subTotal
    taxTotal
    deliveryTotal
    total
    pickupAddress
    billingAddress
    deliveryAddress
    lock
    createdAt
    updatedAt
    cartBuyerId
    __typename
  }
}
`

interface CheckoutFormProps {
  buyerUserId: any;
}

const CheckoutForm: FunctionComponent<CheckoutFormProps> = ({ buyerUserId }) => {
  const [stripeDetailsAvailable, setStripeDetailsAvailable] = useState(false);
  const updateCartCheckout = async (buyerUserId: any) => {
    try {
      await API.graphql({
        query: updateCart,
        variables: { input: { id: buyerUserId, items: JSON.stringify([]) } }
      });
    } catch (error) {
      console.log(error);
    }
  }

  const handleStripeDetailsChange = (details: any) => {
    setStripeDetailsAvailable(details?.complete)
  };


  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (buyerUserId) {
      await updateCartCheckout(buyerUserId)
    }
    localStorage.setItem('cartItems', JSON.stringify([]));
    toast.loading("Payment Initiated!");
    window.location.href = '/success';
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <form className='card p-5' onSubmit={handleSubmit}>
            <PaymentElement 
            onChange={handleStripeDetailsChange} 
            />
           <div className="mx-auto">
           <button className='btn btn-dark text-white mt-4 text-center' style={{ width: 'fit-content' }}  
            disabled={!stripeDetailsAvailable}>Place Order</button>
           </div>
          </form>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default CheckoutForm;