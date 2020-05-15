import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import FormControl from 'react-bootstrap/FormControl';
import './style.css'

function Footer() {
    return (
        <Navbar expand="xl" fixed="bottom" className="blackFooter">
        <div>
            <FormControl
                placeholder="Email us with any suggestions."
                aria-label="Email us with any suggestions."
                aria-describedby="basic-addon2"
                className="marginLeft widthFormControlInFooter"
            />
            <a href="mailto:someone@yoursite.com"><img className="redSendArrowIcon" src={require('../../assets/icons/redSendIcon.png')} alt="Send email arrow" /></a>
        </div>
        <div className="ml-md-auto">
            <a href=""><img src={require('../../assets/icons/twitter.svg')} alt="Twitter Icon" width='25px' height='25px' /></a>
            <a href=""><img className="twitterFacebookMargins" src={require('../../assets/icons/facebook.svg')} alt="Facebook Icon" /></a>
        </div>
        </Navbar >
    )
}

export default Footer;