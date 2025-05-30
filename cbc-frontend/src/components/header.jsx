import { Link } from "react-router-dom";

export default function Header() {
    return(
        <header className="bg-white w-[full] h-[80px] relative flex items-center justify-center ">
            <img src="/images.png" className="h-full  cursor-pointer  rounded-full absolute left-[10px] "/>    
            <div className="flex gap-6 text-[#ce9a6b]">
               <Link to="/"className="text-1xl font-bold ">Home</Link> 
               <Link to=""className="text-1xl font-bold ">Products</Link>
               <Link to=""className="text-1xl font-bold ">About Us</Link>
               <Link to=""className="text-1xl font-bold ">Contact Us</Link>
            </div>
               
        </header>
    )
}