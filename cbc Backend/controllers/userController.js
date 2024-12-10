import User from "../models/user.js";
import bcrypt from "bcrypt";

export function craeteUser(req,res){
    const newUserData=req.body
    newUserData.password=bcrypt.hashSync(newUserData.password,10)
   
    //create database 
   const user= new User(newUserData);
   console.log(newUserData)
   user.save().then(()=>{
    res.json({
        message:"user created"
    })
   }).catch(()=>{
    res.json({
        message:"user not created"
      })
  })
}

export function loginUser(req,res){
    User.find({email:req.body.email}).then((users)=>{
      if(users.length==0)   {
        res.json({    
            message:"user not found"
        }) 
      }else{
        if(bcrypt.compareSync(req.body.password,users[0].password)){
            res.json({
                message:"user logged in"
                })
        }else{
            res.json({
                message:"user not logged in"
            })
        }
      }
        }
      )
}

