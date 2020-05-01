import React from 'react';
import Button from 'react-bootstrap/Button';
import ToggleButton from "react-bootstrap/Dropdown";
import ButtonGroup from 'react-bootstrap/Dropdown';

function TeacherStudentButtons() {
    return(
        <>
  <ButtonGroup toggle className="mb-2">
    <ToggleButton type="checkbox" defaultChecked value="1">
      Checked
    </ToggleButton>
  </ButtonGroup>
  <br />
  <ButtonGroup toggle>
    <ToggleButton type="radio" name="radio" defaultChecked value="1">
      Active
    </ToggleButton>
    <ToggleButton type="radio" name="radio" value="2">
      Radio
    </ToggleButton>
    <ToggleButton type="radio" name="radio" value="3">
      Radio
    </ToggleButton>
  </ButtonGroup>
</>
    )
}

export default TeacherStudentButtons;