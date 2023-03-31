import React from 'react'

function Inputs({label,icon,visible,icon1,hide,setHide, eye,seteye, type,settype,...e}) {

  
  const Eye=()=>
  {
    if(type==="password")
    {
      seteye(false)
      settype("text")
      setHide(false)
    }
    else{
      seteye(true)
      settype("password")
      setHide(true)

    }
    
  }



  return (

    <div>
      <div>
      <label className='lab-1'>{label}</label><br/>
      <input {...e} type={hide? "password":"text"} />
      <div style={{position:'relative',bottom:28,left:79}}><i onClick={Eye} class={eye? icon:icon1}  aria-hidden={visible}></i></div>
      </div>
      
    </div>
  )
}

export default Inputs
