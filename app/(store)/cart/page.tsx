
import { Metadata } from 'next';
import CartPage from './cartPage';


export async function generateMetadata(): Promise<Metadata> {
    return {
      title: `cart Page - WorldTradeX`,
    }
  }

function Cart() {
    return (
           <CartPage />
    );
}

export default Cart;