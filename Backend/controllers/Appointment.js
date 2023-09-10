import ErrorHandler from "../middlewares/error.js";
import { Appointment } from "../modal/Appointment.js";
import { History } from "../modal/History.js";

export const Appo = async (req, res , next) => {
    try {
      const { name,Age, mobile, email,Address,date,timeSlot } = req.body;
      let appointment = await Appointment.findOne({ email });

      const existingEntry = await Appointment.findOne({ date, timeSlot });
      if (existingEntry) {
      return res.json({ message: 'Time slot is not available.' });
    }
       appointment = await Appointment.create({ name,Age, mobile, email,Address,date,timeSlot,user: req.user.id, });
        res.status(201).json({
        success:"true",
        message:"Appointment booked"
       })
  
        
    } catch (error) {
      next(error);
    }
  };

  export const data=async(req,res,next)=>{
  try {
  const data= await Appointment.find({})
  res.status(201).json({
    success:true,
    data
  })

} catch (error) {
  console.log(error)
  next(error)
}
  }

  export const history=async(req,res,next)=>{
    try {
    const data= await History.find({})
    res.status(201).json({
      success:true,
      data
    })
  
  } catch (error) {
    console.log(error)
    next(error)
  }
    }


  export const updateAppo = async (req, res, next) => {
    try {
      const data = await Appointment.findById(req.params.id);
  
      if (!data) return next(new ErrorHandler("data not found", 404));
  
      data.isCompleted = !data.isCompleted;
      await data.save();
  
      res.status(200).json({
        success: true,
        message: "data Updated!",
      });
    } catch (error) {
      next(error);
    }
  };
  
  export const deleteAppo = async (req, res, next) => {
    try {
      const data = await Appointment.findById(req.params.id);
     
      if (!data) return next(new ErrorHandler("data not found", 404));

      const { name,Age, mobile, email,Address,date,timeSlot,user } = data;
    const  history= await History.create({
      name: name,
      Age: Age,
      mobile: mobile,
      email: email,
      Address: Address,
      date:date,
      timeSlot:timeSlot,
    user:user} );
     await data.deleteOne();

     
      res.status(200).json({
        message: "data Deleted!",
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };
  


  
  