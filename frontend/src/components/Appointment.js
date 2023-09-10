import { Link} from 'react-router-dom'
import React, {  useState } from 'react'
import axios from 'axios';
import Appo from "./images/Appointment.jpg"

import { toast } from 'react-hot-toast';



function Appointment() {
  const [name, setName]=useState("")
  const [email, setEmail]=useState("")
  const [mobile, setMobile]=useState("")
  const [Age ,setAge]=useState("")
  const [Address,setAddress]=useState("")
  const[date,setDate]=useState("")
 
  const [timeSlot, setTimeSlot] = useState('');
  


  const submitHandler=async(e)=>{
    e.preventDefault();
    try {
      const {data} =await axios.post('http://localhost:5000/api/v1//appo',
    {name,Age,mobile,email,Address,date,timeSlot} ,
    {headers:{"Content-Type":"application/json"},
    withCredentials:true 
    }
    )
    toast.success(data.message)
   
    } catch (error) {
      toast.error(error.response.data.message)||toast.error("you are not login in")
      console.log(error)
    
    }
      

  }

// if(isAuthenticated) return(<Navigate to='/appoint'/>)

  return (
    <div>
      <div className='d-flex '>
        <div className=' w-50 h-50 m-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded' >
          <form onSubmit={submitHandler}  >
            <div className='m-auto text-center' style={{ color: "#6743a8" }}>
              <h3  >Appointment</h3>
              <p>To book Appointment Login First</p>
            </div>
            <div className="col-sm-10 m-auto p-2">
              <input type="name" name='name' className="form-control" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Name' />
            </div>
            <div className="col-sm-10 m-auto p-2">
              <input type="Age" name='Age' className="form-control" value={Age} onChange={(e)=>{setAge(e.target.value)}} placeholder='Age' />
            </div>
            <div className="col-sm-10 m-auto p-2">
              <input type="mobile" name='mobile' className="form-control" value={mobile} onChange={(e)=>{setMobile(e.target.value)}} placeholder='Mobile no.' />
            </div>
            <div className="col-sm-10 m-auto p-2">
              <input type="email" name='email' className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email' />
            </div>
            <div className="col-sm-10 m-auto p-2">
              <input type="Address" name="Address" className="form-control" value={Address} onChange={(e)=>{setAddress(e.target.value)}} placeholder='Address' />
            </div>
            <div className="col-sm-10 m-auto p-2">
              <input type="date" name="Address" className="form-control" value={date} onChange={(e)=>{setDate(e.target.value)}} placeholder='date' />
            </div>
            <div className="col-sm-10 m-auto p-2">
            <select className="form-select" aria-label="Default select example" value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)} required>
                  <option selected>select time slot</option>
                  <option value="9:00-9:30 am">9:00:9:30 am</option>
                  <option value="9:30-10:30">9:30-10:30 am</option>
                <option value="10:00-10:30">10:00-10:30 am</option>
                <option value="10:30-11:00">10:30-11:00 am</option>
                <option value="11:00-11:30">11:00-11:30 am</option>
                <option value="11:30-12:00">11:30-12:00 am</option>
                <option value="12:00-12:30">12:00-12:30 am</option>
                <option value="12:30-1:00">12:30-1:00 am</option>
                <option value="2:00-2:30">2:00-2:30 am</option>
                <option value="2:30-3:00">2:30-3:00 am</option>
                <option value="3:00-3:30">3:00-3:30 am</option>
                <option value="3:30-4:00">3:30-4:00 am</option>
                <option value="4:00-4:30">4:00-4:30 am</option>
                <option value="4:30-5:00">4:30-5:00 am</option>


            </select>
            </div>
   


            <div className='text-center m-1'>
              <p style={{ color: "#6743a8" }}>Appointment time 9:00 am to 5:00 pm</p>
              <button type='submit' className="btn btn-primary " style={{ background: "#6743a8", border: "2px solid white" }} >Submit</button>
              <div className='text-center'>
                <p>or</p>
                <Link clasName='m-0' style={{ color: "#6743a8" }} to='/login'>Login</Link>
              </div>

            </div>
          </form>
        </div>


        <div className='w-50 h-50 '  >
          <img className='w-100 h-100 ' src={Appo} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Appointment
