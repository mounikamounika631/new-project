import React, { useState } from 'react'
import { useTransition } from 'react';
const defaultList=[1,2,3,4,5,6]
function Practice2() {
    const [name, setName] = useState("");
    const[list,setList]=useState(defaultList);
    const[isPending,startTransition]=useTransition();
    const listSize=2000;
let handlechange=(e)=>
{
    const {value}=e.target;
    setName(value);

      startTransition(()=>
{
    const data=[];
    for(let i=0;i<listSize;i++)
    {
        data[i]=value;
    }
    setList(data)

})
}
  return (
    <div>
      <input type={"text"} value={name} onChange={handlechange}></input>
      {isPending?(<div>loading...........</div>):(
        list.map((element)=>
        {
            return(<div> list items are :{element}</div>)
        })
      )}
    </div>
  )
}

export default Practice2
