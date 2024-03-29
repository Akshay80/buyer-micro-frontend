import { Metadata } from "next"
import AddressDetails from "./address-details"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Address Details - WorldTradeX`,
  }
}

const page = () => {
  return (
   <AddressDetails />
  )
}

export default page