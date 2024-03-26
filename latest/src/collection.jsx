
import React from 'react';

import style from './collection.module.css';
import mala from '../src/malala.jpg';
import rise from '../src/rise of america.jpg';
import sherluck from '../src/sherluckhomies.jpg';
import harry from '../src/harrypotter.jpg';



function Collection() {
   

    
    return (
        <>
        
        
     <div className={style.header}></div>
  
     <ul>
  <li>   <div className={style.cart1}>
      <img src={mala} alt='malala'  className={style.image}/>
      
      <button  className={style.btn1}>Add to Cart</button></div></li>
      <div className={style.div2}>
<li>
    
<div className={style.cart2}>
     <img src={rise} alt='rise' className={style.bookimage2}/>
    <button  className={style.btn2}>Add to Cart</button>
</div></li></div>
<li>
<div className={style.cart3}>
    <img src={sherluck} alt='sherluck' className={style.bookimage3}/> 
    <button  className={style.btn3}>Add to Cart</button>
</div>
</li>
<li>
<div className={style.cart4}>
    <img src={harry} alt='harry' className={style.bookimage4}/>
       <button  className={style.btn4}>Add to Cart</button>
     </div></li> 
</ul>


        </>
    );
}

export default Collection;
