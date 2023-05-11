import React from 'react'

function Acc_Hospital() {
  return (
    <div style={{width:"100vh"}}>
      <form>
      <div className="mb-3 row">
    <label for="inputPassword" className="col-sm-2 col-form-label">Hospital_Name:</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" />
    </div>
  </div>
  <div className="mb-3 row">
    <label for="inputPassword" className="col-sm-2 col-form-label">Mobile_No.:</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" />
    </div>
  </div>
  <div className="mb-3 row">
    <label for="inputPassword" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="Email" className="form-control" />

    </div>
  </div>
  <div className="mb-3 ">
  <div className="mb-3 row">
    <label for="inputPassword" className="col-sm-2 col-form-label">Address</label>
    <div className="col-sm-10">
      <input type="Address" className="form-control" />
    </div>
  </div>
  <div className="mb-3 row">
    <label for="inputPassword" className="col-sm-2 col-form-label">City</label>
    <div className="col-sm-10">
      <input type="city" className="form-control" />
    </div>
  </div>
  <div className="mb-3 row">
    <label for="inputPassword" className="col-sm-2 col-form-label">District</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" />
    </div>
  </div>
  <div className="mb-3 row">
    <label for="inputPassword" className="col-sm-2 col-form-label">State</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" />
    </div>
  </div>
  <div className="mb-3 row">
    <label for="inputPassword" className="col-sm-2 col-form-label">Country</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" />
    </div>
  </div>
  </div>
  <div className="mb-3 row">
    <label for="inputPassword" className="col-sm-2 col-form-label">Password </label>
    <div className="col-sm-10">
      <input type="password" className="form-control" />
    </div>
  </div>
  <div className="mb-3 row">
    <label for="inputPassword" className="col-sm-2 col-form-label">Spetiality of hospital </label>
    <div className="col-sm-10">
      <input type="password" className="form-control" placeholder='eg-cardiologist '/>
    </div>
  </div>
  
  <button type="submit" className="btn btn-primary" style={{background:"#6743a8" ,border:"2px solid white"}} >Submit</button>
</form>
    </div>
  )
}

export default Acc_Hospital
