import axios from "axios";
import React, { useContext } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import Card from "./card";
import { useEffect } from "react";
import { Context } from "..";
import profile from "./images/profile.png";

function Profile() {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };
  const [mybooking, setMyBooking] = useState([]);
  // const [refresh,setRefresh]=useState(false)
  const { user } = useContext(Context);
  const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:5000/api/v1/users/${id}`,
        {
          withCredentials: true,
        }
      );
      // console.log(data.data.isCompleled);
      console.log(data);
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/users/my", {
        withCredentials: true,
      })
      .then((res) => {
        setMyBooking(res.data.data);
        // console.log(mybooking);
      })

      .catch((e) => {
        toast.error(e.response?.data?.message || "An error occurred");

        console.log(e.response.data.message);
      });
  }, [mybooking]);

  return (
    <div>
      <div className="">
        <div>
          <div className="text-center">
            <h2 style={{ color: "#6743a8" }}>Your Appointments</h2>
            <h5 style={{ color: "#6743a8" }}>{`Hello ${user.name}`}</h5>
            <p style={{ color: "#6743a8" }}>
              The best time to take care of yourself is now. Don’t delay—your
              health is in your hands.
            </p>
          </div>

          {mybooking.length > 0 ? (
            mybooking.map((i) => (
              <Card
                name={i.name}
                Age={i.Age}
                mobile={i.mobile}
                email={i.email}
                Address={i.Address}
                date={formatDate(i.date)}
                id={i._id}
                key={i._id}
                timeSlot={i.timeSlot}
                isCompleled={i.isCompleled}
                deleteHandler={deleteHandler}
              />
            ))
          ) : (
            <h3 className="text-center">No Appointment booked</h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
