import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
export function createUser(req, res) {
  try {
    const newUserData = req.body;
    
    

    // Check if user type is "admin" and validate req.user existence
     if (newUserData.type == "admin") {
      if (req.user==null) {
        return res.json({
          message: "Please log in as an administrator to create an admin account",
        });
      }
      if (req.user.type !="admin") {
        return res.json({
          message: "Only administrators can create admin accounts",
        });
      }
    }
    // Hash the password
    newUserData.password = bcrypt.hashSync(newUserData.password, 10);

    // Create and save the user
    const user = new User(newUserData);
    console.log(newUserData);

    user.save().then(() => {
        res.json({
          message: "User created successfully",
        });
      })
      .catch((error) => {
        console.error("Error saving user:", error);
        res.json({
          message: "User not created",
        });
      });
  } catch (error) {
    console.error("Error in createUser:", error);
    res.json({
      message: "An error occurred",
    });
  }
}

export function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    // Validate email and password input
    if (!email || !password) {
      return res.json({
        message: "Email and password are required",
      });
    }

    // Find user by email
    User.findOne({ email }).then((user) => {
      if (!user) {
        return res.json({
          message: "User not found",
        });
      }

      // Compare hashed password
      const isPasswordMatch = bcrypt.compareSync(password, user.password);
      if (isPasswordMatch) {
        // Generate JWT token
        const token = jwt.sign(
          {
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            isBlocked: user.isBlocked,
            type: user.type,
            profilePicture: user.profilePicture,
          },
          process.env.SECRET,
          { expiresIn: "1h" } // Optional: token expiry
        );

        console.log("Token generated:", token);

        res.json({
          message: "User logged in successfully",
          token: token,
        });
      } else {
        res.json({
          message: "Incorrect password",
        });
      }
    });
  } catch (error) {
    console.error("Error in loginUser:", error);
    res.json({
      message: "An error occurred",
    });
  }
}
export function isAdmin(req) {
  if (req.user && req.user.type == "admin") {
    return true;
  }
  return false;
} 
export function isCustomer(req) {
  return req.user && req.user.type == "customer";
  
}