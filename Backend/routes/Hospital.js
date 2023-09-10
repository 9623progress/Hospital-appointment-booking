import express from "express";
import { getMyProfile, login, logout, register} from "../controllers/Hospital.js";
// import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();


router.post("/login",login);
router.get("/logout",logout)
router.post("/new", register);
router.get("/Hosp_profile",getMyProfile)



export default router;