"use client"
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { API, Storage } from "aws-amplify"
import Select from 'react-select';
import { GraphQLQuery } from '@aws-amplify/api';

const initialState = {
    quantity: '',
    details: '',
    agree: false,
    rules: true
}

const RfqFooter = () => {
    const [assets, setAssets] = useState<any[]>([]);
    const [values, setValues] = useState(initialState)
    const [selectedOption, setSelectedOption] = useState<any | null>(null);
    const [products, setProducts] = useState<any[]>([]);
    const [buyerId, setBuyerId] = useState<string | null>(null);
    const [isSelectValid, setIsSelectValid] = useState<boolean>(false); // State to manage select validation
    const [loading, setLoading] = useState(false)

    // react select 
    const [isClearable, setIsClearable] = useState(true);
    const [isSearchable, setIsSearchable] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isRtl, setIsRtl] = useState(false);

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
        searchProductsList()
    }, [buyerId])

    const handleFileChange = async (e: any, type: any) => {
        const toastId = toast.loading('Uploading...');
        if (e.target.files) {
            const file = e.target.files[0]
            const stored = await Storage.put(`WTX-${Math.random().toString(36).substring(2, 15)}.${file.name.split('.')[1]}`, file, { contentType: file.type });
            const url = await Storage.get(stored.key, { level: 'public' })
            let ImageUrl = url.split('?')[0]
            if (ImageUrl) {
                const parts = ImageUrl.split('/');
                const filename = parts[parts.length - 1];
                const id = filename.split('.')[0];
                const name = filename
                const updatedAssets = [...assets, { url: ImageUrl, type, id, name }]
                setAssets(updatedAssets)
            }
            toast.dismiss(toastId);
        }
    }

    const handleRemoveItem = (indexToRemove: number) => {
        const updatedAssets = assets.filter((_, index) => index != indexToRemove)
        setAssets(updatedAssets)
    }


    const handleChange = (e: any) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setValues({ ...values, [name]: checked })
        } else {
            setValues({ ...values, [name]: value })
        }
    }

    const handleNameChange = (selectedOption: any) => {
        setSelectedOption(selectedOption);
        setIsSelectValid(!!selectedOption);
    }


    const searchProductsList = async () => {
        try {
            const response = await API.graphql<GraphQLQuery<any>>({
                query: searchProducts
            });
            setProducts(response.data.searchProducts.items)
        } catch (error) {
            console.log(error);
        }
    }

    const productsOptions = products?.map((product: any) => {
        return {
            value: product?.name, label: product?.name, sellerId: product.sellerId, productId: product.id
        }
    })

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        const mediaData = JSON.stringify(assets)
        const {details, quantity} = values;
        const {productId, sellerId} = selectedOption;
        const footerCommentValue = typeof details === 'string' ? details : '';

        const detailsData = {
            details: footerCommentValue,
        }

        const data = {
            buyerId: buyerId,
            productId: productId,
            sellerId: sellerId,
            quantity: quantity,
            details: JSON.stringify(detailsData),
            media: mediaData,
            status: 'PENDING'
        }
        setLoading(true)
        try {
            await API.graphql<GraphQLQuery<any>>({
                query: createQuote,
                variables: { input: data }
              });
              setLoading(false)
              toast.success("Quote Sended")
        } catch (error) {
            console.log(error);
        }    
            
        setValues(initialState)
        setAssets([])
        setSelectedOption("")
    }


    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <h2>Post your request</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="card p-5">
                                <div className="col-md-12 mb-3">
                                    <label className="form-label" htmlFor="product">
                                        * Product Name
                                        <span className="text-danger">*</span>
                                    </label>
                                    <Select
                                        className="basic-single"
                                        value={selectedOption}
                                        classNamePrefix="select"
                                        defaultValue={productsOptions[0]}
                                        isDisabled={isDisabled}
                                        isLoading={isLoading}
                                        isClearable={isClearable}
                                        isRtl={isRtl}
                                        isSearchable={isSearchable}
                                        name="color"
                                        options={productsOptions}
                                        onChange={handleNameChange}
                                        required
                                    />
                                    {!isSelectValid && <p className="error-message">Please select an option</p>}
                                </div>

                                <div className="col-md-12 mb-3">
                                    <label className="form-label" htmlFor="quantity">
                                        * Sourcing quantity
                                        <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="number"
                                        id="quantity"
                                        className="form-control"
                                        name="quantity"
                                        placeholder="Enter quantity name"
                                        value={values.quantity}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="col-md-12 mb-3">
                                    {/* input */}
                                    <label htmlFor="validationTextarea" className="form-label">
                                        * Detailed requirements
                                    </label>
                                    <textarea
                                        placeholder='Enter Comments'
                                        className="form-control"
                                        id="validationTextarea"
                                        name='details'
                                        rows={4}
                                        value={values.details}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="formFile" className="form-label">
                                        Select Image:
                                    </label>
                                    {/* <input className="form-control" type="file" accept="image/*" name="file-input" typeof="" id="file-input"
                                onChange={(e) => handleFileChange(e, 'image')} /> */}
                                    <div className="btn-group dropup-center">
                                        <button type="button" className="btn btn-secondary ms-4" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Choose File
                                        </button>
                                        <div className="dropdown-menu">
                                            <div className="file-input">
                                                <input type="file" accept="image/*" name="file-input" typeof="" id="file-input" className="file-input__input"
                                                    onChange={(e) => handleFileChange(e, 'image')} />
                                                <label className="file-input__label" htmlFor="file-input">
                                                    <i className="bi bi-image primary"></i>
                                                    <span className="ms-1">Image</span>
                                                </label>
                                            </div>
                                            <br />

                                            <div className="file-input">
                                                <input type="file" name="file-input" id="file-input" className="file-input__input"
                                                    accept=".doc, .docx, .pdf, .txt, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/pdf, text/plain"
                                                    onChange={(e) => handleFileChange(e, 'document')}
                                                />
                                                <label className="file-input__label" htmlFor="file-input">
                                                    <i className="bi bi-file-earmark primary"></i>
                                                    <span className="ms-1">Document</span></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {assets.length > 0 && <div className="mx-4">
                                    <div className="card mb-3 card-lift w-auto">
                                        <div className="card-body text-center py-6 text-center d-flex justify-content-start flex-wrap">
                                            {assets?.map((item, index) => {
                                                return (
                                                    <div className="position-relative me-3" key={index}>
                                                        {item.type.toLowerCase() === 'image' && (
                                                            <img src={item?.url} alt="image" className="img-fluid" style={{ width: '75px' }} />
                                                        )}
                                                        {item.type.toLowerCase() === 'video' && (
                                                            <video autoPlay muted loop className='d-block ' style={{ width: '100px', height: '100px' }}>
                                                                <source src={item?.url} type='video/mp4' />
                                                            </video>
                                                        )}
                                                        {item.type.toLowerCase() === 'document' && (
                                                            <div className="document-display">
                                                                <img src="https://wtx-cdn.s3.amazonaws.com/img/PDF_file_icon.svg.png" alt="" className="img-fluid" style={{ width: '75px' }} />
                                                            </div>
                                                        )}
                                                        <div className="position-absolute bg-dark p-1 rounded cursor-pointer" onClick={() => handleRemoveItem(index)} style={{ top: '0', right: '0' }}>
                                                            <i className="bi bi-x-circle"></i>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>}

                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name='agree'
                                        id="flexCheckDefault"
                                        checked={values.agree}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        I agree to share my Business Card with quoted suppliers.
                                    </label>
                                </div>

                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name='rules'
                                        id="flexCheckDefault"
                                        checked={values.rules}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        I have read, understood and agreed to abide by the Buying Request Posting Rules
                                    </label>
                                </div>

                                <div className="mt-4">
                                    <button type="submit" className="btn btn-dark mb-2">
                                        Invite Suppliers to quote
                                    </button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RfqFooter


const searchProducts = /* GraphQL */ `query SearchProducts(
    $filter: SearchableProductFilterInput
    $sort: [SearchableProductSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableProductAggregationInput]
  ) {
    searchProducts(
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