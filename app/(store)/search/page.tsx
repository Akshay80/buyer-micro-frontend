// import Layout from 'apps/buyer/components/layout/layout'
import styles from './page.module.css';

/* eslint-disable-next-line */
export interface SearchProps { }

function Search(props: SearchProps) {
  return (
    <>
      <div className={styles['container']}>
        <div className="mt-8 mb-lg-14 mb-8">
          {/* container */}
          <div className="container">
            <div className="row gx-10">
              {/* col */}
              <aside className="col-lg-3 col-md-4 mb-6 mb-md-0">
                <div className="offcanvas offcanvas-start offcanvas-collapse w-md-50 " tabIndex={-1} id="offcanvasCategory" aria-labelledby="offcanvasCategoryLabel">
                  <div className="offcanvas-header d-lg-none">
                    <h5 className="offcanvas-title" id="offcanvasCategoryLabel">Filter</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                  </div>
                  <div className="offcanvas-body ps-lg-2 pt-lg-0">
                    <div className="mb-8">
                      {/* title */}
                      <h5 className="mb-3">Categories</h5>
                      {/* nav */}
                      <ul className="nav nav-category" id="categoryCollapseMenu">
                        <li className="nav-item border-bottom w-100 "><a href="#" className="nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#categoryFlushOne" aria-expanded="false" aria-controls="categoryFlushOne">Dairy, Bread &amp; Eggs <i className="feather-icon icon-chevron-right" /></a>
                          {/* accordion collapse */}
                          <div id="categoryFlushOne" className="accordion-collapse collapse" data-bs-parent="#categoryCollapseMenu">
                            <div>
                              {/* nav */}
                              <ul className="nav flex-column ms-3">
                                {/* nav item */}
                                <li className="nav-item"><a href="#!" className="nav-link">Milk</a></li>
                                {/* nav item */}
                                <li className="nav-item"><a href="#!" className="nav-link">Milk Drinks</a></li>
                                {/* nav item */}
                                <li className="nav-item"><a href="#!" className="nav-link">Curd &amp; Yogurt</a></li>
                                {/* nav item */}
                                <li className="nav-item"><a href="#!" className="nav-link">Eggs</a></li>
                                {/* nav item */}
                                <li className="nav-item"><a href="#!" className="nav-link">Bread</a></li>
                                {/* nav item */}
                                <li className="nav-item"><a href="#!" className="nav-link">Buns &amp; Bakery</a></li>
                                {/* nav item */}
                                <li className="nav-item"><a href="#!" className="nav-link">Butter &amp; More</a></li>
                                {/* nav item */}
                                <li className="nav-item"><a href="#!" className="nav-link">Cheese</a></li>
                                {/* nav item */}
                                <li className="nav-item"><a href="#!" className="nav-link">Paneer &amp; Tofu</a></li>
                                {/* nav item */}
                                <li className="nav-item"><a href="#!" className="nav-link">Cream &amp; Whitener</a></li>
                                {/* nav item */}
                                <li className="nav-item"><a href="#!" className="nav-link">Condensed Milk</a></li>
                                {/* nav item */}
                                <li className="nav-item"><a href="#!" className="nav-link">Vegan Drinks</a></li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        {/* nav item */}
                        <li className="nav-item border-bottom w-100 "><a href="#" className="nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                          Snacks &amp;
                          Munchies <i className="feather-icon icon-chevron-right" />
                        </a>
                          {/* collapse */}
                          <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#categoryCollapseMenu">
                            <div>
                              <ul className="nav flex-column ms-3">
                                {/* nav item */}
                                <li className="nav-item"><a href="#!" className="nav-link">Chips &amp; Crisps</a></li>
                                {/* nav item */}
                                <li className="nav-item"><a href="#!" className="nav-link">Nachos</a></li>
                                {/* nav item */}
                                <li className="nav-item"><a href="#!" className="nav-link">Popcorn</a></li>
                                {/* nav item */}
                                <li className="nav-item"><a href="#!" className="nav-link">Bhujia &amp; Mixtures</a></li>
                                {/* nav item */}
                                <li className="nav-item"><a href="#!" className="nav-link">Namkeen Snacks</a></li>
                                {/* nav item */}
                                <li className="nav-item"><a href="#!" className="nav-link">Healthy Snacks</a></li>
                                {/* nav item */}
                                <li className="nav-item"><a href="#!" className="nav-link">Cakes &amp; Rolls</a></li>
                                {/* nav item */}
                                <li className="nav-item"><a href="#!" className="nav-link">Energy Bars</a></li>
                                {/* nav item */}
                                <li className="nav-item"><a href="#!" className="nav-link">Papad &amp; Fryums</a></li>
                                {/* nav item */}
                                <li className="nav-item"><a href="#!" className="nav-link">Rusks &amp; Wafers</a></li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li className="nav-item border-bottom w-100 "> <a href="#" className="nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">Fruits &amp; Vegetables <i className="feather-icon icon-chevron-right" /></a>
                          {/* collapse */}
                          <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#categoryCollapseMenu">
                            <div>
                              <ul className="nav flex-column ms-3">
                                {/* nav item */}
                                <li className="nav-item">
                                  <a className="nav-link active" aria-current="page" href="#!">Fresh Vegetables</a>
                                </li>
                                {/* nav item */}
                                <li className="nav-item">
                                  <a className="nav-link" href="#!">Herbs &amp; Seasonings</a>
                                </li>
                                {/* nav item */}
                                <li className="nav-item">
                                  <a className="nav-link" href="#!">Fresh Fruits</a>
                                </li>
                                {/* nav item */}
                                <li className="nav-item">
                                  <a className="nav-link" href="#!">Organic Fruits &amp; Vegetables</a>
                                </li>
                                {/* nav item */}
                                <li className="nav-item">
                                  <a className="nav-link" href="#!">Cuts &amp; Sprouts</a>
                                </li>
                                {/* nav item */}
                                <li className="nav-item">
                                  <a className="nav-link" href="#!">Exotic Fruits &amp; Veggies</a>
                                </li>
                                {/* nav item */}
                                <li className="nav-item">
                                  <a className="nav-link" href="#!">Flower Bouquets, Bunches</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li className="nav-item border-bottom w-100 "> <a href="#" className="nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">Cold Drinks &amp; Juices <i className="feather-icon icon-chevron-right" /></a>
                          {/* collapse */}
                          <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#categoryCollapseMenu">
                            <div>
                              <ul className="nav flex-column ms-3">
                                {/* nav item */}
                                <li className="nav-item"><a href="#!" className="nav-link">Soft Drinks</a></li>
                                {/* nav item */}
                                <li className="nav-item"><a href="#!" className="nav-link">Fruit Juices</a></li>
                                {/* nav item */}
                                <li className="nav-item"><a href="#!" className="nav-link">Coldpress</a></li>
                                {/* nav item */}
                                <li className="nav-item"><a href="#!" className="nav-link">Energy Drinks</a></li>
                                {/* nav item */}
                                <li className="nav-item"><a href="#!" className="nav-link">Water &amp; Ice Cubes</a></li>
                                {/* nav item */}
                                <li className="nav-item"><a href="#!" className="nav-link">Soda &amp; Mixers</a></li>
                                {/* nav item */}
                                <li className="nav-item"><a href="#!" className="nav-link">Concentrates &amp; Syrups</a></li>
                                {/* nav item */}
                                <li className="nav-item"><a href="#!" className="nav-link">Detox &amp; Energy Drinks</a></li>
                                {/* nav item */}
                                <li className="nav-item"><a href="#!" className="nav-link">Juice Collection</a></li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li className="nav-item border-bottom w-100 "> <a href="#" className="nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">Breakfast &amp; Instant Food <i className="feather-icon icon-chevron-right" /></a>
                          {/* collapse */}
                          <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#categoryCollapseMenu">
                            <div>
                              <ul className="nav flex-column ms-3">
                                {/* nav item */}
                                <li className="nav-item">
                                  <a className="nav-link active" aria-current="page" href="#!">Batter</a>
                                </li>
                                {/* nav item */}
                                <li className="nav-item">
                                  <a className="nav-link" href="#!">Breakfast Cereal</a>
                                </li>
                                {/* nav item */}
                                <li className="nav-item">
                                  <a className="nav-link" href="#!">Noodles, Pasta &amp; Soup</a>
                                </li>
                                {/* nav item */}
                                <li className="nav-item">
                                  <a className="nav-link" href="#!">Frozen Non-Veg Snackss</a>
                                </li>
                                {/* nav item */}
                                <li className="nav-item">
                                  <a className="nav-link" href="#!">Frozen Veg</a>
                                </li>
                                {/* nav item */}
                                <li className="nav-item">
                                  <a className="nav-link" href="#!">Vermicelli</a>
                                </li>
                                {/* nav item */}
                                <li className="nav-item">
                                  <a className="nav-link" href="#!">Instant Mixes</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li className="nav-item border-bottom w-100 "> <a href="#" className="nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">Bakery &amp; Biscuits <i className="feather-icon icon-chevron-right" /></a>
                          {/* collapse */}
                          <div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#categoryCollapseMenu">
                            <div>
                              <ul className="nav flex-column ms-3">
                                {/* nav item */}
                                <li className="nav-item">
                                  <a className="nav-link active" aria-current="page" href="#!">Cookies</a>
                                </li>
                                {/* nav item */}
                                <li className="nav-item">
                                  <a className="nav-link" href="#!">Glucose &amp; Marie</a>
                                </li>
                                {/* nav item */}
                                <li className="nav-item">
                                  <a className="nav-link" href="#!">Sweet &amp; Salty</a>
                                </li>
                                {/* nav item */}
                                <li className="nav-item">
                                  <a className="nav-link" href="#!">Healthy &amp; Digestive</a>
                                </li>
                                {/* nav item */}
                                <li className="nav-item">
                                  <a className="nav-link" href="#!">Cream Biscuits</a>
                                </li>
                                {/* nav item */}
                                <li className="nav-item">
                                  <a className="nav-link" href="#!">Rusks &amp; Wafers</a>
                                </li>
                                {/* nav item */}
                                <li className="nav-item">
                                  <a className="nav-link" href="#!">Cakes &amp; Rolls</a>
                                </li>
                                {/* nav item */}
                                <li className="nav-item">
                                  <a className="nav-link" href="#!">
                                    Buns &amp; Bakery</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li className="nav-item border-bottom w-100 "> <a href="#" className="nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">Chicken, Meat &amp; Fish <i className="feather-icon icon-chevron-right" /></a>
                          {/* collapse */}
                          <div id="flush-collapseSeven" className="accordion-collapse collapse" data-bs-parent="#categoryCollapseMenu">
                            <div>
                              <ul className="nav flex-column ms-3">
                                {/* nav item */}
                                <li className="nav-item">
                                  <a className="nav-link active" aria-current="page" href="#!">Chicken</a>
                                </li>
                                {/* nav item */}
                                <li className="nav-item">
                                  <a className="nav-link" href="#!">Sausage, Salami &amp; Ham</a>
                                </li>
                                {/* nav item */}
                                <li className="nav-item">
                                  <a className="nav-link" href="#!">Exotic Meat</a>
                                </li>
                                {/* nav item */}
                                <li className="nav-item">
                                  <a className="nav-link" href="#!">Eggs</a>
                                </li>
                                {/* nav item */}
                                <li className="nav-item">
                                  <a className="nav-link" href="#!">Frozen Non-Veg Snacks</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="mb-8">
                      <h5 className="mb-3">Stores</h5>
                      <div className="my-4">
                        {/* input */}
                        <input type="search" className="form-control" placeholder="Search by store" />
                      </div>
                      {/* form check */}
                      <div className="form-check mb-2">
                        {/* input */}
                        <input className="form-check-input" type="checkbox" defaultValue="" id="eGrocery" defaultChecked />
                        <label className="form-check-label" htmlFor="eGrocery">
                          E-Grocery
                        </label>
                      </div>
                      {/* form check */}
                      <div className="form-check mb-2">
                        {/* input */}
                        <input className="form-check-input" type="checkbox" defaultValue="" id="DealShare" />
                        <label className="form-check-label" htmlFor="DealShare">
                          DealShare
                        </label>
                      </div>
                      {/* form check */}
                      <div className="form-check mb-2">
                        {/* input */}
                        <input className="form-check-input" type="checkbox" defaultValue="" id="Dmart" />
                        <label className="form-check-label" htmlFor="Dmart">
                          DMart
                        </label>
                      </div>
                      {/* form check */}
                      <div className="form-check mb-2">
                        {/* input */}
                        <input className="form-check-input" type="checkbox" defaultValue="" id="Blinkit" />
                        <label className="form-check-label" htmlFor="Blinkit">
                          Blinkit
                        </label>
                      </div>
                      {/* form check */}
                      <div className="form-check mb-2">
                        {/* input */}
                        <input className="form-check-input" type="checkbox" defaultValue="" id="BigBasket" />
                        <label className="form-check-label" htmlFor="BigBasket">
                          BigBasket
                        </label>
                      </div>
                      {/* form check */}
                      <div className="form-check mb-2">
                        {/* input */}
                        <input className="form-check-input" type="checkbox" defaultValue="" id="StoreFront" />
                        <label className="form-check-label" htmlFor="StoreFront">
                          StoreFront
                        </label>
                      </div>
                      {/* form check */}
                      <div className="form-check mb-2">
                        {/* input */}
                        <input className="form-check-input" type="checkbox" defaultValue="" id="Spencers" />
                        <label className="form-check-label" htmlFor="Spencers">
                          Spencers
                        </label>
                      </div>
                      {/* form check */}
                      <div className="form-check mb-2">
                        {/* input */}
                        <input className="form-check-input" type="checkbox" defaultValue="" id="onlineGrocery" />
                        <label className="form-check-label" htmlFor="onlineGrocery">
                          Online Grocery
                        </label>
                      </div>
                    </div>
                    <div className="mb-8">
                      {/* price */}
                      <h5 className="mb-3">Price</h5>
                      <div>
                        {/* range */}
                        <div id="priceRange" className="mb-3 noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr">
                          <div className="noUi-base">
                            <div className="noUi-connects">
                              <div className="noUi-connect" style={{ transform: 'translate(14.6259%, 0px) scale(0.452952, 1)' }}></div>
                            </div>
                            <div className="noUi-origin" style={{ transform: 'translate(-85.3741%, 0px)', zIndex: 5 }}>
                              <div className="noUi-handle noUi-handle-lower" data-handle="0" tabIndex={0} role="slider">
                                <div className="noUi-touch-area"></div>
                              </div>
                            </div>
                            <div className="noUi-origin" style={{ transform: 'translate(-40.0789%, 0px)', zIndex: 4 }}>
                              <div className="noUi-handle noUi-handle-upper" data-handle="1" tabIndex={0} role="slider">
                                <div className="noUi-touch-area"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <small className="text-muted">Price:</small> <span id="priceRange-value" className="small">$49 - $182</span>

                      </div>
                    </div>
                    {/* rating */}
                    <div className="mb-8">
                      <h5 className="mb-3">Rating</h5>
                      <div>
                        {/* form check */}
                        <div className="form-check mb-2">
                          {/* input */}
                          <input className="form-check-input" type="checkbox" defaultValue="" id="ratingFive" />
                          <label className="form-check-label" htmlFor="ratingFive">
                            <i className="bi bi-star-fill text-warning" />
                            <i className="bi bi-star-fill text-warning " />
                            <i className="bi bi-star-fill text-warning " />
                            <i className="bi bi-star-fill text-warning " />
                            <i className="bi bi-star-fill text-warning " />
                          </label>
                        </div>
                        {/* form check */}
                        <div className="form-check mb-2">
                          {/* input */}
                          <input className="form-check-input" type="checkbox" defaultValue="" id="ratingFour" defaultChecked />
                          <label className="form-check-label" htmlFor="ratingFour">
                            <i className="bi bi-star-fill text-warning" />
                            <i className="bi bi-star-fill text-warning " />
                            <i className="bi bi-star-fill text-warning " />
                            <i className="bi bi-star-fill text-warning " />
                            <i className="bi bi-star text-warning" />
                          </label>
                        </div>
                        {/* form check */}
                        <div className="form-check mb-2">
                          {/* input */}
                          <input className="form-check-input" type="checkbox" defaultValue="" id="ratingThree" />
                          <label className="form-check-label" htmlFor="ratingThree">
                            <i className="bi bi-star-fill text-warning" />
                            <i className="bi bi-star-fill text-warning " />
                            <i className="bi bi-star-fill text-warning " />
                            <i className="bi bi-star text-warning" />
                            <i className="bi bi-star text-warning" />
                          </label>
                        </div>
                        {/* form check */}
                        <div className="form-check mb-2">
                          {/* input */}
                          <input className="form-check-input" type="checkbox" defaultValue="" id="ratingTwo" />
                          <label className="form-check-label" htmlFor="ratingTwo">
                            <i className="bi bi-star-fill text-warning" />
                            <i className="bi bi-star-fill text-warning" />
                            <i className="bi bi-star text-warning" />
                            <i className="bi bi-star text-warning" />
                            <i className="bi bi-star text-warning" />
                          </label>
                        </div>
                        {/* form check */}
                        <div className="form-check mb-2">
                          {/* input */}
                          <input className="form-check-input" type="checkbox" defaultValue="" id="ratingOne" />
                          <label className="form-check-label" htmlFor="ratingOne">
                            <i className="bi bi-star-fill text-warning" />
                            <i className="bi bi-star text-warning" />
                            <i className="bi bi-star text-warning" />
                            <i className="bi bi-star text-warning" />
                            <i className="bi bi-star text-warning" />
                          </label>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </aside>
              <section className="col-lg-9 col-md-12">
                {/* card */}
                <div className="card mb-4 bg-light border-0">
                  {/* card body */}
                  <div className="card-body p-9">
                    <h2 className="mb-0 fs-1">Snacks &amp; Munchies</h2>
                  </div>
                </div>
                {/* text */}
                <div className="d-lg-flex justify-content-between align-items-center">
                  <div className="mb-3 mb-lg-0">
                    <p className="mb-0"> <span className="text-dark">24 </span> Products found </p>
                  </div>
                  {/* icon */}
                  <div className="d-md-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center justify-content-between">

                      <div className="ms-2 d-lg-none">
                        <a className="btn btn-outline-gray-400 text-muted" data-bs-toggle="offcanvas" href="#offcanvasCategory" role="button" aria-controls="offcanvasCategory"><svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-filter me-2">
                          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                        </svg> Filters</a>
                      </div>
                    </div>
                    <div className="d-flex mt-2 mt-lg-0">
                      <div className="me-2 flex-grow-1">
                        {/* select option */}
                        <select className="form-select">
                          <option selected>Show: 50</option>
                          <option value={10}>10</option>
                          <option value={20}>20</option>
                          <option value={30}>30</option>
                        </select></div>
                      <div>
                        {/* select option */}
                        <select className="form-select">
                          <option selected>Sort by: Featured</option>
                          <option value="Low to High">Price: Low to High</option>
                          <option value="High to Low"> Price: High to Low</option>
                          <option value="Release Date"> Release Date</option>
                          <option value="Avg. Rating"> Avg. Rating</option>
                        </select></div>
                    </div>
                  </div>
                </div>
                {/* row */}
                <div className="row g-4  row-cols-1 mt-2">
                  <div className="col">
                    {/* card */}
                    <div className="card card-product">
                      {/* card body */}
                      <div className="card-body">
                        <div className=" row align-items-center">
                          {/* col */}
                          <div className="col-md-4 col-12">
                            <div className="text-center position-relative ">
                              <div className=" position-absolute top-0">
                                {/* badge */} <span className="badge bg-danger">Sale</span>
                              </div>
                              <a href="shop-single.html">
                                {/* img */}<img src="https://freshcart.codescandy.com/assets/images/products/product-img-1.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
                            </div>
                          </div>
                          <div className="col-md-8 col-12 flex-grow-1">
                            {/* heading */}
                            <div className="text-small mb-1"><a href="#!" className="text-decoration-none text-muted"><small>Snack &amp;
                              Munchies</small></a></div>
                            <h2 className="fs-6"><a href="shop-single.html" className="text-inherit text-decoration-none">{`Haldiram's Sev Bhujia`}</a>
                            </h2>
                            <div>
                              {/* rating */}<small className="text-warning"> <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-half" /></small> <span className="text-muted small">4.5(149)</span>
                            </div>
                            <div className=" mt-6">
                              {/* price */}
                              <div><span className="text-dark">$18</span> <span className="text-decoration-line-through text-muted">$24</span>
                              </div>
                              {/* btn */}
                              <div className="mt-3">
                                <a href="#!" className="btn btn-icon btn-sm btn-outline-gray-400 text-muted" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Quick View" data-bs-original-title="Quick View" /></a>
                                <a href="shop-wishlist.html" className="btn btn-icon btn-sm btn-outline-gray-400 text-muted" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Wishlist" data-bs-original-title="Wishlist"><i className="bi bi-heart" /></a>
                                <a href="#!" className="btn btn-icon btn-sm btn-outline-gray-400 text-muted" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Compare" data-bs-original-title="Compare"><i className="bi bi-arrow-left-right" /></a>
                              </div>
                              {/* btn */}
                              <div className="mt-2">
                                <a href="#!" className="btn btn-primary ">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-bag me-2">
                                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                                    <line x1={3} y1={6} x2={21} y2={6} />
                                    <path d="M16 10a4 4 0 0 1-8 0" />
                                  </svg> Add to Cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* col */}
                  <div className="col">
                    {/* card */}
                    <div className="card card-product">
                      <div className="card-body">
                        <div className=" row align-items-center">
                          <div className="col-md-4 col-12">
                            <div className="text-center position-relative ">
                              <a href="shop-single.html">
                                {/* img */}<img src="https://freshcart.codescandy.com/assets/images/products/product-img-2.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
                            </div>
                          </div>
                          <div className="col-md-8 col-12 flex-grow-1">
                            {/* heading */}
                            <div className="text-small mb-1"><a href="#!" className="text-decoration-none text-muted"><small>Bakery &amp;
                              Biscuits</small></a></div>
                            <h2 className="fs-6"><a href="shop-single.html" className="text-inherit text-decoration-none">NutriChoice Digestive</a>
                            </h2>
                            <div>
                              {/* rating */}<small className="text-warning"> <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-half" /></small> <span className="text-muted small">4.5(25)</span>
                            </div>
                            <div className=" mt-6">
                              {/* price */}
                              <div><span className="text-dark">$24</span>
                              </div>
                              {/* btn */}
                              <div className="mt-3">
                                <a href="#!" className="btn btn-icon btn-sm btn-outline-gray-400 text-muted" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Quick View" data-bs-original-title="Quick View" /></a>
                                <a href="shop-wishlist.html" className="btn btn-icon btn-sm btn-outline-gray-400 text-muted" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Wishlist" data-bs-original-title="Wishlist"><i className="bi bi-heart" /></a>
                                <a href="#!" className="btn btn-icon btn-sm btn-outline-gray-400 text-muted" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Compare" data-bs-original-title="Compare"><i className="bi bi-arrow-left-right" /></a>
                              </div>
                              {/* btn */}
                              <div className="mt-2"><a href="#!" className="btn btn-primary ">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-bag me-2">
                                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                                  <line x1={3} y1={6} x2={21} y2={6} />
                                  <path d="M16 10a4 4 0 0 1-8 0" />
                                </svg> Add to Cart</a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* col */}
                  <div className="col">
                    {/* card */}
                    <div className="card card-product">
                      <div className="card-body">
                        <div className=" row align-items-center">
                          <div className="col-md-4 col-12">
                            <div className="text-center position-relative">
                              <div className=" position-absolute top-0">
                                {/* badge */} <span className="badge bg-success">14%</span>
                              </div>
                              <a href="shop-single.html">
                                {/* img */}<img src="https://freshcart.codescandy.com/assets/images/products/product-img-10.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
                            </div>
                          </div>
                          <div className="col-md-8 col-12 flex-grow-1">
                            {/* heading */}
                            <div className="text-small mb-1"><a href="#!" className="text-decoration-none text-muted"><small>Bakery &amp;
                              Biscuits</small></a></div>
                            <h2 className="fs-6"><a href="shop-single.html" className="text-inherit text-decoration-none">Cadbury 5 Star
                              Chocolate</a></h2>
                            <div>
                              {/* rating */}<small className="text-warning"> <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" /></small> <span className="text-muted small">5(69)</span>
                            </div>
                            <div className=" mt-6">
                              {/* price */}
                              <div><span className="text-dark">$14</span>
                              </div>
                              {/* btn */}
                              <div className="mt-3">
                                <a href="#!" className="btn btn-icon btn-sm btn-outline-gray-400 text-muted" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Quick View" data-bs-original-title="Quick View" /></a>
                                <a href="shop-wishlist.html" className="btn btn-icon btn-sm btn-outline-gray-400 text-muted" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Wishlist" data-bs-original-title="Wishlist"><i className="bi bi-heart" /></a>
                                <a href="#!" className="btn btn-icon btn-sm btn-outline-gray-400 text-muted" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Compare" data-bs-original-title="Compare"><i className="bi bi-arrow-left-right" /></a>
                              </div>
                              {/* btn */}
                              <div className="mt-2"><a href="#!" className="btn btn-primary ">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-bag me-2">
                                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                                  <line x1={3} y1={6} x2={21} y2={6} />
                                  <path d="M16 10a4 4 0 0 1-8 0" />
                                </svg> Add to Cart</a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* col */}
                  <div className="col">
                    {/* card */}
                    <div className="card card-product">
                      <div className="card-body">
                        <div className=" row align-items-center">
                          <div className="col-md-4 col-12">
                            <div className="text-center position-relative">
                              <a href="shop-single.html">
                                {/* img */}<img src="https://freshcart.codescandy.com/assets/images/products/product-img-4.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
                            </div>
                          </div>
                          <div className="col-md-8 col-12 flex-grow-1">
                            {/* heading */}
                            <div className="text-small mb-1"><a href="#!" className="text-decoration-none text-muted"><small>Snack &amp;
                              Munchies</small></a></div>
                            <h2 className="fs-6"><a href="shop-single.html" className="text-inherit text-decoration-none">Onion Flavour Potato</a>
                            </h2>
                            <div>
                              {/* rating */}<small className="text-warning"> <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-half" />
                                <i className="bi bi-star" /></small> <span className="text-muted small">3.5(456)</span>
                            </div>
                            <div className=" mt-6">
                              {/* price */}
                              <div><span className="text-dark">$3</span> <span className="text-decoration-line-through text-muted">$9</span>
                              </div>
                              {/* btn */}
                              <div className="mt-3">
                                <a href="#!" className="btn btn-icon btn-sm btn-outline-gray-400 text-muted" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Quick View" data-bs-original-title="Quick View" /></a>
                                <a href="shop-wishlist.html" className="btn btn-icon btn-sm btn-outline-gray-400 text-muted" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Wishlist" data-bs-original-title="Wishlist"><i className="bi bi-heart" /></a>
                                <a href="#!" className="btn btn-icon btn-sm btn-outline-gray-400 text-muted" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Compare" data-bs-original-title="Compare"><i className="bi bi-arrow-left-right" /></a>
                              </div>
                              {/* btn */}
                              <div className="mt-2"><a href="#!" className="btn btn-primary ">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-bag me-2">
                                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                                  <line x1={3} y1={6} x2={21} y2={6} />
                                  <path d="M16 10a4 4 0 0 1-8 0" />
                                </svg> Add to Cart</a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* col */}
                  <div className="col">
                    {/* card */}
                    <div className="card card-product">
                      <div className="card-body">
                        <div className=" row align-items-center">
                          <div className="col-md-4 col-12">
                            <div className="text-center position-relative">
                              <a href="shop-single.html">
                                {/* img */}<img src="https://freshcart.codescandy.com/assets/images/products/product-img-5.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
                            </div>
                          </div>
                          <div className="col-md-8 col-12 flex-grow-1">
                            {/* heading */}
                            <div className="text-small mb-1"><a href="#!" className="text-decoration-none text-muted"><small>Instant
                              Food</small></a></div>
                            <h2 className="fs-6"><a href="shop-single.html" className="text-inherit text-decoration-none">Salted Instant Popcorn</a>
                            </h2>
                            <div>
                              {/* rating */}<small className="text-warning"> <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star" /></small> <span className="text-muted small">4.5(456)</span>
                            </div>
                            <div className=" mt-6">
                              {/* price */}
                              <div><span className="text-dark">$13</span> <span className="text-decoration-line-through text-muted">$19</span>
                              </div>
                              {/* btn */}
                              <div className="mt-3">
                                <a href="#!" className="btn btn-icon btn-sm btn-outline-gray-400 text-muted" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Quick View" data-bs-original-title="Quick View" /></a>
                                <a href="shop-wishlist.html" className="btn btn-icon btn-sm btn-outline-gray-400 text-muted" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Wishlist" data-bs-original-title="Wishlist"><i className="bi bi-heart" /></a>
                                <a href="#!" className="btn btn-icon btn-sm btn-outline-gray-400 text-muted" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Compare" data-bs-original-title="Compare"><i className="bi bi-arrow-left-right" /></a>
                              </div>
                              {/* btn */}
                              <div className="mt-2"><a href="#!" className="btn btn-primary ">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-bag me-2">
                                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                                  <line x1={3} y1={6} x2={21} y2={6} />
                                  <path d="M16 10a4 4 0 0 1-8 0" />
                                </svg> Add to Cart</a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* row */}
                <div className="row mt-8">
                  <div className="col">
                    {/* nav */}
                    <nav>
                      <ul className="pagination">
                        <li className="page-item disabled">
                          <a className="page-link  mx-1 " href="#" aria-label="Previous">
                            <i className="feather-icon icon-chevron-left" />
                          </a>
                        </li>
                        <li className="page-item "><a className="page-link  mx-1 active" href="#">1</a></li>
                        <li className="page-item"><a className="page-link mx-1 text-body" href="#">2</a></li>
                        <li className="page-item"><a className="page-link mx-1 text-body" href="#">...</a></li>
                        <li className="page-item"><a className="page-link mx-1 text-body" href="#">12</a></li>
                        <li className="page-item">
                          <a className="page-link mx-1 text-body" href="#" aria-label="Next">
                            <i className="feather-icon icon-chevron-right" />
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>


      </div>
    </>
  );
}

export default Search;
