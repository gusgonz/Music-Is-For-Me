import React from "react";
import "./style.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import $ from "jquery";
import Popper from "popper.js";
import Dropdown from "react-bootstrap/Dropdown";
import Form from 'react-bootstrap/Form';

function DropDownMenu(props) {

  function InstrumentPicking(props) {
    
  }

  return (
    <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label className="DescriptionOfPostText">Description of post</Form.Label>
    <Form.Control as="textarea" rows="3" />
    </Form.Group>
  );
}

export default DropDownMenu;
