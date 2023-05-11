import React from 'react'

function navbar() {
    
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light " style={{background:"#6743a8"}}>
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="/">MedStar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active text-light" aria-current="page" href="/">Home</a>
        {/* <a className="nav-link" href="#">Features</a>
        <a className="nav-link" href="#">Pricing</a>
        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> */}
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default navbar