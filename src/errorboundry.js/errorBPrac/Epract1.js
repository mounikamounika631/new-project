import React, { useEffect, useState } from 'react'

function Epract1() {

    const [data, setData] = useState(0);

    useEffect(() => {
      if(data===10)
      {
        throw new Error("Our company server is too slow")
      }
    
      
    }, [data])
    
  return (
    <div>
      <h1> hello data:{data}</h1>
      <button onClick={()=>setData(data+1)}> yes click me</button>
    </div>
  )
}

export default Epract1
