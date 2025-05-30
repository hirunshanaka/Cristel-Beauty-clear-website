import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { GoGraph } from "react-icons/go";
import { FaBoxOpen, FaClipboardList, FaUsers, FaSignOutAlt } from "react-icons/fa";
import AdminProductPage from "../admin/adminProductPage";
import AddProductForm from "../admin/addProductForm";
import EditProductForm from "../admin/editProductForm";

export default function AdminHomePage() {
    return (
        <div className="bg-gray-100 w-full h-screen flex">
            {/* Sidebar */}
            <div className="w-[20%] h-screen bg-blue-500 text-white flex flex-col items-center  p-4 space-y-6">
                <h1 className="text-2xl font-bold">Admin Panel</h1>
                <Link className="flex items-center space-x-2 hover:text-black" to="/admin/dashboard">
                    <GoGraph /> <span>Dashboard</span>
                </Link>
                <Link className="flex items-center space-x-2 hover:text-black" to="/admin/product">
                    <FaBoxOpen /> <span>Products</span>
                </Link>
                <Link className="flex items-center space-x-2 hover:text-black" to="/admin/order">
                    <FaClipboardList /> <span>Orders</span>
                </Link>
                <Link className="flex items-center space-x-2 hover:text-black" to="/admin/users">
                    <FaUsers /> <span>Users</span>
                </Link>
                <Link className="flex items-center space-x-2 hover:text-black mt-auto" to="/logout">
                    <FaSignOutAlt /> <span>Logout</span>
                </Link>
            </div>
            
            {/* Main Content */}
            <div className="w-[80%] h-screen  ">
                <Routes path="/*">
                    <Route path="/dashboard" element={<h1>Dashboard</h1>} />                                    
                    <Route path="/product" element={<AdminProductPage/>} />  
                    <Route path="/product/addproduct" element={<AddProductForm/>} />
                    <Route path="/product/editproduct" element={<EditProductForm />} />  
                    <Route path="/order" element={<h1>Orders</h1>} />
                    <Route path="/users" element={<h1>Users</h1>} />
                    
                </Routes>
            </div>
        </div>
    );
}
