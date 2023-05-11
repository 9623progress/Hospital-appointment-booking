import React from 'react'
import Feature from './feature'
function Feature2() {
  return (
    <div>
      <div className="d-flex mx-5">
        <div >
          <h1> Why Choose MedStar ?</h1>
          <button type="button" className="btn btn-primary "style={{background:"#6743a8" ,border:"2px solid white"}} >More Info &rarr;</button>
 
        </div>
        <div>
        <Feature/>
        </div>
      </div>
    </div>
  )
}

export default Feature2
