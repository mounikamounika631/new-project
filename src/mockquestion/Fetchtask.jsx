import axios from "axios";
import { useEffect, useState } from "react";
import React from 'react'
import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { CardContent, Grid } from "@mui/material";
import { blue } from "@mui/material/colors";

export default function Fetchtask() {
    const [data,setData]=useState("");
    
localStorage.setItem("task-data",JSON.stringify(data));
let rs=JSON.parse(localStorage.getItem("task-data"))
console.log(rs)
    let res= async ()=>
    {
      let result=  await axios.get("https://randomuser.me/api/")
      console.log(result.data.results);
      data===""? setData(result.data.results):setData([...data,result.data.results[0]])
      
    }

    useEffect(()=>{
     res()
    },[])
  return (

    <div>
        <Grid container
        rowGap={2}
        columnSpacing={1}
        display='flex'
        justifyContent={"space-evenly"}>
      
      {rs&&rs.map((element)=>{
          return(
     <Grid item xs={10} md={6} lg={4} >
    <Card style={{ backgroundColor:"#80deea"}}>
      <CardContent>
      <img variant="top" src={element.picture.medium} />
        <Card.Text>
          
          <h6>Name:{`${element.name.first} ${element.name.last}`}</h6>
          
        </Card.Text>
        
      </CardContent>
     
    </Card>
    </Grid>
    )})}
    </Grid>
    <Button variant="primary" onClick={res}>more info</Button>
  </div>
  )
}
