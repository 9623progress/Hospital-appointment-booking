import React, { useState } from 'react'
import axios from 'axios'
import { Link, Navigate } from 'react-router-dom'
import login from './images/login.jpg'
import { toast } from 'react-hot-toast'
import { Context } from '..'
import { useContext } from 'react'

function Login() {
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  const{isAuthenticated,setIsAuthenticated}= useContext(Context)


  const submitHandler=async(e)=>{
    e.preventDefault();
    try {
      const {data} =await axios.post('http://localhost:5000/api/v1/users/login',
    {email,password} ,
    {headers:{"Content-Type":"application/json"},
    withCredentials:true 
    }
    )
    setIsAuthenticated(true)
    toast.success(data.message)
  
    } catch (error) {
      setIsAuthenticated(false)
      toast.error("Invalid email or password")
      console.log(error)
    }
  }

  if(isAuthenticated)return(<Navigate to='/appoint'/>)

  return (
    <div className='d-flex m-5'>
      <div className=' w-50 h-50 m-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded' >
        <form onSubmit={submitHandler} >
          <div className='m-auto text-center'>
            <h3 style={{ color: "#6743a8" }}>Petient Login </h3>
          </div>

          <div className="col-sm-10 m-auto p-2">
            <input type="email" name='email' className="form-control" required value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email' />
          </div>
          <div className="col-sm-10 m-auto p-2">
            <input type="password" name="password" className="form-control" required value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' />
          </div>

          <div className='text-center'>
            <p>or</p>
            <Link style={{ color: "#6743a8" }} to='/signup'>signup</Link>
          </div>
          <div className='text-center'>

            <button type="submit" class="btn btn-primary" style={{ background: "#6743a8", border: "2px solid white" }} >Submit</button>
          </div>

        </form>
      </div>


      <div className='w-50 h-50' >
        <img className='w-100 h-100' src={login} alt="" />
      </div>
    </div>
  )
}

export default Login
