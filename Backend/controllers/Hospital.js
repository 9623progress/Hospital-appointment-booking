import { Hospital} from "../modal/Hospital.js";
import bcrypt from "bcrypt";
import { HospitalCookie, sendCookie } from "../utils/features.js";
import ErrorHandler from "../middlewares/error.js";

export const login = async (req, res,next) => {
  try {
    const { email, password } = req.body;

    const hospital = await Hospital.findOne({ email }).select("+password");


    if (!hospital) return next(new ErrorHandler("Invalid Email or Password", 400));
  

    const isMatch = await bcrypt.compare(password, hospital.password); 

    if (!isMatch)
      return next(new ErrorHandler("Invalid Email or Password", 400));
    HospitalCookie(hospital, res, `Welcome back, ${hospital.name}`, 200);
  } catch (error) {
    next(error);
  }
};

export const register = async (req, res , next) => {
  try {
    const { name, email, password } = req.body;

    let hopital = await Hospital.findOne({ email });

    if (hopital) return next(new ErrorHandler("hopital Already Exist", 400));
    console.log("value1")

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("value2")


    hopital = await Hospital.create({ name, email, password: hashedPassword });
    console.log("value3")


    HospitalCookie(hopital, res, "Registered Successfully", 201);
  } catch (error) {
    next(error);
  }
};



export const getMyProfile = (req, res) => {
  res.status(200).json({
    success: true,
    hospital: req.hospital,
  });
};



export const logout = (req, res) => {
  res
    .status(200)
    .cookie("htoken", "", {
      expires: new Date(Date.now()),
      sameSite: process.env.NODE_ENV === "Develpoment" ? "lax" : "none",
      secure: process.env.NODE_ENV === "Develpoment" ? false : true,
    })
    .json({
      success: true,
      hospital: req.hospital,
    });
};