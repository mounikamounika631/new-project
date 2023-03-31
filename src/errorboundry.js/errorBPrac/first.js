import React, {         useEffect } from 'react'
import { Button } from 'react-bootstrap'
import {useState} from 'react'
function first() {

    const [count1, setCount1] = useState(0)
  return (
    <div>
      <div> hello count:{count1}</div>
      <Button onClick={()=>setCount1(count1+1)}> click me</Button>
    </div>
  )
}

export default first
