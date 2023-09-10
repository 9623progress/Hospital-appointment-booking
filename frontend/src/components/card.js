import React from 'react'

function Card(props) {
  console.log(props)
  return (
    <div className='m-3'>
      <div className="card w-75 mb-3 m-auto"style={{ border:"1px solid #6743a8"}} >
    <div className=" p-2 d-flex justify-content-between align-items-center" style={{color:"#4b317a"}}>
    <p className="card-title">{props.name}</p>
    <p>{props.Age}</p>
    <p>{props.mobile}</p>
    <p>{props.email}</p>
    <p>{props.Address}</p>
    <p>{props.date.toString()}</p>
    <p>{props.timeSlot}</p>
    <input type="checkbox" onChange={()=>{props.updateHandler(props.id)}}  checked={props.isCompleted}/>
    <button href="/" className="btn btn-primary " style={{background:"#6743a8" ,border:"2px solid white"}} onClick={()=>{props.deleteHandler(props.id)}}>Delete</button>
    </div>
    
 
  
</div>
    </div>
  )
}

export default Card
