import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "..";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../style/navbar.css"; // Import custom CSS

function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { isAuthenticated, setIsAuthenticated, user } = useContext(Context);

  const logoutHandler = async () => {
    try {
      await axios.get("http://localhost:5000/api/v1/users/logout", {
        withCredentials: true,
      });
      toast.success("Logged Out Successfully");
      setIsAuthenticated(false);
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthenticated(true);
    }
  };

  // const HosplogoutHandler = async () => {
  //   try {
  //     await axios.get("http://localhost:5000/api/v1/Hosp/logout", {
  //       withCredentials: true,
  //     });
  //     toast.success("Logged Out Successfully");
  //     setHosp(false);
  //   } catch (error) {
  //     toast.error(error.response.data.message);
  //     setHosp(true);
  //   }
  // };

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-brand">
          <a href="/">MedStar</a>
        </div>
        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/" onClick={() => handleScroll("about")} className="link">
            About us
          </Link>

          {isAuthenticated ? (
            <Link className="nav-link" onClick={logoutHandler}>
              Logout
            </Link>
          ) : (
            <Link to="/login" className="nav-link">
              Login
            </Link>
          )}

          <Link to="/appoint" className="nav-link">
            Appointment
          </Link>
          {isAuthenticated ? (
            <Link to="/myProfile" className="nav-link">
              User
            </Link>
          ) : (
            ""
          )}
          {isAuthenticated && user.role === "admin" ? (
            <Link to="/booking" className="nav-link">
              Hospital
            </Link>
          ) : (
            ""
          )}
        </div>
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
