import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate("/")
        }
    }, [])

    const handleLogin =async () =>{
        console.warn("email, password", email, password);
        let result = await fetch('http://localhost:5000/login', {
            method: 'post',
            body: JSON.stringify({email, password}),
            headers :{
                'Content-Type' : 'application/json'
            }
        });

        result = await result.json();
        console.warn(result);
        
        if(result.name){
            localStorage.setItem("user", JSON.stringify({result}));
            navigate("/")
        }else{
            alert("please enter the correct details")
        }
        
    }

  return (
    <div className='login'>
             <input className='inputBox' type='text' placeholder='Enter Email' 
             onChange={(e)=> setEmail(e.target.value)} value={email} />
             <input className='inputBox' type='password' placeholder='Enter Password' 
             onChange={(e)=>setPassword(e.target.value)} value={password} />
            <button type='button' className='appButtonLogin' onClick={handleLogin} >Login</button>
     </div>
  )
}

export default Login;
