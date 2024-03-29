"use client"
import { GraphQLQuery } from '@aws-amplify/api'
import 'react-phone-number-input/style.css'
import { API, Auth } from 'aws-amplify'
import {useState, useEffect} from 'react'
import { Toaster, toast } from 'react-hot-toast';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
const searchProductCategories = /* GraphQL */ `query SearchProductCategories(
    $filter: SearchableProductCategoryFilterInput
    $sort: [SearchableProductCategorySortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableProductCategoryAggregationInput]
  ) {
    searchProductCategories(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        name
      }
    }
  }
  `
const createBuyer = /* GraphQL */ `mutation CreateBuyer(
    $input: CreateBuyerInput!
    $condition: ModelBuyerConditionInput
  ) {
    createBuyer(input: $input, condition: $condition) {
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
        pickupAddress
        billingAddress
        deliveryAddress
        lock
        createdAt
        updatedAt
        cartBuyerId
        __typename
      }
      rating
      age
      gender
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
      payments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      buyerCartId
      __typename
    }
  }
  ` 
const createBuyerUser = /* GraphQL */ `mutation CreateBuyerUser(
    $input: CreateBuyerUserInput!
    $condition: ModelBuyerUserConditionInput
  ) {
    createBuyerUser(input: $input, condition: $condition) {
      id
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
      userId
      user {
        id
        name
        photo
        phone
        email
        role
        deleted
        createdAt
        updatedAt
        __typename
      }
      role
      productFeedbacks {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
  `
  const createUser = /* GraphQL */ `mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      photo
      phone
      email
      role
      deleted
      buyers {
        nextToken
        __typename
      }
      sellers {
        nextToken
        __typename
      }
      devices {
        nextToken
        __typename
      }
      notifications {
        nextToken
        __typename
      }
      orders {
        nextToken
        __typename
      }
      payments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
  `

  const getCart = /* GraphQL */ `query GetCart($id: ID!) {
    getCart(id: $id) {
        id
        __typename
    }
    }
    `

    const createCart = /* GraphQL */ `mutation CreateCart(
      $input: CreateCartInput!
      $condition: ModelCartConditionInput
      ) {
      createCart(input: $input, condition: $condition) {
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
interface Category {
id: string;
name: string;
}

const initialState = {
    email: "",
    name: "",
    phone: "",
    terms: false,
}

const Onboarding = () => {
    const [user, setUser] = useState<any>(null);
    const [values, setvalues] = useState(initialState)
    const [categories, setCategories] = useState<Category[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [errors, setErrors] = useState<any>({});
    const [loading, setLoading] = useState(false)    
    

    useEffect(() => {
        handleGetUser();
    }, []);

    const handleGetUser = async () => {
        try {
            const currentUser = await Auth.currentAuthenticatedUser();
            setUser(currentUser?.attributes);
            setvalues((prevValues: any) => ({
              ...prevValues,
              email: currentUser?.attributes?.email || "",
          }));
        } catch (error) {
            console.error("Error fetching user: ", error);
        }
    };

    useEffect(() =>{
        fetchCategories()
    }, [])

    const fetchCategories = async () =>{
        try {
            const response = await API.graphql<GraphQLQuery<any>>({
                query: searchProductCategories,
                variables: {
                     sort: { direction: 'asc', field: 'name' },
                 }
              });
              setCategories(response?.data?.searchProductCategories?.items);
              
        } catch (error) {
            console.log(error);
        }
    }

    const handleSelectCategories = (categoryName:any) =>{
     const isCategorySelected = selectedCategories.includes(categoryName)
     if(isCategorySelected){
        const updatedCategories = selectedCategories.filter((category:any) => category != categoryName)
        setSelectedCategories(updatedCategories);
     } else {
        setSelectedCategories([...selectedCategories, categoryName]);
     }
    }

    const handleChange = (e:any) => {
        const { name, value, type, checked } = e.target;

        setErrors((prevErrors: any) => ({
            ...prevErrors,
            [name]: undefined,
          }));

        setvalues((prevValues:any) => ({
          ...prevValues,
          [name]: type === 'checkbox' ? checked : value,
        }));
      };
      
      const handleSubmit = async (e:any) => {
        
        e.preventDefault();


        let formErrors: any = {};

        // Validation logic
        if(selectedCategories.length < 3){
            formErrors.categories = 'Select at least three categories';
        }

        if (!values.name || values.name.trim() === '') {
          formErrors.name = 'Name is required';
        }
      
        if (!values.email || !/\S+@\S+\.\S+/.test(values.email)) {
          formErrors.email = 'Valid email is required';
        }
      
        if (!values.phone || values.phone.length < 10) {
          formErrors.phone = 'Valid phone number is required';
        }
      
        if (!values.terms) {
          formErrors.terms = 'Please accept terms & conditions';
        }
      
        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0) {
            const {email, name, phone} = values
            const newValues = {
                 email,
                 name,
                 phone,
                 categories: selectedCategories,
            }          
            
            setLoading(true)
            
           const response = await API.graphql<GraphQLQuery<any>>({
                query: createBuyer,
                variables: { input: newValues }
              });

            let userData = await API.graphql<GraphQLQuery<any>>({
                query: createUser,
                variables: { input: {
                    id: user?.sub,
                    name: phone,
                    email: user?.email,
                }, }
              });              

              const resData = response?.data?.createBuyer;

              const buyerUserValues = {
                buyerId: resData?.id,
                userId: userData?.data?.createUser?.id,
                role: 'OWNER'
              }

            //  create cart 
            const data = {
              cartBuyerId: resData?.id,
              id: resData?.id
             };

            await API.graphql<GraphQLQuery<any>>({
              query: createCart,
              variables: { input: data }
            });

              await API.graphql<GraphQLQuery<any>>({
                query: createBuyerUser,
                variables: { input: buyerUserValues }
              });

              setLoading(false)
              setvalues(initialState);
              setSelectedCategories([]);
              toast.success("Profile Created Successfully")
              window.location.href = "/"
              setLoading(false)
        } else {
             setLoading(false)
            console.log('Errors in form:', formErrors);
        }
      };
            
      async function handleLogout() {
        try {
            await Auth.signOut()
            window.localStorage.clear()
            window.location.href = "/"
        } catch (error) {
            console.log(error)
        }
    }

  return (
   <>
    <div className="container my-5">
       <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="d-flex justify-content-between mb-4">
          <h2>Tell Us More About You   </h2>
          <button type='button' onClick={handleLogout} className='btn btn-dark'>Logout</button>
          </div>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
        <label className="form-label" htmlFor="email">Email Address</label>
        <input 
          type="email" 
          id="email" 
          className="form-control" 
          placeholder="email@example.com" 
          name="email" 
          disabled={user?.email ? true : false}
          value={values.email || ''}
          onChange={handleChange}
        />
        {errors?.email && (
          <p className='text-danger'>{errors?.email}</p>
        )}
      </div>

        <div className="mb-3">
        <label className="form-label" htmlFor="textInput">Name</label>
        <input type="text" id="textInput" className="form-control" placeholder="Enter Your Busines Name" name="name" value={values?.name} onChange={handleChange} />
        {errors?.name && (
        <p className='text-danger'>{errors?.name}</p>
        )}
        </div>

        <div className='my-1 text-dark mb-3'>
          <label>Phone Number</label>
          <div className='input-group'>
              <PhoneInput
              inputStyle={{width: '100%'}}
                  inputProps={{
                      name: "phone",
                      required: false,
                      autoFocus: false,
                  }}
                  country={"us"}
                  value={values?.phone}
                  onChange={(phone: any) => setvalues((prev: any) => ({ ...prev, phone: "+" + phone }))}
              />
          </div>
          {errors?.phone && (
        <p className='text-danger'>{errors?.phone}</p>
        )}
            </div>

        <div className="mb-3">
            <h4>Choose Your Categories</h4>
            <p>Select at least three Preferences</p>

           <div className="d-flex flex-wrap">
            {
                categories?.map((category:any) =>{
                    return <button key={category?.id} className={`btn btn-outline-secondary mb-2 me-3 ${
                        selectedCategories.includes(category?.name) ? 'bg-dark' : ''
                      }`} onClick={()=> handleSelectCategories(category?.name)}>{category?.name}</button>
                })
            }
           </div>
           {errors?.categories  && (
        <p className='text-danger'>{errors?.categories }</p>
        )}
        </div>

       <div className="form-check mb-3">
        <input className="form-check-input" type="checkbox" id="flexCheckDefault" name="terms" checked={values?.terms} onChange={handleChange} />
        
        <label className="form-check-label" htmlFor="flexCheckDefault">
           {errors?.terms ? <p className='text-danger'>{errors?.terms}</p> : <p> I Agree With <a href="#">Terms & Conditions</a></p>  }
        </label>
        </div>

        <button type='submit' className='btn btn-dark' disabled={loading}> {loading ? 'Loading...' : 'Create Account'} </button>
        </form>
        </div>
       </div>
    </div>
       <Toaster />
   </>
  )
}

export default Onboarding