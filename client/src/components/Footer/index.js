import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import FormControl from 'react-bootstrap/FormControl';




import './style.css'

const navStyle = {
    color: 'white',
    margin: 0
    // marginLeft: "10px",
    // marginRight: "10px"
  }

function Footer() {
    return(
        <Navbar expand="sm"  fixed="bottom" className="blackFooter">
            <Container className="blackFooter">
                {/* <Navbar.Brand bg="light" variant="light" href="#" style={navStyle}>Email Us</Navbar.Brand> */}
                <FormControl
      placeholder="Email us with any suggestions."
      aria-label="Email us with any suggestions."
      aria-describedby="basic-addon2"
      className="widthFormControlInFooter"
    />
                {/* <Navbar.Brand bg="light" variant="light" href="#" style={navStyle}>Navbar</Navbar.Brand> */}
            </Container>
    <img src={require('../../assets/icons/redSendIcon.png')} alt="Send email arrow"/>
    <img src={require('../../assets/icons/facebook.svg')} alt="Facebook Icon"/>
    <img src={require('../../assets/icons/twitter.svg')} alt="Twitter Icon" width='5%' height='5%'/>
        </Navbar>
    )
}

export default Footer;