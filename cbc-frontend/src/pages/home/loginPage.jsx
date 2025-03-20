import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default function LoginPage() {
   const [email, setEmail] = useState("your email");
   const [password, setPassword] = useState("");
   
   function Login() {
      axios.post("http://localhost:5000/api/users/login", {
         email: email,
         password: password
      }).then((res) => {
         console.log(res);
         if (res.data.user == null) {
            toast.error(res.data.message)
            return;
         }
         toast.success("Login Success");
         localStorage.setItem("token", res.data.token); //we can save key value pairs in local storage
         if (res.data.user.type == "admin") {
            window.location.href = "/admin";  //send admin path to admin page
         }else{
            window.location.href="/"
         }
      });
   }

   return (
       <div className="bg-red-800 w-full h-screen flex items-center justify-center">
          <div className="w-[480px] h-[480px] bg-blue-600 flex flex-col items-center justify-center">
             <img src="/001.jpg" className="rounded-full w-[100px] h-[90px]" />
             <span>Email</span>
             <input value={email} onChange={(e) => setEmail(e.target.value)} />
             <span>Password</span>
             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
             <button className="bg-white" onClick={Login}>Login</button>
          </div>
       </div>
   );
}