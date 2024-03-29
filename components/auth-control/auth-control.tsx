'use client';

import { Auth } from 'aws-amplify';
import { useEffect, useState } from 'react';

function AuthControl() {
  const [currentUser, setCurrentUser] = useState<any>()
  const username = currentUser?.email.split('@')[0];


  useEffect(() => {
    getCurrentUser()
  }, [])


  const getCurrentUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser()
      if (user?.attributes?.sub) {
        setCurrentUser(user?.attributes)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleLogout = async () => {
    localStorage.clear();
    await Auth.signOut();
    window.location.href = "/";
  }
  

  return (
    <div className='btn-hover-box me-4'>
      {
        currentUser?.sub ? <>
          <button className='btn btn-dark'>
            Hi, {currentUser?.name ? currentUser?.name : username }
          </button>
          <div className='btn-hover-box-dropdown p-5'>
            <div>
              <a href='/app/orders'>
                <p className='text-primary'>My Orders</p>
              </a>
              <a href='/app/messages'>
                <p className='text-primary'> Messages</p>
              </a>
              <a href='/app/profile'>
                <p className='text-primary'> Account</p>
              </a>
              <a onClick={() => handleLogout()}>
                <p className='text-primary'> Logout</p>
              </a>
            </div>
          </div>
        </> : 
        <>   
        <a className='btn btn-dark me-3' href='/login'>
          Sign In
        </a>
        <a className='btn btn-outline-dark' href='/register'>
        Sign Up
      </a>
        </>
      }
    </div>
  );
}

export default AuthControl;