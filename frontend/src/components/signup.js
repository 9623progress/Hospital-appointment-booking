import React ,{useContext, useState}from 'react'
import axios from 'axios';
import sign from "./images/signup.png"
import { Link, Navigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Context } from '..';

function Signup() {
  const [name, setName]=useState("")
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  const{isAuthenticated ,setIsAuthenticated}= useContext(Context)

  const submitHandler=async(e)=>{
    e.preventDefault();
    try {
      const {data} =await axios.post('http://localhost:5000/api/v1/users/new',
    {name,email,password} ,
    {headers:{"Content-Type":"application/json"},
    withCredentials:true 
    }
    )
    toast.success(data.message)
    setIsAuthenticated(true)
    } catch (error) {
      toast.error("seems this email is already used")
      console.log(error)
      setIsAuthenticated(false)
    }
  }

if(isAuthenticated)return(<Navigate to='/appoint'/>)
   
  return (<>
  <div className='d-flex m-5'>
    <div className=' w-50 h-50 m-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded' >
     <div >
       <form onSubmit={submitHandler} >
       <div className='text-center'>
            <h3  style={{color:"#6743a8"}}> Signup</h3>
        </div>
      <div className="col-sm-10 m-auto p-2" >
        <input type="text" name='name' className="form-control " required value={name} onChange={(e) => setName(e.target.value)} placeholder='Name'/>
      </div>
      <div className="col-sm-10 m-auto p-2">
        <input type="email" name='email' className="form-control" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email'/>
      </div>
      <div className="col-sm-10 m-auto p-2">
        <input type="password" name="password" className="form-control" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
      </div>

      <div className='text-center'>
      <p>or</p>
       <Link style={{color:"#6743a8"}} to='/login'>Login</Link>
      </div>
      <div className='text-center'>

      <button type='submit' className="btn btn-primary  m-auto" style={{background:"#6743a8" ,border:"2px solid white"}} >Submit</button>
      </div>

       </form>
      
     </div>
      
    </div>

    <div className='w-50 h-50' >
        <img  className='w-100 h-100'src={sign} alt="" />
    </div>
  </div>
  </>
  )
}

export default Signup
