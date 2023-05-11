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

function Login_Peti() {
  const [isOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }
  
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <button type="button" className="btn btn-primary "style={{background:"#6743a8" ,border:"2px solid white"}}onClick={openModal}>Hospital Login &rarr;</button>
      <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        
      <button onClick={closeModal}type="button" className="btn btn-primary "style={{background:"#6743a8" ,border:"2px solid white"}} >X</button>
      
      <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" style={{background:"#6743a8" ,border:"2px solid white"}}>Submit</button>
</form>
   
        
      </Modal>
    </div>
    
  )
}

export default Login_Peti
