import { PAGE_TITLE } from '../../../libs/helper/src/index';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Help Center - ${PAGE_TITLE}`,
  description: '',
};

function HelpCenter() {
  return (
    <>
      <div className='position-relative'>
        <img src='https://cdn.worldtradex.com/img/help-center-banner.jpg' className='w-100' height={300} />
        <div className='position-absolute' style={{ top: '50%', left: '50%', transform: 'translate(-50%, -30%)' }}>
          <div className=' w-100 ms-4  d-none d-lg-block '>
            <form action='#'>
              <div className='input-group'>
                <input type='text' className='form-control' placeholder='Enter a question keyword' />
                <div className='input-group-append'>
                  <span className='input-group-text' style={{ borderRadius: '0px 10px 10px 0px' }}><i className='bi bi-search' /></span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className='container my-10'>
        <div className='text-center'>
          <p className='fs-4 text-dark'>Learning Center</p>
        </div>
        <div className='row fs-6'>
          <div className='col col-md-3'>
            <div className='card border-0 shadow-sm card-hover card-hover-primary h-100 mx-2'>
              <div className='card-body' style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
                <a className='nav-link cursor-pointer' href='/help-center/source-on-wtx'>
                  <div className='text-center'>
                    <img src='https://cdn.worldtradex.com/img/learning-center-2.png' width={100} alt='' />
                    <h4> Sourcing on WorldTradeX</h4>
                    <p className='m-0 p-0'>Your guide to</p>
                    <p>Sourcing, Ordering, and Shipping</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className='col col-md-3'>
            <div className='card border-0 shadow-sm card-hover card-hover-primary h-100 mx-2'>
              <div className='card-body' style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
                <a className='nav-link cursor-pointer' href='/trade-assurance'>
                  <div className='text-center'>
                    <img src='https://cdn.worldtradex.com/img/learning-center-1.png' width={100} alt='' />
                    <h4>Trade Assurance</h4>
                    <p className='m-0 p-0'> Protect Your WorldTradeX Orders</p>
                    <p> See How It Works</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className='col col-md-3'>
            <div className='card border-0 shadow-sm card-hover card-hover-primary h-100 mx-2'>
              <div className='card-body' style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
                <a className='nav-link cursor-pointer' href='https://testflight.apple.com/join/Lqom7mZE'>
                  <div className='text-center'>
                    <img src='https://cdn.worldtradex.com/img/learning-center-3.png' width={100} alt='' />
                    <h4>Get the APP</h4>
                    <p className='m-0 p-0'>WorldTradeX APP</p>
                    <p>Get Download Link</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className='col col-md-3'>
            <div className='card border-0 shadow-sm card-hover card-hover-primary h-100 mx-2'>
              <div className='card-body' style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
                <a className='nav-link cursor-pointer' href='/help-center/source-on-wtx'>
                  <div className='text-center'>
                    <img src='https://cdn.worldtradex.com/img/learning-center-4.png' width={100} alt='' />
                    <h4>WorldTradeX Logistics</h4>
                    <p className='m-0 p-0'>Smart logistics services</p>
                    <p>for global B2B buyers</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='py-10'>
          <div className='text-center fs-4 text-dark mb-6'>
            Contact Us
          </div>
          <div className='d-lg-flex justify-content-center align-items-center gap-6'>
            <div>
              <div className='card card-body cursor-pointer' style={{ width: '20rem', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
                <a href='/help-center/source-on-wtx'>
                  <div className='d-flex align-items-center gap-3'>
                    <div>
                      <img src='https://cdn.worldtradex.com/img/headphones.png' width={50} alt='' />
                    </div>
                    <div>
                      <h5>Online Service Center</h5>
                      <p>24/7 Service for Buyer</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div>
              <div className=' card card-body cursor-pointer' style={{ width: '20rem', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
                <a href='/feedback'>
                  <div className='d-flex align-items-center gap-3'>
                    <div>
                      <img src='https://cdn.worldtradex.com/img/form-filling.png' width={50} alt='' />
                    </div>
                    <div>
                      <h5>Survey</h5>
                      <p>Leave Feedback</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HelpCenter;