import { Metadata } from "next"
import OrderList from "./OrderList"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `My Orders - WorldTradeX`,
  }
}

const page = () => {
  return (
    <OrderList />
  )
}

export default page
