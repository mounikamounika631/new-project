
import axios from 'axios'
import React, {useState } from 'react'
import { Button } from 'react-bootstrap'
import "./Style1.css"
import { useNavigate } from 'react-router-dom'

function Login1() {
let history= useNavigate();
const [first, setfirst] = useState({
    fname:"",
    lname:"",
     email:"",
    password:"",
    role:""
})


    let resdata1= async ()=>{
        let res= await axios.post(" https://products-jwt.onrender.com/users/register",first);
        let Data= JSON.stringify(res)
        localStorage.setItem("user-Info",Data);
        console.log(Data)
        history("/home")
    }

  return (
    <div>
        <div className='m'>
      <h1> Register page</h1>
     <input type="text" placeholder=' firstName' className='furm' onChange={(e)=>{setfirst({...first,fname:e.target.value})}} ></input><br></br>
     <br></br>
     <input type="text" placeholder=' lastName' className='furm' onChange={(e)=>{setfirst({...first,lname:e.target.value})}}></input>
     <br /><br />
     <input type="text" placeholder=' email' className='furm' onChange={(e)=>{setfirst({...first,email:e.target.value})}} ></input><br></br>
     <br></br>
     <input type="password" placeholder=' password' className='furm' onChange={(e)=>{setfirst({...first,password:e.target.value})}}></input>
     <br /><br />
     <input type="text" placeholder=' user/admin' className='furm' onChange={(e)=>{setfirst({...first,role:e.target.value})}}></input>
     <br /><br />
     <Button onClick={resdata1}>Login</Button>
     </div>
    </div>
  )
}

export default Login1
