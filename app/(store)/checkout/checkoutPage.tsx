'use client'
import { useEffect, useState } from 'react';
import { API, Auth } from 'aws-amplify';
import { GraphQLQuery, graphqlOperation } from '@aws-amplify/api';
import LocationSearch from './LocationSearch';
import toast, { Toaster } from 'react-hot-toast';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const buyerUsersByUserId = /* GraphQL */ `query BuyerUsersByUserId(
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
    `

const getBuyer = /* GraphQL */ `query GetBuyer($id: ID!) {
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
        createdAt
        updatedAt
        buyerCartId
        __typename
        }
    }
    `

const updateBuyer = /* GraphQL */ `mutation UpdateBuyer(
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

const processCart = /* GraphQL */ `mutation ProcessCart($id: ID!, $userId: ID!) {
    processCart(id: $id, userId: $userId)
    }
    `

const getCart = /* GraphQL */ `query GetCart($id: ID!) {
    getCart(id: $id) {
        id
        __typename
    }
    }
    `

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

type buyerUsersByUserIdProps = {
    id: string;
    buyerId: string;
    userId: string;
    role: string;
    createdAt: string;
    updatedAt: string;
    __typename: string;

}[]

interface BuyerUsersByUserIdQueryResult {
    buyerUsersByUserId: {
        items: buyerUsersByUserIdProps;
    };
}

const initialState = {
    country: "",
    country_code: "",
    label: "",
    address_line1: "",
    address_line2: "",
    location: "",
    city: "",
    state: "",
    latitude: "",
    longitude: "",
    state_code: "",
    postal_code: "",
}

// stripe   
const stripePromise = loadStripe('pk_test_51NJA07Hgbfz47ameydpOkl3Cc7VsRgeXV3IHKNobh8kzRdBxOdqjoJ3q1nzNDiyezjtod7iAKHrUa5a9aqtM4rRX00dAVgOYuF');

const CheckoutPage = () => {
    const [loading, setLoading] = useState(false);
    const [buyerUserId, setBuyerUserId] = useState<string | undefined>(undefined);
    const [buyerAddress, setBuyerAddress] = useState<any>([]);
    const [deliveryAddress, setDeliveryAddress] = useState(initialState);
    const [selectedAddress, setSelectedAddress] = useState<any>(null);
    const [cartItems, setCartItems] = useState<any[]>([]);
    const [method, setMethod] = useState<any>();
    const [stripeSecret, setStripeSecret] = useState<any>('');
    const [processLoading, setProcessLoading] = useState(false);
    const [buyerCartItemsId, setBuyerCartItemsId] = useState<any>(null);
    const [show, setShow] = useState(false);
    const [user, setUser] = useState<any>(null);
    const [edit, setEdit] = useState<any>({})    

    useEffect(() => {
        handleGetUser();
    }, []);

    const handleGetUser = async () => {
        try {
            const currentUser = await Auth.currentAuthenticatedUser();
            setUser(currentUser?.attributes);
        } catch (error) {
            console.error("Error fetching user: ", error);
        }
    };


    useEffect(() => {
        const existingCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
        setCartItems(existingCartItems);
    }, []);

    const handleIncrement = (index: number) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems[index].quantity += 1;
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        setCartItems(updatedCartItems);
    };

    const handleDecrement = (index: number) => {
        const updatedCartItems = [...cartItems];
        if (updatedCartItems[index].quantity > 1) {
            updatedCartItems[index].quantity -= 1;
        } else {
            updatedCartItems.splice(index, 1);
        }
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        setCartItems(updatedCartItems);
    };


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const areObjectsEqual = (obj1: any, obj2: any) => {
        if (obj1 === null || obj2 === null || typeof obj1 !== 'object' || typeof obj2 !== 'object') {
            return obj1 === obj2;
        }
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);
        if (keys1.length !== keys2.length) {
            return false;
        }
        for (const key of keys1) {
            if (!areObjectsEqual(obj1[key], obj2[key])) {
                return false;
            }
        }
        return true;
    };

    const handleSelectAddress = (address: any) => {
        const isSelected = areObjectsEqual(selectedAddress, address);
        if (!isSelected) {
            setSelectedAddress(address);
        }
    };

    const addressData = JSON.parse(buyerAddress?.address || '[]');


    useEffect(() => {
        if (user?.sub) {
            handleFetchBuyerUser();
        }
    }, [user?.sub]);

    useEffect(() => {
        if (buyerUserId) {
            getBuyUser();
        }
    }, [buyerUserId]);

    // totalAmount 
    const totalAmount = cartItems?.reduce((acc: any, data: any) => {
        acc = acc + (data?.unitPrice * data?.quantity)
        return acc;
    }, 0)

    // handleFetchBuyerUser 
    const handleFetchBuyerUser = async () => {
        try {
            const response = await API.graphql<GraphQLQuery<BuyerUsersByUserIdQueryResult>>({
                query: buyerUsersByUserId,
                variables: { userId: user?.sub }
            });

            const buyerResponse = response?.data?.buyerUsersByUserId?.items;

            if (buyerResponse && buyerResponse.length > 0) {
                const firstBuyer = buyerResponse[0];

                setBuyerUserId(firstBuyer?.buyerId);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const getBuyUser = async () => {
        setLoading(true)
        try {
            if (buyerUserId) {
                const response = await API.graphql<any>({
                    query: getBuyer,
                    variables: { id: buyerUserId }
                });
                setBuyerAddress(response?.data?.getBuyer);
                setLoading(false);
            } else {
                console.error("buyerUserId is null or undefined");
            }
        } catch (error) {
            setLoading(false);
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    // handleChange 
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setDeliveryAddress({ ...deliveryAddress, [name]: value })
    }

    const upateDeliveryAddress = async (deliveryAddress: any) => {
        try {
            if (buyerUserId) {
                const response = await API.graphql<any>({
                    query: getBuyer,
                    variables: { id: buyerUserId },
                });
                const existingAddresses = response?.data?.getBuyer?.address || '[]';
                const existingAddressArray = JSON.parse(existingAddresses);
                if (!edit?.edit) {
                    existingAddressArray.push(deliveryAddress);
                    await API.graphql({
                        query: updateBuyer,
                        variables: { input: { address: JSON.stringify(existingAddressArray), id: buyerUserId } },
                    });
                    toast.success("Address added")
                } else {
                    let temp = [...existingAddressArray];
                    temp[edit?.index] = deliveryAddress;
                    let finalAddress = temp;
                    await API.graphql({
                        query: updateBuyer,
                        variables: { input: { address: JSON.stringify(finalAddress), id: buyerUserId } },
                    });
                    toast.success("Address added")
                    setEdit(false)
                }
            } else {
                console.error("buyerUserId is null or undefined");
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleDeleteAddress = async (addressIndex: number) => {
        try {
            const updatedAddresses = addressData.filter((_: any, index: any) => index !== addressIndex);
            if (buyerUserId) {
                await API.graphql({
                    query: updateBuyer,
                    variables: { input: { address: JSON.stringify(updatedAddresses), id: buyerUserId } },
                });
                setBuyerAddress({ ...buyerAddress, address: JSON.stringify(updatedAddresses) });
            }
            toast.success("Address Deleted")
        } catch (error) {
            console.error("Error deleting address:", error);
        }
    };

    // handleSubmit 
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        await upateDeliveryAddress(deliveryAddress)
        await getBuyUser()
        setDeliveryAddress(initialState);
    }

    useEffect(() => {
        if (buyerUserId) {
            getCartItemsList();
        }
    }, [buyerUserId])

    const getCartItemsList = async () => {
        try {
            const response = await API.graphql<any>({
                query: getCart,
                variables: { id: buyerUserId }
            });
            setBuyerCartItemsId(response?.data?.getCart?.id)
        } catch (error) {
            console.log(error);
        }
    }

    // processcart
    const ProcessCartCheckout = async () => {
        setProcessLoading(true)
        try {
            const response = await API.graphql<any>(graphqlOperation(processCart, { id: buyerUserId, userId: user?.sub, note:"test" }));
            const stripeResponse = JSON.parse(response?.data?.processCart);
            localStorage.setItem("clientSecret", JSON.stringify(stripeResponse?.body?.clientSecret))
            setStripeSecret(stripeResponse?.body);
            handleStripeShow()
            setProcessLoading(false)
        } catch (error) {
            setProcessLoading(false)
            console.log(error);
        }
    }

    const handlePayment = async (e: any) => {
        e.preventDefault();

        if(selectedAddress === null){
            return toast.error("Please add Address")
        }

        if (!method) {
            toast.error("Please Select Any One Of the payment Method")
        }

        if (method === "PAYPAL") {
            alert("Pay With Paypal");
        }

        if (method === "CARD") {
            const toastId = toast.loading('Initiating Your Payment...');
            try {
                const data = {
                    billingAddress: JSON.stringify(selectedAddress),
                    cartBuyerId: buyerUserId,
                    deliveryAddress: JSON.stringify(selectedAddress),
                    pickupAddress: JSON.stringify(selectedAddress),
                    deliveryTotal: totalAmount,
                    items: JSON.stringify(cartItems),
                    subTotal: totalAmount,
                    taxTotal: 0,
                    total: totalAmount,
                    id: buyerUserId
                };

                // const cartOperation = buyerCartItemsId && buyerCartItemsId === buyerUserId
                //     ? createCart
                //     : updateCart;

                await API.graphql<any>({
                    query: updateCart,
                    variables: { input: data }
                });
                await ProcessCartCheckout();
               setTimeout(() => {
                toast.dismiss(toastId);
               }, 2000);
            } catch (error) {
                console.log(error);
            }
        }
    };

    const handleEditAddress = (address: any, index: number) => {
        setDeliveryAddress(address)
        setEdit({ edit: true, index: index })
        setShow(true)
    }

    const [showStripe, setShowStripe] = useState(false);

    const handleStripeClose = () => setShowStripe(false);
    const handleStripeShow = () => setShowStripe(true);



    if (cartItems.length === 0) {
        return (
            <div className="row mt-5 align-items-center" style={{ height: '75vh' }}>
                <div className="col-6 mx-auto">
                    <div className="card py-1 border-0 mb-8">
                        <div className="mx-auto text-center">
                            <img src="https://wtx-cdn.s3.amazonaws.com/img/cart-new-removebg-preview.png" alt="" className="img-fluid mb-4" style={{ width: '300px' }} />
                            <h2>No Orders.
                                Add Products to Process Order</h2>
                            <a href="/top-ranking" className="btn btn-dark text-white mt-4" style={{ width: 'fit-content' }}>Add Products</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    {/* col */}
                    <div className="col-12">
                        <div className="mb-8">
                            {/* text */}
                            <h1 className="fw-bold mb-0">Checkout</h1>
                        </div>
                    </div>
                </div>
                <div className='mb-3'>
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-7">
                            <div className="d-flex justify-content-between align-items-center">
                                <a href="#" className="fs-5 text-inherit text-primary h4 ">
                                    <i className="feather-icon icon-map-pin me-2 text-muted" />Add delivery address
                                </a>
                                <button type="button" className="btn btn-outline-dark btn-sm" onClick={handleShow}>Add address <i className="bi bi-plus"></i> </button>
                            </div>

                            {loading ? <div className="d-flex justify-content-center align-items-lg-center">
                                <div className="spinner-border primary" role="status">
                                </div>
                            </div> :
                                <div id="flush-collapseOne">
                                    <div className="mt-5">
                                        <div className="row mx-0">
                                            <div className={`card card-body`}>
                                                {addressData.length === 0 ? <h2>No Address Found</h2> : addressData?.map((item: any, index: any) => {
                                                    return (
                                                        <>
                                                            <div className={`col-12 mb-1 mx-0`} key={index}>
                                                                <div className={`row mx-4 mx-0 py-2 ${areObjectsEqual(selectedAddress, item) && 'rounded'}`} style={{ backgroundColor: areObjectsEqual(selectedAddress, item) ? 'rgb(0 0 0 / 3%)' : '' }}>
                                                                    <div className="col-lg-10 mx-0">
                                                                        <div className="form-check mb-1">
                                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id={`addressRadio${index}`}
                                                                                onChange={() => handleSelectAddress(item)} checked={selectedAddress?.label === item?.label} />
                                                                            <label className="form-check-label text-dark" htmlFor="homeRadio">
                                                                                {item?.label}
                                                                            </label>
                                                                        </div>
                                                                        <address> <strong>{user?.name}</strong> <br />
                                                                            {item?.address_line1} <br />
                                                                        </address>
                                                                    </div>
                                                                    <div className="col-lg-2 mx-0">
                                                                        <div className="d-flex justify-content-end">
                                                                            <i className="bi bi-pencil-square me-3 text-dark cursor-pointer" onClick={() => handleEditAddress(item, index)}></i>
                                                                            <i className="bi bi-trash text-dark cursor-pointer" onClick={() => handleDeleteAddress(index)}></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>}
                            <div>
                                <Modal show={show} onHide={handleClose}>
                                    <form onSubmit={handleSubmit}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>
                                                <h5 className="modal-title" id="exampleModalCenterTitle"> {!edit ? 'Add Delivery Address' : 'Edit Delivery Address'}</h5>
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="col-12 mb-3">
                                                <LocationSearch onChange={handleChange} value={deliveryAddress.location} deliveryAddress={deliveryAddress} setDeliveryAddress={setDeliveryAddress} />
                                            </div>
                                            <div className="col-12 mb-3">
                                                <input type="text" className="form-control" required placeholder="Address Label" name="label" value={deliveryAddress.label} onChange={handleChange} />
                                            </div>
                                            <div className="col-12 mb-3">
                                                <input type="text" className="form-control" required placeholder="Address Line 1" name="address_line1" value={deliveryAddress.address_line1} onChange={handleChange} />
                                            </div>
                                            <div className="col-12 mb-3">
                                                <input type="text" className="form-control" required placeholder="Address Line 2" name="address_line2" value={deliveryAddress.address_line2} onChange={handleChange} />
                                            </div>
                                            <div className="col-12 mb-3">
                                                <input type="text" className="form-control" required placeholder="City" name="city" value={deliveryAddress.city} onChange={handleChange} />
                                            </div>
                                            <div className="col-12 mb-3">
                                                <input type="text" className="form-control" required placeholder="State" name="state" value={deliveryAddress.state} onChange={handleChange} />
                                            </div>
                                            <div className="col-12 mb-3">
                                                <input type="text" className="form-control" required placeholder="Zip Code" name="postal_code" value={deliveryAddress.postal_code} onChange={handleChange} />
                                            </div>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                                Cancel
                                            </Button>
                                            <button className='btn btn-dark' type="submit" onClick={handleClose} disabled={loading}>
                                                {loading ? "Saving..." : "Save Address"}
                                            </button>
                                        </Modal.Footer>
                                    </form>
                                </Modal>

                            </div>


                            <div className="accordion-item py-4">
                                <a href="#" className="text-inherit h5 collapsed text-primary">
                                    <i className="feather-icon icon-credit-card me-2 text-muted" />Payment Method</a>
                                <div id="flush-collapseFour">
                                    <div className="mt-5">
                                        <form onSubmit={handlePayment}>
                                            <div className="card card-bordered shadow-none mb-2">
                                                <div className="card-body p-6">
                                                    <div className="d-flex mb-4">
                                                        <div className="form-check ">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="payment_mode"
                                                                id="cardradio"
                                                                value="CARD"
                                                                onChange={(e) => setMethod("CARD")}
                                                            />
                                                            <label className="form-check-label ms-2" htmlFor="creditdebitcard">
                                                            </label>
                                                        </div>
                                                        <div>
                                                            <h5 className="mb-1 h6"> Credit / Debit Card Through Stripe</h5>
                                                            <p className="mb-0 small">Safe money transfer using your bank accou k account. We support
                                                                Mastercard tercard, Visa, Discover and Stripe.</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="mt-5 d-flex justify-content-end">
                                                <button type='submit' className="btn btn-dark ms-2" disabled={processLoading}> {processLoading ? 'Loading...' : 'Continue'} </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="col-12 col-md-12 col-lg-5">
                            <div className="mt-4 mt-lg-0">
                                <div className="card shadow-sm">
                                    <h5 className="px-6 py-4 bg-transparent mb-0">Order Summary</h5>
                                    <ul className="list-group list-group-flush">

                                        {
                                            cartItems?.map((cart: any, index: any) =>
                                            (
                                                <li className="list-group-item px-4 py-3" key={index}>
                                                    <div className="row align-items-center">
                                                        <div className="col-2 col-md-2">
                                                            <img src={cart?.thumbnail} alt="Ecommerce" className="img-fluid" /></div>
                                                        <div className="col-4 col-md-4">
                                                            <h6 className="mb-0">{cart?.name}</h6>
                                                        </div>
                                                        {/* <div className="col-3 col-md-3 text-center text-muted">
                                                        <div className="input-group input-spinner">
                                                            <input
                                                                className="button-minus btn btn-sm"
                                                                type="button"
                                                                value="-"
                                                                onClick={() => handleDecrement(index)}
                                                            />
                                                            <input
                                                                className="button-plus btn btn-sm mx-2"
                                                                type="number"
                                                                value={cart.quantity}
                                                                readOnly
                                                                style={{ width: '34px' }}
                                                            />
                                                            <input
                                                                className="button-plus btn btn-sm"
                                                                type="button"
                                                                value="+"
                                                                onClick={() => handleIncrement(index)}
                                                            />
                                                        </div>
                                                    </div> */}
                                                        <div className="col-3 text-lg-end text-start text-md-end col-md-3">
                                                            <span className="fw-bold">
                                                                ${`${(cart?.unitPrice * cart?.quantity).toFixed(2)}`}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                        {/* list group item */}
                                        <li className="list-group-item px-4 py-3">
                                            <div className="d-flex align-items-center justify-content-between fw-bold">
                                                <div>
                                                    Order Total:
                                                </div>
                                                <div>
                                                    USD ${(totalAmount).toFixed(2)}
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={showStripe} onHide={handleStripeClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Proceed With Payment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {stripeSecret && <Elements stripe={stripePromise} options={stripeSecret}>
                        <CheckoutForm buyerUserId={buyerUserId} />
                    </Elements>}
                </Modal.Body>
            </Modal>

            <Toaster />
        </>
    )
}
export default CheckoutPage