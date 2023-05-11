import React ,{useState}from 'react'
import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border:"2px solid #6743a8 "
  },
};

function Login_Peti(props) {
  const [isOpen, setIsOpen] = useState(false);
  
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
  
  }
  
  function closeModal() {
    setIsOpen(false);
  }
 
  // disabled={!props.state}
  return (
    <div>
      <button type="button" className="btn btn-primary "   style={{background:"#6743a8" ,border:"2px solid white"}} onClick={openModal}>Book Appointment &rarr;</button>
      <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={{customStyles }}
        contentLabel="Example Modal"
       
      >
        
  
     <button onClick={closeModal}type="button" className="btn btn-primary "style={{background:"#6743a8" ,border:"2px solid white"}} >X</button>
      <div style={{width:"100vh" }}>
        <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn text-light " style={{widht:"100%", background:"#6743a8" ,border:"2px solid white" }} type="submit">Search hospital</button>
      </form>
      <div className="mb-3  row" style={{marginTop:"10px"}}>
      <label for="inputPassword" className="col-sm-2 col-form-label">Patient name:</label>
      <div className="col-sm-10">
        <input type="password" className="form-control" />
      </div>
      </div>
      <div className="mb-3 row">
      <label for="inputPassword" className="col-sm-2 col-form-label">Age:</label>
      <div className="col-sm-10">
        <input type="password" className="form-control" />
      </div>
      </div>
      <div className="mb-3 row">
      <label for="inputPassword" className="col-sm-2 col-form-label">Address</label>
      <div className="col-sm-10">
        <input type="password" className="form-control" />
      </div>
      </div>
      <div className="mb-3 row">
      <label for="inputPassword" className="col-sm-2 col-form-label">Email</label>
      <div className="col-sm-10">
        <input type="password" className="form-control" />
        
      </div>
      </div>
      <div className="mb-3 row">
      <label for="inputPassword" className="col-sm-2 col-form-label">Mob:</label>
      <div className="col-sm-10">
        <input type="password" className="form-control" />
      </div>
      </div>
      </div>
     
      
      

        
      </Modal>
    </div>
    
  )
}

export default Login_Peti
