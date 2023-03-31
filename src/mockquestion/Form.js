import React, { useState } from 'react'
import Inputs from './Inputs'

function Form() {

    const [data, setData] = useState({
        userName:'',
        email:'',
        password:'',
        confirmPassword:''
    })

    let inputs=[
    {
        id:1,
        name:"userName",
        type:'text',
        placeholder:'User Name',
        label:'User Name'

    },
    {
        id:2,
        name:"email",
        type:'text',
        placeholder:'Email',
        label:"Email"

    },
    {
        id:3,
        name:"password",
        type:'text',
        placeholder:'Password',
        label:"Password"

    },
    {
        id:1,
        name:"confirmPassword",
        type:'text',
        placeholder:'Confirm Password',
        label:'Confirm Password'

    },
]
// let onChange=()=>{
//     setData(...data,[inputs.name]:e.target.value)
// }
  return (
    <div>
        {/* <form>
        <h1>login</h1>
        {inputs.map((e)=>{
            return(
            <Inputs {...e} onChange={onChange}/>
            )
        })}
        </form> */}
    </div>
  )
}

export default Form
