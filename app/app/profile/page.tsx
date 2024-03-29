import { Metadata } from "next";
import BuyerProfile from "./buyer-profile";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Buyer Profile - WorldTradeX`,
  }
}


function Profile() {
  return (
    <BuyerProfile />
  );
}

export default Profile;

