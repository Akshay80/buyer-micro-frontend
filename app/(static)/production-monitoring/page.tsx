import { PAGE_TITLE } from '../../../libs/helper/src/index';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Production Monitoring - ${PAGE_TITLE}`,
  description: '',
};

function ProductionMonitoring() {
  return (
    <>
      <div className='position-relative'>
        <img src='https://cdn.worldtradex.com/img/success-banner.jpg' className='w-100' height={300} />
        <div className='position-absolute' style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <h1 className='text-white'>Production monitoring</h1>
        </div>
      </div>
      <div className='container-fluid py-12'>
        <div className='container'>
          <div className='text-center'><h1> Service Types</h1></div>
          <div className='row'>
            <div className='col-12'>
              <div className='card p-5'>
                <div className='row'>
                  <div className='col-5'>
                    <h3 className='ms-3'>Production Monitoring</h3>
                    <p className='ms-3'>Provides ongoing tracking and reporting of production progress.</p>
                    <div className='d-flex gap-1 ms-3'>
                      <span className='bg-dark text-white rounded p-1'>Low-cost Pricing</span>
                      <span className='bg-dark text-white rounded p-1'>Fast Service</span>
                      <span className='bg-dark text-white rounded p-1'>Detailed report</span>
                    </div>
                    <ul className='mt-5'>
                      <li className='text-primary'>Keep up-to-date on production</li>
                      <li className='text-primary'>Reduce risk of order delays</li>
                      <li className='text-primary'>View product details before shipment</li>
                    </ul>
                    <div className='d-flex ms-3 align-items-center gap-5'>
                      <img src='https://cdn.worldtradex.com/img/Customer-Service.png' width={50} />
                      <h6>WTX SERVICES</h6>
                    </div>
                  </div>
                  <div className='col-2'><h3>USD 48.00</h3></div>
                  <div className='col-5'>
                    <div className='bg-dark text-white rounded p-2'>Monitoring</div>
                    <div className='row mt-3'>
                      <div className='col-5'><b>Call to confirm production status</b></div>
                      <div className='col-2'></div>
                      <div className='col-5'><b>Periodic phone call</b></div>
                    </div>
                    <div className='bg-dark text-white rounded p-2 mt-2'>On-site check (one visit)</div>
                    <div className='row mt-3'>
                      <div className='col-5'><b>Quantity check</b></div>
                      <div className='col-2'></div>
                      <div className='col-5'><b>Periodic phone call</b></div>
                    </div>
                    <div className='row mt-3'>
                      <div className='col-5'><b>Call to confirm production status</b></div>
                      <div className='col-2'></div>
                      <div className='col-5'><b>Periodic phone call</b></div>
                    </div>
                    <div className='row mt-3'>
                      <div className='col-5'><b>Call to confirm production status</b></div>
                      <div className='col-2'></div>
                      <div className='col-5'><b>Periodic phone call</b></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductionMonitoring;