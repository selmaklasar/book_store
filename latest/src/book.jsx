import React, { useState } from "react";

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
import book1 from '../src/joseph annakkutty.jpg';
import book2 from '../src/cover_for_Pathummayude_Aadu.jpg';
import book3 from '../src/Adujivitam.jpg';
import book4 from '../src/robinsoncruso.jpg';
import style from '../src/book.module.css'







function Book(){
 



    return(
      <>
      <div className={style.header}></div>
      <div className="cardContainer">
      <ul>
<div className={style.card1}>
<img src={book3} alt='book3'  className={style.image1}/>
  <h4 className={style.bookname}>Aadujeevitham</h4>
  <p className={style.price1}>Rs.300</p>
  <p></p>
  <p><button>Add to Cart</button></p>
</div></ul>
</div>

      <ul>
      <li> <div className={style.cart1}>
        <img src={book1} alt='book1'  className={style.bookimg1}></img>
        <p className={style.quantity}>Qty <button  className={style.btnadd}>+</button></p>
        <button  className={style.btnsub}>-</button>
        
       <button  className={style.btn1}>Add to Cart</button></div></li> 
       <li>
       <div className={style.cart2}>
        <img src={book2} alt='book2'  className={style.bookimg2}></img>
        
       <button  className={style.btn2}>Add to Cart</button></div></li>
       <li>
       <div className={style.cart3}>
        <img src={book3} alt='book3'  className={style.bookimg3}></img>
        
       <button  className={style.btn3}>Add to Cart</button></div></li>
       <li>
       <div className={style.cart4}>
        <img src={book4} alt='book4'  className={style.bookimg4}></img>
        <button  className={style.btn4}>Add to Cart</button></div></li>
       </ul>
       </>
    );
}
export default Book;

