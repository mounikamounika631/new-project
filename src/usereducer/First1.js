import React, { useReducer } from 'react'
import { Button } from 'react-bootstrap'

let initialState={count:0}

 function Reduce(state,action)
{
    switch (action.type) {
        case 'increment':return{count:state.count+1}
        case 'decrement':return{count:state.count-1}
        case 'reset':return{count:state.count=0}
        default:throw console.error();
    }

}

function First1() {
    const [state, dispatch] = useReducer(Reduce, initialState)
  return (
    <div>
      <h1> Hello the initial count is:{state.count} </h1>
      <Button onClick={()=>dispatch({type:'increment'})}> Incre</Button>
      <Button onClick={()=>dispatch({type:'decrement'})}> decre</Button>
      <Button onClick={()=>dispatch({type:'reset'})}> reset</Button>
    </div>
  )
}

export default First1
