import Slider from "./components/Slider";
import Navbar from "./components/navbar";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Signup from "./components/signup";
import login from "./components/login";
import Appointment from "./components/Appointment";
import Logind from "./components/logind";
import Booking from "./components/doctor/booking";
import History from "./components/doctor/history";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import { Context } from ".";
import { useContext } from "react";
import { useEffect } from "react";
import Profile from "./components/profile";

function App() {
  const{setUser ,setIsAuthenticated,setH,setHosp}= useContext(Context)

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/Hosp/Hosp_profile`, {
        withCredentials: true,
      })
      .then((res) => {
        setH(res.data.user);
        setHosp(true);
      })
      .catch((error) => {
        setH({});
        setHosp(false);
      });
  }, [setH, setHosp]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/users/me`, {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data.user);
        setIsAuthenticated(true);
      })
      .catch((error) => {
        setUser({});
        setIsAuthenticated(false);
      });
  }, [setUser, setIsAuthenticated]);


 
  return (
 <>
 <Router>
    <Navbar/>
    
   
    <Routes> 
        <Route exact path="/" Component={Slider}/>
        <Route   path="/signup" Component={Signup}/>
        <Route   path="/login" Component={login}/>
       
        <Route   path="/logind" Component={Logind}/>
        <Route  path="/appoint" Component={Appointment}/>
        <Route  path="/booking" Component={Booking}/>
        <Route  path="/history" Component={History}/>
        <Route path="/myProfile" Component={Profile}/>

      </Routes>
 <Toaster/>

     
 </Router>
 



 </>
  );
}

export default App;
