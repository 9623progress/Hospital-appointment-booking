import React ,{useState}from 'react'
import Modal from 'react-modal'
import Hospital from './Acc_Hospital';
import Petiont from './Acc_Petiont';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border:"2px solid #6743a8 ",
    width:"fit-content"
  },
};

function Login_Peti() {
  const [isOpen, setIsOpen] = useState(false);
  const[p_open,setP_open]=useState(false);
  const[h_open,setH_open]=useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
   
  }
  
  function closeModal() {
    setIsOpen(false);
  }
  function openModalP() {
    setP_open(true);
  }

  function afterOpenModalP() {
   
  }
  
  function closeModalP() {
    setP_open(false);
  }
  function openModalH() {
    setH_open(true);
  }

  function afterOpenModalH() {
   
  }
  
  function closeModalH() {
    setH_open(false);
  }
  return (
    <div>
      <button type="button" className="btn btn-primary "style={{background:"#6743a8" ,border:"2px solid white"}}onClick={openModal}>Create Account &rarr;</button>

      <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}type="button" className="btn btn-primary "style={{background:"#6743a8" ,border:"2px solid white"}} >X</button>

        <div className="d-flex justify-content-between m-5 mx-3">
        <button type="button" className="btn btn-primary "style={{background:"#6743a8" ,border:"2px solid white"}}onClick={openModalH}>Hospital</button>
        <button type="button" className="btn btn-primary "style={{background:"#6743a8" ,border:"2px solid white"}}onClick={openModalP}>Patient</button>
        </div>
      </Modal>
      <Modal
        isOpen={p_open}
        onAfterOpen={afterOpenModalP}
        onRequestClose={closeModalP}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModalP}type="button" className="btn btn-primary "style={{background:"#6743a8" ,border:"2px solid white"}} >X</button>

        <Petiont/>
      </Modal>
      <Modal
        isOpen={h_open}
        onAfterOpen={afterOpenModalH}
        onRequestClose={closeModalH}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModalH}type="button" className="btn btn-primary "style={{background:"#6743a8" ,border:"2px solid white"}} >X</button>

      <Hospital/>
      </Modal>


    </div>
    
  )
}

export default Login_Peti
