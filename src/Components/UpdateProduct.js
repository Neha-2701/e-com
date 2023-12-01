import React, { useEffect, useState } from 'react'
import '../Styling/AddProduct.css'
import { useParams, useNavigate } from 'react-router-dom';

export default function UpdateProduct() {
    const [name, setName]=useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const [error,setError] = useState(false);

    
    const params = useParams()
    const navigate= useNavigate()
    useEffect(()=>{
        getDetails();
    },[])

    const getDetails=async()=>{
        let result =await fetch(`http://localhost:5500/update/${params.id}`)
        result=await result.json();
        console.log(result)
        setName(result.name)
        setPrice(result.price)
        setCategory(result.category)
        setCompany(result.company)
    }

    const updateBtn=async()=>{
        let result =await fetch(`http://localhost:5500/update/${params.id}`,{
            method :"Put",
            body : JSON.stringify({name,price, category, company}),
            headers:{
                'Content-Type' :"application/json"
            }
        });
        result=await result.json();
        console.log(result)
        if(name!='') setError(true)
        else navigate('/')
    }
  return (
    <div className='addProduct'>
        <div className='product'>
      <h1> Update Product </h1>
      <input className='inputField' type='name' placeholder='Enter Product name' value={name} onChange={(e) => setName(e.target.value)}></input>
      {error && !name && <span>Enter Valid Name</span>}
      <input className='inputField' type='text' placeholder='Enter Product price' value={price} onChange={(e) => setPrice(e.target.value)}></input>
      {error && !price && <span>Enter Valid Price</span>}
      <input className='inputField' type='text' placeholder='Enter Product category' value={category} onChange={(e) => setCategory(e.target.value)}></input>
      {error && !category && <span>Enter Valid Category</span>}
      <input className='inputField' type='text' placeholder='Enter Product Company' value={company} onChange={(e) => setCompany(e.target.value)}></input>
      {error && !company && <span>Enter Valid Company</span>}
      
      <br></br>
      <button className='addBtn' onClick={()=>{updateBtn()}}>Update</button>
      
      </div>
      </div>
    
 
  )
}
