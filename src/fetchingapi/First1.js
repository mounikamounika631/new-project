import { TableHead } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import AddProduct1 from "./AddProduct1"
function First1() {
  const [product, setProduct] = useState([]);
  const [open, setOpen]=useState(false)
  const [openedit, setOpenEdit] = useState(false)
  let [selectedProduct, setSelectedProduct] = useState({});
    useEffect(() => {
     fetchProduct();
   }, [])
    let fetchProduct= async()=>
    {
     let result=await axios.get("https://p-9x7e.onrender.com/products/products");
    
    if(result.data.error)
    {
       alert("something went wrong");
    }else{
      let resultProduct=result.data.data;
      console.log(resultProduct);
      setProduct(resultProduct);
    }
  }
  //addProduct modal open
  let modalOpen = () => {
    setOpen(true);
  };
  //EditProduct modal open
  let modalEditOpen = (data) => {
    setOpenEdit(true);
    setSelectedProduct(data);
  };
    
  return (
    <div>
      <h1>hello</h1>
      <Table className="table table-striped">
        <TableHead>
          <th>product ID</th>
          <th>Product Name</th>
          <th>Product Description</th>
          <th>Product Price</th>
          <th>Product image</th>
          <th>
              <Button  onClick={modalOpen}>Add Product</Button>
            </th>
        </TableHead>
        <tbody>
        {product.map((element)=>
        {
          return(
            <tr id={element._id}>
              <td>{element._id}</td>
                <td>{element.pName}</td>
                <td>{element.pDesc}</td>
                <td>{element.pPrice}</td>
                <td>
                  <img src={element.pImg} height="20px" width="20px"></img>
                </td>
                <td>
                  <Button onClick={modalEditOpen}>Edit</Button>
                  <Button>Delete</Button>
                </td>

            </tr>
          )
        })}
        </tbody>
      </Table>
      {open && <AddProduct1 open={open}
                            setOpen={setOpen}
                          product={product}
                        setProduct={setProduct}
                      fetchProduct={fetchProduct}/>}
      
    </div>
  )
}

export default First1
