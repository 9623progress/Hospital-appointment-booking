import express from 'express'
import cookieParser from 'cookie-parser';
import cors from 'cors'
import userRouter from "./routes/user.js";
import appoRouter from './routes/Appointment.js';
import { config } from "dotenv";
import { errorMiddleware } from "./middlewares/error.js";
import hos_router from "./routes/Hospital.js"

export const app=express()

config({
    path: "./data/config.env",
  });

//using middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:3000',
credentials: true,}))

app.use("/api/v1/users", userRouter);
app.use("/api/v1", appoRouter);
app.use("/api/v1/Hosp",hos_router);



app.get("/",(req,res)=>{
    res.send("nice working")
})