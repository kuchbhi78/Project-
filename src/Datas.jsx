import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const Alldata=()=>{
             return(
                 <>
                 <Navbar bg="primary" variant="dark">
    
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">About</Nav.Link>
      <Nav.Link href="#meet">Meet the team</Nav.Link>
      <Nav.Link href="#contact">Contact Us</Nav.Link>
      <Nav.Link href="#service">Service</Nav.Link>
      <Nav.Link href="#special">Special-Offer</Nav.Link>
      <Nav.Link href="#advice">Pet-Advice</Nav.Link>
      <Nav.Link href="#boarding">Boarding</Nav.Link>
      <Nav.Link href="#toure">Take a toure</Nav.Link>
      <Nav.Link href="#employement">Employement</Nav.Link>
      <Nav.Link href="#faq">FAQ</Nav.Link>
    </Nav>
  </Navbar>
   

                 </>
             )
}

export default Alldata;