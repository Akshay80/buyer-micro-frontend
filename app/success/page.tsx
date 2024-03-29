import { Metadata } from 'next'
import SuccessClient from './success-client'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Order Success - WorldTradeX`,
  }
}



const page = () => {

  

  return (
    <div className="container my-2">
       <SuccessClient />
    </div>
  )
}

export default page 