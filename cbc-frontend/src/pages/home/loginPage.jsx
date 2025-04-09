import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default function LoginPage() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   
   function Login() {
      axios.post("http://localhost:5000/api/users/login", {
         email: email,
         password: password
      }).then((res) => {
         console.log(res);
         if (res.data.user == null) {
            toast.error(res.data.message);
            return;
         }
         toast.success("Login Success");
         localStorage.setItem("token", res.data.token);
         if (res.data.user.type === "admin") {
            window.location.href = "/admin";
         } else {
            window.location.href = "/";
         }
      });
   }

   return (
       <div className="w-full h-screen flex items-center justify-center bg-gray-900">
          <div className="w-[400px] p-8 bg-gray-800 rounded-2xl shadow-lg flex flex-col items-center">
             <img src="/001.jpg" className="rounded-full w-24 h-24 border-4 border-gray-700 shadow-md mb-4" alt="User Avatar" />
             <h2 className="text-xl font-semibold text-white mb-6">Login</h2>
             <div className="w-full mb-4">
                <label className="block text-gray-300 mb-1">Email</label>
                <input 
                   type="email" 
                   value={email} 
                   onChange={(e) => setEmail(e.target.value)} 
                   className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
             </div>
             <div className="w-full mb-6">
                <label className="block text-gray-300 mb-1">Password</label>
                <input 
                   type="password" 
                   value={password} 
                   onChange={(e) => setPassword(e.target.value)} 
                   className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
             </div>
             <button 
                className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
                onClick={Login}
             >
                Login
             </button>
             <p className="text-gray-400 text-sm mt-4">
                Don't have an account? <Link to="/register" className="text-blue-400 hover:underline">Sign up</Link>
             </p>
          </div>
       </div>
   );
}