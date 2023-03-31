import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'

function Epract() {
    const [data, setData] = useState(0);
    useEffect(() => {
      if(data===5)
      {
        throw new Error("Our app is crashed from starting")
      }
    
      
    }, [data])
    
  return (
    <div>
      <h1> hello Iam error boundray component:{data}</h1>
      <button onClick={()=>setData
    (data+1)}>yes</button>
      </div>
  )
}

export default Epract
