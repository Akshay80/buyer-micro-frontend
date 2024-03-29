import { PAGE_TITLE } from '../../../libs/helper/src/index';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Shipping & Logisitcs - ${PAGE_TITLE}`,
  description: '',
};

function ShippingAndLogisitcs() {
  return (
    <>
      <div className='position-relative'>
        <img src='https://s.alicdn.com/@img/imgextra/i1/O1CN01RrtGbY1MnQdThpd0u_!!6000000001479-0-tps-3840-800.jpg' className='w-100' />
        <div className='position-absolute' style={{ top: '40%', left: '40%', transform: 'translate(-40%, -40%)' }}>
          <h3 className='text-white'><img src='https://cdn.worldtradex.com/img/trade-assurance-fill.png' width={50} />Trade Assurance</h3>
          <h1 className='text-white w-75'>Shipping & logistics services</h1>
          <h5 className='text-white w-50'>Reduce inventory uncertainty with On-time Delivery Guarantee and track your shipment with WOrldTradeX Logistics</h5>
        </div>
      </div>
      <div className='container-fluid mt-8'>
        <div className='container'>
          <h1>On-time Delivery Guarantee</h1>
          <h5 className='mt-4 text-gray'>Claim and automatically receive compensation for delays in deliveries, without having to negotiate with the supplier.</h5>
        </div>
      </div>
      <div className='container-fluid mt-8'>
        <div className='container'>
          <div className='row'>
            <div className='col-4'>
              <div className='card p-4' style={{ height: '14rem' }}>
                <img src='https://cdn.worldtradex.com/img/Inventory-management.png' width={50} />
                <h3 className='mt-5'>Inventory management</h3>
                Better plan out and manage inventory knowing orders will be delivered on time.
              </div>
            </div>
            <div className='col-4'>
              <div className='card p-4' style={{ height: '14rem' }}>
                <img src='https://cdn.worldtradex.com/img/Compensation-for-delays.png' width={50} />
                <h3 className='mt-5'>Compensation for delays</h3>
                If late delivery occurs, receive a coupon which can be used for future purchases.
              </div>
            </div>
            <div className='col-4'>
              <div className='card p-4' style={{ height: '14rem' }}>
                <img src='https://cdn.worldtradex.com/img/Simplified-process.png' width={50} />
                <h3 className='mt-5'>Simplified process</h3>
                WorldTradeX reviews your claim directly, saving you time spent negotiating with suppliers*.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid mt-12'>
        <div className='container'>
          <h1>How it works </h1>
          <div className='step mt-10'>
            <div>
              <div className='circle'>1</div>
            </div>
            <div>
              <div className='title'>
                <h3>Find products that support On-time Delivery Guarantee</h3>
              </div>
            </div>
          </div>
          <div className='step mt-8'>
            <div>
              <div className='circle'>2</div>
            </div>
            <div>
              <div className='title'><h3>Pay on WorldTradeX</h3></div>
              <div className='caption'>
                <h6 className='text-gray'>Pay using your preferred payment method through the Worldtradex.com platform.</h6>
              </div>
            </div>
          </div>
          <div className='step mt-8'>
            <div>
              <div className='circle'>3</div>
            </div>
            <div>
              <div className='title'><h3>Make a claim if delays occur</h3></div>
              <div className='caption'>
                <h6 className='text-gray'>If products are not delivered by the agreed date, go to My orders &gt; Order details to make a claim.
                  For Scaleup, Enterprise, and Enterprise Pro buyers, compensation is automatically issued to their accounts.</h6>
              </div>
            </div>
          </div>
          <div className='step'>
            <div>
              <div className='circle'>4</div>
            </div>
            <div>
              <div className='title'>
                <h3>Get compensation</h3>
              </div>
              <div className='caption'>
                <h6 className='text-gray'>Collect platform coupons that can be used on future WorldTradeX.com purchases.
                </h6>
              </div>
              <img className='mt-5' src='https://cdn.worldtradex.com/img/wtx-img.png' style={{ width: '100%' }} />
            </div>
            <button className='ms-8 mt-4 btn btn-dark'>Watch step by step tutorials</button>
          </div>

        </div>
      </div>
      <div className='container-fluid mt-12 py-15' style={{ backgroundImage: "url('https://s.alicdn.com/@img/imgextra/i4/O1CN01vVPQgH1Zi0xkOPeQ3_!!6000000003227-55-tps-1920-818.svg')" }}>
        <div className='container'>
          <h1>World Trade X Logistics</h1>
          <h5 className='mt-4 text-gray'>Choose from door-to-door and port-to-port services according to your needs and budget.</h5>
          <div className='row mt-8'>
            <div className='col-4'>
              <div className='card p-4' style={{ height: '14rem' }}>
                <img src='https://cdn.worldtradex.com/img/trade-assurance-fill.png' width={50} />
                <h3 className='mt-5'>Tailored solutions</h3>
                Enjoy hassle-free returns at no cost within 30 days from the delivery date.
              </div>
            </div>
            <div className='col-4'>
              <div className='card p-4' style={{ height: '14rem' }}>
                <img src='https://cdn.worldtradex.com/img/trade-assurance-fill.png' width={50} />
                <h3 className='mt-5'>Worldwide coverage</h3>
                Enjoy tracked delivery to most countries and regions around the world.
              </div>
            </div>
            <div className='col-4'>
              <div className='card p-4' style={{ height: '14rem' }}>
                <img src='https://cdn.worldtradex.com/img/trade-assurance-fill.png' width={50} />
                <h3 className='mt-5'>Transparent rates</h3>
                Get competitive pricing and check rates in real-time.
              </div>
            </div>
          </div>
          <button className='btn btn-dark mt-8'>Explored Solutions</button>
        </div>
      </div>
      <div className='container-fluid bg-dark'>
        <div className='container text-center py-12'>
          <div className='row'>
            <div className='col-lg-3'>
              <div className='card p-8' style={{ minHeight: '220px' }}>
                <div className='text-center'>
                  <img src='https://cdn.worldtradex.com/img/Terms-Conditions.png' width={70} />
                </div>
                <h3 className='mt-5'>Terms & Conditions</h3>
                <a href='/' className='text-primary'><u>Read</u></a>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='card p-8' style={{ minHeight: '220px' }}>
                <div className='text-center'>
                  <img src='https://cdn.worldtradex.com/img/Trade-assurance-guide.png' width={70} />
                </div>
                <h3 className='mt-5'>Trade Assurance</h3>
                <a href='/' className='text-primary'><u>Download</u></a>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='card p-8' style={{ minHeight: '220px' }}>
                <div className='text-center'>
                  <img src='https://cdn.worldtradex.com/img/Customer-Service.png' width={70} />
                </div>
                <h3 className='mt-5'>Customer Service</h3>
                <a href='/' className='text-primary'><u>Get Help</u></a>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='card p-8' style={{ minHeight: '220px' }}>
                <div className='text-center'>
                  <img src='https://cdn.worldtradex.com/img/Video-tutorials.png' width={70} />
                </div>
                <h3 className='mt-5'>Video tutorials</h3>
                <a href='/' className='text-primary'><u>Watch</u></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShippingAndLogisitcs;