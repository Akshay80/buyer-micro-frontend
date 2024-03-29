import { PAGE_TITLE } from '../../../libs/helper/src/index';
import { Metadata } from 'next';
import RfqFooter from './rfq-footer';


export const metadata: Metadata = {
    title: `Request for quotation - ${PAGE_TITLE}`,
    description: '',
};

function Rfq() {
   

    return (
        <>
            <div
                className="bg-dark"
                style={{
                    background: "url(https://freshcart.codescandy.com/assets/images/svg-graphics/pattern.svg) no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                <div className="container">
                    {/* row */}
                    <div className="row">
                        <div className="offset-lg-1 col-lg-10">
                            <div className="row align-items-center">
                                {/* col */}
                                <div className="col-md-6">
                                    <div className="text-white mt-8 mt-lg-0">
                                        <span>$30 discount for your first order</span>
                                        <h2 className="h2 text-white my-4">
                                            Get top deals, latest trends, and more.
                                        </h2>
                                        <p className="text-white-50">
                                            Join our email subscription now to get updates on promotions and
                                            coupons.
                                        </p>
                                        {/* form */}
                                        <form className="row g-3 needs-validation">
                                            <div className="col-6">
                                                {/* input */}
                                                <label
                                                    htmlFor="emailAddress"
                                                    className="form-label visually-hidden"
                                                >
                                                    Email Address
                                                </label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="emailAddress"
                                                    placeholder="Enter Email Address"
                                                />
                                                <div className="invalid-feedback">Please enter email.</div>
                                            </div>
                                            {/* btn */}
                                            <div className="col-auto">
                                                <button type="submit" className="btn btn-primary mb-3">
                                                    Sign Up
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                {/* col */}
                                <div className="col-md-6">
                                    <div className="text-center">
                                        {/* img */}
                                        <img
                                            src="https://freshcart.codescandy.com/assets/images/png/girl-email.png"
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           <RfqFooter />

        </>
    );
}

export default Rfq;