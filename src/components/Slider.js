import React from 'react'
import img from './img.jpg'
import img2  from './img2.jpg'
import img3 from './img3.jpg'

function Img_Slider() {
  return (
    <div >
      <div id="carouselExampleCaptions" className="carousel slide " data-bs-ride="carousel" >
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner" >
    <div className="carousel-item active"  >
      <img src={img} className="d-block w-100" alt="I1" style={{height:300 }}/>
      <div className="carousel-caption d-none d-md-block">
        <h3 style={{color:"#3f1766"}}>Save Time</h3>
        <p style={{color:"#3f1766"}}>Don't have a time to book Apointment? use MedStar</p>
      </div>
    </div>
    <div className="carousel-item">
    <img src={img2} className="d-block w-100" alt="..." style={{height:300 }}/>
      <div className="carousel-caption d-none d-md-block">
        <h3 style={{color:"#3f1766"}}>A commitment to community.</h3>
        <p style={{color:"#3f1766"}}> Count on our registered doctor to deliver an accurate diagnosis and the right plan for your first time</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100" alt="..." style={{height:300 }}/>
      <div className="carousel-caption d-none d-md-block">
        <h3 style={{color:"#3f1766"}}>Patient Always First</h3>
        <p style={{color:"#3f1766"}}>Our main agenda is to provide guidance to the best care.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      
    </div>
  )
}

export default Img_Slider
