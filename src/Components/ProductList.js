import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import '../Styling/ProductList.css'

export default function ProductList() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        let data = await fetch("http://localhost:5500/products");
        data = await data.json();
        setProducts(data);
    }
    
    const handleBtn=async(id)=>{
        let data = await fetch(`http://localhost:5500/product/${id}`,{
            method:"Delete"
        });
        data=await data.json();
        
        if(data) {
            alert("Product item is deleted")
            getData()
        }
        
    }

    const handleSearch=async(event)=>{
        let key=event.target.value;
        if(key){
            let data = await fetch(`http://localhost:5500/search/${key}`)
        data= await data.json();
        console.log(data)
        if(data){
            setProducts(data)
        }
        }else{
            getData();
        }
        
    }

    return (
        <div className='ProductList'>
            <h1>Product List</h1>
            <div className="Search">
           
            <input onChange={handleSearch} placeholder='Search for your Product'/>
            </div> 
            <div className="container">
                { products.length>0 ?
                products.map((item, index) => 
                    
                    <div className="Product">
                        <div className="ProductDetails">
                        <h4>Product No : {index + 1}</h4>
                        <p>Name : {item.name}</p>
                        <p>Price : {item.price}</p>
                        <p>Category : {item.category}</p>
                        <p>Company : {item.company}</p>
                       </div>
                       <div className="ProductBtns">
                        <button onClick={()=>handleBtn(item._id)}>Delete</button>
                        <button ><Link className='updateBtn' to={"/update/"+item._id}>Update</Link></button>
                      </div>
                    </div>
                    
                ):
                <h1>No result found</h1>
                }
            </div>
        </div>
    )
}
