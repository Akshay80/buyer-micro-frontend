import { PAGE_TITLE } from '../../../libs/helper/src/index';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Overview - ${PAGE_TITLE}`,
  description: '',
};

function Overview() {
  return (
    <h1 className='text-center my-5'>Coming Soon in 2024</h1>
  );
}

export default Overview;