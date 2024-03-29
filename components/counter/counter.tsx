/* eslint-disable*/
import Link from 'next/link';
export interface CounterProps { heading?: string, text?: string, url: string, linkText?: string, counter1?: string, counter2?: string, counter3?: string, counter4?: string, counterDescription1?: string, counterDescription2?: string, counterDescription3?: string, counterDescription4?: string }

function Counter({ heading, text, url, linkText, counter1, counter2, counter3, counter4, counterDescription1, counterDescription2, counterDescription3, counterDescription4 }: CounterProps) {
  return (
    <div className='bg-dark py-14'>
      <div className='container-fluid'>
        <div className='container'>
          <div className='row'>
            <div className='offset-lg-1 col-lg-10'>
              <div className='row'>
                <div className='col-xl-6 col-md-6'>
                  <div className='text-white me-8 mb-12'>
                    <h2 className='text-white mb-6 '>{heading}</h2>
                    <p>{text}</p>
                    <Link href={url} className="text-white"><u>{linkText}</u></Link>
                  </div>
                </div>
                <div className='col-xl-6 col-md-6'>
                  <div className="row">
                    <div className='col-6 mb-4 mb-md-0' style={{ borderLeft: "5px solid white" }}>
                      <h3 className='display-5 fw-bold text-white mb-0'>{counter1}</h3>
                      <span className='fs-6 text-white'>{counterDescription1}</span>
                    </div>
                    <div className='col-6 mb-4 mb-md-0' style={{ borderLeft: "5px solid white" }}>
                      <h3 className='display-5 fw-bold text-white mb-0'>{counter2}</h3>
                      <span className='fs-6 text-white'>{counterDescription2}</span>
                    </div>
                  </div>
                  <div className="row mt-10">
                    <div className='col-6 mb-4 mb-md-0' style={{ borderLeft: "5px solid white" }} >
                      <h3 className='display-5 fw-bold text-white mb-0'>{counter3}</h3>
                      <span className='fs-6 text-white'>{counterDescription3}</span>
                    </div>
                    <div className='col-6 mb-4 mb-md-0' style={{ borderLeft: "5px solid white" }}>
                      <h3 className='display-5 fw-bold text-white mb-0'>{counter4}
                      </h3>
                      <span className='fs-6 text-white'>{counterDescription4}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Counter;
