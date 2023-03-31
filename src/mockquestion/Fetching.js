import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import CustomizedTables from './Table'
import Table from 'react-bootstrap/Table';


function Fetching() {
const [data,setData]=useState([])

    let res= async ()=>
    {
       let result=  await axios.get("https://jsonplaceholder.typicode.com/users")
      // let result=  await axios.get("https://randomuser.me/api/")
      console.log(result.data);
      setData(result.data);
      
    }

    useEffect(()=>{
     res()
    },[])

    
  return (
    <div>
      
<h1> heloo</h1>



    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>username</th>
          <th>email</th>
         
          <th>phone</th>
          <th>website</th>
          
        </tr>
      </thead>
      <tbody>
        {data.map((element)=>{
          return(
        <tr>
          <td>{element.id}</td>
          <td>{element.name}</td>
          <td>{element.username}</td>
          <td>{element.email}</td>
          <td>{element.phone}</td>
          <td>{element.websites}</td>
        </tr>
        )})}
      </tbody>
    </Table>
 



      
      
    </div>
  )
}

export default Fetching
