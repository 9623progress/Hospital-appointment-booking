import { User } from "../modal/user.js";
// import { Hospital } from "../modal/Hospital.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({
      // Changed to 401 for unauthorized
      success: false,
      message: "Login First",
    });
  }

  try {
    const decoded = jwt.verify(token, "skdjhfjghjdgfdhgh");
    req.user = await User.findById(decoded._id);

    if (!req.user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    next();
  } catch (error) {
    // Handle token expiration and other errors
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        message: "Token has expired, please log in again.",
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  }
};

export const isHospital = async (req, res, next) => {
  const { htoken } = req.cookies;

  if (!htoken) {
    return res.status(401).json({
      success: false,
      message: "Login First",
    });
  }

  try {
    const decoded = jwt.verify(htoken, "bnfbhdfghdgsfhgh");
    req.hospital = await User.findById(decoded._id);

    if (!req.hospital) {
      return res.status(404).json({
        success: false,
        message: "Hospital not found",
      });
    }

    next();
  } catch (error) {
    // Handle token expiration and other errors
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        message: "Token has expired, please log in again.",
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  }
};
