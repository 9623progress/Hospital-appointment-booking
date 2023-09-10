import jwt from "jsonwebtoken";

export const sendCookie = (user, res,message, statusCode = 200) => {
  const token = jwt.sign({ _id: user._id }, "skdjhfjghjdgfdhgh");
  res
    .status(statusCode)
    .cookie("token", token, {
      httpOnly: true,
      maxAge: 15 * 60 * 1000,
      sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
      secure: process.env.NODE_ENV === "Development" ? false : true,
    })
    .json({
      success: true,
      message,
    });
};

export const HospitalCookie = (user, res, message, statusCode = 200) => {
  const htoken = jwt.sign({ _id: user._id }, "bnfbhdfghdgsfhgh");
  res
    .status(statusCode)
    .cookie("htoken", htoken, {
      httpOnly: true,
      maxAge: 15 * 60 * 1000,
      sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
      secure: process.env.NODE_ENV === "Development" ? false : true,
    })
    .json({
      success: true,
      message,
    });
};