import { Metadata } from "next";
import RfqBuyer from "./rfq-buyer";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `RFQ - WorldTradeX`,
  }
}

function RFQ() {
  return (
    <RfqBuyer />
  );
}

export default RFQ;

