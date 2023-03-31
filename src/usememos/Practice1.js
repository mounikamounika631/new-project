import React, { useMemo, useState } from 'react'
import { Button } from 'react-bootstrap'

function Practice1() {

    const [counter, setoCunter] = useState(0);
    const[number,setNumber]=useState(5);
     const Factorial=  React.useMemo(()=>fact(number),[number])
  return (
    <div>
        <center>
        factorial:{Factorial} <br/>
      <Button onClick={()=>setoCunter(counter+1)}> counter increment</Button><br/>
      {/* <Button onClick={()=>setNumber(counter+1)}> number increment</Button><br/> */}
      count:{counter}
      </center>
    </div>
  )
}

const fact=(n)=>{
    let answer=1;
    for(var i=n;i>=1;i--)
    {
        answer=answer*i;
    }
    console.log("factorial function calling");
    return answer;
}

export default Practice1
