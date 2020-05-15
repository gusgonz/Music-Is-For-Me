import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import FormControl from 'react-bootstrap/FormControl';
import './style.css'

function Footer() {
    return (
        <Navbar expand="xl" fixed="bottom" className="blackFooter">

            <img src={require('../../assets/icons/redSendIcon.png')} alt="Send email arrow" />
            <FormControl
                placeholder="Email us with any suggestions."
                aria-label="Email us with any suggestions."
                aria-describedby="basic-addon2"
                className="widthFormControlInFooter"
            />
            <img src={require('../../assets/icons/twitter.svg')} alt="Twitter Icon" width='40px' height='40px' />
            <img src={require('../../assets/icons/facebook.svg')} alt="Facebook Icon" />
        </Navbar >
    )
}

export default Footer;