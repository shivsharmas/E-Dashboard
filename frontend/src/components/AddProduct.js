import React, { useState } from 'react'

const AddProduct = () => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");
    // const [error, setError] = useState(false);
    const [error, setError] = useState("");

    const addProduct= async()=>{
      //reset the error state
      setError("");

    console.warn(name);
    if(!name || !price || !category || company){
        // setError(true)
        setError("All feilds re required")
        // return false;
        return;
    }
    
        const user = JSON.parse(localStorage.getItem(user));
        if(!user || !user.result || !user.result._id) {
          setError("User not found. Please log in.");
          return;
      }

        const userId = user.result._id;

        // console.warn(name, price, category, company);
        // const userId = JSON.parse(localStorage.getItem('user')).result._id;
        console.warn(userId);
        let result =  await fetch('http://localhost:5000/add-product', {
            method:'post',
            body: JSON.stringify({name, price, category, company, userId}),
            headers: {
                'Content-Type' : 'application/json'
            }
        });

        result= await result.json();
        console.warn(result);
        setName("");
            setPrice("");
            setCategory("");
            setCompany("");
        
    }

  return (
    <div className='product'>
      <h1>Add product</h1>
      <input className='inputBox' type='text' onChange={(e)=>setName(e.target.value)} value={name} placeholder='Enter Product Name' />
       {error && !name && <span className='invalid-input'>Enter valid name</span>}

      <input className='inputBox' type='text' onChange={(e)=>setPrice(e.target.value)} value={price} placeholder='Enter Product Price' />
      {error && !price && <span className='invalid-input'>Enter valid price</span>}
      
      <input className='inputBox' type='text' onChange={(e)=>setCategory(e.target.value)} value={category} placeholder='Enter Product category' />
      {error && !category && <span className='invalid-input'>Enter valid category</span>}
      
      <input className='inputBox' type='text' onChange={(e)=>setCompany(e.target.value)} value={company} placeholder='Enter Product Company' />
      {error && !company && <span className='invalid-input'>Enter valid company</span>}
      
      <button onClick={addProduct} className='appButton' type='button'>Add Product</button>
    </div>
  )
}

export default AddProduct
