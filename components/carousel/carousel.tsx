'use client'

import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';

function Carousel() {

  const images = [
    {
      title: 'Nature Image1',
      url: 'https://freshcart.codescandy.com/assets/images/slider/slide-1.jpg',
    },
    {
      title: 'Nature Image2',
      url: 'https://freshcart.codescandy.com/assets/images/slider/slider-2.jpg',
    }
  ];

  const [index, setIndex] = useState(1);

  const setFinishedIndex = (i: number) => {
    console.log('finished dragging on slide', i);
    setIndex(i);
  };

  const next = () => {
    if (index < images.length - 1) setIndex(index + 1);
    else setIndex(0);
  };

  const previous = () => {
    if (index > 0) setIndex(index - 1);
    else setIndex(images.length - 1);
  };

  return (

    <>


      <div id="carouselExampleAutoplaying" className="carousel slide py-4 rounded-2" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to={1} aria-label="Slide 2" />
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active" style={{ position: 'relative' }}>
            <div className="d-flex align-items-center">
              <CarouselItem2 />
              {/* <img src={slide1.src} className="d-block w-100 " alt="slide 1" /> */}
            </div>
          </div>
          <div className="carousel-item" style={{ position: 'relative' }}>
            <div className="d-flex align-items-center">
              <CarouselItem />
              <img src="https://freshcart.codescandy.com/assets/images/slider/slider-2.jpg" className="d-block w-100 " alt="slide 2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

interface CarouselItemProps {

}

const CarouselItem: React.FunctionComponent<CarouselItemProps> = () => {
  return (
    <div className="ps-lg-12 col-xxl-5 col-md-7 px-8 text-xs-center" style={{ position: 'absolute' }}>
      <span className="badge text-bg-warning">Opening Sale Discount 50%</span>
      <h4 className="text-dark mt-4">SuperMarket For Fresh Grocery </h4>
      <p className="">Introduced a new model for online grocery shopping
        and convenient home delivery.</p>
      <a href="#!" className="btn btn-dark mt-3" tabIndex={-1}>Shop Now <i className="feather-icon icon-arrow-right ms-1" /></a>
    </div>
  );
};
const CarouselItem2: React.FunctionComponent<CarouselItemProps> = () => {
  return (
    <div className="ps-lg-12 col-xxl-5 col-md-7 px-8 text-xs-center" style={{ position: 'absolute' }}>
      <span className="badge text-bg-warning">Opening Sale Discount 50%</span>
      <h4 className="text-light mt-4">SuperMarket For Fresh Grocery </h4>
      <p className="text-light">Introduced a new model for online grocery shopping
        and convenient home delivery.</p>
      <a href="#!" className="btn btn-light mt-3" tabIndex={-1}>Shop Now <i className="feather-icon icon-arrow-right ms-1" /></a>
    </div>
  );
};

export default Carousel;
