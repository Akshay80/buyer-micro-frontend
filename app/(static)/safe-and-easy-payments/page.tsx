import { PAGE_TITLE } from '../../../libs/helper/src/index';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Safe and Easy Payments - ${PAGE_TITLE}`,
  description: '',
};

function SafeAndEasyPayments() {
  return (
    <>
      <div className='position-relative'>
        <img src='https://s.alicdn.com/@img/imgextra/i2/O1CN01jRIyKo21SiyaabZgZ_!!6000000006984-0-tps-3840-800.jpg' className='w-100' />
        <div className='position-absolute' style={{ top: '35%', left: '26%', transform: 'translate(-40%, -2%)' }}>
          <h3 className='text-white'><img src='https://cdn.worldtradex.com/img/trade-assurance-fill.png' width={50} />Trade Assurance</h3>
          <h1 className='text-white'>Safe and easy payments</h1>
          <h5 className='text-white'>Pay using your preferred payment method and currency</h5>
        </div>
      </div>
      <div className='container-fluid mt-8'>
        <div className='container'>
          <h1>How WorldTradeX keeps your payments secure and simple</h1>
          <h5 className='mt-4 text-gray'>Every payment made through WorldTradeX is SSL-encrypted, PCI DSS compliant, and processed in as quickly as 2 hours. To protect your payment, never pay outside of the platform.</h5>
        </div>
      </div>
      <div className='container-fluid mt-8'>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <div className='card p-4' style={{ height: '16.25rem' }}>
                <img src='https://cdn.worldtradex.com/img/Diverse-ways-to-pay.png' width={50} />
                <h3 className='mt-5'>Diverse ways to pay</h3>
                Pay with credit/debit cards, PayPal, Apple Pay, Google Pay, Afterpay/ Clearpay and more through our online checkout.
                You can also make bank-to-bank wire transfers with escrow protection using the official bank information provided by WorldTradeX.com.
                To save you conversion fees on purchases and refunds, we support over 20 currencies you can pay in.
              </div>
            </div>
            <div className='col-6'>
              <div className='card p-4' style={{ height: '16.25rem' }}>
                <img src='https://cdn.worldtradex.com/img/Flexible-financing.png' width={50} />
                <h3 className='mt-5'>Flexible financing</h3>
                Use any of the payment methods and currencies available to make an initial payment and settle the remaining balance with our deferred payment service: Payment Terms: 30/60 Days* or contact the supplier directly to settle the terms.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid mt-12'>
        <div className='container'>
          <h1>How to Order and Pay with trade assurance </h1>
          <div className='step mt-10'>
            <div>
              <div className='circle'>1</div>
            </div>
            <div>
              <div className='title'><h3>Find a supplier that supports Trade Assurance
              </h3></div>
            </div>
          </div>
          <div className='step mt-8'>
            <div>
              <div className='circle'>2</div>
            </div>
            <div>
              <div className='title'><h3>Check out or settle details with supplier</h3></div>
              <div className='caption'><h6 className='text-gray'>Select &#39;Start order&#39; on the product you wish to buy and proceed to check out.</h6></div>
            </div>
          </div>
          <div className='step'>
            <div>
              <div className='circle'>3</div>
            </div>
            <div>
              <div className='title'><h3>Pay using your preferred payment method and currency</h3></div>
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
                <a href='/terms' className='text-primary'><u>Read</u></a>
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
                <a href='/' className='text-primary'><u>watch</u></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SafeAndEasyPayments;