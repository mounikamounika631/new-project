import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';

function Practicef() {
    const [data, setData] = useState([]);

    let res= async ()=>
    {
        let result=await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(result.data);
        setData(result.data);
    }

    useEffect(() => {
     res()
    }, [])
    
  return (
    <div>
      <h1> Hello</h1>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>username</th>
          <th>name</th>
          <th>phone</th>
          <th>website</th>
          <th>email</th>
        </tr>
      </thead>
      <tbody>
        {data.map((element)=>{
            return(
            <tr>
          <td>{element.id}</td>
          <td>{element.username}</td>
          <td>{element.name}</td>
          <td>{element.phone}</td>
          <td>{element.website}</td>
          <td>{element.email}</td>
        </tr>
        )
    })}
        </tbody>
        </Table>
    </div>
  )
}

export default Practicef
