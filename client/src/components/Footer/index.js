import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

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
                <Navbar.Brand bg="light" variant="light" href="#" style={navStyle}>Navbar</Navbar.Brand>
                <Navbar.Brand bg="light" variant="light" href="#" style={navStyle}>Navbar</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Footer;