import Web from "./website"
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import React, { useState } from "react"
import Login from "./login"
import Sign from "./signup"
import Feed from "./feedback"
import About from "./about"
import Collection from "./collection"

import Example1 from "./examp"
import Example2 from "./examp1"
import Prob from "./props1"
import Probs from "./props2"
import Hook from "./hooks"
import Use from "./usestate"

import Respond from "./respond"











function App() {


  return (
    <>
    
    
    <Router>
    
      <Routes>
      
     
     
      
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Web />} />
        <Route path="/signup" element={<Sign/>} />
         <Route path="/feedback" element={<Feed/>} />
         <Route path="/Respond" element={<Respond/>} /> 
        <Route path="/about" element={<About/>}/>
        <Route path="/Login" element={<Login/> }/>
        <Route path="/collection" element={<Collection/>}/>
        
        
        <Route path="/Example1" element={<Example1/>}/>
        <Route path="/Example2" element={<Example2/>}/>
        <Route path="/Prob" element={<Prob/>}/>
        <Route path="/Probs" element={<Probs/>}/>
        <Route path="/Use" element={<Use/>}/>
        
        
        
        

      </Routes>
     
    </Router>
   
    



  </>
    
  )
}

export default App
