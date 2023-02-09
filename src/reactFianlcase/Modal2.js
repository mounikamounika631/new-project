import  React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
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
  p: 4,
};
let ls = localStorage.getItem("courses")

  let local =ls ? JSON.parse(ls):[]



export default function BasicModal() {


    const [input, setInput] = useState([]);


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  const [sopen, setSopen] = useState(false);
  const handleSopn =()=>setSopen(true);
  const handleSclose =()=> setSopen(false);
  
  let addData=()=>
  {
    local.push(input)
    localStorage.setItem("courses",JSON.stringify(local))
  }

  return (
    <div>
        <Modal
        open={sopen}
        onClose={handleSclose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                <p>Are you sure you want to submit the data</p>
                <Button onClick={()=>{addData();handleSclose()}}> yes</Button>
                <Button> No</Button>
                </Typography>


            </Box>
        </Modal>
      <Button onClick={handleOpen}> Add</Button>

     <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" onChange={(e)=>setInput({...input,name:e.target.value})} value={input.name} />
      </Form.Group>
      <Form.Label>Plan</Form.Label>
      <Form.Select aria-label="Default select example" onChange={(e)=>setInput({...input,plan:e.target.value})} value={input.plan}>
      <option> select your plan</option>
      <option value="swimming">swimming</option>
      <option value="playing">playing</option>
      <option value="riding">riding</option>
    </Form.Select>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" onChange={(e)=>setInput({...input,date:e.target.value})} value={input.date}>
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" placeholder="Enter your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" onChange={(e)=>setInput({...input,price:e.target.value})} value={input.price}>
        <Form.Label>price</Form.Label>
        <Form.Control type="number" placeholder="Enter your price" />
      </Form.Group>
      </Form>                   


          </Typography>
          <Button onClick={()=>{handleSopn();handleClose()}}>Submit</Button>
          <Button onClick={handleSopn}>Cancel</Button>
        </Box>
      </Modal>
    </div>
  );
}