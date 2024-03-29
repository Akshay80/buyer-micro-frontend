import { PAGE_TITLE } from '../../../libs/helper/src/index';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Money Back Policy - ${PAGE_TITLE}`,
  description: '',
};

function MoneyBackPolicy() {
  return (
    <>
      <div className='position-relative'>
        <img src='https://s.alicdn.com/@img/imgextra/i4/O1CN01PogENa20bb28NCZwL_!!6000000006868-0-tps-3840-800.jpg' className='w-100' />
        <div className='position-absolute' style={{ top: '40%', left: '40%', transform: 'translate(-40%, -40%)' }}>
          <h3 className='text-white'><img src='https://cdn.worldtradex.com/img/trade-assurance-fill.png' width={50} />Trade Assurance</h3>
          <h1 className='text-white w-75'>Money Back Policy</h1>
          <h5 className='text-white w-50'>We will assist you in reaching a satisfactory resolution, including refunds or compensation, for product quality issues or other breaches of our terms and conditions</h5>
        </div>
      </div>
      <div className='container-fluid mt-8'>
        <div className='container'>
          <h1>Refund Policy</h1>
          <h5 className='mt-4 text-gray'>Claim refunds if orders haven&#39;t been shipped, are missing, or arrive with product issues (e.g., defective, incorrect, damaged, etc.).</h5>
        </div>
      </div>
      <div className='container-fluid mt-8'>
        <div className='container'>
          <div className='row'>
            <div className='col-4'>
              <div className='card p-4' style={{ height: '12rem' }}>
                <img src='https://cdn.worldtradex.com/img/30-or-60-day-refunds.png' width={50} />
                <h3 className='mt-5'>30 or 60-day refunds*</h3>
                You are entitled to refunds within 30 or 60 days from the delivery date.
              </div>
            </div>
            <div className='col-4'>
              <div className='card p-4' style={{ height: '12rem' }}>
                <img src='https://cdn.worldtradex.com/img/Quick-refunds.png' width={50} />
                <h3 className='mt-5'>Quick refunds</h3>
                If you cancel within 2 hours of payment and the order has not yet shipped, you can claim a full and immediate refund.
              </div>
            </div>
            <div className='col-4'>
              <div className='card p-4' style={{ height: '12rem' }}>
                <img src='https://cdn.worldtradex.com/img/Resolution-support.png' width={50} />
                <h3 className='mt-5'>Resolution support</h3>
                If there&#39;s a problem with your refund, we will help mediate to get your money back.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid mt-12'>
        <div className='container'>
          <h1>How to apply for refund </h1>
          <div className='step mt-10'>
            <div>
              <div className='circle'>1</div>
            </div>
            <div>
              <div className='title'>
                <h3>Apply for refund if order doesn&#39;t meet the agreed terms</h3>
              </div>
              <div className='caption'><h6 className='text-gray'>Go to My orders &gt; Order details to apply..</h6></div>
            </div>
          </div>
          <div className='step mt-8'>
            <div>
              <div className='circle'>2</div>
            </div>
            <div>
              <div className='title'><h3>Negotiate with the supplier</h3></div>
              <div className='caption'>
                <h6 className='text-gray'>If the supplier does not respond or you are unable to reach a consensus, escalate the case for WorldTradeX.com to help resolve.</h6>
              </div>
            </div>
          </div>
          <div className='step'>
            <div>
              <div className='circle'>3</div>
            </div>
            <div>
              <div className='title'>
                <h3>Get your money back</h3>
              </div>
              <div className='caption'>
                <h6 className='text-gray'>Receive your refund after the case is processed.</h6>
              </div>
              <img className='mt-5' src='https://cdn.worldtradex.com/img/wtx-img.png' style={{ width: '100%' }} />
            </div>
            <button className='ms-8 mt-4 btn btn-dark'>Watch step by step tutorials</button>
          </div>

        </div>
      </div>
      <div className='container-fluid mt-12 py-15' style={{ backgroundImage: "url('https://s.alicdn.com/@img/imgextra/i4/O1CN01vVPQgH1Zi0xkOPeQ3_!!6000000003227-55-tps-1920-818.svg')", }}>
        <div className='container'>
          <h1>Refund Policy</h1>
          <h5 className='mt-4 text-gray'>Claim refunds if orders haven&#39;t been shipped, are missing, or arrive with product issues (e.g., defective, incorrect, damaged, etc.).</h5>
          <div className='row mt-8'>
            <div className='col-4'>
              <div className='card p-4' style={{ height: '14rem' }}>
                <img src='https://cdn.worldtradex.com/img/Easy-and-free-returns.png' width={50} />
                <h3 className='mt-5'>Easy & free returns</h3>
                Enjoy hassle-free returns at no cost within 30 days from the delivery date.
              </div>
            </div>
            <div className='col-4'>
              <div className='card p-4' style={{ height: '14rem' }}>
                <img src='https://cdn.worldtradex.com/img/Save-time.png' width={50} />
                <h3 className='mt-5'>Save time spent on delivery</h3>
                Reduce waiting times with quick delivery to your local warehouse.
              </div>
            </div>
            <div className='col-4'>
              <div className='card p-4' style={{ height: '14rem' }}>
                <img src='https://cdn.worldtradex.com/img/Get-your-money-back.png' width={50} />
                <h3 className='mt-5'>Get your money back</h3>
                Receive a full refund once the return has been processed.
              </div>
            </div>
          </div>
          <div className='row mt-8'>
            <div className='col-12'>
              <p>*Available for orders under US $3,000 and to buyers in Australia, Belgium, Canada, Chile, Czech Republic, France, Germany, Israel, Italy, Japan, Korea, Mexico, Netherlands, Pakistan, Poland, Portugal, Russia, Saudi Arabia, Spain, Switzerland, Ukraine, United Arab Emirates, the United Kingdom, the United States and more to come. Read our terms and conditions for full eligibility requirements.</p>
            </div>
          </div>
          <div className='row mt-8'>
            <div className='col-12'>
              <h1>How to apply for Easy Return</h1>
              <div className='step mt-10'>
                <div>
                  <div className='circle'>1</div>
                </div>
                <div>
                  <div className='title'>
                    <h3>Find products that support Easy Return</h3>
                  </div>
                </div>
              </div>
              <div className='step mt-8'>
                <div>
                  <div className='circle'>2</div>
                </div>
                <div>
                  <div className='title'><h3>Apply for refund if product doesn&#39;t meet the agreed quality</h3></div>
                  <div className='caption'>
                    <h6 className='text-gray'>Go to My orders &gt; Order details to apply.</h6>
                  </div>
                </div>
              </div>
              <div className='step'>
                <div>
                  <div className='circle'>3</div>
                </div>
                <div>
                  <div className='title'>
                    <h3>Return to local warehouses for free</h3>
                  </div>
                  <div className='caption'>
                    <h6 className='text-gray'>Send the product to a local warehouse according to the return instructions provided.</h6>
                  </div>
                </div>
                {/* <button className='ms-8 mt-4 btn btn-dark'>Watch step by step tutorials</button> */}
              </div>
              <div className='step'>
                <div>
                  <div className='circle'>4</div>
                </div>
                <div>
                  <div className='title'>
                    <h3>Get your money back</h3>
                  </div>
                  <div className='caption'>
                    <h6 className='text-gray'>Receive your refund after the case is processed.</h6>
                  </div>
                  <img className='mt-5' src='https://cdn.worldtradex.com/img/wtx-img.png' style={{ width: '100%' }} />
                </div>
                <button className='ms-8 mt-4 btn btn-dark'>Watch step by step tutorials</button>
              </div>
            </div>
          </div>
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

export default MoneyBackPolicy;