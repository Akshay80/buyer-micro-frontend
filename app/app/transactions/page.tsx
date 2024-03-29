import { Metadata } from "next"
import TransactionList from "./transaction-list"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Transaction List - WorldTradeX`,
  }
}

const Transactions = () => {
  return (
    <>
    <TransactionList />
    </>
  )
}

export default Transactions