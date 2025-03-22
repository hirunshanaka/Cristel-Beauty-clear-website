import { useState } from "react";

export default function AddProductForm() {
    const [productID, setProductID] = useState("");
    const [productName, setProductName] = useState(""); 
    const [altName, setAltName] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [price, setPrice] = useState(""); 
    const [lastPrice, setLastPrice] = useState("");
    const [stock, setStock] = useState("");
    const [description, setDescription] = useState("");

    {/* add product button click and after send the data to the database*/ }
    function handelSubmit(){
        console.log(productID, productName, altName, imageURL, price, lastPrice, stock, description);
    }
    
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-4 rounded-lg shadow-md w-80">
                <h1 className="text-lg font-semibold text-center text-gray-800 mb-3">
                    Add Product
                </h1>
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col">
                        <label className="text-gray-600 text-sm">Product ID</label>
                        <input type="text" className="p-1 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-400" value={productID} onChange={(e) => setProductID(e.target.value)}/>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-gray-600 text-sm">Product Name</label>
                        <input type="text" className="p-1 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-400" value={productName} onChange={(e) => setProductName(e.target.value)}/>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-gray-600 text-sm">Alt Name</label>
                        <input type="text" className="p-1 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-400" value={altName} onChange={(e) => setAltName(e.target.value)}/>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-gray-600 text-sm">Image URL</label>
                        <input type="text" className="p-1 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-400" value={imageURL} onChange={(e) => setImageURL(e.target.value)}/>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-gray-600 text-sm">Price</label>
                        <input type="number" className="p-1 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-400" value={price} onChange={(e) => setPrice(e.target.value)}/>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-gray-600 text-sm">Last Price</label>
                        <input type="number" className="p-1 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-400" value={lastPrice} onChange={(e) => setLastPrice(e.target.value)}/>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-gray-600 text-sm">Stock</label>
                        <input type="number" className="p-1 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-400" value={stock} onChange={(e) => setStock(e.target.value)}/>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-gray-600 text-sm">Description</label>
                        <textarea className="p-1 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-400" value={description} onChange={(e) => setDescription(e.target.value)}/>
                    </div>
                    <button className="bg-blue-500 text-white text-sm font-medium py-1 rounded-md hover:bg-blue-600 transition"onClick={handelSubmit}>
                        Add Product
                    </button>
                </div>
            </div>
        </div>
    );
}
