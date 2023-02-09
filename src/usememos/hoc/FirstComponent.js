import React,{useState} from 'react'

function FirstComponent() {
    const [value, setvalue] = useState(0);
let increment=()=>
{
    setvalue(value+1);
}
  return (
    <div>
      <h1> increase count by{value} </h1>
      <button onClick={increment}>click me</button>
    </div>
  )
}

export default FirstComponent
