import React,{useReducer} from 'react'


let initialState ={ count:0 }

function reduce(state,action){
    switch(action.type){
        case 'increment':return {count:state.count + 1}
        case 'decrement':return {count:state.count - 1}
        case 'reset':return {count:state.count=0}
        default:throw console.error();
    }

}

function First() {
const [state, dispatch] = useReducer(reduce, initialState)
return (
    <div>
      <h1>the intial count is: {state.count}</h1>
      <button onClick={()=>dispatch({type:'increment'})}>increment</button>
      <button onClick={()=>dispatch({type:'decrement'})}>decrement</button>
      <button onClick={()=>dispatch({type:'reset'})}>reset</button>
    </div>
  )
}

export default First
