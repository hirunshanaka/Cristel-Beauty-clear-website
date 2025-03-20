import axios from "axios"
import { useEffect, useState } from "react"
export default function AdminProductPage() {
    
    const[products,setProducts]=useState()
    useEffect(()=>{
        axios.get("http://localhost:5000/api/products").then((res)=>{
            console.log(res.data)
            setProducts(res.data)
        })
    },[]
)
    return (
        <div>
            <h1>Admin Product Page</h1>
            {
                products.map(
                    (products,index)=>{
                    return(
                        <div key={index}>{products.productName}</div>
                    )
                    }
                )
            }
        </div>
    )
}
