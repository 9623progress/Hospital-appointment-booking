


import mongoose from "mongoose";

export const Connectdb = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017", {
      dbName: "Hospital_Appointment",
    })
    .then(() => {
      console.log("Connected to the database");

    //   const db = mongoose.connection;

    //   // Execute the dropIndex command on the "histories" collection
    //   db.collection("histories").dropIndex("email_1", (error, result) => {
    //     if (error) {
    //       console.log("Failed to drop index:", error);
    //       return;
    //     }
    //     console.log("Index dropped successfully");
    //   });
    })
    .catch((error) => {
      console.log("Failed to connect to the database:", error);
    });
};
