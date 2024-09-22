import express from "express";
import { deletePetiontAppo, getMyApo, getMyProfile, login, logout, register } from "../controllers/user.js";
import { isAuthenticated, } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", register);
router.post("/login", login);

router.get("/logout", logout);

router.get("/me", isAuthenticated, getMyProfile);
router.get("/my", isAuthenticated, getMyApo);
router.delete("/:id",isAuthenticated,deletePetiontAppo)

export default router;