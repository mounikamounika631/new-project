import React, { useReducer, useState } from 'react'
import { Button } from 'react-bootstrap'

let firstvalue={count:0}


function Reduce(state,action)
{
    switch(action.type)
    {
       case 'increment':return{count:state.count+1}
       case 'decrement':return{count:state.count-1}
       case 'multiplication':return{count:state.count*3}
       case 'reset':return{count:state.count=0}
       default:throw console.error();
    }

}

function Practice2() {
    const [state, dispatch] = useReducer(Reduce ,firstvalue)
  return (
    <div>
            <h1> The count is :{state.count}</h1>
            <Button onClick={()=>dispatch({type:'increment'})}> Incre</Button>
            <Button onClick={()=>dispatch({type:'decrement'})}> Decre</Button>
            <Button onClick={()=>dispatch({type:'multiplication'})}> Multi</Button>
            <Button onClick={()=>dispatch({type:'reset'})}> Reset</Button>
    </div>
  )
}

export default Practice2
