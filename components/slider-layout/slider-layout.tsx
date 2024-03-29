'use client'
import Link from "next/link";
/* eslint-disable */
import { useState } from "react";

const SliderLayout = (props: any) => {
    const [current, setCurrent] = useState(0);
    const length = props?.slides?.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(props?.slides) || props?.slides.length <= 0) {
        return null;
    }

    return (
        <section className='slider'>
            <h1 className='left-arrow'>
                <i className="bi bi-arrow-left-circle" onClick={prevSlide}></i>
            </h1>
            <h1 className='right-arrow'>
                <i className="bi bi-arrow-right-circle" onClick={nextSlide}></i>
            </h1>
            <div className='card bg-white border-gray flex-row' style={{ width: '50rem', height: '30rem' }}>
                <div className="card-body">
                    {
                        props?.slides?.map((slide: any, index: number) => {
                            return (
                                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                    {index === current && (
                                        <>
                                            <div className="d-flex justify-content-between">
                                                <div>{slide?.content?.map((data: any, index: number) => (
                                                    <div className="py-10 px-8">
                                                        <h1>{data?.h1}</h1>
                                                        <p className="fs-5">
                                                            {data?.para}
                                                        </p>
                                                        <Link href="/stories" className="text-primary"><u>Read More »</u></Link>
                                                    </div>
                                                ))}</div>
                                                <img src={slide.image} alt='travel image' className='' width={400} height={444} />
                                            </div>
                                        </>
                                    )}
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default SliderLayout