import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import FormControl from 'react-bootstrap/FormControl';



import './style.css'

const navStyle = {
    color: 'white',
    marginLeft: "10px",
    marginRight: "10px"
  }

function Footer() {
    return(
        <Navbar expand="sm"  fixed="bottom" className="blackFooter">
            <Container className="blackFooter">
                <Navbar.Brand bg="light" variant="light" href="#" style={navStyle}>Email Us</Navbar.Brand>
                <FormControl
      placeholder="Email us with any suggestions to improve application."
      aria-label="Email us with any suggestions to improve application."
      aria-describedby="basic-addon2"
    />
                {/* <Navbar.Brand bg="light" variant="light" href="#" style={navStyle}>Navbar</Navbar.Brand> */}
            </Container>
        </Navbar>
    )
}

export default Footer;