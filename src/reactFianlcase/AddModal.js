import  React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { Form } from 'react-bootstrap';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

// function ChildModal() {
  
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <React.Fragment>
//       <Button onClick={handleOpen}>Submit</Button>
//       <Modal
//         hideBackdrop
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="child-modal-title"
//         aria-describedby="child-modal-description"
//       >
//         <Box sx={{ ...style, width: 200 }}>
          
//           <b><p id="child-modal-description">
//            Are you sure you want to adding the data
//           </p></b>
//           <Button onClick={handleClose}>yes</Button>
//           <Button onClick={handleClose}>Cancel</Button>
//         </Box>
//       </Modal>
//     </React.Fragment>
//   );
// }

export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => 
    setOpen(true);
  
  const handleClose = () => 
    setOpen(false);
    
  
  const [childopen, setchildopen] = React.useState(false)

  const handlechildopen=()=>setchildopen(true);
  const handlechildClose=()=>setchildopen(false);
  // const [plan, setPlan] = React.useState('');
  
  // const handleChange = (event) => {
  //   setPlan(event.target.value);
  // };
  const[input, setInput]=useState([]);

  let ls = localStorage.getItem("courses")

  let local =ls ? JSON.parse(ls):[]
  let addData=()=>
  {
    local.push(input)
    localStorage.setItem("courses",JSON.stringify(local))
  }

  return (
    <div>
      <Modal
        hideBackdrop
        open={childopen}
        onClose={handlechildClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h1> are you sure </h1>
        <Button onClick={()=>{addData();handlechildClose()}}>send</Button>
        <Button onClick={()=>{handlechildClose();handleOpen()}}>close</Button> 
        </Box>
      </Modal>
      <Button onclick={handleOpen}> add</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Fill The Details</h2>
          <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" onChange={(e)=>{setInput({...input,name:e.target.value})}} value={input.name}>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
      </Form.Group>
      <Form.Select aria-label="Default select example" onChange={(e)=>{setInput({...input,plan:e.target.value})}} value={input.plan}>
      <option>plan</option>
      <option value="swimming">swimming</option>
      <option value="water">water games</option>
      <option value="site seeing">site seeing</option>
      <option value="ride">ride</option>
      <option value="waterfalls"> waterfalls</option>
    </Form.Select>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" onChange={(e)=>{setInput({...input,date:e.target.value})}} value={input.date}>
      <Form.Label>Date</Form.Label>
        <Form.Control type="Date" placeholder="Enter your available date" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" onChange={(e)=>{setInput({...input,price:e.target.value})}}  value={input.price}>
      <Form.Label>price</Form.Label>
        <Form.Control type="number" placeholder="Enter your selected price" />
      </Form.Group>
      <Button onClick={()=>{handlechildopen();handleClose()}}>Submit</Button>
        <Button onClick={handleClose}>close</Button>
      </Form>  
       
        </Box>
      </Modal>
    </div>
  );
}