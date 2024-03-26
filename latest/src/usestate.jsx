import React from "react";

import { useState } from "react";
function Use(){
    const[count,setCount]=useState(0)
   const changeCount=()=>{
    setCount(count+1);

   };
    return(
        
  <>
  <div>
 <button onClick={changeCount}>Quantity</button>



  </div>
  </>
  )
}
export default Use;