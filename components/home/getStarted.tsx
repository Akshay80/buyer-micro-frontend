"use client"

import { Auth } from "aws-amplify";
import { useEffect, useState } from "react";

const GetStarted = () => {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        handleGetUser();
    }, []);

    const handleGetUser = async () => {
        try {
            const currentUser = await Auth.currentAuthenticatedUser();
            setUser(currentUser?.attributes);
        } catch (error) {
            console.error("Error fetching user: ", error);
        }
    };


  return (
    <>
    {!user &&  <div className='container-fluid' style={{ background: 'url(/img/trade-assurance.jpg)' }}>
    <div className='container text-center p-8'>
      <h1> Ready to get started</h1>
      <p>Explore from millions of products from trusted suppliers by signing up today.</p>
      <a href="/register" className='btn btn-dark'>Sign up</a>
    </div>
  </div>}
   
    </>
  )
}

export default GetStarted