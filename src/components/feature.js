import React from 'react'
import Logo from './Logo1.webp'
import Logo2 from './logo2.svg'
import Logo3 from './logo 3.webp'
import Logo4 from './logo4.webp'

function feature() {
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col">
               <div className='d-flex ' > <img src={Logo} alt=""  className='m-2' style={{height:40,width:40,border:"2px solid #6743a8"}}/> <h5  style={{color:"#6743a8"}}> Secure and sure Appointment</h5></div>
                <p>
                    The lot's of patients book their appointment each year and prepare us to treat one who matters most -you!
                </p>
            </div>
            <div className="col">
            <div className='d-flex' > <img src={Logo2} alt=""  className='m-2' style={{height:40,width:40,border:"2px solid #6743a8"}}/> <h5 style={{color:"#6743a8"}}>The right answer</h5></div>

                <p>Count on our registered doctor to deliver an accurate diagnosis and the right plan for your first time</p>
            </div>
        </div>
        <div className="row">
            <div className="col">
            <div className='d-flex' > <img src={Logo3} alt=""  className='m-2' style={{height:40,width:40,border:"2px solid #6743a8"}}/> <h5 style={{color:"#6743a8"}}> You Come First</h5></div>

                <p>
                    Service at medStar is truly secure and sure your care is always first
                </p>
            </div>
            <div className="col">
            <div className='d-flex' > <img src={Logo4} alt=""  className='m-2' style={{height:40,width:40,border:"2px solid #6743a8"}}/> <h5 style={{color:"#6743a8"}}> Innovation with Impact</h5></div>

                <p> all of our Experience, Education and Research are driven to make discoveries that can help you</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default feature
