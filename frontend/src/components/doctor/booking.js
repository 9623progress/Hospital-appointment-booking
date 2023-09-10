import React from 'react'
import Card from '../card';
import {Link} from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';


function Booking() {
  // const {user}=useContext(Context)
  const [booking , setBooking]=useState([])
  const [refresh,setRefresh]=useState(false)


  const updateHandler = async (id) => {
    try {
      const { data } = await axios.put(`http://localhost:5000/api/v1/${id}`,{},
        {
          withCredentials: true,
        }
      );

      toast.success(data.message);
      setRefresh((prev) => !prev);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete( `http://localhost:5000/api/v1/${id}`, {
        withCredentials: true,
      });
      console.log(data.data.isCompleled)

      toast.success(data.message);
      setRefresh((prev) => !prev);
    } catch (error) {
      toast.error(error.response.data.message);
    }
 };

  useEffect(()=> {
    axios
      .get("http://localhost:5000/api/v1/info", {
        withCredentials: true,
      })
      .then((res) => {
        setBooking(res.data.data)})
      .catch((e) => {
        toast.error(e.response.data.message);
        console.log(e.response.data.message)
      });
  }, [refresh]);
 

  return (
    <div >
           <Link type="button" className="btn btn-primary "style={{background:"#6743a8" ,border:"2px solid white"}} to='/history'>click here to see History &rarr;</Link>

      <div className='text-center' >

        <h3  style={{color:"#6743a8"}}>Appointments</h3>
        <p  style={{color:"#6743a8"}}>You can mark it as done and then delete it it will move into history section</p>
      </div>
      
      {booking && booking.map((i) => (
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
            updateHandler={updateHandler}
            deleteHandler={deleteHandler}
          />
        ))}

    </div>
  )
}
 
export default Booking
