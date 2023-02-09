import React,{useState,useEffect} from 'react'

function First() {
    const [count, setcount] = useState(0)
    useEffect(() => {
      if(count===5)
      {
        throw new Error("app is crashed from componentA")
      }
    
      
    }, [count])
    
  return (
    <div>
      <h1>Hello count:   {count}</h1>
      <button onClick={()=> setcount(count+1)}>click me</button>
    </div>
  )
}

export default First
