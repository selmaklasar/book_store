import React from 'react';
import Cart from './cart';
import { List} from "products";


function Product() {
  return (
    <div> 
      <section>
        {List.map((item)=> {
              
                <Cart
                  key={item.id} 
                  bookName={item.bookName} 
                  author={item.author}
                  price={item.price}
                  image={item.image}
                />
              

            })}
    </section>
    </div>
  )
}

export default Product;

