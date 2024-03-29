// import { PAGE_TITLE } from '@wtx/helper';
import { PAGE_TITLE } from '../libs/helper/src/index';
import { Metadata } from 'next';
import SearchProduct from '../components/search-producet/search-product';
import GetStarted from '../components/home/getStarted';
import TopRanking from './(todo)/top-ranking/page';
import NewArrivalProducts from './(todo)/new-arrivals/page';
import SavingspotLightProducts from './(todo)/savings-spotlight/page';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: '',
};

export default async function Index() {
  return (
    <>
      <div className='position-relative'>
        <img src='https://wtx-cdn.s3.amazonaws.com/img/main-header.png' style={{ width: '100%', height: '80%' }} />
        <div className='position-absolute text-white' style={{ top: '40%', left: '30%', transform: 'translate(-40%, -30%)' }}>
          <h4 className='text-white'><i className='bi bi-play-circle-fill'></i> Learn More About World Trade X</h4>
          <h1 className='text-white'>The Leading E-commerce</h1>
          <h1 className='text-white'>Platform for Trade</h1>
          <div className='col-lg-12 d-none d-lg-block'>
            <SearchProduct />
          </div>
        </div>
      </div>
      {/* CARDS  */}
      <div className='container-fluid bg-light p-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 col-lg-3'>
              <div className='card p-6' style={{ minHeight: '18rem' }} >
                <div className='mb-8 mb-xl-0'>
                  <div className='mb-6'><img src='https://cdn.worldtradex.com/img/suppliers.svg' className='rounded-circle icon-shape icon-xl' /></div>
                  <h3 className='h5 mb-3'>
                    Millions of business offerings
                  </h3>
                  <p>Explore Products and supplier for your business from millions of offerings worldwide.</p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-3'>
              <div className='card p-6' style={{ minHeight: '18rem' }} >
                <div className='mb-8 mb-xl-0'>
                  <div className='mb-6'><img src='https://cdn.worldtradex.com/img/outside-china.svg' className='rounded-circle icon-shape icon-xl' /></div>
                  <h3 className='h5 mb-3'>
                    Millions of business offerings
                  </h3>
                  <p>Explore Products and supplier for your business from millions of offerings worldwide.</p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-3'>
              <div className='card p-6' style={{ minHeight: '18rem' }} >
                <div className='mb-8 mb-xl-0'>
                  <div className='mb-6'><img src='https://cdn.worldtradex.com/img/inside-china.svg' className='rounded-circle icon-shape icon-xl' /></div>
                  <h3 className='h5 mb-3'>
                    Millions of business offerings
                  </h3>
                  <p>Explore Products and supplier for your business from millions of offerings worldwide.</p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-3'>
              <div className='card p-6' style={{ minHeight: '18rem' }} >
                <div className='mb-8 mb-xl-0'>
                  <div className='mb-6'><img src='https://cdn.worldtradex.com/img/Buyers.svg' className='rounded-circle icon-shape icon-xl' /></div>
                  <h3 className='h5 mb-3'>
                    Millions of business offerings
                  </h3>
                  <p>Explore Products and supplier for your business from millions of offerings worldwide.</p>
                </div>
              </div>
            </div>
          </div>
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
      <div className='container-fluid'>
        <div className='mt-7 container'>
          <div className='d-flex mx-3 justify-content-between'>
            <h2 className='p-0 mb-1'>Top Ranking</h2>
            <a className='text-primary' href='/top-ranking'><u>View more</u></a>
          </div>
          <TopRanking limit={6} />
        </div>

        <div className='mt-7 container'>
          <div className='d-flex mx-3 justify-content-between'>
            <h2 className='p-0 mb-1'>New Arrivals</h2>
            <a className='text-primary' href='/new-arrivals'><u>View more</u></a>
          </div>
          <NewArrivalProducts limit={6} />
        </div>

        <div className='mt-7 container'>
          <div className='d-flex mx-3 justify-content-between'>
            <h2 className='p-0 mb-1'>Saving Spotlight</h2>
            <a className='text-primary' href='/savings-spotlight'><u>View more</u></a>
          </div>
          <SavingspotLightProducts limit={6} />
        </div>

      </div>
      <div className='container-fluid'>
        <div className='container'>
          <h3 className='mt-4'>Source direct from factory </h3>
          <div className='row mt-8'>
            <div className='col-4'>
              <div className='card position-relative'>
                <img src='https://cdn.worldtradex.com/img/factories.jpg' style={{ height: '15rem', filter: 'opacity(70%)' }} />
                <div className='position-absolute' style={{ top: '5%', left: '10%' }}>
                  <h5>Take factory live tours</h5>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className='card position-relative'>
                <img src='https://cdn.worldtradex.com/img/samples.jpg' style={{ height: '15rem', filter: 'opacity(70%)' }} />
                <div className='position-absolute' style={{ top: '5%', left: '5%' }}>
                  <h5>Get Samples</h5>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className='card position-relative'>
                <img src='https://cdn.worldtradex.com/img/most-popular.jpg' style={{ height: '15rem', filter: 'opacity(70%)' }} />
                <div className='position-absolute' style={{ top: '5%', left: '5%' }}>
                  <h5>Connect with top manufacturers</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid mb-10'>
        <div className='container'>
          <h1 className='mt-10'>Trade with confidence from production quality to purchase protection</h1>

          <div className='row mt-10'>
            <div className='col-12 col-md-6 mb-3 mb-lg-0'>
              <div>
                <div className='py-10 px-8 rounded' style={{ background: 'url(/img/verified-suppliers.jpg)no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'contrast(0.7)' }}>
                  <div>
                    <h6>Ensure production quality with</h6>
                    <h3 className='fw-bold mb-1'>Verified Suppliers
                    </h3>
                    <p className='mb-4 text-primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ea debitis possimus, hic nesciunt ratione itaque, exercitationem obcaecati provident dicta omnis voluptatem distinctio illo qui? Adipisci ab, praesentium modi debitis fugiat molestiae, officia at ut, neque hic nobis laborum libero?</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6 '>
              <div>
                <div className='py-10 px-8 rounded' style={{ background: 'url(/img/trade-assurance.jpg)no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'contrast(0.7)' }}>
                  <div>
                    <h6>Protect your purchases with</h6>
                    <h3 className='fw-bold mb-1'>Trade Assurance
                    </h3>
                    <p className='mb-4 text-primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ea debitis possimus, hic nesciunt ratione itaque, exercitationem obcaecati provident dicta omnis voluptatem distinctio illo qui? Adipisci ab, praesentium modi debitis fugiat molestiae, officia at ut, neque hic nobis laborum libero?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='px-16 pb-6  bg-light'>
        <div className='pt-10 container'>
          <h1 className='text-center py-10'>Personalise your trading experiences with curated benefits</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam praesentium cumque pariatur architecto similique dolorem omnis impedit sunt excepturi modi, nobis saepe quod ab, rerum maxime quaerat! Quaerat rerum similique illum, et est veniam commodi tempore error nam nisi harum consectetur veritatis dolores necessitatibus laborum voluptatum quas cumque rem blanditiis!</p>
          {/* <SliderLayout slides={SliderData} /> */}
        </div>
        <div className='text-center pt-8 pb-10'>
          <a href="/more-stories" type='button' className='btn btn-outline-dark btn-radius btn-padding px-8'>More Stories</a>
        </div>
      </div>
      <GetStarted />
      <div className='container-fluid'>
        <div className='container text-center p-8'>
          <h1>Empowering Business through local trade</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis exercitationem quae iusto quidem. Sed ab aliquam, totam, nesciunt vel odio soluta recusandae cumque vitae nulla fuga iusto magnam quo itaque? Cumque debitis explicabo perferendis nisi, accusantium nemo eum, doloribus sint necessitatibus hic repellat? Molestiae nisi consequatur mollitia nihil voluptates labore atque sed, id officia. Ut vitae eius laboriosam magni est?</p>
          <div className='row mt-8'>
            <div className='col-4'>
              <div className='card position-relative'>
                <img src='https://s.alicdn.com/@sc02/kf/S53803b89b44d4afdaed8fcc693395a00h.jpg_720x720.jpg' style={{ height: '15rem', filter: 'opacity(70%)' }} />
                <div className='position-absolute' style={{ top: '5%', left: '10%' }}>
                  <h5>Make it easy to do business everywhere</h5>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className='card position-relative'>
                <img src='https://s.alicdn.com/@sc02/kf/Sbb30aa5ba0054e46814ac26b09a15243T.jpg_720x720.jpg' style={{ height: '15rem', filter: 'opacity(70%)' }} />
                <div className='position-absolute' style={{ top: '5%', left: '5%' }}>
                  <h5>We have teams around the world</h5>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className='card position-relative'>
                <img src='	https://s.alicdn.com/@sc02/kf/Sfc4190d1ef184ed6a390de72b806f1d1D.png_720x720.jpg' style={{ height: '15rem', filter: 'opacity(70%)' }} />
                <div className='position-absolute' style={{ top: '5%', left: '5%' }}>
                  <h5>Responsible technology.Sustainable future</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}