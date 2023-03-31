import React, { useReducer } from 'react'
import { Button } from 'react-bootstrap'

let varm={count:0}

function Reduce(state,action)
{
    switch(action.type)
    {
        case 'inc':return{count:state.count+1}
        case 'dec':return{count:state.count-1}
        case 'mul':return{count:state.count*2}
        case 'res':return{count:state.count=0}
        default:throw console.error();
    }
}

function Practice3() {
    const [state, dispatch] = useReducer(Reduce, varm)
  return (
    <div><h1>The count is{state.count}</h1>
        <Button onClick={()=>dispatch({type:'inc'})}>I</Button>
        <Button onClick={()=>dispatch({type:'dec'})}>D</Button>
        <Button onClick={()=>dispatch({type:'mul'})}>M</Button>
        <Button onClick={()=>dispatch({type:'res'})}>R</Button>
      
    </div>
  )
}

export default Practice3
