import React, { useRef } from "react";

function Hook(){
   const inputref=useRef();

   const focus_input=()=>{

inputref.current.focus()

   }
   
    return(
<div>
<input type="text" ref={inputref}/>
<button onClick={focus_input}>click</button>
      
</div>
    )
}
export default Hook;