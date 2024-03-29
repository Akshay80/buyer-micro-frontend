import { PAGE_TITLE } from '../../../libs/helper/src/index'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `How Sourcing Works - ${PAGE_TITLE}`,
  description: '',
};

function HowSourcingWorks() {
  return (
    <>
      <div className='position-relative'>
        <img src='https://cdn.worldtradex.com/img/logistics-banner.jpg' className='w-100' height={300} />
        <div className='position-absolute' style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <h1 className='text-white w-50'>How end-to-end sourcing on WorldTradeX works</h1>
          <p className='text-white w-50'>Your business can find or create exactly what you’re looking for here on one of the world’s largest wholesale marketplaces. Then pay for it, ensure its quality, and ship it to your final destination.</p>
        </div>
      </div>
      <div className='container-fluid bg-dark'>
        <div className='container'>
          <nav className='nav d-flex gap-10'>
            <ul className='navbar-nav align-items-center p-3' style={{ backgroundColor: '#fd5b01' }}>
              <li className='text-white cursor-pointer'>1. Find product and suppliers </li>
            </ul>
            {/* <ul className='navbar-nav align-items-center p-3'>
              <li className='text-white cursor-pointer' onClick={() => scrollToSection('step2')}>2. Connect with sellers</li>
            </ul>
            <ul className='navbar-nav align-items-center p-3'>
              <li className='text-white cursor-pointer' onClick={() => scrollToSection('step3')} >3. Place and protect your orders</li>
            </ul>
            <ul className='navbar-nav align-items-center p-3'>
              <li className='text-white cursor-pointer' onClick={() => scrollToSection('step4')}>4. Pay on WorldTradeX</li>
            </ul>
            <ul className='navbar-nav align-items-center p-3'>
              <li className='text-white cursor-pointer' onClick={() => scrollToSection('step5')}>5. Ship and receive your goods</li>
            </ul> */}
          </nav>

        </div>
      </div>
      <div className='container-fluid  py-12'>
        <div className='container'>
          <div className='row'>
            <div className='col-7'>
              <h1 className='text-primary'>Step 1:Find products and sellers</h1>
              <p className='text-primary'>With over 150,000 manufacturers, wholesalers, and distributors selling on the platform, you can find or create anything you’re looking for. You can work with sellers to create customized products , or find finished products that already exist that are Ready to Ship from the facility within 15 days of when you place the order.</p>
            </div>
            <div className='col-5'>

            </div>

          </div>
          <div className='row mt-12'>
            <div className='col-6'>
              <img src='https://cdn.worldtradex.com/img/web-interface-1.png' className='w-100' />
            </div>
            <div className='col-6'>
              <h2 className='text-primary'>How to find sellers</h2>
              <ul>
                <li className='text-primary mt-5'>Use the search bar.Enter product or seller keywords, then narrow your choices from there.</li>
                <li className='text-primary mt-5'>Go to pavilions.Check out themed pavilions ranging from top-ranking products to a specific country’s exports.</li>
                <li className='text-primary mt-5'>Send a Request for Quotation (RFQ).Specify what you’re looking for and sellers will bid for your business.</li>
              </ul>
            </div>
          </div>
          <div className='row mt-12'>
            <div className='col-6'>
              <h2 className='text-primary'>How to find sellers</h2>
              <ul>
                <li className='text-primary mt-5'>Ask the right questions.Assess sellers by looking at the information in their profiles. Dig deeper by sending a message.</li>
                <li className='text-primary mt-5'>Look at their badges.Badges on a seller’s profile help you know what steps they took to prove they are a trusted partner.</li>
                <li className='text-primary mt-5'>Gold supplier:WorldTradeX.com members that have been verified as businesses with commercial or industrial capabilities.</li>
                <li className='text-primary mt-5'>Verified Seller:A Gold Supplier whose company profile, management, production capabilities, product, and process have been assessed, certified, and/or inspected by third-party institutions.</li>
                <li className='text-primary mt-5'>Trade Assurance Supplier:Gold suppliers who accept payment through WorldTradeX.com, enabling WorldTradeX.com payment and order protection.</li>
              </ul>
            </div>
            <div className='col-6'>
              <img src='https://cdn.worldtradex.com/img/web-interface-1.png' className='w-100' />
            </div>
          </div>

        </div>
      </div>
      <div className='container-fluid py-8 bg-warning'>
        <div className='container'>
          <h4 className='text-dark'>WorldTradeX Trade Assurance tip</h4>
          <p className='text-dark'>When you’re searching for products or sellers, you can filter for Trade Assurance. This way you’ll know your order is protected.</p>
        </div>
      </div>
      <div className='container-fluid  py-4'>
        <div className='container' id='step2'>
          <hr />
          <div className='row mt-8'>
            <div className='col-7'>
              <h1 className='text-primary'>Step 2:Connect with sellers</h1>
              <p className='text-primary'>Unlike other platforms, you can speak one-on-one with sellers on WorldTradeX.com to customize your order, negotiate prices or learn more about their business. Once you’ve created a short list of sellers, it’s time to reach out.</p>
            </div>
            <div className='col-5'>

            </div>
          </div>
          <div className='row mt-8'>
            <div className='col-6'>
              <img src='https://cdn.worldtradex.com/img/web-interface-1.png' className='w-100' />
            </div>
            <div className='col-6'>
              <h2 className='text-primary'>How to connect with sellers</h2>
              <ul>
                <li className='text-primary mt-5'>Write a detailed message.Start an inquiry by clicking “Contact Seller” on the product detail page.</li>
                <li className='text-primary mt-5'>Keep track of conversations.Find all your messages within “My WorldTradeX” in the Message Center.</li>
                <li className='text-primary mt-5'>Use the mobile app.Simplify communication with real-time translation and video chat features to simplify communication.</li>
                <li className='text-primary mt-5'>Attend online trade shows.Save time and money by attending category-specific digital events to network and assess industry trends.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
      <div className='container-fluid py-8 bg-warning'>
        <div className='container'>
          <h4 className='text-dark'>WorldTradeX Trade Assurance tip</h4>
          <p className='text-dark'>Keep 100% of your communication within the Message Center - otherwise your Trade Assurance protection may not be upheld.</p>
        </div>
      </div>
      <div className='container-fluid py-4'>
        <div className='container' id='step3'>
          <hr />
          <div className='row mt-8'>
            <div className='col-7'>
              <h1 className='text-primary'>Step 3:Place and protect your order</h1>
              <p className='text-primary'>When possible, place orders using WorldTradeX Trade Assurance for order protection. Look for the Trade Assurance iconon product listing pages, or ask your seller if it’s offered. Adhere to all Trade Assurance rules , including messaging within the Message Center instead of third-party apps.</p>
            </div>
            <div className='col-5'>

            </div>
          </div>
          <div className='row mt-8'>
            <div className='col-6'>
              <img src='https://cdn.worldtradex.com/img/web-interface-1.png' className='w-100' />
            </div>
            <div className='col-6'>
              <h2 className='text-primary'>WorldTradeX Trade Assurance protections</h2>
              <ul>
                <li className='text-primary mt-5'>Product quality.Ensure your product is made according to your specifications..</li>
                <li className='text-primary mt-5'>On-time shipping.Have your product shipped by the date you</li>
                <li className='text-primary mt-5'>Payment security.Trust that your payment is secure and your seller will send you your order.</li>
                <li className='text-primary mt-5'>Dispute resolution.If you’re not satisfied with your order, file a dispute and WorldTradeX.com will mediate.</li>
              </ul>
            </div>
          </div>
          <div className='row mt-8'>
            <div className='col-6'>
              <h2 className='text-primary'>Additional ways you can protect your order</h2>
              <ul>
                <li className='text-primary mt-5'>Detailed purchase orders.Create a purchase order (PO) detailing all aspects of the order and shipping..</li>
                <li className='text-primary mt-5'>Request a sample.Ensure the product meets your specifications before placing the full order.</li>
                <li className='text-primary mt-5'>Production monitoring and inspection services.A local team will visit the seller’s location to ensure everything runs smoothly.</li>
                <li className='text-primary mt-5'>Intellectual Property (IP) protection.The security and privacy of our customers and our merchants is a top priority for WorldTradeX.com, and we pride ourselves as the global leader when it comes to IP protection.</li>
              </ul>
            </div>
            <div className='col-6'>
              <img src='https://cdn.worldtradex.com/img/web-interface-1.png' className='w-100' />
            </div>
          </div>

        </div>
      </div>
      <div className='container-fluid py-8 bg-warning'>
        <div className='container'>
          <h4 className='text-dark'>WorldTradeX Trade Assurance tip</h4>
          <p className='text-dark'>Always ask if your seller offers Trade Assurance to ensure your order is protected and payment will be secure.</p>
        </div>
      </div>
      <div className='container-fluid py-8'>
        <div className='container' id='step4'>
          <hr />
          <div className='row mt-8'>
            <div className='col-6'>
              <h1 className='text-primary'>Step 4:Pay on WorldTradeX</h1>
              <p className='text-primary'>Paying suppliers on WorldTradeX is easy and secure. Once you and the seller agree on payment terms, you’ll typically pay an initial balance. The remainder is due when the items are shipped. Buyers can make secure WorldTradeX.com Trade Assurance payments through the options shown on the right.</p>
              <div className='bg-warning py-6 px-5 mt-8'>
                <h4 className='text-primary'>
                  WorldTradeX Trade Assurance tip
                </h4>
                <p className='text-primary'>You must pay for your order on WorldTradeX, not through third parties (exception: wire transfer) for your order to qualify for Trade Assurance protection.</p>
              </div>
            </div>
            <div className='col-6'>
              <img src='https://cdn.worldtradex.com/img/web-interface-1.png' className='w-100' />
            </div>
          </div>


        </div>
      </div>
      <div className='container-fluid py-8'>
        <div className='container' id='step5'>
          <hr />
          <div className='row mt-8'>
            <div className='col-6'>
              <h1 className='text-primary'>Step 5: Ship and receive your goods</h1>
              <p className='text-primary'>WorldTradeX Logistics has partnered with major players in the industry to provide our customers with reliable and transparent multi-modal shipping solutions.</p>
              <div className='bg-warning py-6 px-5 mt-8'>
                <h4 className='text-primary'>
                  WorldTradeX Trade Assurance tip
                </h4>
                <p className='text-primary'>Trade Assurance protects your order for 30 days after you receive it.</p>
              </div>
            </div>
            <div className='col-6'>
              <img src='https://cdn.worldtradex.com/img/web-interface-1.png' className='w-100' />
            </div>
          </div>


        </div>
      </div>
      <div className='container-fluid py-4 bg-warning'>
        <div className='row'>
          <div className='col-9 d-flex align-items-center'>
            <h2 className='text-primary'>Did you know you can source your items on WorldTradeX.com and sell them wholesale on the platform as well?</h2>
          </div>
          <div className='col-3  d-flex align-items-center'>
            <button className='btn btn-dark'>
              Start Selling
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HowSourcingWorks;