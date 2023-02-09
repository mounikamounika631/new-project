import React, { useReducer } from 'react'
import { Button } from 'react-bootstrap'
let initialState={count:0}
function Reduce(state,action)
{
    switch(action.type)
    {
        case 'increment':return{count:state.count+1}
        case 'decrement':return{count:state.count-1}
        case 'reset':return{count:state.count=0}
        case 'multiply':return{count:state.count*2}
        default:throw console.error();
    }
    
}
function Practice1() {
    const [state, dispatch] = useReducer(Reduce, initialState)
  return (
    <div>
      <h1> The practice count is:{state.count}</h1>
      <Button onClick={()=>dispatch({type:'increment'})}> inc</Button>
      <Button onClick={()=>dispatch({type:'decrement'})}> dec</Button>
      <Button onClick={()=>dispatch({type:"reset"})}> reset</Button>
      <Button onClick={()=>dispatch({type:"multiply"})}>Multiply</Button>
    </div>
  )
}

export default Practice1
