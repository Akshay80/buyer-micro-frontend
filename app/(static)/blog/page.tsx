import { PAGE_TITLE } from '../../../libs/helper/src/index';
import BlogCard from '../../../components/blog-card/blog-card';
import { Metadata } from 'next';
import data from '../../../data/blog.json';

export const metadata: Metadata = {
  title: `Blog - ${PAGE_TITLE}`,
  description: '',
};

function Blogs() {
  return (
    <>
      <div className='position-relative'>
        <img src='https://cdn.worldtradex.com/img/success-banner.jpg' className='w-100' height={300} />
        <div className='position-absolute' style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <h1 className='text-white'>WorldTradeX Blog</h1>
        </div>
      </div>
      <section className='mt-6 mb-lg-14 mb-8'>
        <div className='container'>
          <div className='row d-flex align-items-center mb-8'>
            <div className='col-12 col-md-12 col-lg-8'><a href='#!'>
              <div className='img-zoom'>
                <img src='https://cdn.worldtradex.com/img/agri-blog.jpg' className='img-fluid w-100' />
              </div>
            </a></div>
            <div className='col-12 col-md-12 col-lg-4'>
              <div className='ps-lg-8 mt-8 mt-lg-0'>
                <h2 className='mb-3 text-primary'>7 tips to get the best Wheat produce</h2>
                <p>Modern farming methods have often proven effective and have delivered outstanding results. A farmer from Nashik, stands testimony to the wonders modern farming techniques can ...</p>
                <div className='d-flex justify-content-between text-muted'><span><small>25 April
                  2023</small></span><span><small>Read time: <span className='text-dark fw-bold'>6min</span></small></span>
                </div>
              </div>
            </div>
          </div>
          <div className='row grid-3'>
            {
              data.map((card: any, index) => (
                <BlogCard image={card.imageSrc} heading={card.title} text={card.description} date={card.date} readtime={card.readTime} key={index} />
              ))
            }
          </div>
        </div>
      </section>

    </>
  );
}

export default Blogs;