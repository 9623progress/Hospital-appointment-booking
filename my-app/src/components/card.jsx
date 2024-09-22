import React from "react";
import "../style/card.css";

function Card(props) {
  // console.log(props);
  return (
    <div className="m-3 text-center">
      <div className="card">
        <p>{props.name}</p>
        <p>{props.Age}</p>
        <p>{props.mobile}</p>
        <p>{props.email}</p>
        <p>{props.Address}</p>
        <p>{props.date.toString()}</p>
        <p>{props.timeSlot}</p>
        {/* <input
          type="checkbox"
          onChange={() => {
            props.updateHandler(props.id);
          }}
          checked={props.isCompleted}
        /> */}
        <button
          href="/"
          className="btn btn-primary "
          style={{ background: "#6743a8", border: "2px solid white" }}
          onClick={() => {
            props.deleteHandler(props.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Card;
