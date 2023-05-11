import Feature2 from "./components/Feature2";
// import Button from "./components/Button";
import Slider from "./components/Slider";
import Navbar from "./components/navbar";
import Appointment from "./components/appointment";
import CreateAcc from "./components/createAcc"
import Logind from "./components/logind"
import Loginp from "./components/Login_Peti";
import { useState } from "react";


function App() {
  const [state, SetState]=useState(false)
   const appointment=(data)=>{
    SetState(data);
  }
 
  return (
 <>
 <Navbar/>
 <Slider/>
 {/* <Button/> */}
 <div className="d-flex justify-content-between m-3">
  <CreateAcc/>
  <Logind/>
  <Loginp appointment={appointment}/>
  <Appointment stateA={state}/>
  {/* <Appointment/> */}
 </div>
 <Feature2/>

 </>
  );
}

export default App;
