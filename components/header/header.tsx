import AuthControl from '../auth-control/auth-control';
import HeaderCartCounter from './headerCartCounter';

function Header() {
  return (
    <div>
      <div className="border-bottom">
        <header className="py-lg-5 py-4 border-bottom border-bottom-lg-0">
          <div className="container-fluid">
            <div className="row w-100 align-items-center gx-3">
              <div className="col-xl-8 col-lg-8">
                <div className="d-flex align-items-center">
                  <a className="navbar-brand d-none d-lg-block" href="/">
                    <img src="https://wtx-cdn.s3.amazonaws.com/img/world-trade-x.png" alt="WTX Logo" width={180} />
                  </a>
                  <div className=" w-100 ms-4  d-none d-lg-block ">
                    {/* <AsyncSelect placeholder="Search products" loadOptions={searchProducts} onChange={(value: any) => window.location.href = `/product/${value.value}`} /> */}
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 d-flex align-items-center justify-content-end">
                <HeaderCartCounter />
                <AuthControl />
                <div className="btn-hover-box me-4">
                  <div className="btn-hover-box-dropdown p-5">
                    <span className='text-center'><h5>Welcome to WorldTradeX</h5></span>
                    <div style={{ display: "grid", placeContent: "center" }}>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;