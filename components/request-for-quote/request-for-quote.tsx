"use client"
import { GraphQLQuery } from '@aws-amplify/api';
import { API } from 'aws-amplify';
import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import toast from 'react-hot-toast';

interface Product {
    [key: string]: any;
}

interface RequestForQuoteProps {
    product: Product;
}

const initialState ={
    quantity: 1,
    details: ""
}

const RequestForQuote: React.FC<RequestForQuoteProps> = ({ product }) => {    
    const [lgShow, setLgShow] = useState(false);
    const handleClose = () => setLgShow(false);
    const handleShow = () => setLgShow(true);
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState<any>({})
    const [loading, setLoading] = useState(false) 

    const handleChange = async (e:any) =>{
         const {name, value} = e.target;
         setValues({...values, [name]:value})
         setErrors({...errors, [name]: ''})
    }

    const [buyerID, setBuyerId] = useState<any>({})    

    useEffect(() => {
        try {
            if (typeof window !== 'undefined' && window.localStorage) {
                let currentBuyerId = JSON.parse(window.localStorage.getItem("buyer") || '');
                setBuyerId(currentBuyerId?.buyerId)
            } else {
                console.log("not avaialable");
            }
        } catch (error) {
          console.log(error)
        }
    }, [])

    const handleSubmit = async (e:any) =>{
        setLoading(true)
       const validationErrors:any = {};

       e.preventDefault()

       if(!values.quantity){
        setErrors({ quantity: 'Quantity is Required' })
        return;
       }
       
       if(!values.details || values.details.trim() === ''){
        validationErrors.details = 'Details are Required'
       }

       if(Object.keys(validationErrors).length > 0){
        setErrors(validationErrors);
        return;
       }

       const {quantity, details} = values; 
       const detailsData = {
            details: details
       }

       const {sellerId, id:productId, } = product;

       const data = {
        quantity: quantity,
        details: JSON.stringify(detailsData),
        buyerId: buyerID,
        productId: productId,
        sellerId: sellerId,
        status: 'PENDING'
       }

      try {
        await API.graphql<GraphQLQuery<any>>({
            query: createQuote,
            variables: { input: data }
          });
          setLoading(false)
      } catch (error) {
        console.log(error);
      }

       toast.success("Quatation Sent!")
       setValues(initialState);
       setErrors({});
       handleClose()
    }

    return (
        <>
            <Modal show={lgShow} onHide={handleClose} centered size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Request For Qutation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onClick={handleSubmit}>
                    <div className="row">
                        <div className="col-lg-4">
                            <img src={product?.image} alt={product?.name} className="img-fluid" />
                        </div>
                        <div className="col-lg-8">
                            <h6>{product?.name}</h6>
                            <p>{`${product?.description.substring(0, 200)}...`}</p>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="textInput">Quantity</label>
                                <input type="number" id="quantity" name="quantity" className='form-control w-25' placeholder='Quantity' value={values.quantity} onChange={handleChange} />
                                <span className="text-danger">{errors && errors?.quantity}</span>
                            </div>
                        </div>
                        <h6>Detail Requirements</h6>
                        <p>Enter detail product requirements to receive an accurate response</p>
                        <div className="mb-3">
                            <label htmlFor="textarea-input" className="form-label">
                                Textarea
                            </label>
                            <textarea
                                name='details'
                                className="form-control"
                                id="textarea-input"
                                rows={5}
                                placeholder="Enter Description"
                                value={values.details} onChange={handleChange}
                            />
                            <span className="text-danger">{errors && errors?.details}</span>
                        </div>
                       <div className="text-center">
                       <button type="submit" className="btn btn-dark mb-2 w-50">
                          {loading ? 'Request For Quotation (RFQ)' : 'Loading'}  
                        </button>
                       </div>
                    </div>
                    </form>
                </Modal.Body>
            </Modal>

            <button className="btn bg-dark text-white" onClick={handleShow}>Request For Quotation (RFQ)</button>
        </>
    )
}

export default RequestForQuote



const createQuote = /* GraphQL */ `mutation CreateQuote(
    $input: CreateQuoteInput!
    $condition: ModelQuoteConditionInput
  ) {
    createQuote(input: $input, condition: $condition) {
      id
      productId
      product {
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
      buyerId
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
        details
        productDetails
        industryId
        businessId
        createdAt
        updatedAt
        __typename
      }
      quantity
      amount
      media
      details
      status
      createdAt
      updatedAt
      __typename
    }
  }
  `