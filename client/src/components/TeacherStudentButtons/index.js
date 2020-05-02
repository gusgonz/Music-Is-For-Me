import React from 'react';
import ToggleButton from "react-bootstrap/Button";
import ButtonGroup from 'react-bootstrap/Button';



function TeacherStudentButtons() {
    return(
        <>

  <ButtonGroup toggle>
    <ToggleButton type="radio" name="radio" defaultChecked value="1">
      Teacher
    </ToggleButton>
    <ToggleButton type="radio" name="radio" value="2">
      Student
    </ToggleButton>
  </ButtonGroup>
</>
    )
}

export default TeacherStudentButtons;