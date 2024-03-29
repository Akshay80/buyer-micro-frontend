import footer from '../../data/footer.json';

function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row g-4 py-4'>
          <div className='col-12 col-md-1 col-lg-1'>
          </div>
          {
            footer.map((data: any, index: number) =>
              <div className='col-12 col-md-2 col-lg-2' key={index}>
                <h6 className='mb-4'>{data.title}</h6>
                <div className='row'>
                  <div className='col-12'>
                    <ul className='nav flex-column'>
                      {
                        data.links.map((link: any, linkIndex: number) => (
                          <li className='nav-item mb-2' key={linkIndex}>
                            <a href={link.url} className='nav-link text-primary'>{link.text}</a>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
              </div>
            )
          }
          <div className='col-12 col-md-1 col-lg-1'>
          </div>
        </div>
        <div className='border-top py-4'>
          <div className='row align-items-center'>
            <div className='col-lg-3 text-lg-start text-center mb-2 mb-lg-0'>
              <ul className='list-inline mb-0'>
                <li className='list-inline-item text-dark'>Social Media</li>
                <li className='list-inline-item '>
                  <a href='#!' className='text-primary'>
                    <i className='bi bi-facebook'></i>
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a href='https://www.linkedin.com/company/world-tradex-inc/about/' className='text-primary'>
                    <i className='bi bi-linkedin'></i>
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a href='#!' className='text-primary'>
                    <i className='bi bi-twitter'></i>
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a href='https://instagram.com/worldtrade_x?igshid=OGQ5ZDc2ODk2ZA==' className='text-primary'>
                    <i className='bi bi-instagram'></i>
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a href='#!' className='text-primary'>
                    <i className='bi bi-youtube'></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className='col-lg-3 d-flex gap-4 text-center'>
              <a className='text-primary' href='/privacy-policy'>Privacy Policy</a>
              <a className='text-primary' href='/terms'>Terms and Conditions</a>
            </div>
            <div className='col-lg-6 mt-4 mt-md-0'>
              <ul className='list-inline mb-0 text-lg-end text-center'>
                <li className='list-inline-item ms-4'>
                  <a href='https://testflight.apple.com/join/Lqom7mZE'>
                    <img src='https://cdn.worldtradex.com/img/appstore-btn.svg' style={{ width: 140 }} />
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a href='https://appdistribution.firebase.dev/i/4f8391a88051acde'>
                    <img src='https://cdn.worldtradex.com/img/googleplay-btn.svg' style={{ width: 140 }} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='border-top py-4 text-center'>
          <div className='row align-items-center grid-center'>
            <div className='flex-column align-items-center'>
              © 2023 <a href='/' className='text-primary'>WorldTradeX</a>. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
