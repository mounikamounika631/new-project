import React from 'react'
import {useNavigate} from "react-router-dom"
function Home() {
  let history=useNavigate();
  return (
    
    <div>
      <h1>  wecome to Home page</h1>
      <button onClick={()=>{history("/about")}}> login</button>
      <button onClick={()=>{history(-1)}}> go back</button>
    </div>
   
  )
}

export default Home
