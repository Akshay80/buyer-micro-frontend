import { PAGE_TITLE } from '../../../libs/helper/src/index';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `After Sales Protection - ${PAGE_TITLE}`,
  description: '',
};

function AfterSalesProtection() {
  return (
    <>
      <div className='position-relative'>
        <img src='https://s.alicdn.com/@img/imgextra/i2/O1CN01fJft1c1NhIxG9CPQf_!!6000000001601-0-tps-3840-800.jpg' className='w-100' />
        <div className='position-absolute' style={{ top: '35%', left: '26%', transform: 'translate(-40%, -2%)' }}>
          <h3 className='text-white'><img src='https://cdn.worldtradex.com/img/trade-assurance-fill.png' width={50} />Trade Assurance</h3>
          <h1 className='text-white'>After-sales protections</h1>
          <h5 className='text-white'>Additional services and support for eligible products</h5>
        </div>
      </div>
      <div className='container-fluid mt-8'>
        <div className='container'>
          <h1>On-site service & free replacement parts</h1>
          <h5 className='mt-4 text-gray'>Receive additional support with our on-site installation, maintenance, repair, and free replacement parts services for 1 year after the purchase. Service is provided in your local area or an engineer will come to you. Claim compensation if the service received differs from the agreed terms.</h5>
        </div>
      </div>
      <div className='container-fluid mt-12'>
        <div className='container'>
          <h1>How to apply for after-sales service and support</h1>
          <div className='step mt-10'>
            <div>
              <div className='circle'>1</div>
            </div>
            <div>
              <div className='title'>
                <h3>Find products that support after-sales services</h3>
                <div className='caption'><h6 className='text-gray'>Find product that support &#39;On-site service and free replacement parts&#39; or &#39;Free replacement parts&#39;.</h6></div>
              </div>
            </div>
          </div>
          <div className='step mt-8'>
            <div>
              <div className='circle'>2</div>
            </div>
            <div>
              <div className='title'><h3>Apply for service</h3></div>
              <div className='caption'><h6 className='text-gray'>Go to My orders &gt; Order details to fill in your request.</h6></div>
            </div>
          </div>
          <div className='step'>
            <div>
              <div className='circle'>3</div>
            </div>
            <div>
              <div className='title'><h3>Receive service</h3></div>
              <div className='caption'><h6 className='text-gray'>Seller provides a solution, or you are eligible for compensation. To view your after-sales requests, go to My WorldTradeX &gt; Orders &gt; Refund Requests &gt; After-sales services.</h6></div>
              <img className='mt-5' src='https://cdn.worldtradex.com/img/wtx-img.png' style={{ width: '100%' }} />
            </div>
          </div>

        </div>
      </div>
      <div className='container-fluid bg-dark mt-12'>
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

export default AfterSalesProtection;