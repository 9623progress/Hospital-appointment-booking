import React from 'react'
import Card from '../card'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useEffect } from 'react'
import { useContext } from 'react'
import { Context } from '../..'
function History() {

  const [booking , setBooking]=useState([])
const {h}=useContext(Context)

  const updateHandler = async (id) => {
    // try {
    //   const { data } = await axios.put(`http://localhost:5000/api/v1/${id}`,{},
    //     {
    //       withCredentials: true,
    //     }
    //   );

    //   toast.success(data.message);
    //   setRefresh((prev) => !prev);
    // } catch (error) {
    //   toast.error(error.data.message);
    // }
    toast.error("you cant update it from history")

  };
  const deleteHandler = async (id) => {
    // try {
    //   const { data } = await axios.delete( `http://localhost:5000/api/v1/${id}`, {
    //     withCredentials: true,
    //   });
    //   console.log(data.data.isCompleled)

    //   toast.success(data.message);
    //   setRefresh((prev) => !prev);
    // } catch (error) {
    //   toast.error(error.response.data.message);
    // }
    toast.error("you cant delete it from history")
 };

  useEffect(()=> {
    axios
      .get("http://localhost:5000/api/v1/history", {
        withCredentials: true,
      })
      .then((res) => {
        setBooking(res.data.data)})
      .catch((e) => {
        toast.error(e.response.data.message);
        console.log(e.response.data.message)
      });
  }, [h]);
  return (
    <div>
      <Link type="button" className="btn btn-primary "style={{background:"#6743a8" ,border:"2px solid white"}} to='/booking' >Click here to see booking &rarr;</Link>

      <div className='text-center'>
      <h3 className='m-auto' style={{color:"#6743a8"}}>History of all Appointments</h3>
        
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
    </div>
  )
}

export default History
