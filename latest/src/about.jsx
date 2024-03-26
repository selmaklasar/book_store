import style from './about.module.css'
import { Link } from 'react-router-dom'
function About(){

    return(
    <>
     <div className={style.div1}></div>
     <div className={style.div2}>
   
   <ul>
       <Link to="/login">Login</Link>
       <Link to="/signup">Sign Up</Link>
        <Link to="/about">About</Link>
       <Link to="/feedback">feedback</Link></ul>
       
       
   </div>
    
    <p className={style.abt}>This website used for books.You can shop your favorite books Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br/>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
    <div className={style.div2}></div>
    </>
    
    
    )
    
    
    }
    export default About;