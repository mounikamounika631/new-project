import React from 'react'
import { useTransition } from 'react';
import { useState } from 'react'

const defaultList=[1,2,3,4,5]
function Practice1() {
    const [name, setName] = useState("");
    const [list, setlist] = useState(defaultList);
    const[isPending,startTransition]=useTransition();
    let sizeOfList=10000;
    const handleChange=(e)=>
    {
        const {value}=e.target;
        setName(value)

        startTransition(()=>
        {
            const data=[];
            for(let i=0;i<sizeOfList;i++){
                data[i]=value;
            }
            setlist(data);
        })
    }
  return (
    <div>
      <input type={"text"} value={name} onChange={handleChange}></input>
      {isPending ?(<div>loading...........</div>):(list.map((element)=>
      {
        return(<div>list item:{element}</div>)
      })
      )}
    </div>
  )
}

export default Practice1
