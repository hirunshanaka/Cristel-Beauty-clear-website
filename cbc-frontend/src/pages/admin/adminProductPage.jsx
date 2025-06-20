import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaTrash, FaPencilAlt, FaPlus } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
export default function AdminProductPage() {
    const [products, setProducts] = useState([]);
    {/* useEffect to get the data from the server and set the data to the products state */}
    const [productLoaded,setProductLoaded]=useState(false)
    useEffect(() => {
        if(!productLoaded){
            axios.get("http://localhost:5000/api/products").then((res) => {
                console.log("useEffect is running");
                setProducts(res.data);
                setProductLoaded(true)
            });
        }
    }, [productLoaded]);

    return (
        <div className="container mx-auto p-6">
            <Link to={"./addproduct"} className="absolute right-[25px] bottom-[25px] text-[25px] bg-blue-500 text-white rounded-full p-4 hover:bg-blue-300"><FaPlus/></Link>
    
            <h1 className="text-2xl font-bold text-center mb-6">Admin Product Page</h1>
            {
                productLoaded?
                <div className="overflow-x-auto">
                <table className="w-full table-auto border-collapse shadow-lg">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2 border">Product ID</th>
                            <th className="px-4 py-2 border">Product Name</th>
                            <th className="px-4 py-2 border">Price</th>
                            <th className="px-4 py-2 border">Last Price</th>
                            <th className="px-4 py-2 border">Stock</th>
                            <th className="px-4 py-2 border">Description</th>
                            <th className="px-4 py-2 border">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                {/*get the data from the server and display it in a table use the map function to loop through the data*/}  
                        {products.map((product, index) => (
                            <tr key={index} className="text-center border hover:bg-gray-100">
                                <td className="px-4 py-2 border">{product.productID}</td>
                                <td className="px-4 py-2 border">{product.productName}</td>
                                <td className="px-4 py-2 border">${product.price}</td>
                                <td className="px-4 py-2 border">${product.lastPrice}</td>
                                <td className="px-4 py-2 border">{product.stock}</td>
                                <td className="px-4 py-2 border">{product.description}</td>
                                <td className="px-4 py-2 border flex justify-center gap-4">
                                    <button className="text-red-500 hover:text-red-700"
                                        onClick={()=>{
                                          alert(product.productID)  
                                         const token= localStorage.getItem("token")
                                         console.log(token)
                                         axios.delete(`http://localhost:5000/api/products/${product.productID}`, {
                                            headers: {
                                                Authorization: `Bearer ${token}`,
                                            },
                                        }).then((res) => {
                                            console.log(res.data);
                                            toast.success("Product Deleted");

                                           {/* reload the page to see the changes */}
                                           // window.location.reload();

                                           //* set the product loaded to false to get the data from the server again */}
                                           setProductLoaded(false)
                                        })                                                              
                                         
                                        }}>
                                        <FaTrash />
                                    </button>
                                    <button className="text-blue-500 hover:text-blue-700" onClick={()=>{Navigate("/admin/product/editproduct") }}>
                                        <FaPencilAlt />

                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            /* if the products are not loaded show a loading spinner */
            :<div className="w-full h-full flex justify-center items-center">
          <div className="w-[40px] h-[40px] border-[4px] border-gray-200 border-b-[#ff0000] animate-spin rounded-full"></div>
        </div>

            }
            
        </div>
    );
}
