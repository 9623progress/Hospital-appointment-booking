import React from 'react'
import { useContext } from 'react';
import {Link} from 'react-router-dom'
import { Context } from '..';
import { toast } from 'react-hot-toast';
import axios from 'axios';



function Navbar() {
  
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

 const{isAuthenticated,setIsAuthenticated,hosp,setHosp }= useContext(Context)
 const logoutHandler = async () => {
  // setLoading(true);
  try {
    await axios.get("http://localhost:5000/api/v1/users/logout", {
      withCredentials: true,
    });

    toast.success("Logged Out Successfully");
    setIsAuthenticated(false);
    
    // setLoading(false);
  } catch (error) {
    toast.error(error.response.data.message);
    setIsAuthenticated(true);
    // setLoading(false);
  }
}
const HosplogoutHandler = async () => {
  // setLoading(true);
  try {
    await axios.get("http://localhost:5000/api/v1/Hosp/logout", {
      withCredentials: true,
    });

    toast.success("Logged Out Successfully");
    setHosp(false);
    // setLoading(false);
  } catch (error) {
    toast.error(error.response.data.message);
    setHosp(true);
    // setLoading(false);
  }
}


  
  return (
    <div className='sticky-top'>
      <nav className="navbar navbar-expand-lg navbar-light " style={{background:"#6743a8"}}>
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="/">MedStar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
      </div>
      <div className="navbar-nav">
        <Link className="nav-link text-light" aria-current="page"  to="/" onClick={() => handleScroll('about')}>About us</Link>
      </div>
    </div>
</div >
  <div className=' d-flex '>
        <Link className="btn text-nowrap mx-2"style={{background:"white" ,border:"2px solid #6743a8" ,color:"#6743a8"}} to="/signup">Signup</Link>
        {isAuthenticated?  <button className="btn text-nowrap mx-2 " onClick={logoutHandler} style={{background:"white" ,border:"2px solid #6743a8" ,color:"#6743a8"}} >Logout </button>:
      <Link className="btn text-nowrap mx-2 " style={{background:"white" ,border:"2px solid #6743a8" ,color:"#6743a8"}} to="/login">Login </Link>

        }
         {hosp? <button className="btn text-nowrap mx-2 " onClick={HosplogoutHandler}  style={{background:"white" ,border:"2px solid #6743a8" ,color:"#6743a8"}} >Logout Admin</button> :<Link className="btn text-nowrap mx-2" style={{background:"white" ,border:"2px solid #6743a8" ,color:"#6743a8"}} to="/logind" >Admin</Link>}
        <Link className="btn text-nowrap mx-2" style={{background:"white" ,border:"2px solid #6743a8" ,color:"#6743a8"}} to="/appoint" >Appointment</Link>

      <Link className="btn text-nowrap mx-2" to="/myProfile" style={{background:"white" ,border:"2px solid #6743a8" ,color:"#6743a8"}}>user</Link>
      <Link className="btn text-nowrap mx-2" to="/booking" style={{background:"white" ,border:"2px solid #6743a8" ,color:"#6743a8"}}>Hospital</Link>

  </div>
</nav>
    </div>
  )
}

export default Navbar
