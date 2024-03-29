import { Metadata } from 'next';
import CheckoutPage from './checkoutPage';

export async function generateMetadata(): Promise<Metadata> {
    return {
      title: `Checkout Page - WorldTradeX`,
    }
  }

const Checkout = () => {
    return (
        <div className='p-5'>
            <CheckoutPage />
        </div>
    )
}

export default Checkout