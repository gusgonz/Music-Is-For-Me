import React from 'react';
import ToggleButton from "react-bootstrap/Button";
import ButtonGroup from 'react-bootstrap/Button';
import "./style.css";



function TeacherStudentButtons() {

  // const [TeacherOrStudent, SetStateOfTeacherOrStudent] = useState([]);


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
  <textarea className="textAreaClass" name="" id="" cols="30" rows="10">Description of post</textarea>
</>
    )
}

export default TeacherStudentButtons;