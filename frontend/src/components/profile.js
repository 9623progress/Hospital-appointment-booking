import axios from 'axios';
import React, { useContext } from 'react'
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import Card from './card';
import { useEffect } from 'react';
import { Context } from '..';
import profile from './images/profile.png'

function Profile() {
    const [mybooking , setMyBooking]=useState([])
  // const [refresh,setRefresh]=useState(false)
  const{user}=useContext(Context)
  const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete( `localhost:5000/api/v1/users/${id}`, {
        withCredentials: true,
      });
      console.log(data.data.isCompleled)

      toast.success(data.message);
    
    } catch (error) {
      toast.error(error.response.data.message);
    }
 };

  useEffect(()=> {
    axios
      .get("http://localhost:5000/api/v1/users/my", {
        withCredentials: true,
      })
      .then((res) => {
        setMyBooking(res.data.data)
        console.log(mybooking)
      })
        
      .catch((e) => {
        toast.error(e.response?.data?.message || 'An error occurred');

        console.log(e.response.data.message)
      });
  }, [mybooking]);
 
 
return (
    <div>
      <div className=''>
<div>
<div className='text-center' >

<h3  style={{color:"#6743a8"}}>Appointments</h3>
<p  style={{color:"#6743a8"}}>user</p>
</div>

{mybooking && mybooking.map((i) => (
  <Card
   name={i.name}
   Age={i.Age}
   mobile={i.mobile}
   email={i.email}
   Address={i.Address}
   date={i.date}
    id={i._id}
    key={i._id}
    timeSlot={i.timeSlot}
    isCompleled={i.isCompleled}
   
    deleteHandler={deleteHandler}
  />
))}

</div>

<div>

<div className="card fixed-bottom " style={{width: "18rem" ,color:"#6743a8", border:"1px solid #6743a8" }}>
 <div className='d-flex'>
 <img  src={profile} className="card-img-top h-25 w-25 mt-2" alt="..."/>
  <div className="card-body">
    <div className="card-text"><p>Name:{user?.name}</p>
  <p>Email:{user?.email}</p></div>
  </div>
 </div>
</div>

  
</div>

      </div>
    </div>
  )
}

export default Profile
