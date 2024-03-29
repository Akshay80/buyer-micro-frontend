import { PAGE_TITLE } from '../../../libs/helper/src/index';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `About Us - ${PAGE_TITLE}`,
  description: '',
};

function AboutUs() {
  return (
    <>
      <div className='position-relative'>
        <img src='https://s.alicdn.com/@img/imgextra/i2/O1CN01fJft1c1NhIxG9CPQf_!!6000000001601-0-tps-3840-800.jpg' className='w-100' />
        <div className='position-absolute' style={{ top: '35%', left: '40%', transform: 'translate(-40%, -35%)' }}>
          <h1 className='text-white w-50'>Source, pay for, and ship your goods on WorldTradeX</h1>
        </div>
      </div>
      <div className='container-fluid bg-warning'>
        <div className='container'>
          <nav className='nav d-flex gap-10'>
            <ul className='navbar-nav align-items-center bg-danger p-3'>
              <li className='text-white cursor-pointer'>What is WorldTradeX</li>
            </ul>
            {/* <ul className='navbar-nav align-items-center p-3'>
              <li className='text-white cursor-pointer' onClick={() => scrollToSection('stepper')}>New sourcing on WorldTradeX</li>
            </ul>
            <ul className='navbar-nav align-items-center p-3'>
              <li className='text-white cursor-pointer' onClick={() => scrollToSection('hear')}>Hear from out buyers</li>
            </ul>
            <ul className='navbar-nav align-items-center p-3'>
              <li className='text-white cursor-pointer' onClick={() => scrollToSection('latest')}>Latest from WorldTradeX</li>
            </ul> */}
          </nav>

        </div>
      </div>
      <div className='container-fluid py-12' id='stepper'>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <h1>What is WorldTradeX</h1>
              <p>WorldTradeX is one of the world’s largest wholesale marketplaces, with 20 years of experience helping business-to-business (B2B) companies buy and sell their goods around the world.</p>
              <button className='btn btn-dark'>Learn More</button>
            </div>
            <div className='col-6'>
              <div className='step mt-10'>
                <div>
                  <div className='circle'>1</div>
                </div>
                <div>
                  <div className='title'><h6>Step 1
                  </h6></div>
                  <div className='caption'><h6 className='text-gray'>Find products and sellers</h6></div>
                </div>
              </div>
              <div className='step mt-8'>
                <div>
                  <div className='circle'>2</div>
                </div>
                <div>
                  <div className='title'><h6>Step 2 </h6></div>
                  <div className='caption'><h6 className='text-gray'>Connect with sellers</h6></div>
                </div>
              </div>
              <div className='step'>
                <div>
                  <div className='circle'>3</div>
                </div>
                <div>
                  <div className='title'><h6>Step 3</h6></div>
                  <div className='caption'><h6 className='text-gray'>Place and protect order</h6></div>
                </div>

              </div>
              <div className='step'>
                <div>
                  <div className='circle'>4</div>
                </div>
                <div>
                  <div className='title'><h6>Step 4</h6></div>
                  <div className='caption'><h6 className='text-gray'>Pay on WorldTradeX</h6></div>
                </div>

              </div>
              <div className='step'>
                <div>
                  <div className='circle'>5</div>
                </div>
                <div>
                  <div className='title'><h6>Step 5</h6></div>
                  <div className='caption'><h6 className='text-gray'>Ship and receive your goods</h6></div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid py-12 bg-warning'>
        <div className='container'>
          <div className='row'>
            <div className='col-8'>
              <h1 className='text-white'>Order with confidence</h1>
              <h6 className='text-white'>Ensure product quality and on-time delivery with Trade Assurance, the WorldTradeX.com order protection service.</h6>
            </div>
            <div className='col-4 d-flex align-items-center'>
              <button className='btn btn-white'>Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid py-12' id='hear'>
        <div className='container'>
          <h1 className='text-center mb-8'>Hear from our buyers</h1>
          <div className='row'>
            <div className='col-4'>
              <div className='mb-4'>
                <div className='img-zoom'>
                  <img src='https://cdn.worldtradex.com/img/random-person-1.jpg' className='img-fluid w-100 h-50' />
                </div>
              </div>
              <div>
                <h3 className='text-primary'>How WorldTradeX Enhanced Supplier Relations and Product Discovery</h3>
                <div className='d-flex justify-content-between text-muted mt-4'><span><small>22 April 2023</small></span><span><small>Read time: <span className='text-dark fw-bold'>12min</span></small></span>
                </div>
              </div>


            </div>
            <div className='col-4'>
              <div className='mb-4'>
                <div className='img-zoom'>
                  <img src='https://cdn.worldtradex.com/img/random-person-3.jpg' className='img-fluid w-100 h-50' />
                </div>
              </div>
              <div>
                <h3 className='text-primary'>Investing in WorldTradeX Helped NWCA Find Trusted Suppliers</h3>
                <div className='d-flex justify-content-between text-muted mt-4'><span><small>22 April 2023</small></span><span><small>Read time: <span className='text-dark fw-bold'>12min</span></small></span>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className='mb-4'>
                <div className='img-zoom'>
                  <img src='https://cdn.worldtradex.com/img/random-person-2.jpg' className='img-fluid w-100 h-50' />
                </div>
              </div>
              <div>
                <h3 className='text-primary'>WorldTradeX Offers a Growing Start-Up the Resources to Flourish</h3>
                <div className='d-flex justify-content-between text-muted mt-4'><span><small>22 April 2023</small></span><span><small>Read time: <span className='text-dark fw-bold'>12min</span></small></span>
                </div>
              </div>


            </div>

          </div>
          <div className='d-flex mt-8 justify-content-center'><button className='btn btn-dark'>See More</button></div>

        </div>
      </div>
      <div className='container-fluid py-12' id='latest'>
        <div className='container'>
          <h1 className='text-center mb-8'>Latest from WorldTradeX</h1>
          <div className='row'>
            <div className='col-4'>
              <div className='mb-4'>
                <div className='img-zoom'>
                  <img src='https://cdn.worldtradex.com/img/laptop-user.jpg' className='img-fluid w-100 h-50' />
                </div>
              </div>
              <div>
                <h3 className='text-primary'>5 questions to ask a seller before placing a B2B order</h3>
                <div className='d-flex justify-content-between text-muted mt-4'><span><small>22 April 2023</small></span><span><small>Read time: <span className='text-dark fw-bold'>12min</span></small></span>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className='mb-4'>
                <div className='img-zoom'>
                  <img src='https://cdn.worldtradex.com/img/containers.jpg' className='img-fluid w-100 h-50' />
                </div>
              </div>
              <div>
                <h3 className='text-primary'>Importing like a pro: questions you must ask your supplier</h3>
                <div className='d-flex justify-content-between text-muted mt-4'><span><small>22 April 2023</small></span><span><small>Read time: <span className='text-dark fw-bold'>12min</span></small></span>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className='mb-4'>
                <div className='img-zoom'>
                  <img src='https://cdn.worldtradex.com/img/paper.jpg' className='img-fluid w-100 h-50' />
                </div>
              </div>
              <div>
                <h3 className='text-primary'>Ensure smooth shipping with this importing checklist</h3>
                <div className='d-flex justify-content-between text-muted mt-4'><span><small>22 April 2023</small></span><span><small>Read time: <span className='text-dark fw-bold'>12min</span></small></span>
                </div>
              </div>


            </div>

          </div>
          <div className='d-flex mt-8 justify-content-center'><button className='btn btn-dark'>See More</button></div>

        </div>
      </div>
    </>
  );
}

export default AboutUs;