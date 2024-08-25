import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


const UpdateProduct = () => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");
    const params = useParams();

    useEffect(()=> {
        console.warn(params);
        getProductDetails();
    }, []);

    // const getProductDetails = async () =>{
    //     console.warn(params);
    //     let result = await fetch(`http://localhost:5000/product/${params.id}`);
    //     result = await result.json();
    //     setName(result.name);
    //     setPrice(result.price);

    //     console.warn(result);

    // }

    const getProductDetails = async() =>{
        let result = await fetch('http://localhost:5000/products')
         result = await result.json();
         
    }

    const updateProduct= async()=>{
       console.warn(name, price, category, company);
       let result = await fetch(`http://localhost:5000/product/${params.id}`, {
        method: 'Put',
        body: JSON.stringify({name, price, category, company}),
        headers:{
            'Content-Type' : 'application/json'
        }
       })
        
       result = await result.json();
       console.warn(result)
    }

      
    

  return (
    <div className='product'>
      <h1>Update product</h1>
      <input className='inputBox' type='text' onChange={(e)=>setName(e.target.value)} value={name} placeholder='Enter Product Name' />
      
      <input className='inputBox' type='text' onChange={(e)=>setPrice(e.target.value)} value={price} placeholder='Enter Product Price' />
     
      <input className='inputBox' type='text' onChange={(e)=>setCategory(e.target.value)} value={category} placeholder='Enter Product category' />
      
      <input className='inputBox' type='text' onChange={(e)=>setCompany(e.target.value)} value={company} placeholder='Enter Product Company' />
      
      <button onClick={updateProduct} className='appButton' type='button'>Update Product</button>
    </div>
  )
}

export default UpdateProduct
