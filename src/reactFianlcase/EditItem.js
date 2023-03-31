import  React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useEffect } from 'react';

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




export default function EditItem({setopenedit,open,edit,idx,selectdata}) {

  const [editModal, setEditModal] = useState(false)
  let handleeditopen=()=>setEditModal(true);
  let handleeditclose=()=>setEditModal(false);
                     
    const[editData,setEditData]=useState(selectdata)

    useEffect(() => {
        setEditData({...selectdata});
      }, [selectdata]);

      let editedData=()=>
      {
        let local=JSON.parse(localStorage.getItem("courses"))
        local[idx]=editData
        localStorage.setItem("courses",JSON.stringify(local))
      }

       //close the Editmodal
  let closeModal = () => {
    setopenedit(false);
    setEditData({
      name: "",
      plan: "",
      date: "",
      price: "",
    });
  };

 



//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);



//   const [sopen, setSopen] = useState(false);
//   const handleSopn =()=>setSopen(true);
//   const handleSclose =()=> setSopen(false);
  
  
  return (
    <div>
        <Modal
        open={editModal}
        onClose={handleeditclose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                <p>Are you sure you want to submit the data</p>
                <Button onClick={()=>{editedData();closeModal()}} > yes</Button>
                <Button onClick={handleeditclose}> No</Button>
                </Typography>


            </Box>
        </Modal> 
       
     <Modal
        open={setopenedit}
        onClose={()=>setopenedit(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" onChange={(e)=>setEditData({...editData,name:e.target.value})} value={editData.name} />
      </Form.Group>
      <Form.Label>Plan</Form.Label>
      <Form.Select aria-label="Default select example" onChange={(e)=>setEditData({...editData,plan:e.target.value})} value={editData.plan}>
      <option> select your plan</option>
      <option value="swimming">swimming</option>
      <option value="playing">playing</option>
      <option value="riding">riding</option>
    </Form.Select>
      <Form.Group className="mb-3" controlId="exampleForm.ControleditData1" onChange={(e)=>setEditData({...editData,date:e.target.value})} value={editData.date}>
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" placeholder="Enter your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControleditData1" onChange={(e)=>setEditData({...editData,price:e.target.value})} value={editData.price}>
        <Form.Label>price</Form.Label>
        <Form.Control type="number" placeholder="Enter your price" />
      </Form.Group>
      </Form>                   
        </Typography>
          <Button onClick={handleeditopen}>Edit</Button>
          <Button onClick={closeModal}>Cancel</Button>
        </Box>
      </Modal>
    </div>
  );
}
