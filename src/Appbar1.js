import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter,Link,Route,Routes} from 'react-router-dom'

import Home from "./Home";
import About from "./About"
import Registration from './Registration';

import "./Pstyle.css"
function Appbar1() {
  return (
    <BrowserRouter>
    <div>
      <Navbar bg="primary"  expand="lg">
      <Container>
       <Nav className='na'>
            <Nav.Link as={Link} to={"/home"} className= 'm'>Home</Nav.Link>
            <Nav.Link as={Link} to={"/about"} className='m'>About</Nav.Link>
            <Nav.Link href="/registration" className='m'>Registration</Nav.Link>
            </Nav>
            </Container>
            </Navbar>
          </div>
            <div>
           
      
      <Routes>
       <Route path="/home" element={<Home/>} />
       <Route path="/about" element={<About/>} />
       <Route path="/registration" element={<Registration/>} />
      </Routes>
      
            </div>

            
      
    </BrowserRouter>
  )
}

export default Appbar1
