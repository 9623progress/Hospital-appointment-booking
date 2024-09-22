import Home from "./components/Home";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/signup";
import Login from "./components/login"; // Capitalized to maintain consistent naming
import Appointment from "./components/Appointment";
import Logind from "./components/logind";
import Booking from "./components/doctor/booking";
import History from "./components/doctor/history";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import { Context } from ".";
import { useContext, useEffect } from "react";
import Profile from "./components/profile";

function App() {
  const { setUser, setIsAuthenticated } = useContext(Context);

  // // Check if the hospital user is authenticated
  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:5000/api/v1/Hosp/Hosp_profile`, {
  //       withCredentials: true,
  //     })
  //     .then((res) => {
  //       setH(res.data.user);
  //       setHosp(true);
  //     })
  //     .catch(() => {
  //       setH({});
  //       setHosp(false);
  //     });
  // }, [setH, setHosp]);

  // Check if the general user is authenticated
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/users/me`, {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data.user);
        setIsAuthenticated(true);
      })
      .catch(() => {
        setUser({});
        setIsAuthenticated(false);
      });
  }, [setUser, setIsAuthenticated]);

  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logind" element={<Logind />} />
          <Route path="/appoint" element={<Appointment />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/history" element={<History />} />
          <Route path="/myProfile" element={<Profile />} />
        </Routes>

        <Toaster />
      </Router>
    </>
  );
}

export default App;
