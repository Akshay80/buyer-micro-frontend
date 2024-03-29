import { PAGE_TITLE } from '../../../libs/helper/src/index';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Trade Assurance - ${PAGE_TITLE}`,
  description: '',
};

function TradeAssurance() {
  return (
    <>
      <div className='position-relative'>
        <img src='https://s.alicdn.com/@img/imgextra/i1/O1CN01I96Ugt1mIuFYWS4N0_!!6000000004932-0-tps-3840-1360.jpg' className='w-100' />
        <div className='position-absolute' style={{ top: '40%', left: '40%', transform: 'translate(-40%, -30%)' }}>
          <h3 className='text-white'><img src='https://cdn.worldtradex.com/img/trade-assurance-fill.png' width={50} />Trade Assurance</h3>
          <h1 className='text-white w-50'>Enjoy protection from payment to delivery on WorldTradeX</h1>
          <button className='btn btn-dark mt-2 w-25'><span className='me-2'><i className='bi bi-camera-video-fill'></i></span>See how it works</button>
        </div>
      </div>
      {/* <Counter heading='Trade Assurance covers every stage of your purchasing journey'
        text='We provide buyers on WorldTradeX.com with secure ways to pay, protect against unforeseen circumstances such as product or shipping issues, and mediate between buyers and suppliers to resolve any issues related to the purchase.'
        linkText='Watch to learn more'
        counter1='160M+'
        counter2='35M+'
        counter3='200K+'
        counter4='200M+'
        counterDescription1='Trade Assurance orders'
        counterDescription2='Purchased from us'
        counterDescription3='Suppliers'
        counterDescription4='Products'
        url='/'
      /> */}
      {/* PROTECT PURCHASES CONTENT */}
      <div className='container-fluid py-5'>
        <div className='container'>
          <div className='text-center'>
            <h1>How we protect your purchases on WorldTradeX</h1>
            <p>Trade Assurance makes it easier and safer for both buyers and suppliers to do business globally. Here is how it works.</p>
          </div>
          <div className='row mt-10'>
            <div className='col-6 d-flex gap-5'>
              <div className='circle-md'>1</div>
              <div>
                <h3>Start trade assurance order</h3>
                <p>You reach an order agreement with a supplier on WorldTradeX.com.</p>
              </div>
            </div>
            <div className='col-6 d-flex gap-5'>
              <div className='circle-md'>2</div>
              <div>
                <h3>Pay through WorldTradeX</h3>
                <p>Check out with an online payment method or make a wire transfer via WorldTradeX</p>
              </div>
            </div>
          </div>
          <div className='row mt-10'>
            <div className='col-6 d-flex gap-5'>
              <div className='circle-md'>3</div>
              <div>
                <h3>Payment held in escrow</h3>
                <p>Your payment is held in escrow and released to the supplier.</p>
              </div>
            </div>
            <div className='col-6 d-flex gap-5'>
              <div className='circle-md'>4</div>
              <div>
                <h3>Get money back if order terms are not met</h3>
                <p>We will assist you in reaching a resolution, including refunds.</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12 mt-10'>
              <img src='https://s.alicdn.com/@img/imgextra/i1/O1CN01FJFQWQ20XTTMaODTA_!!6000000006859-2-videocover-1200-362.png' className='w-100' />
            </div>
          </div>
        </div>
      </div>
      {/* WHAT IS COVERED SECTION */}
      <div className='container-fluid bg-dark'>
        <div className='container text-center py-12'>
          <h1 className='text-white'>
            What is Covered
          </h1>
          <div className='row mt-8'>
            <div className='col-lg-3'>
              <div className='card p-8' style={{ minHeight: '220px' }}>
                <div className='text-center'>
                  <img src='https://cdn.worldtradex.com/img/trade-assurance-fill.png' width={70} />
                </div>
                <h3>Safe & easy payments</h3>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='card p-8' style={{ minHeight: '220px' }}>
                <div className='text-center'>
                  <img src='https://cdn.worldtradex.com/img/trade-assurance-fill.png' width={70} />
                </div>
                <h3>Money back policy</h3>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='card p-8' style={{ minHeight: '220px' }}>
                <div className='text-center'>
                  <img src='https://cdn.worldtradex.com/img/trade-assurance-fill.png' width={70} />
                </div>
                <h3>Shipping and logistics</h3>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='card p-8' style={{ minHeight: '220px' }}>
                <div className='text-center'>
                  <img src='https://cdn.worldtradex.com/img/trade-assurance-fill.png' width={70} />
                </div>
                <h3>After sales protection</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SAFE AND EASY PAYMENTS */}
      <div className='container-fluid'>
        <div className='container py-12'>
          <div className='row'>
            <div className='col-lg-6'>
              <h1 className='mb-5'>Safe and easy payments</h1>
              <p className='w-90'>Every payment you make through WorldTradeX is encrypted, secure, and processed in as quickly as 2 hours.</p>
              <p className='w-90'>Pay with any major online payment method or make a bank-to-bank wire transfer, all in your local currency.</p>
              <p className='w-90'>You may also be eligible for flexible financing, such as Payment Terms: 30/60 Days* to free up your cash flow.</p>
              <div className='mt-5 d-flex gap-5'>
                <button className='btn btn-dark'>
                  Source supporting products
                </button>
                <button className='btn btn-dark'>
                  Learn how it works
                </button>
              </div>
            </div>
            <div className='col-lg-1'></div>
            <div className='col-lg-5'>
              <video style={{ height: '464px' }} autoPlay loop muted>
                <source src='https://cdn.worldtradex.com/img/easy-payments.mp4' type='video/mp4' />
              </video>
            </div>
          </div>
        </div>
      </div>
      {/* MONEYBACK POLICY */}
      <div className='container-fluid'>
        <div className='container py-12'>
          <div className='row'>
            <div className='col-lg-6'>
              <video style={{ height: '464px' }} autoPlay loop muted>
                <source src='https://cdn.worldtradex.com/img/easy-payments.mp4' type='video/mp4' />
              </video>
            </div>
            <div className='col-lg-6'>
              <h1 className='mb-5'>Money-back policy</h1>
              <p className='w-90'>Claim a refund to get your money back if your order has not been shipped, goes missing, or arrives with defects, incorrect items, damages, or other product-related issues.</p>
              <p className='w-90'>If you are in an eligible country*, you can also take advantage of our Easy Return service to return defective products locally for free.</p>
              <div className='mt-5 d-flex gap-5'>
                <button className='btn btn-dark'>
                  Source supporting products
                </button>
                <button className='btn btn-dark'>
                  Learn how it works
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SHIPPPING AND LOGISTICS */}
      <div className='container-fluid bg-dark'>
        <div className='container py-12'>
          <h1 className='mb-8 text-white'>Shipping & logisitcs services</h1>
          <p className='w-75 text-white'>Reduce inventory uncertainty knowing your order will be delivered by a fixed date or you receive platform compensation with our On-time Delivery Guarantee.</p>
          <p className='w-75 text-white'>With WorltTradeX Logistics, you can enjoy the reliability of our own logistics network and track your shipment in real-time for most countries and regions around the world.</p>
          <button className='btn btn-white mt-8  mb-8'>Learn how it works</button>
          <img src='https://s.alicdn.com/@img/imgextra/i3/O1CN01R0ppbC1zKoujkeady_!!6000000006696-2-tps-1200-520.png' className='w-100' />
        </div>
      </div>
      {/* AFTER SALES PROTECTION */}
      <div className='container-fluid'>
        <div className='container py-12'>
          <div className='row'>
            <div className='col-lg-6'>
              <video style={{ height: '464px' }} autoPlay loop muted>
                <source src='https://cdn.worldtradex.com/img/easy-payments.mp4' type='video/mp4' />
              </video>
            </div>
            <div className='col-lg-6'>
              <h1 className='mb-5'>After-sales protections</h1>
              <p className='w-90'>Get support at your doorstep with our on-site installation, maintenance, repair and free replacement parts services for eligible products.</p>
              <p className='w-90'>If you are in an eligible country*, you can also take advantage of our Easy Return service to return defective products locally for free.</p>
              <div className='mt-5 d-flex gap-5'>
                <button className='btn btn-dark'>
                  Source supporting products
                </button>
                <button className='btn btn-dark'>
                  Learn how it works
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* TESTTIMONIALS */}
      <div className='container-fluid bg-light'>
        <div className='container py-12 text-center'>
          <h1>Buyer voices</h1>
          <p>See how Trade Assurance benefits others like you.</p>
          {/* <SliderLayout slides={SliderData} /> */}
        </div>
      </div>
      <div className='container-fluid bg-dark'>
        <div className='container text-center py-12'>
          <div className='row'>
            <div className='col-lg-3'>
              <div className='card p-8' style={{ minHeight: '220px' }}>
                <div className='text-center'>
                  <img src='https://cdn.worldtradex.com/img/trade-assurance-fill.png' width={70} />
                </div>
                <h3>Terms & Conditions</h3>
                <a href='/' className='text-primary'><u>Read more</u></a>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='card p-8' style={{ minHeight: '220px' }}>
                <div className='text-center'>
                  <img src='https://cdn.worldtradex.com/img/trade-assurance-fill.png' width={70} />
                </div>
                <h3>Trade Assurance guide</h3>
                <a href='/' className='text-primary'><u>Read more</u></a>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='card p-8' style={{ minHeight: '220px' }}>
                <div className='text-center'>
                  <img src='https://cdn.worldtradex.com/img/trade-assurance-fill.png' width={70} />
                </div>
                <h3>Customer Service</h3>
                <a href='/' className='text-primary'><u>Read more</u></a>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='card p-8' style={{ minHeight: '220px' }}>
                <div className='text-center'>
                  <img src='https://cdn.worldtradex.com/img/trade-assurance-fill.png' width={70} />
                </div>
                <h3>Video tutorials</h3>
                <a href='/' className='text-primary'><u>Read more</u></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TradeAssurance;