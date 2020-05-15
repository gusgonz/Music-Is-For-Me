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
                className="widthFormControlInFooter"
            />
            <img className="redSendArrowIcon" src={require('../../assets/icons/redSendIcon.png')} alt="Send email arrow" />
        </div>
        <div className="ml-md-auto">
            <img src={require('../../assets/icons/twitter.svg')} alt="Twitter Icon" width='25px' height='25px' />
            <img className="twitterFacebookMargins" src={require('../../assets/icons/facebook.svg')} alt="Facebook Icon" />
        </div>
        </Navbar >
    )
}

export default Footer;