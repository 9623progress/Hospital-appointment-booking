import express from "express";
import  {Appo, data, deleteAppo, history, updateAppo}  from "../controllers/Appointment.js";
import { isAuthenticated, isHospital } from "../middlewares/auth.js";

const router = express.Router();
router.post("/appo",isAuthenticated, Appo);
router.get("/info",isHospital,data)
router
  .route("/:id")
  .put(isHospital, updateAppo)
  .delete( isHospital ,deleteAppo);

router.get("/history",isHospital,history)

export default router