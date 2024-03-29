import { PAGE_TITLE } from '../../../libs/helper/src/index';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Logistics Service- ${PAGE_TITLE}`,
  description: '',
};

function LogisticsService() {
  return (
    <>
      <div className='position-relative'>
        <img src='https://cdn.worldtradex.com/img/logistics-banner.jpg' className='w-100' height={300} />
        <div className='position-absolute' style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <h1 className='text-primary'>Logistics Services</h1>
        </div>
      </div>
      <img src='https://s.alicdn.com/@img/imgextra/i3/O1CN01BDEO3X1FxJtZQijEP_!!6000000000553-2-tps-3840-360.png' className='w-100' />
      <section className='mt-lg-14 mt-8 '>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <ul className='nav nav-pills nav-lb-tab' id='myTab' role='tablist'>
                <li className='nav-item' role='presentation'>
                  <button className='nav-link active' id='product-tab' data-bs-toggle='tab' data-bs-target='#multimodal-tab-pane' type='button' role='tab' aria-controls='product-tab-pane' aria-selected='true'><h4>MultiModal Transport</h4></button>
                </li>
                <li className='nav-item' role='presentation'>
                  <button className='nav-link' id='details-tab' data-bs-toggle='tab' data-bs-target='#express-tab-pane' type='button' role='tab' aria-controls='details-tab-pane' aria-selected='false' tabIndex={-1}><h4>Express</h4></button>
                </li>
                <li className='nav-item' role='presentation'>
                  <button className='nav-link' id='reviews-tab' data-bs-toggle='tab' data-bs-target='#ocean-tab-pane' type='button' role='tab' aria-controls='reviews-tab-pane' aria-selected='false' tabIndex={-1}><h4>Ocean Freight FCL</h4></button>
                </li>
              </ul>
              <div className='tab-content' id='myTabContent'>
                <div className='tab-pane fade active show' id='multimodal-tab-pane' role='tabpanel' aria-labelledby='multimodal-tab' tabIndex={0}>
                  <div className='my-8'>
                    <h1>Recommended logistics solutions</h1>
                    <div className='row mt-8 grid-3'>
                      {/* {
                        data.map((card, index) =>
                        (
                          <LogCard from={card.From} to={card.To} price={card.Price} days={card.Estimate} weight={card.DefaultLoad} logistics={card.Logistics} key={index} />
                        ))
                      } */}
                    </div>
                    <h1 className='mt-8'>Discover more solutions</h1>
                    <h4 className='mt-8'> Economy logistics solutions</h4>
                    <div className='row mt-8 grid-3'>
                      {/* {
                        data.map((card, index) =>
                        (
                          <LogCard from={card.From} to={card.To} price={card.Price} days={card.Estimate} weight={card.DefaultLoad} logistics={card.Logistics} key={index} />
                        ))
                      } */}
                    </div>
                    <h4 className='mt-8'>Premium logistics solutions</h4>
                    <div className='row mt-8 grid-3'>
                      {/* {
                        data.map((card, index) =>
                        (
                          <LogCard from={card.From} to={card.To} price={card.Price} days={card.Estimate} weight={card.DefaultLoad} logistics={card.Logistics} key={index} />
                        ))
                      } */}
                    </div>
                  </div>
                </div>
                <div className='tab-pane fade' id='express-tab-pane' role='tabpanel' aria-labelledby='express-tab' tabIndex={0}>
                  <div className='my-8'>
                    <h1>Recommended logistics solutions</h1>
                    <div className='row mt-8 grid-3'>
                      {/* {
                        data.map((card, index) =>
                        (
                          <LogCard from={card.From} to={card.To} price={card.Price} days={card.Estimate} weight={card.DefaultLoad} logistics={card.Logistics} key={index} />
                        ))
                      } */}
                    </div>
                    <h1 className='mt-8'>Discover more solutions</h1>
                    <h4 className='mt-8'> Economy logistics solutions</h4>
                    <div className='row mt-8 grid-3'>
                      {/* {
                        data.map((card, index) =>
                        (
                          <LogCard from={card.From} to={card.To} price={card.Price} days={card.Estimate} weight={card.DefaultLoad} logistics={card.Logistics} key={index} />
                        ))
                      } */}
                    </div>
                    <h4 className='mt-8'>Premium logistics solutions</h4>
                    <div className='row mt-8 grid-3'>
                      {/* {
                        data.map((card, index) =>
                        (
                          <LogCard from={card.From} to={card.To} price={card.Price} days={card.Estimate} weight={card.DefaultLoad} logistics={card.Logistics} key={index} />
                        ))
                      } */}
                    </div>
                  </div>
                </div>
                <div className='tab-pane fade' id='ocean-tab-pane' role='tabpanel' aria-labelledby='ocean-tab' tabIndex={0}>
                  <div className='my-8'>
                    <h1>Recommended logistics solutions</h1>
                    <div className='row mt-8 grid-3'>
                      {/* {
                        data.map((card, index) =>
                        (
                          <LogCard from={card.From} to={card.To} price={card.Price} days={card.Estimate} weight={card.DefaultLoad} logistics={card.Logistics} key={index} />
                        ))
                      } */}
                    </div>
                    <h1 className='mt-8'>Discover more solutions</h1>
                    <h4 className='mt-8'> Economy logistics solutions</h4>
                    <div className='row mt-8 grid-3'>
                      {/* {
                        data.map((card, index) =>
                        (
                          <LogCard from={card.From} to={card.To} price={card.Price} days={card.Estimate} weight={card.DefaultLoad} logistics={card.Logistics} key={index} />
                        ))
                      } */}
                    </div>
                    <h4 className='mt-8'>Premium logistics solutions</h4>
                    <div className='row mt-8 grid-3'>
                      {/* {
                        data.map((card, index) =>
                        (
                          <LogCard from={card.From} to={card.To} price={card.Price} days={card.Estimate} weight={card.DefaultLoad} logistics={card.Logistics} key={index} />
                        ))
                      } */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='container-fluid bg-light py-12'>
        <div className='container'>
          <h1>Logistics knowledge base</h1>
          <div className='row mt-8'>
            <div className='col-4'>
              <div className='card p-4'>
                <h4>Logistics Glossary</h4>
                <img src='https://s.alicdn.com/@img/imgextra/i1/O1CN01zpWTce2506h7ymiSE_!!6000000007463-0-tps-338-198.jpg' className='w-100 mt-4' />
                <p className='mt-4 text-primary'>Delivery Duty Paid(DDP)</p>
                <p>19/07/2022</p>
              </div>
            </div>
            <div className='col-4'>
              <div className='card p-4'>
                <h4>Market Updates</h4>
                <img src='	https://s.alicdn.com/@img/imgextra/i3/O1CN012WahiB1DuSAWjAUrk_!!6000000000276-0-tps-338-198.jpg' className='w-100 mt-4' />
                <p className='mt-4 text-primary'>Freight Market Update: August 30, 2023</p>
                <p>30/08/2023</p>
              </div>
            </div>
            <div className='col-4'>
              <div className='card p-4'>
                <h4>Logistics Insights</h4>
                <img src='https://s.alicdn.com/@img/imgextra/i1/O1CN01ycFDXq27Z286TpEdo_!!6000000007810-0-tps-338-198.jpg' className='w-100 mt-4' />
                <p className='mt-4 text-primary'>Understanding Incoterms: A Breakdown of...</p>
                <p>07/07/2023</p>
              </div>
            </div>
          </div>
          <h1 className='mt-8'>Learn more about our services</h1>
          <div className='row mt-8'>
            <div className='col-12'>
              <div className='card p-4'>
                <div className='row'>
                  <div className='col-6'>
                    <h4>To-door service</h4>
                    <hr />
                    <div className='row'>
                      <div className='col-6'>
                        <p>Ideal for light-volume shipping with a selection of shipping modes and fast delivery time.</p>
                        <i>Ocean Freight LCL + Trucking/Express</i>
                        <button className='btn btn-dark mt-8'>View Details</button>
                      </div>
                      <div className='col-6'>
                        <p>Hassel-free DDP service lowers transport costs and increases ease of shipping.</p>
                        <i>Air Freight + Trucking/Express</i>
                      </div>
                    </div>
                  </div>
                  <div className='col-6'>
                    <img src='https://s.alicdn.com/@img/imgextra/i2/O1CN01Qsy5yu1JuoAlaygC2_!!6000000001089-0-tps-555-282.jpg' className='w-100' />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 mt-8'>
              <div className='card p-4'>
                <div className='row'>
                  <div className='col-6'>
                    <h4>To-port service</h4>
                    <hr />
                    <div className='row'>
                      <div className='col-6'>
                        <p>Ideal for large-volume shipping with economical rates.</p>
                        <i>Ocean Freight FCL + Trucking</i>
                        <button className='btn btn-dark mt-8'>View more</button>
                      </div>
                      <div className='col-6'>
                        <p>Your cargoes are handled by major carriers from 2M, THE, and Ocean Alliances</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-6'>
                    <img src='https://s.alicdn.com/@img/imgextra/i1/O1CN01elnNxn1EODulAEcly_!!6000000000341-0-tps-555-282.jpg' className='w-100' />
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

export default LogisticsService;