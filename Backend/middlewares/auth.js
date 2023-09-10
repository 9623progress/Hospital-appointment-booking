import { User } from "../modal/user.js";
import {Hospital} from "../modal/Hospital.js"
import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token)
    return res.status(404).json({
      success: false,
      message: "Login First",
    });

  const decoded = jwt.verify(token, "skdjhfjghjdgfdhgh");

  req.user = await User.findById(decoded._id);
  next();
};

export const isHospital = async (req, res, next) => {
  const { htoken } = req.cookies;

  if (!htoken)
    return res.status(404).json({
      success: false,
      message: "Login First",
    });

  const decoded = jwt.verify(htoken, "bnfbhdfghdgsfhgh");

  req.hospital = await Hospital.findById(decoded._id);
  next();
};



