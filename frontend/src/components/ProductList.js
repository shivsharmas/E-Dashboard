import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        getProducts();
    }, []);

    const getProducts = async() => {
        let result = await fetch('http://localhost:5000/products')
         result = await result.json();
         setProducts(result);

    }

    const deleteProduct = async (id) =>{
        console.warn(id);
        let result = await fetch(`http://localhost:5000/product/${id}`, {
            method: 'Delete',
        });
        result = await result.json(result)
        if(result){
            alert("recored is delete");
        }
    }


    

  return (
    <div className='product-list'>
        <h1>Product List</h1>
        <ul>
            <li>S.No</li>
            <li>Name</li>
            <li>Price</li>
            <li>Category</li>
            <li>Company</li>
        </ul>        
        
        {
            products.map((item, index)=>
            <ul key={item._id}>
            <li>{index+1}</li>
            <li>{item.name}</li>
            <li>{item.price}</li>
            <li>{item.category}</li>
            <li>
                <button type="button" onClick={()=>deleteProduct(item._id)}>Delete</button>
                <Link to={"/update/1"+item._id}>Update</Link>
            </li>
        </ul>      
            )
        }
        
    </div>
  )
}

export default ProductList
    