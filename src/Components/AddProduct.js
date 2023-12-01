import React, { useState } from 'react'
import '../Styling/AddProduct.css'

export default function AddProduct() {
    const [name, setName]=useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const [error,setError] = useState(false);
    const auth=localStorage.getItem('user');

    const handleAdd=async()=>{
        if(!name || !price || !category || !company ){
            setError(true);
        }
        if(typeof(price)!=Number){
            console.log("I am not a number")
            setError(true)
            setPrice('')
        }
        const id=JSON.parse(auth)._id;
        console.log(name, price, category, company)
        let result= await fetch('http://localhost:5500/add-product',{
            method:'post',
            body:JSON.stringify({name,price,category,company,id}),
            headers :{
                'Content-Type' :'application/json'
            }
        }
        )

        result=await result.json();
        console.log(result)
        
    }
  return (
    <div className='addProduct'>
        <div className='product'>
      <h1> Add Product </h1>
      <input className='input' type='name' placeholder='Enter Product name' value={name} onChange={(e) => setName(e.target.value)}></input>
      {error && !name && <span>Enter Valid Name</span>}
      <input className='input' type='text' placeholder='Enter Product price' value={price} onChange={(e) => setPrice(e.target.value)}></input>
      {error && !price && <span>Enter Valid Price</span>}
      <input className='input' type='text' placeholder='Enter Product category' value={category} onChange={(e) => setCategory(e.target.value)}></input>
      {error && !category && <span>Enter Valid Category</span>}
      <input className='input' type='text' placeholder='Enter Product Company' value={company} onChange={(e) => setCompany(e.target.value)}></input>
      {error && !company && <span>Enter Valid Company</span>}
      
      <br></br>
      <button className='addBtn' onClick={handleAdd}>Add</button>
      
      </div>
      </div>
    
 
  )
}
