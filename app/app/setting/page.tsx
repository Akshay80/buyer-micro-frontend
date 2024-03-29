import { Metadata } from "next";
import ResetPassword from "./reset-password"

export async function generateMetadata(): Promise<Metadata> {
    return {
      title: `Reset Password - WorldTradeX`,
    }
  }
  
const Settings = () => {
  return (
    <>
    <ResetPassword />
    </>
  )
}

export default Settings