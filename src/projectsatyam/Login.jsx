import { Button } from '@mui/material'
import { fontFamily } from '@mui/system'
import React, { useState } from 'react'
import "../projectsatyam/Style2.css"
import Inputs from './Inputs'

function Login() {
  const [inputs, setinputs] = useState({

    employeeId:'',
    password:''

  })
  const[eye,seteye]=useState(true);
  const[type,settype]=useState("password")
  const[hide,setHide]=useState(true)

  console.log(type);
  let data=  [
        {
          name:"employeeId",
          label:"Employee Id",
          type:"email",
          pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+[a-z]{2,4}$",
          placeholder:"",
          require
          
      },
      {
        
        name:'password',
        label:"Password",
        type:type,
        placeholder:"enter password",
        icon:"fa fa-eye-slash",
        icon1:"fa fa-eye",
        visible:"false",
        require
        
        
    },

    ]
    const handleChange=(e)=>
    {
      setinputs({...inputs,[e.target.name]:e.target.value})
    }

    const handleClick=(e)=>{
      e.preventDefault()
    }


    
  
  return (
    <div>
      <div className='dispaly1'>
      <img src="./images/logo2.png" alt="error" />
      </div>
      <div className='main'>
      <div className='Dispaly'>
      <img src="./images/logo2.png" alt="error" />
      </div>
      <div className='colr'>
      <img src="./images/logo3.png" alt="error" />
      <h1 className='samp1'> Login</h1>
      <div>
        {data.map((e,i)=>
        (
      <Inputs {...e} eye={eye} seteye={seteye} settype={settype} hide={hide} setHide={setHide} onChange={handleChange} value={inputs[e.name]} key={i}/>
      ))}
      
      </div><br/>
      <Button  type='submit' onClick={handleClick} style={{backgroundColor:"#FFAA17",color:'white',position:'absolute',width:200,paddingRight:100}}>Login</Button>
      <Button style={{backgroundColor:"black",color:'white',position:'relative', width:102,marginLeft:97.6,height:35.3,marginTop:0.5,marginRight:0.1}} onClick={()=>setinputs("")}>cancel</Button>
      </div>
      </div>
    </div>
  )
}

export default Login
