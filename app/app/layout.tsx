'use client';

import { usePathname } from 'next/navigation';

// export async function getServerSideProps(context: any) {
//   const { pathname } = context.req.url;
//   return {
//     props: {
//       pathname,
//     },
//   };
// }

const AccountLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();


  return (
    <div className='container-fluid'>
      <div className='row mx-1'>
        <aside className="col-lg-2 col-md-12 mb-6 mb-md-0 border-end">
          <div className="d-flex flex-column gap-2 mt-8">
            <ul className="nav flex-column nav-pills nav-pills-dark row gx-10">
              <li className="nav-item">
                <a className={`nav-link ${pathname === '/app/personal-profile' ? 'active' : ''} cursor-pointer`} href='/app/personal-profile'>
                  <i className="feather-icon icon-settings me-2"></i>My Profile
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${pathname === '/app/profile' ? 'active' : ''} cursor-pointer`} href='/app/profile'>
                  <i className="feather-icon icon-shopping-bag me-2"></i> Business Details
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${pathname === '/app/orders' ? 'active' : ''} cursor-pointer`} href='/app/orders'>
                  <i className="feather-icon icon-book me-2"></i> My Orders
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${pathname === '/app/transactions' ? 'active' : ''} cursor-pointer`} href='/app/transactions'>
                  <i className="feather-icon icon-layers me-2"></i>Transactions
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${pathname === '/app/address' ? 'active' : ''} cursor-pointer`} href='/app/address'>
                  <i className="feather-icon icon-map-pin me-2"></i>Address
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${pathname === '/app/setting' ? 'active' : ''} cursor-pointer`} href='/app/setting'>
                  <i className="feather-icon icon-credit-card me-2"></i>Reset Password
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${pathname === '/app/notification' ? 'active' : ''} cursor-pointer`} href='/app/notification'>
                  <i className="feather-icon icon-bell me-2"></i>Notification
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${pathname === '/app/rfq' ? 'active' : ''} cursor-pointer`} href='/app/rfq'>
                  <i className="feather-icon icon-bell me-2"></i> Request for quotation
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${pathname === '/app/messages' ? 'active' : ''} cursor-pointer`} href='/app/messages'>
                  <i className="feather-icon icon-bell me-2"></i>Messages
                </a>
              </li>
              <li className="nav-item">
                <hr></hr>
              </li>
            </ul>
          </div>
      </aside>
      <section className="col-lg-10 col-md-12">{children}</section>
      </div>
      
      {/* Modal for Delete Account */}
      <div>
        <div
          className="modal fade"
          id="deleteAccount"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="deleteAccountTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="deleteAccountTitle">
                  Confirm to Delete Account
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                Are you sure you want to delete this account?
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-success"
                  data-bs-dismiss="modal"
                >
                  No
                </button>
                <button type="button" className="btn btn-danger">
                  Yes, Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountLayout;
