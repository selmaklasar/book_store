 import { Link } from 'react-router-dom';
import style from './signup.module.css'
import { useState } from 'react';
import axios from 'axios';
function Sign(){


    const[firstname,setFirstname]=useState('')
    const[lastname,setLastname]=useState('')
    const[email,setEmail]=useState('')
    const[phone,setPhone]=useState('')
    const[password,setPassword]=useState('')
    const[confirm_pas ,setConfirm_pas]=useState('')
    



    

    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(password,confirm_pas)
        try {
            const response = await axios.post('http://localhost:4000/register',{

            

            firstname: firstname,
            lastname: lastname,
            email: email,
            phone:phone,
            password: password,
            confirm_pas: confirm_pas
            });
         
            console.log("data sent")
            console.log(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
        window.location.href = "/"; 
    };


    

    return(
        <>
        <div className={style.signup_box}>
        <h1>Sign Up Now!</h1>
        <h3>Please fill in this form to create an account</h3>
        
        <form  className={style.form} onSubmit={handleSubmit}>
            <label>First Name</label>
            <input type="text"  placeholder="Enter Your Firstname" onChange={(e)=>{ setFirstname(e.target.value)}}/><br/>
            <label>Last Name</label>
            <input type="text"placeholder="Enter Your Lastname" onChange={(e)=>{setLastname(e.target.value)}}/><br/>
            <label>EmailId</label>
            <input type="email"placeholder="Enter Your Email" onChange={(e)=>{setEmail(e.target.value)}}/><br/>
            <label>Phone</label>
            <input type="text"placeholder="Enter whatsapp num"  onChange={(e)=>{setPhone(e.target.value)}}/><br/>
            <label>Password</label>
            <input type="text"placeholder="Enter Your password" onChange={(e)=>{setPassword(e.target.value)}}/><br/>
            <label>Confirm</label>
            <input type="text"placeholder="Confirm your password" onChange={(e)=>{setConfirm_pas(e.target.value)}}/><br/>
            <input type="submit"value="Submit"className={style.submit} />
            <p>By continuing, I agree to the<Link to="/terms">Terms of Use</Link>& Privacy Policy</p>
           <p>Already have an account?<Link to="/">click here </Link>to sign in</p>           
         </form>
    </div>
    </>
   )
}
export default Sign;