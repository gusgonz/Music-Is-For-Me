import React from "react";
import "./style.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import $ from "jquery";
import Popper from "popper.js";
import Dropdown from "react-bootstrap/Dropdown";

function DropDownMenu(title) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Vocals</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Instruments</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDownMenu;
