import React, { useState } from 'react'
import { ModalBody, ModalHeader,Form,Modal,Button } from 'react-bootstrap'
import axios from "axios"


function AddProduct1({ open, setOpen, fetchProduct }) {
    let [formData, setFormData] = useState({
        pName: "",
        pPrice: "",
        pDesc: "",
        pImg: "",
      });
    
      let ifError = () => {
        if (formData === "") {
          alert("fields are nessory");
        }
      };
      let AddOnClick = async () => {
        let AddElements = await axios.post(
          "https://p-9x7e.onrender.com/products/add-product",
          formData
        );
        if (AddElements.data.error) {
            
          alert("something went wrong");
        } else {
          fetchProduct();
          alert(AddElements.data.message);
        }
      };

      let closeModal = () => {
        setOpen(false);
      };
    
  return (
    <div>
       <Modal show={open}>
        <ModalHeader>
            Add product
        </ModalHeader>
        <ModalBody>
        <Form>
            <div className="mb-3">
                <label>Name</label>
                <input name="name" type="text" placeholder='insert product name' 
                
                onChange={(e) => {
                    setFormData({ ...formData, pName: e.target.value });
                  }}></input>
               
                
                 </div>
                 <div className="mb-2">
              <label>Price</label>
              <input
                name="price"
                label="price"
                type="number"
                placeholder="insert Product price"
                onChange={(e) => {
                    setFormData({ ...formData, pPrice: e.target.value });
                  }}></input>
                
                </div>
                <div className="mb-2">
              <label>Discription</label>
              <textarea
                name="disc"
                label="Description"
                type="text"
                placeholder="insert description of your product" onChange={(e) => {
                    setFormData({ ...formData, pDesc: e.target.value });
                  }}></textarea>
            </div>
            <div className="mb-2">
              <label>Image URL</label>
              <input
                name="imageUrl"
                type="text"
                placeholder="insert image URL"  onChange={(e) => {
                    setFormData({ ...formData, pImg: e.target.value });
                  }}></input>
                </div>
                <div>
                <Button
                className="mx-3"
                onClick={() => {
                  ifError();
                  AddOnClick();
                }}
              >
                Submit
              </Button>
              <Button onClick={closeModal}>Close</Button>
                </div>
            </Form>
        </ModalBody>
       </Modal>
    </div>
  )
}

export default AddProduct1
