
import React from 'react'
import style from './login.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
function Login(){
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
  
   
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };
    

  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log(email,password)
   
    try {
      console.log(email)

        const response = await axios.post('http://localhost:4000/login',{

        email: email,
        
       
        password: password,
      
        });
     
        console.log("data sent")
        console.log(response.data)
       


        if (response.status === 200) {
          window.location.href = "/Home"; 
          console.log("user logged in successfully");
        } else {
          console.log("Login failed");
        }

    } catch (error) {
        console.error('Error:', error);
    }
};

    return(     
   <>
   
   <div className="body">
        <div className={style.head}></div>
        
    <div className={style.div1}>
       <h4 className={style.h4}>BOOKSHOPPE</h4>  
     <div className={style.div2}>
   
<ul className={style.Link}>
    <Link to="/login">Login</Link>
    <Link to="/signup">Sign Up</Link>
     <Link to="/about">About</Link>
    <Link to="/feedback">feedback</Link></ul>
    
    
</div>
  </div>
  </div>
  
    <div className={style.login}>
      
     <h1 className={style.h1}>Login</h1>
    <form className={style.form} onSubmit={handleSubmit}>
    <label>email</label>
    <input type="email" placeholder="Enter Your Email" onChange={handleEmailChange}/><br/>
    <label>password</label>
    <input type="password" placeholder="Enter password" onChange={handlePasswordChange}/><br/>
    <Link to="forgotpass.html" className={style.resetlink}> Forgot your password?</Link> <br/>
    <input type="submit" value="Login" className={style.login_button} />
    <p>Dont have an account?<Link to="/signup" >click here</Link> to register</p>
    </form>
</div>
 

 </>
              
    
)
}


export default Login;