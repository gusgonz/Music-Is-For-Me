import React from 'react';
import ToggleButton from "react-bootstrap/Button";
import ButtonGroup from 'react-bootstrap/Button';
import "./style.css";



function TeacherStudentButtons(props) {

  // const [TeacherOrStudent, SetStateOfTeacherOrStudent] = useState([]);

// props.TeacherOrStudent  -- this is how you call the state of 

function HandleTeacherStudentClick({target}) {
  if (target.value === "Teacher") {
      props.TeacherOrStudent("Teacher");
  } else {
      props.TeacherOrStudent("Student");
  }
  // console.log(TeacherOrStudent);
  console.log(target.value);
}

    return(
        <>
  <ButtonGroup toggle>
    <ToggleButton type="radio" name="radio" defaultChecked value="Teacher" onClick={HandleTeacherStudentClick}>
      Teacher
    </ToggleButton>
    <ToggleButton type="radio" name="radio" value="Student" onClick={HandleTeacherStudentClick}>
      Student
    </ToggleButton>
  </ButtonGroup>
  {/* <textarea className="textAreaClass" name="" id="" cols="30" rows="10">Description of post</textarea> */}
</>
    )
}

export default TeacherStudentButtons;