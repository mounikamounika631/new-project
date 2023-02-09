import React,{useState} from 'react'

function SecondComponent() {
    const [value, setvalue] = useState(0);
let incrementbycomp2=()=>
{
    setvalue(value+1);
}
  return (
    <div>
      <h1> increase count by:  {value} </h1>
      <button onMouseOver={incrementbycomp2}>click me</button>
    </div>
  )
}

export default SecondComponent
