"use client"
import { API, GraphQLQuery } from '@aws-amplify/api';
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import toast from 'react-hot-toast';

const initialState = {
    quantity: '',
    amount: '',
    details: ''
}

const RfqBuyer = () => {
    const [values, setValues] = useState(initialState)
    const [quotes, setQuotes] = useState<any>([])
    const [buyerId, setBuyerId] = useState<string | null>(null);
    const [tabStatus, setTabStatus] = useState('PENDING')
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    console.log(quotes, "quotes");
    

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



    useEffect(() => {
        if (buyerId) {
            fetchQuotes()
        }
    }, [buyerId, tabStatus])



    const fetchQuotes = async () => {
        setLoading(true)
        try {
            let response = await API.graphql<GraphQLQuery<any>>({
                query: searchQuotes,
                variables: { filter: { buyerId: { eq: buyerId }, status: { eq: tabStatus } } }
            });
            const parsedQuotes = response.data.searchQuotes.items.map((quote: any) => {
                const parsedMedia = JSON.parse(quote.media);
                const parsedDetails = JSON.parse(quote.details)
                return {
                    ...quote,
                    media: parsedMedia,
                    details: parsedDetails.details,
                    sellerComment: parsedDetails.sellerComment,
                }
            })
            setQuotes(parsedQuotes)
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (e: any) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }

    const handleAddData = (quoteData: any) => {
        setValues({
            ...values,
            quantity: quoteData.quantity,
            amount: quoteData.product.unitPrice,
            details: quoteData.details
        })
    }

    const handleAddToCartLocal = (e: any) => {
        const prod = quotes[0].product;
        const count = quotes[0].quantity;

        if (prod.stock > count) {
            // Call handleAddToCart from your store.js file
            const existingCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
            const existingCartItem = existingCartItems.find((item: any) => item.id === prod.id);
            if (existingCartItem) {
                // existingCartItem.quantity += count;
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
            setTimeout(() => {
                window.location.href = '/cart'
            }, 1000)
            toast.success("Item Added to cart");
        } else {
            toast.error("Out of stock!!");
        }
    }

    return (
        <>
            {/* javascript behaviour */}
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" onClick={() => setTabStatus('PENDING')}>
                    <a
                        className="nav-link active"
                        id="new-tab"
                        data-bs-toggle="tab"
                        href="#new"
                        role="tab"
                        aria-controls="new"
                        aria-selected="true"
                    >
                        New
                    </a>
                </li>
                <li className="nav-item" onClick={() => setTabStatus('ACCEPTED')}>
                    <a
                        className="nav-link"
                        id="accepted-tab"
                        data-bs-toggle="tab"
                        href="#accepted"
                        role="tab"
                        aria-controls="accepted"
                        aria-selected="false"
                    >
                        Accepted
                    </a>
                </li>
                <li className="nav-item" onClick={() => setTabStatus('REJECTED')}>
                    <a
                        className="nav-link"
                        id="rejected-tab"
                        data-bs-toggle="tab"
                        href="#rejected"
                        role="tab"
                        aria-controls="rejected"
                        aria-selected="false"
                    >
                        Rejected
                    </a>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div
                    className="tab-pane fade show active"
                    id="new"
                    role="tabpanel"
                    aria-labelledby="new-tab"
                >
                    {loading ? <div className="spinner-border" role="status">
                        <span className="visually-hidden"></span>
                    </div> :
                        <div className="row mt-4">
                            {quotes.length > 0 ? (
                                quotes.map((quote:any) => {
                                    const formattedDate = moment(quote.createdAt).format('ddd, MM/DD/YYYY');
                                    return (
                                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3" key={quote.id}>
                                            <div className="card card-product h-100" style={{ maxWidth: 390 }}>
                                                {/* card body */}
                                                <div className="card-body">
                                                    <div className="row align-items-center">
                                                        {/* col */}
                                                        <div className="col-md-4 col-12">
                                                            <div className="text-center position-relative">
                                                                <img src={quote.product.image || ''} alt="worldtradex" className="img-fluid rounded" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-8 col-12 flex-grow-1">
                                                            <h2 className="fs-6">
                                                                {quote.product.name}
                                                            </h2>
                                                            <div className="text-small mb-1">
                                                                <small>Quantity: {quote.quantity}</small>
                                                            </div>
                                                            <div className="text-small mb-1">
                                                                <small>Date: {formattedDate}</small>
                                                            </div>
                                                            <div className="text-small mb-1">
                                                                <b>Details: {JSON.stringify(quote.details) || ""}</b>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            ) : (
                                <p>No data</p>
                            )}

                        </div>
                    }
                </div>
                <div
                    className="tab-pane fade"
                    id="accepted"
                    role="tabpanel"
                    aria-labelledby="accepted-tab"
                >
                    {loading ? <div className="spinner-border" role="status">
                        <span className="visually-hidden"></span>
                    </div> :
                        <div className="row mt-4">
                            {quotes.length > 0 ? (quotes.map((quote: any) => {
                                const formattedDate = moment(quote?.createdAt).format('ddd, MM/DD/YYYY');
                                return (
                                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3" key={quote?.id} onClick={() => {
                                        handleShow()
                                        handleAddData(quote)
                                    }}>
                                        <div className="card card-product" style={{ maxWidth: 390 }}>
                                            {/* card body */}
                                            <div className="card-body">
                                                <div className="row align-items-center">
                                                    {/* col */}
                                                    <div className="col-md-4 col-12">
                                                        <div className="text-center position-relative">
                                                            <img src={quote?.product?.image || ''} alt="worldtradex" className="img-fluid rounded" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8 col-12 flex-grow-1">
                                                        <h2 className="fs-6">
                                                            {quote?.product?.name}
                                                        </h2>
                                                        <div className="text-small mb-1">
                                                            <small>Quantity: {quote?.quantity}</small>
                                                        </div>
                                                        <div className="text-small mb-1">
                                                            <small>Date: {formattedDate}</small>
                                                        </div>
                                                        <div className="text-small mb-1">
                                                            {quote?.details && <b> Details: {`${quote?.details && JSON.stringify(quote?.details) || ""}`}</b>}
                                                            {quote?.sellerComment && <b> SellerComment: {`${quote?.sellerComment && JSON.stringify(quote?.sellerComment) || ""}`}</b>}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })) : (
                            <p>No Data</p>
                            ) }
                        </div>
                    }
                </div>
                <div
                    className="tab-pane fade"
                    id="rejected"
                    role="tabpanel"
                    aria-labelledby="rejected-tab"
                >
                    {loading ? <div className="spinner-border" role="status">
                        <span className="visually-hidden"></span>
                    </div> :
                        <div className="row mt-3">
                            {quotes.length > 0 ? (quotes.map((quote: any) => {
                                const formattedDate = moment(quote?.createdAt).format('ddd, MM/DD/YYYY');
                                return (
                                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3" key={quote?.id}>
                                        <div className="card card-product">
                                            {/* card body */}
                                            <div className="card-body">
                                                <div className="row align-items-center">
                                                    {/* col */}
                                                    <div className="col-md-4 col-12">
                                                        <div className="text-center position-relative">
                                                            <img src={quote?.product?.image || ''} alt="worldtradex" className="img-fluid rounded" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8 col-12 flex-grow-1">
                                                        <h2 className="fs-6">
                                                            {quote?.product?.name}
                                                        </h2>
                                                        <div className="text-small mb-1">
                                                            <small>Quantity: {quote?.quantity}</small>
                                                        </div>
                                                        <div className="text-small mb-1">
                                                            <small>Date: {formattedDate}</small>
                                                        </div>
                                                        <div className="text-small mb-1">
                                                            <b>Details: {JSON.stringify(quote?.details) || ""}</b>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })) : (
                                <p>No data</p>
                            )}
                        </div>
                    }
                </div>
            </div>


            <Modal show={show} onHide={handleClose} centered size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Accepted Quotes</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label className="form-label" htmlFor="quantity">
                                    Quantity
                                    <span className="text-danger">*</span>
                                </label>
                                <input
                                    disabled
                                    type="text"
                                    id="quantity"
                                    className="form-control"
                                    name="quantity"
                                    placeholder="e.g. 3"
                                    required
                                    value={values.quantity}
                                    onChange={handleChange}
                                />
                                <div className="invalid-feedback">Please enter firstname.</div>
                            </div>
                            <div className="col-md-6 mb-3">
                                {/* input */}
                                <label className="form-label" htmlFor="amount">
                                    Quote Price
                                    <span className="text-danger">*</span>
                                </label>
                                <input
                                    disabled
                                    type="text"
                                    id="amount"
                                    className="form-control"
                                    name="amount"
                                    placeholder="e.g. 26"
                                    required
                                    value={values.amount}
                                    onChange={handleChange}
                                />
                                <div className="invalid-feedback">Please enter lastname.</div>
                            </div>
                            <div className="col-md-12 mb-3">
                                {/* input */}
                                <label htmlFor="validationTextarea" className="form-label">
                                    Comments
                                </label>
                                <textarea
                                    disabled
                                    className="form-control"
                                    id="validationTextarea"
                                    rows={4}
                                    name="details"
                                    defaultValue={""}
                                    placeholder='Enter Your Message'
                                    required
                                    value={values.details}
                                    onChange={handleChange}
                                />
                                <div className="invalid-feedback">
                                    Please enter a message in the textarea.
                                </div>
                            </div>
                           
                            <div className="text-center">
                                <button type="submit" className="btn btn-dark mb-2 w-50" onClick={handleAddToCartLocal}>
                                    Place Order
                                </button>
                            </div>
                        </div>
                    </>

                </Modal.Body>

            </Modal>
        </>

    )
}

export default RfqBuyer


const searchQuotes = /* GraphQL */ `query SearchQuotes(
    $filter: SearchableQuoteFilterInput
    $sort: [SearchableQuoteSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableQuoteAggregationInput]
  ) {
    searchQuotes(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        product {
            id
            name
            listPrice
            sellerId
            image
            tierPrice
            unitType
            weight
            stock
            unitPrice
            }
            id
            productId
            buyerId
            sellerId
            quantity
            amount
            media
            details
            status
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
