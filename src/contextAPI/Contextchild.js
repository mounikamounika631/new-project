import React,{useContext} from 'react'
import {store} from './Contextapi'

function Contextchild1() {
    const [data, setdata] = useContext(store);
    
  return (
    <div>
        <h1> count:{data.length}</h1>

    </div>
  )
}

export default Contextchild1