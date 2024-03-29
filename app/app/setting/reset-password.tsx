"use client"
import { Auth } from 'aws-amplify'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const ResetPassword = () => {
    
    const initialState = {
        oldPassword: '',
        newPassword: '',
    }

    const [values, setValues] = useState(initialState)
    const [loading, setLoading] = useState(false)

    const handleChange = (e:any) =>{
      const {name, value} = e.target;
      setValues({...values, [name]: value});
    }

    const changePassword = async () =>{
        const {oldPassword, newPassword} = values;
        setLoading(true)
        try {
            const user = await Auth.currentAuthenticatedUser();
            const data = await Auth.changePassword(user, oldPassword, newPassword);
            toast.success(data)     
            setLoading(false)     
        } catch (err:any) {
            setLoading(false)
            toast.error(err.message)
            console.log(err.message);
          }
    }

    const handleSubmit = async (e:any) =>{
        e.preventDefault();
        await changePassword()
        setValues(initialState)
    }

  return (
   <>
    <div className='container  mt-5'>
    <div className="pe-lg-14">
        <h5 className="mb-4">Password</h5>
        <form className="row row-cols-1 row-cols-lg-2" onSubmit={handleSubmit}>
        <div className="mb-3 col">
            <label className="form-label">Old Password</label>
            <input type="password" className="form-control" placeholder="old Password" name="oldPassword" value={values?.oldPassword} onChange={handleChange} />
        </div>
        <div className="mb-3 col">
            <label className="form-label">New Password</label>
            <input type="password" className="form-control" placeholder="new Password" name="newPassword" value={values?.newPassword} onChange={handleChange} />
        </div>
            {/* <p className="mb-4">Can't remember your current password?<a href="#"> Reset your password.</a></p> */}
            <button disabled={loading} type='submit' className="btn btn-dark" style={{width: 'fit-content'}}> {loading ? 'Loading...' : 'Save Password' } </button>
        </form>
    </div>
</div>
<Toaster />
   </>
  )
}

export default ResetPassword