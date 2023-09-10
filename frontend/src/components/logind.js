import React, { useState } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'
import login from './images/doctor_login.png'
import { useContext } from 'react'
import { Context } from '..'
import { toast } from 'react-hot-toast'
import { Navigate } from 'react-router-dom'

function Logind() {
  const [email ,setEmail]=useState(" ")
  const [password, setPassword]=useState("")
  const{hosp,setHosp}=useContext(Context)

  const submitHandler=async(e)=>{
    e.preventDefault();
    try {
      const {data} =await axios.post('http://localhost:5000/api/v1/Hosp/login',
    {email,password} ,
    {headers:{"Content-Type":"application/json"},
    withCredentials:true 
    }
    )
    setHosp(true)
    toast.success(data.message)
  
    } catch (error) {
      setHosp(false)
      toast.error("Invalid email or password")
      console.log(error)
    }
  }

  if(hosp) return(<Navigate to='/booking'/>)
  
  return (
    <div className='d-flex m-5'>
      <div className=' w-50 h-50 m-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded' >
        <form onSubmit={submitHandler} >
          <div className='m-auto text-center'>
            <h3 style={{ color: "#6743a8" }}> Hospital Login </h3>
          </div>

          <div className="col-sm-10 m-auto p-2">
            <input type="email" name='email' className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email' />
          </div>
          <div className="col-sm-10 m-auto p-2">
            <input type="password" name="password" className="form-control" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' />
          </div>
          <div className='text-center'>
            <button type='submit' class="btn btn-primary" style={{ background: "#6743a8", border: "2px solid white" }} >Submit</button>

          </div>
        </form>
      </div>


      <div className='w-50 h-50' >
        <img className='w-100 h-100' src={login} alt="" />
      </div>
    </div>
  )
}

export default Logind
