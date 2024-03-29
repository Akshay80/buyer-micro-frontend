import { Metadata } from "next";
import MyProfile from "./my-profile";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `My Profile - WorldTradeX`,
  }
}

function PersonalProfile() {
  return <MyProfile />
}

export default PersonalProfile;
