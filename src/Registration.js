import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary"  className='mou'   onClick={handleShow}>
        Registration 
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Fill the details</Modal.Title>
        </Modal.Header>
        

<Container>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Name" />
        <Form.Text className="text-muted">
          We'll require your name 
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Select the place of intrest</Form.Label>
      <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">Kashmir</option>
      <option value="2">Goa</option>
      <option value="3">araku</option>
      </Form.Select>
      <Form.Text className="text-muted">
          Please share the intrest of your journey
        </Form.Text>
    
    </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" placeholder="select the date" />
      </Form.Group>
      <Form.Group className="mb-3 mn" controlId="formBasicPassword">
        <Form.Label>Price Range</Form.Label>
        <Form.Control type="number" placeholder="min price"  className='mu'/>
        <Form.Control type="number" placeholder="max price" className='mu'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example