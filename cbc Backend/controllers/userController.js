import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"; 
import dotenv from "dotenv";
dotenv.config();
export function createUser(req, res) {
  try {
    const newUserData = req.body;
    if (!newUserData.email || !newUserData.password) {
      return res.json({
        message: "Email and password are required",
      });
    }

    if (newUserData.password.length < 8) {
      return res.json({
        message: "Password must be at least 8 characters long",
      });
    }

    newUserData.password = bcrypt.hashSync(newUserData.password, 10);

    const user = new User(newUserData);
    console.log(newUserData);
    user.save().then(() => {
      res.json({
        message: "User  created",
      });
    }).catch((error) => {
      console.error(error);
      res.json({
        message: "User  not created",
      });
    });
  } catch (error) {
    console.error(error);
    res.json({
      message: "An error occurred",
    });
  }
}

export function loginUser(req, res) {
  try {
    if (!req.body.email || !req.body.password) {
      return res.json({
        message: "Email and password are required",
      });
    }

    User.find({ email: req.body.email }).then((users) => {
      if (users.length === 0) {
        return res.json({
          message: "User  not found",
        });
      }
    
      const user = users[0];
      const isPasswordMatch = bcrypt.compareSync(req.body.password, user.password);
      if (isPasswordMatch) {
       const token =jwt.sign({
        email:user.email,
        firstName:user.firstName,
        lastName:user.lastName,
        isBlocked:user.isBlocked,
        type:user.type,
        profilepicture:user.profilepicture
        
       },process.env.SECRET);
       console.log(token)
       res.json({
         message: "User logged in",
         token:token
       })


      } else {
        res.json({
          message: "User  not logged in",
        });
      }
    }) 
} 
catch (error) {
  console.error(error);
  res.json({
    message: "An error occurred",
  });
}
} 

