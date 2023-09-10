import React from 'react'
import Feature from './feature'
// import img from './images/img.jpg'
// import img2  from './images/img2.jpg'
// import img3 from './images/img3.jpg'
// import { Link } from 'react-router-dom'
import back from './images/4855148.jpg'
// import { Link } from 'react-router-dom'

function Img_Slider() {
  return (
    <div >

      <div >
        <img className=" w-100 h-50" src={back} alt="" />
      </div>


      <div className='shadow p-3 mb-5 bg-body-tertiary rounded mt-5 '>
        <div id="about">
          <div className="d-flex mx-5">
            <div >
              <h1> Why Choose MedStar ?</h1>
              <button type="button" className="btn btn-primary " style={{ background: "#6743a8", border: "2px solid white" }} >More Info &rarr;</button>

            </div>
            <div>
              <Feature />
            </div>
          </div>
        </div>
      </div>






    </div>
  )
}

export default Img_Slider
