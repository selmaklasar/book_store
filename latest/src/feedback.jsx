
import React, { useState } from 'react';
import style from './feedback.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Feed(){
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
  
    const[feed,setFeed]=useState('')
    const [signupMessage, setSignupMessage] = useState('');
    


    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(name)
   
        try {
            
            const response = await axios.post('http://localhost:4000/feedback',{
                
            name:name,
            email: email,
            
            feed:feed
           
            });
            console.log(email)
            console.log("data send")
            console.log(response.data);
            

if(response.status===200){
    
    console.log("Thankyou for your feedback") 
    

    toast.success("ThankYou For your feedback !", {
        position: "top-right",
    });


}

else {
    console.log("Failed to submit feedback");
  }
}
   
catch (error) {
if (error.response && error.response.status === 500) {
    setSignupMessage('You need to signup First');
    toast.error("Incorrect Email!", {
        position:  "top-right",
      });
    

} else {
    console.error('Error:', error);
}
}
};



    return(

<>
<div className={style.div}>
<div className={style.head}></div>
        
        <div className={style.div11}>
           <h4 className={style.h4}>BOOKSHOPPE</h4> 
           <div className={style.div2}>
   
   <ul className={style.Link}>
       <Link to="/login">Login</Link>
       <Link to="/signup">Sign Up</Link>
        <Link to="/about">About</Link>
       <Link to="/feedback">feedback</Link></ul>
       
       
   </div>
     </div> 
     
      
        <div className={style.div1}>
        <form className={style.form} onSubmit={handleSubmit}>
        <label className={style.name}>NAME</label>
        <input type="text" placeholder="Enter your name" onChange={(e)=>{setName(e.target.value)}}/>
        <label className={style.email}>EMAIL</label>
        <input type="email" placeholder="Enter your email" className={style.mail} onChange={(e)=>{setEmail(e.target.value)}}/>
 
        <label className={style.feedback}>FEEDBACK</label>
        <input type="text" placeholder="Enter your feedback" className={style.fdback} onChange={(e)=>{setFeed(e.target.value)}}/>
        {signupMessage && <p className={style.message}>{signupMessage}</p>}
        <input type="submit" value="SUBMIT" className={style.submit}  />
     
    </form>
    <ToastContainer />
    </div>
    <div/>
</div>
</>
    )
}

export default Feed