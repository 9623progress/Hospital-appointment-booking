import React, { useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import login from "./images/login.jpg";
import { toast } from "react-hot-toast";
import { Context } from "..";
import { useContext } from "react";
import "../style/login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthenticated, setIsAuthenticated, setUser, setHosp } =
    useContext(Context);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/users/login",
        { email, password },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      // console.log(data.user);
      setIsAuthenticated(true);
      setUser(data.user);
      if (data.role === "admin") {
        setHosp(true);
      }
      toast.success(data.message);
    } catch (error) {
      setIsAuthenticated(false);
      toast.error("Invalid email or password");
      console.log(error);
    }
  };

  if (isAuthenticated) return <Navigate to="/appoint" />;

  return (
    <div className="login-top">
      <div className="login-form-div">
        <form onSubmit={submitHandler} className="login-form">
          <div className="m-3 text-center">
            <h3 style={{ color: "#6743a8" }}>Petient Login </h3>
          </div>

          <div className="">
            <input
              type="email"
              name="email"
              className="form-control"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email"
            />
          </div>
          <div className="">
            <input
              type="password"
              name="password"
              className="form-control"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
            />
          </div>

          <div className="text-center m-4">
            <button
              type="submit"
              className="btn btn-primary"
              style={{ background: "#6743a8", border: "2px solid white" }}
            >
              Submit
            </button>
          </div>

          <div className="text-center">
            <p>Don't have Account</p>
            <Link style={{ color: "#6743a8" }} to="/signup">
              signup
            </Link>
          </div>
        </form>
      </div>

      <div className="login-image">
        <img className="w-100 h-100" src={login} alt="" />
      </div>
    </div>
  );
}

export default Login;
