import React from 'react'

function Inputs(props) {

    const{label, ...input}=props
    
  return (
    <div>
        <label>{label}</label>
      {/* <input {...input} onChange={onChange} /> */}
    </div>
  )
}

export default Inputs
