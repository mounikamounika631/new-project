import React,{useContext,useState} from 'react'
import { store } from './Contextapi'

function Contextapi2() {
    const [data, setdata] = useContext(store)
    const [name, setName] = useState('');
    const submitHandler = e=>{
        e.preventDefault();
        setdata([...data,{brandname:name}])
        setName('');
    }
  return (
    <div>
     {data.map(item=><h3>{item.brandname}</h3>)}
     <form onSubmit={submitHandler}>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  placeholder="enter brandname" />
        <input type="submit" value="add" />

     </form>

    </div>
  )
}

export default Contextapi2