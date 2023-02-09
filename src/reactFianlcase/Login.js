
import axios from 'axios'
import React, {useState} from 'react'
import { Button } from 'react-bootstrap'
import "./Style1.css"
import { useNavigate } from 'react-router-dom'

function Login() {
let history= useNavigate();
const [first, setfirst] = useState({
  email:"",
  password:"",
})


    let resdata= async ()=>{
        let res= await axios.post("https://products-jwt.onrender.com/users/login",first);
        let Data= JSON.stringify(res)
        localStorage.setItem("user-Info",Data);
        console.log(Data)
        history("/link")
    }

  return (
    <div>
        <div className='m'>
      <h1> login page</h1>
     <input type="text" placeholder=' email' className='furm' onChange={(e)=>{setfirst({...first,email:e.target.value})}} ></input><br></br>
     <br></br>
     <input type="password" placeholder=' password' className='furm' onChange={(e)=>{setfirst({...first,password:e.target.value})}}></input>
     <br /><br />
     <Button onClick={resdata}>Login</Button>
     </div>
    </div>
  )
}

export default Login
