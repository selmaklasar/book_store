  import style from './Website.module.css'
import React from 'react';
import { useState,useRef } from 'react';
import { Link } from 'react-router-dom';
import menu from '../src/menu.png';





function Web(){
    
    const inputref=useRef();

    const focus_input=()=>{
 
 inputref.current.focus()
 
    }
    
     
 
    
    
const[hover,setHover]=useState(false)

const mouserin=()=>{
setHover(true)

}

const mosueout=()=>{
setHover(false)

}
const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
}



 return(

 <> 
 
<div className="body">
        <div className={style.head}></div>
    <div className={style.div1}>
        <h1 className={style.h1}>BOOKSHOPPE</h1>
     <div className={style.div2}>
   
<ul>
    <Link to="/login">Login</Link>
    <Link to="/signup">Sign Up</Link>
     <Link to="/about">About</Link>
    <Link to="/feedback">feedback</Link></ul>
   
    <button onClick={toggleDropdown} className={style.drpdwnbtn}>Collections</button>

{showDropdown &&(
    <ul className={style.ulstyle} ><li>
<Link to="/book"    className={style.bookdrp}>Malayalam</Link></li>

<li> <Link to="/Product">English</Link></li>
</ul>
)
}
   
    </div> </div> 
         <h3 className={style.h3}>The World belongs to those who read </h3>
        <h4 className={style.h4}>Lorem Ipsum has been the industry's standard dummy text ever
            <br/>since the 1500s when an unknown printer took a galley of type</h4>
            <div className={style.searchbox}>
        <input type="text" placeholder="type your favorite books"  ref={inputref} className={style.txt}/>
        <input onClick={focus_input} type="button" value="Search" className={style.search}/></div>
        <img className={style.menuimg}  onClick={mouserin} onMouseDown={mosueout} src={menu} alt="menu"/>
        <p className={style.abtus}>About Us</p>
        <p className={style.abt}>
            
      This website used for books.You can shop your favorite books Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
        <div className={style.footer}>
            <p>Follow Us:</p>
            <FontAwesomeIcon icon="fa-brands fa-facebook" />
        </div>
    
    {hover &&(
        <ul className={style.dropdown_list} >
        
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li> <Link to="/collection"> Collection</Link></li>
    
        <li><Link to="/about">About</Link></li>
        
        <li><Link to="/feedback">feedback</Link></li></ul>
)

}
        </div>
        </>
    
       
        
 )
        
    }
export default Web;