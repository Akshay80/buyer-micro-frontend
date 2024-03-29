"use client"
import Spinner from '../../../libs/shared/ui/src/components/spinner/spinner';
import { Auth } from 'aws-amplify';
import Link from 'next/link';
import { useEffect, useState } from 'react';


function CartPage() {
    const [user, setUser] = useState<any>(null);
    const [spinner, showSpinner] = useState<boolean>(false)
    const [cartItems, setCartItems] = useState<any[]>([]);
    console.log(cartItems, "cartItems");
    

    useEffect(() => {
        const existingCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
        setCartItems(existingCartItems);
        handleGetUser()
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
            window.location.reload()
        }
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        setCartItems(updatedCartItems);
    };

    const handleRemove = (index: number) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(index, 1);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        setCartItems(updatedCartItems);
        window.location.reload()
    };


    useEffect(() => {
        handleGetUser();
    }, []);

    const handleGetUser = async () => {
        //   showSpinner(true)
        try {
            const currentUser = await Auth.currentAuthenticatedUser();
            setUser(currentUser?.attributes);
            showSpinner(false)
        } catch (error) {
            console.error("Error fetching user: ", error);
        }
    };

    const handleGoCheckout = () => {
        if (user?.sub) {
            window.location.href = '/checkout';
        } else {
            window.location.href = '/login';
        }
    };

    const totalAmount = cartItems.reduce((acc: any, data: any) => {
        acc = acc + (data?.unitPrice * data?.quantity)
        return acc;
    }, 0)




    return (
        <Spinner show={spinner}>
            <section className='px-10'>
                {
                    cartItems?.length === 0 ?
                        <div className="row mt-5 align-items-center" style={{ height: '75vh' }}>
                            <div className="col-6 mx-auto">
                                <div className="card py-1 border-0 mb-8">
                                    <div className="mx-auto text-center">
                                        <img src="https://wtx-cdn.s3.amazonaws.com/img/cart-new-removebg-preview.png" alt="" className="img-fluid mb-4" style={{ width: '300px' }} />
                                        <h2>Your Cart Is Empty.
                                            Add Products to your Cart</h2>
                                        <Link href="/top-ranking" className="btn btn-dark text-white mt-4" style={{ width: 'fit-content' }}>Add Products</Link>
                                    </div>
                                </div>
                            </div>
                        </div> :
                        <div className="row mb-10">
                            <div className="col-lg-8 col-md-7">
                                <div className="py-3">
                                    {
                                        cartItems?.map((cart: any, index: any) => (
                                            <div key={index} className='mb-3'>
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item py-3 py-lg-0 px-0 border-top">
                                                        <div className="row align-items-center">
                                                            <div className="col-3 col-md-2">
                                                                <Link href={`/product/${cart?.id}`}>
                                                                    <img src={cart?.thumbnail} alt="Ecommerce" className="img-fluid" />
                                                                </Link>
                                                            </div>
                                                            <div className="col-4 col-md-5">
                                                                <a href={`/product/${cart?.id}`} className="text-inherit"><h6 className="mb-0">{cart.name}</h6></a>
                                                                <div className="mt-2 small lh-1"> <p className="text-decoration-none text-inherit cursor-pointer "> <span className="me-1 align-text-bottom">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2 text-success">
                                                                        <polyline points="3 6 5 6 21 6" />
                                                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                                        </path>
                                                                        <line x1={10} y1={11} x2={10} y2={17} />
                                                                        <line x1={14} y1={11} x2={14} y2={17} />
                                                                    </svg>
                                                                </span>
                                                                    <span className="text-muted" onClick={() => handleRemove(index)}>Remove</span>
                                                                    <p className='small text-muted mt-3'>Stock: <b className="text-muted mt-3">{cart?.stock}</b></p>
                                                                </p>
                                                                </div>
                                                            </div>
                                                            <div className="col-3 col-md-3 col-lg-2">
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
                                                            </div>
                                                            <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                                                                <span className="fw-bold">$ {(cart?.unitPrice * cart?.quantity).toFixed(2)}</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 col-md-5">
                                <div className="mb-5 card mt-6">
                                    <div className="card-body p-6">
                                        <h2 className="h5 mb-4">Cart Subtotal</h2>
                                        <div className="card mb-2">
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                                    <div className="me-auto">
                                                        <div className="text-muted">Total Unique Item(s)</div>
                                                    </div>
                                                    <span className="text-muted">{cartItems.length}</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                                    <div className="me-auto">
                                                        <div className="">Subtotal</div>
                                                    </div>
                                                    <span className="">USD ${totalAmount.toFixed(2)}</span>
                                                </li>
                                                {
                                                    cartItems?.map((cart: any, index: any) =>
                                                    (
                                                        <li className="list-group-item d-flex justify-content-between align-items-start" key={index}>
                                                            <div className="me-auto">
                                                                <div>{cart?.name}</div>
                                                            </div>
                                                            <span>$ {(cart?.unitPrice * cart?.quantity).toFixed(2)}</span>
                                                        </li>
                                                    ))
                                                }
                                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                                    <div className="me-auto">
                                                        <div className="fw-bold">Order Total</div>
                                                    </div>
                                                    <span className="fw-bold">USD ${totalAmount.toFixed(2)}</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="d-grid mb-1 mt-4">
                                            <button className="btn btn-dark btn-lg d-flex justify-content-between align-items-center" type="submit" onClick={() => handleGoCheckout()}>
                                                Go to Checkout <span className="fw-bold">USD ${totalAmount.toFixed(2)}</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </section>
        </Spinner>
    );
}

export default CartPage;