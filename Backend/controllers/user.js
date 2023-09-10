import { User } from "../modal/user.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";
import ErrorHandler from "../middlewares/error.js";
import { Appointment } from "../modal/Appointment.js";

export const login = async (req, res,next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user) return next(new ErrorHandler("Invalid Email or Password", 400));

    const isMatch = await bcrypt.compare(password, user.password); 

    if (!isMatch)
      return next(new ErrorHandler("Invalid Email or Password", 400));

    sendCookie(user, res, `Welcome back, ${user.name}`, 200);
  } catch (error) {
    next(error);
  }
};

export const register = async (req, res , next) => {
  try {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });

    if (user) return next(new ErrorHandler("User Already Exist", 400));
    const hashedPassword = await bcrypt.hash(password, 10);
    user = await User.create({ name, email, password: hashedPassword });
    sendCookie(user, res, "Registered Successfully", 201);
  } catch (error) {
    next(error);
  }
};

export const getMyProfile = (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
};

export const logout = (req, res) => {
  res
    .status(200)
    .cookie("token", "", {
      expires: new Date(Date.now()),
      sameSite: process.env.NODE_ENV === "Develpoment" ? "lax" : "none",
      secure: process.env.NODE_ENV === "Develpoment" ? false : true,
    })
    .json({
      success: true,
      user: req.user,
    });
};

export const getMyApo = async (req, res, next) => {
  try {
    const userid = req.user._id;
    const data = await Appointment.find({ user: userid });

    res.status(201).json({
    success: true,
     data
    });
  } catch (error) {
    next(error);
  }
};
export const deletePetiontAppo = async (req, res, next) => {
  try {
    const task = await Appointment.findById(req.params.id);
    if (!task) return next(new ErrorHandler("Task not found", 404));
    
     await task.deleteOne();
    res.status(200).json({
      message: "Task Deleted!",
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

