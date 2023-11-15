const express = require("express");
const router = express.Router();

const studentSchema = require("../model/studentSchema");

router.get("/", (req, res, next) => {
  studentSchema.find((err, data) => {
    if (err) {
      return next(err);
    } else {
      return res.json(data);
    }
  });
});

router.post("/create-student", (req, res, next) => {
  studentSchema.create(req.body, (err, data) => {
    if (err) {
      return next(err);
    } else {
      return res.json(data);
    }
  });
});
 
router.delete("/delete.student/:id",(req, res, next) =>{
  studentSchema.findByIdAndRemove(res.params.id,(err,data) =>{
    if(err) {
    return next(err);
  } else {
    return res.json(data);
  }
  });
});
router.post("/login",(req,res,next)=>{
  const [email,password]=req.body;
  studentSchema.findOne({ email : email }).then((student) => {
   if (student) {
    if (student.password === password){
      res.json("Login successfully");
    } else {
      res.json("No record found ");
    }
   }
});
});
module.exports = router;