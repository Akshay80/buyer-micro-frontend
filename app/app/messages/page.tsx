

import { Metadata } from "next"
import Chat from "./chat"

export async function generateMetadata(): Promise<Metadata> {
    return {
      title: `Chat - Messages - WorldTradeX`,
    }
  }

export default function Messages() {
    return (
       <Chat />
    )
}