import categories from '../../data/categories.json';
import QRCode from 'react-qr-code'

export function Menu() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light navbar-default py-0 py-lg-4 ' aria-label='Offcanvas navbar large'>
      <div className='container-fluid'>
        <div className='offcanvas offcanvas-start' tabIndex={-1} id='navbar-default' aria-labelledby='navbar-defaultLabel'>
          <div className='offcanvas-body gap-2'>
            <li className='dropdown me-3 d-none d-lg-block'>
              <button className='btn btn-dark ' type='button' data-bs-toggle='dropdown' aria-expanded='false'>
                <svg xmlns='http://www.w3.org/2000/svg' width={16} height={16} fill='currentColor' className='bi bi-text-left text-white me-2' viewBox='0 0 16 16'>
                  <path fillRule='evenodd' d='M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z' />
                </svg>
                All Categories
              </button>
              <ul className='dropdown-menu dropdown-menu-lg'>
                {
                  categories?.map((category: any, index: any) =>
                  (
                    <li className='dropdown-menu-list' key={index}>
                      <a href={`/category/${category?.id}`} className='dropdown-item d-flex justify-content-between mb-1 py-1 '>
                        <div>
                          <img src={category?.image} className='rounded-circle icon-shape icon-sm' />
                          <span className='ms-1'>{category?.name}</span>
                        </div>
                        <div>
                          <i className='feather-icon icon-chevron-right' />
                        </div>
                      </a>
                      <div className='dropdown-menu-list-submenu'>
                        <div>
                          <ul className='list-unstyled'>
                            {
                              category?.items?.map((subcategory: any, index: any) =>
                              (
                                <li key={index}>
                                  <a href={`/sub-category/${subcategory?.id}`} className='dropdown-item'>{subcategory?.name}</a>
                                </li>
                              ))
                            }
                          </ul>
                        </div>
                        <div>
                        </div>
                      </div>
                    </li>
                  ))
                }
              </ul>
            </li>
            <div>
              <ul className='navbar-nav align-items-center '>
                <li className='nav-item dropdown w-100 w-lg-auto dropdown-fullwidth'>
                  <a className='nav-link dropdown-toggle text-primary' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                    Featured Sections
                  </a>
                  <div className=' dropdown-menu pb-0'>
                    <div className='row p-2 p-lg-4'>
                      <div className='col-lg-9 col-md-9'>
                        <div className='row'>
                          <a className='col-lg-4 col-md-4' href='/top-ranking'>
                            <div className='card text-center py-8 gap-3'>
                              <div>
                                <img src='https://cdn.worldtradex.com/img/Top-Ranking.svg' className='rounded-circle icon-shape icon-xl' />
                              </div>
                              <div>
                                <h6>
                                  Top Ranking
                                </h6>
                              </div>
                            </div>
                          </a>
                          <a className='col-lg-4 col-md-4' href='/new-arrivals'>
                            <div className='card text-center py-8 gap-3'>
                              <div>
                                <img src='https://cdn.worldtradex.com/img/New-Arrivals.svg' className='rounded-circle icon-shape icon-xl' />
                              </div>
                              <div>
                                <h6>
                                  New Arrivals
                                </h6>
                              </div>
                            </div>
                          </a>
                          <a className='col-lg-4 col-md-4' href='/savings-spotlight'>
                            <div className='card text-center py-8 gap-3'>
                              <div>
                                <img src='https://cdn.worldtradex.com/img/Savings-Spotlight.svg' className='rounded-circle icon-shape icon-xl' />
                              </div>
                              <div>
                                <h6>
                                  Savings Spotlight
                                </h6>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className='col-lg-3 col-md-3 border-left pe-3'>
                        <div className='d-flex flex-column gap-3'>
                          <a className='dropdown-item' href='/sample-centers'>Sample Centers</a>
                          <a className='dropdown-item' href='/trade-shows'>Trade Shows</a>
                          <a className='dropdown-item' href='/tips'>Tips</a>
                          <a className='dropdown-item' href='/live'>Live</a>
                          <a className='dropdown-item' href='/global-suppliers'>Global Suppliers</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className='nav-item dropdown w-100 w-lg-auto dropdown-fullwidth'>
                  <a className='nav-link dropdown-toggle text-primary' href='/trade-assurance' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                    Trade Assurance
                  </a>
                  <div className=' dropdown-menu pb-0'>
                    <div className='row p-2 p-lg-4'>
                      <div className='col-lg-6 col-md-6 py-6'>
                        <div className='d-flex align-items-center gap-3 mb-3'>
                          <img src='https://cdn.worldtradex.com/img/trade-assurance-fill.png' width={50} /><h2>Trade Assurance</h2>
                        </div>
                        <h1>Enjoy protection from payment to delivery.</h1>
                        <a className=' btn btn-dark mt-3' href='/trade-assurance'>Learn More</a>
                      </div>
                      <div className='col-lg-6 col-md-6 py-6 '>
                        <div className='row'>
                          <div className='col-lg-6 col-md-6'>
                            <a className='card cursor-pointer' href='/safe-and-easy-payments'>
                              <div className='card-body bg-light'>
                                <div className='p-3 d-flex gap-2 align-items-center'>
                                  <img src='https://cdn.worldtradex.com/img/Safe-and-easy-payments.svg' width={50} />
                                  <b>Safe and easy payments</b>
                                  <i className='bi bi-arrow-right'></i>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className='col-lg-6 col-md-6'>
                            <a className='card cursor-pointer' href='/money-back-policy'>
                              <div className='card-body bg-light'>
                                <div className='p-3 d-flex gap-2 align-items-center'>
                                  <img src='https://cdn.worldtradex.com/img/Money-back-policy.svg' width={50} />
                                  <b>Money back policy</b>
                                  <i className='bi bi-arrow-right'></i>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className='row mt-3'>
                          <div className='col-lg-6 col-md-6'>
                            <a className='card cursor-pointer' href='/shipping-and-logisitcs'>
                              <div className='card-body bg-light'>
                                <div className='p-3 d-flex gap-2 align-items-center'>
                                  <img src='https://cdn.worldtradex.com/img/After-sales-protection.svg' width={50} />
                                  <b>Shipping & logistics service</b>
                                  <i className='bi bi-arrow-right'></i>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className='col-lg-6 col-md-6'>
                            <a className='card cursor-pointer' href='/after-sales-protection'>
                              <div className='card-body bg-light'>
                                <div className='p-3 d-flex gap-2 align-items-center'>
                                  <img src='https://cdn.worldtradex.com/img/Shipping-logisitcs.svg' width={50} />
                                  <b>After sales protection</b>
                                  <i className='bi bi-arrow-right'></i>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className='nav-item dropdown w-100 w-lg-auto dropdown-fullwidth'>
                  <a className='nav-link dropdown-toggle text-primary' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                    Buyer Central
                  </a>
                  <div className=' dropdown-menu pb-0'>
                    <div className='row p-2 p-lg-4'>
                      <div className='col-lg-1 col-6 mb-4 mb-lg-0'>
                      </div>
                      <div className='col-lg-2 col-6 mb-4 mb-lg-0'>
                        <h6 className='text-primary ps-3'>Get Started</h6>
                        <a className='dropdown-item' href='/about-us'>What is WorldTradeX</a>
                      </div>
                      <div className='col-lg-2 col-6 mb-4 mb-lg-0'>
                        <h6 className='text-primary ps-3'>Why World Trade X</h6>
                        <a className='dropdown-item' href='/how-sourcing-works'>How sourcing works</a>
                        <a className='dropdown-item' href='https://seller.worldtradex.com/' target='_blank'>Membership Program</a>
                      </div>
                      <div className='col-lg-2 col-12 mb-4 mb-lg-0'>
                        <h6 className='text-primary ps-3'>Trade Services</h6>
                        <a className='dropdown-item' href='/trade-assurance'>Trade Assurance</a>
                        <a className='dropdown-item' href='/logistics-service'>Logisitics Service</a>
                        <a className='dropdown-item' href='/letter-of-credit'>Letter of credit</a>
                        <a className='dropdown-item' href='/production-monitoring'>Production monitoring</a>
                      </div>
                      <div className='col-lg-2 col-12 mb-4 mb-lg-0'>
                        <h6 className='text-primary ps-3'>Resources</h6>
                        <a className='dropdown-item' href='/success-stories'>Success Stories</a>
                        <a className='dropdown-item' href='/blog'>Blogs</a>
                        <a className='dropdown-item' href='/industry-reports'>Industry Reports</a>
                        <a className='dropdown-item' href='/help-center'>Help Center</a>
                      </div>
                      <div className='col-lg-2 col-12 mb-4 mb-lg-0'>
                        <h6 className='text-primary ps-3'>Webinars</h6>
                        <a className='dropdown-item' href='/overview'>Overview</a>
                        <a className='dropdown-item' href='/meet-the-peers'>Meet the peers</a>
                        <a className='dropdown-item' href='/academy'>E-commerce academy</a>
                        <a className='dropdown-item' href='/how-to-source'>How to source</a>
                      </div>
                      <div className='col-lg-1 col-6 mb-4 mb-lg-0'>
                      </div>
                    </div>
                  </div>
                </li>
                <li className='nav-item dropdown w-100 w-lg-auto dropdown-fullwidth'>
                  <a className='nav-link dropdown-toggle text-primary' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                    Become a supplier
                  </a>
                  <div className=' dropdown-menu pb-0'>
                    <div className='row p-2 p-lg-4'>
                      <div className='row'>
                        {/* CARD */}
                        <div className='col-lg-2 col-md-2'></div>
                        <div className='col-lg-3 col-md-2'>
                          <a className='card cursor-pointer text-center py-8 gap-3' href='https://seller.worldtradex.com/' target='_blank'>
                            <div>
                              <img src='https://cdn.worldtradex.com/img/Partner-program.svg' className='rounded-circle icon-shape icon-xl' />
                            </div>
                            <div>
                              <h6>
                                Partner program
                              </h6>
                            </div>
                          </a>
                        </div>
                        <div className='col-lg-3 col-md-4'>
                          <a className='card cursor-pointer text-center py-8 gap-3' href='https://seller.worldtradex.com/' target='_blank'>
                            <div>
                              <img src='https://cdn.worldtradex.com/img/outside-china.svg' className='rounded-circle icon-shape icon-xl' />
                            </div>
                            <div>
                              <h6>
                                For suppliers outside USA.
                              </h6>
                            </div>
                          </a>
                        </div>
                        <div className='col-lg-3 col-md-4'>
                          <a className='card cursor-pointer text-center py-8 gap-3' href='https://seller.worldtradex.com/' target='_blank'>
                            <div>
                              <img src='https://cdn.worldtradex.com/img/inside-china.svg' className='rounded-circle icon-shape icon-xl' />
                            </div>
                            <div>
                              <h6>
                                For Suppliers based in USA.
                              </h6>
                            </div>
                          </a>
                        </div>

                      </div>
                    </div>
                  </div>
                </li>
                <li className='nav-item dropdown w-100 w-lg-auto dropdown-fullwidth'>
                  <a className='nav-link dropdown-toggle text-primary' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                    Help Center
                  </a>
                  <div className=' dropdown-menu pb-0'>
                    <div className='row p-2 p-lg-4'>
                      <div className='col-lg-9 col-md-9'>
                        <div className='row'>
                          {/* CARD */}
                          <div className='col-lg-4 col-md-4'>

                          </div>
                          <div className='col-lg-4 col-md-4'>
                            <a className='card cursor-pointer text-center py-8 gap-3' href='/help-center'>
                              <div>
                                <img src='https://cdn.worldtradex.com/img/Buyers.svg' className='rounded-circle icon-shape icon-xl' />
                              </div>
                              <div>
                                <h6>
                                  For Buyers
                                </h6>
                              </div>
                            </a>
                          </div>
                          <div className='col-lg-4 col-md-4'>
                            <a className='card cursor-pointer text-center py-8 gap-3' href='/help-center'>
                              <div>
                                <img src='https://cdn.worldtradex.com/img/suppliers.svg' className='rounded-circle icon-shape icon-xl' />
                              </div>
                              <div>
                                <h6>
                                  For Suppliers
                                </h6>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className='col-lg-3 col-md-3 border-left pe-3'>
                        <div className='d-flex flex-column gap-3'>
                          <a className='dropdown-item' href='/open-dispute'>Open a dispute</a>
                          <a className='dropdown-item' href='/report-ipr'>Report IPR infringement</a>
                          <a className='dropdown-item' href='/report-abuse'>Report Abuse</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className='nav-item dropdown w-100 w-lg-auto dropdown-fullwidth'>
                  <a className='nav-link dropdown-toggle text-primary' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                    Get the app
                  </a>
                  <div className=' dropdown-menu pb-0'>
                    <div className='row p-2 p-lg-4'>
                      <div className='col-lg-1 col-md-1'>
                      </div>
                      <div className='col-lg-4'>
                        <h3>Get the WorldTradeX app</h3>
                        <p>Find products, communicate with suppliers, and manage and pay for your orders with the WorldTradeX app anytime, anywhere.</p>
                        <a className='text-primary' href='#'>See more</a>
                      </div>
                      <div className='col-lg-3 d-flex flex-column gap-4'>
                        <a href='https://testflight.apple.com/join/Lqom7mZE'>
                          <img src='https://freshcart.codescandy.com/assets/images/appbutton/appstore-btn.svg' style={{ width: 140 }} />
                        </a>
                        <a href='https://appdistribution.firebase.dev/i/4f8391a88051acde'>
                          <img src='https://freshcart.codescandy.com/assets/images/appbutton/googleplay-btn.svg' style={{ width: 140 }} />
                        </a>
                      </div>
                      <div className='col-lg-4'>
                        <QRCode
                          value={`https://appdistribution.firebase.dev/i/4f8391a88051acde`}
                          size={150}
                        />
                      </div>
                      <div className='col-lg-1'>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav >
  );
}

export default Menu;
