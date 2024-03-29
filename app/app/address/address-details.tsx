/*eslint-disable*/
// @ts-ignore
// @ts-nocheck
'use client';
import { GraphQLQuery } from '@aws-amplify/api';
import Modal from '../../../libs/shared/ui/src/lib/modal/modal';
import { API, Auth } from 'aws-amplify';
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Spinner from '../../../libs/shared/ui/src/components/spinner/spinner';

interface getBuyerByUserProps {
  buyerUsersByUserId: {
    userId: string,
    items: any
  }
}

interface getBuyerProps {
  getBuyer: {
    id: string,
    name: string
    phone: string
    email: string
    gender: string
    image: string
    age: number
    address: string
    default: boolean
  }
}

interface updateBuyerProps {
  getBuyer: {
    id: string,
    address: string
  }
}

const AddressDetails = () => {

    const [modal, setModal] = useState(false)
    const [buyerData, setBuyerData] = useState<any>()
    const [buyerId, setBuyerId] = useState([])
    const [edit, setEdit] = useState(false)
    const [spinner, setSpinner] = useState(true)
    const [modalSpinner, setModalSpinner] = useState(false)
    const [formData, setFormData] = useState({
      id: generateRandomAlphanumeric(),
      address1: '',
      address2: '',
      city: '',
      state: '',
      country: '',
      zipcode: '',
      businessName: '',
      default: false
    })
    
  
    function generateRandomAlphanumeric() {
      let alphanumeric = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      let randomValue = '';
      for (let i = 0; i < 10; i++) {
        let randomIndex = Math.floor(Math.random() * alphanumeric.length);
        randomValue += alphanumeric[randomIndex];
      }
      return randomValue;
    }
  
  
    useEffect(() => {
      Auth.currentUserInfo().then((user: any) => {
        if (user?.attributes?.sub) {
          async function getbuyerId() {
            const res = await API.graphql<GraphQLQuery<getBuyerByUserProps>>({
              query: buyerUsersByUserId,
              variables: {
                userId: user?.attributes?.sub,
              }
            })
            if (res?.data?.buyerUsersByUserId?.items[0].buyerId) {
              setBuyerId(res?.data?.buyerUsersByUserId?.items[0].buyerId)
              const buyer = await API.graphql<GraphQLQuery<getBuyerProps>>({
                query: getBuyer,
                variables: {
                  id: res?.data?.buyerUsersByUserId?.items[0].buyerId,
                }
              })
              if (buyer?.data?.getBuyer?.address) {
                const address = JSON.parse(buyer?.data?.getBuyer?.address)
                setBuyerData(address)
                setSpinner(false)
              }
            }
          }
          getbuyerId()
        }
      })
    }, [])
  
  
    const onsubmit = async (e: any) => {
      e.preventDefault()
      setModalSpinner(true)
      let data: any;
      data = [...buyerData, formData]
      if (edit) {
        for (let item of buyerData) {
          if (item.id === formData?.id) {
            item.address1 = formData?.address1
            item.address2 = formData?.address2
            item.city = formData?.city,
              item.state = formData?.state,
              item.country = formData?.country,
              item.zipcode = formData?.zipcode,
              item.businessName = formData?.businessName,
              item.default = false
          }
        }
      }
      if (buyerId) {
        try {
          await API.graphql<GraphQLQuery<updateBuyerProps>>({
            query: updateBuyer,
            variables: {
              input: {
                id: buyerId,
                address: JSON.stringify(data),
              }
            }
          })
          if (!edit) {
            setBuyerData([...buyerData, formData])
          } else {
            reset()
            setEdit(false)
          }
          setModal(false)
          toast.success("Address added successfully!!")
        } catch (error) {
          console.log(error)
        }
      }
      setModalSpinner(false)
    }
  
  
  
    const onChangeHandler = (e: any) => {
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
  
    const onEdit = (index: number) => {
      setEdit(true)
      const filter = buyerData[index]
      setModal(true)
      setFormData({
        id: buyerData[index].id,
        address1: buyerData[index].address1,
        address2: buyerData[index].address2,
        city: buyerData[index].city,
        state: buyerData[index].state,
        country: buyerData[index].country,
        zipcode: buyerData[index].zipcode,
        businessName: buyerData[index].businessName,
        default: buyerData[index].zipcode
      })
    }
  
    const reset = () => {
      setFormData({
        id: generateRandomAlphanumeric(),
        address1: '',
        address2: '',
        city: '',
        state: '',
        country: '',
        zipcode: '',
        businessName: '',
        default: false
      })
    }
  
    const onDelete = async (id: string) => {
      setSpinner(true)
      const filter = buyerData?.filter((x: any) => x?.id !== id)
  
      try {
        await API.graphql<GraphQLQuery<updateBuyerProps>>({
          query: updateBuyer,
          variables: {
            input: {
              id: buyerId,
              address: JSON.stringify(filter),
            }
          }
        })
        setBuyerData(filter)
        setModal(false)
        toast.success("Address added successfully!!")
        setSpinner(false)
      } catch (error) {
        console.log(error)
        setSpinner(false)
      }
    }

  return (
     <Spinner show={spinner}>
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-12 col-12">
            {/* card */}
            {/* card body */}
            <div className=" p-6 ">
              <div className="d-flex justify-content-between mb-5">
                <h3>Address</h3>
                <Modal open={modal} setIsOpen={setModal} button={<button className="btn btn-dark mt-2" style={{ width: "12rem", height: "2.5rem", borderRadius: "5rem" }} >Add a new address</button>}>
                  <Spinner show={modalSpinner}>
                    <div className="modal-content">
                      <div className="modal-body p-6">
                        <div className="d-flex justify-content-between mb-5">
                          <div>
                            <h5 className="mb-1" id="addAddressModalLabel">New Shipping Address</h5>
                            <p className="small mb-0">Add new shipping address for your order delivery.</p>
                          </div>
                          <div>
                            <button type="button" className="btn-close" onClick={() => { setModal(false); reset(); setEdit(false) }}></button>
                          </div>
                        </div>
                        <form onSubmit={onsubmit}>
                          <div className="row g-3">
                            <div className="col-12">
                              <input type="text" className="form-control" name="address1" value={formData?.address1} onChange={onChangeHandler} placeholder="Address Line 1" />
                            </div>
                            <div className="col-12">
                              <input type="text" className="form-control" name="address2" value={formData?.address2} onChange={onChangeHandler} placeholder="Address Line 2" />
                            </div>
                            <div className="col-12">
                              <input type="text" className="form-control" name="city" value={formData?.city} onChange={onChangeHandler} placeholder="City" />
                            </div>
                            <div className="col-12">
                              <input type="text" className="form-control" name="state" value={formData?.state} onChange={onChangeHandler} placeholder="State" />
                            </div>
                            <div className="col-12">
                              <input type="text" className="form-control" name="country" value={formData?.country} onChange={onChangeHandler} placeholder="Country" />
                            </div>
                            <div className="col-12">
                              <input type="number" className="form-control" name="zipcode" value={formData?.zipcode} onChange={onChangeHandler} placeholder="Zip Code" />
                            </div>
                            <div className="col-12">
                              <input type="text" className="form-control" name="businessName" value={formData?.businessName} onChange={onChangeHandler} placeholder="Business Name" />
                            </div>
                            <div className="col-12 text-end">
                              <button className="btn btn-dark" type="submit">{edit ? 'Update' : 'Save Address'}</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </Spinner>
                </Modal>
              </div>
              <div className="row">
                {buyerData?.map((item: any, index: number) => {
                  return(
                    <div className="col-lg-5 col-xxl-4 col-12 mb-4" key={index}>
                    <div className="card">
                      <div className="card-body p-6">
                        <div className="form-check mb-4">
                          <input className="form-check-input" type="radio" name="flexRadioDefault" id="homeRadio" checked={item?.default}></input>
                          <label className="form-check-label text-dark fw-semi-bold" >
                            {item?.businessName}
                          </label>
                        </div>
                        <p className="mb-6">{item?.address_line1}</p>
                        <p>{item?.address_line2}</p>
                        <p>City: {item?.city}</p>
                        <p>State: {item?.state}</p>
                        <p>Country: {item?.country}</p>
                        <p>Zipcode: {item?.postal_code}</p>
                        <div className="mt-4">
                          <a className="text-inherit cursor-pointer" onClick={() => onEdit(index)}>Edit </a>
                          <a className="text-danger ms-3 cursor-pointer" onClick={() => onDelete(item?.id)}>Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  )
                }
                  
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Spinner>
  )
}

export default AddressDetails

const buyerUsersByUserId = /* GraphQL */ `
  query BuyerUsersByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBuyerUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    buyerUsersByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        buyerId
        userId
        role
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;


const getBuyer = /* GraphQL */ `
  query GetBuyer($id: ID!) {
    getBuyer(id: $id) {
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
      cart {
        id
        items
        subTotal
        taxTotal
        deliveryTotal
        total
        lock
        createdAt
        updatedAt
        cartBuyerId
      }
      rating
      age
      gender
      orders {
        nextToken
      }
      users {
        nextToken
      }
      chats {
        nextToken
      }
      messages {
        nextToken
      }
      createdAt
      updatedAt
      buyerCartId
    }
  }
`;

const updateBuyer = /* GraphQL */ `
  mutation UpdateBuyer(
    $input: UpdateBuyerInput!
    $condition: ModelBuyerConditionInput
  ) {
    updateBuyer(input: $input, condition: $condition) {
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
      cart {
        id
        items
        subTotal
        taxTotal
        deliveryTotal
        total
        lock
        createdAt
        updatedAt
        cartBuyerId
      }
      rating
      age
      gender
      orders {
        nextToken
      }
      users {
        nextToken
      }
      chats {
        nextToken
      }
      messages {
        nextToken
      }
      createdAt
      updatedAt
      buyerCartId
    }
  }
`;