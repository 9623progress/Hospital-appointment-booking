import jwt from "jsonwebtoken";
// import { User } from "../modal/user";

export const sendCookie = async (user, res, message, statusCode = 200) => {
  user.password = undefined;

  //  users
  const token = jwt.sign({ _id: user._id }, "skdjhfjghjdgfdhgh", {
    expiresIn: "1d", // Token expiration time
  });

  // Prepare the cookies configuration
  const cookieOptions = {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
    sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
    secure: process.env.NODE_ENV !== "Development",
  };

  // Check if user is admin
  if (user.role === "admin") {
    //  admin users (htoken)
    const htoken = jwt.sign({ _id: user._id }, "bnfbhdfghdgsfhgh", {
      expiresIn: "15m",
    });

    // Send both tokens for admin
    res
      .status(statusCode)
      .cookie("token", token, cookieOptions)
      .cookie("htoken", htoken, cookieOptions)
      .json({
        success: true,
        message,
        user,
      });
  } else {
    // Send only the regular token for non-admin users
    res.status(statusCode).cookie("token", token, cookieOptions).json({
      success: true,
      message,
      user,
    });
  }
};

// export const HospitalCookie = (user, res, message, statusCode = 200) => {

// };
