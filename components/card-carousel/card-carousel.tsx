"use client";

import { ReactNode, useEffect, useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper } from 'swiper/react';

/* eslint-disable-next-line */
export interface CardCarouselProps {
  Cards: ReactNode;
}

function generateRandomString(length: number) {
  const characters = "abcdefghijklmnopqrstuvwxyz";
  const randomString = Array(length)
    .fill(null)
    .map(() => characters.charAt(Math.random() * characters.length));
  return randomString.join("");
}

export function CardCarousel(props: any) {
  const [uniqueVal, setUniqueVal] = useState("");

  useEffect(() => {
    setUniqueVal(generateRandomString(6));
  }, [])
  // const uniqueVal = props.title.toLowerCase().split(' ').join('');
  return (
    <div className='d-flex flex-wrap-reverse'>
      <Swiper
        slidesPerView={4}
        loop
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        navigation={uniqueVal ? {
          prevEl: `.prev${uniqueVal}`,
          nextEl: `.next${uniqueVal}`,
        } : false}
      >
        {props.children}
      </Swiper>
      <div className="d-flex justify-content-between w-100 align-items-center mb-2">
        <p className='fs-4 fw-bold m-0'>{props?.title}</p>
        <div className='d-flex gap-1'>
          <button className={`btn btn-secondary rounded-circle btn-sm text-center w-24 h-24 ${uniqueVal ? 'prev' + uniqueVal : ''}`}>{'<'}</button>
          <button className={`btn btn-secondary rounded-circle btn-sm text-center w-24 h-24 ${uniqueVal ? 'next' + uniqueVal : ''}`}>{'>'}</button>
        </div>
      </div>
    </div>
  );
}

export default CardCarousel;
