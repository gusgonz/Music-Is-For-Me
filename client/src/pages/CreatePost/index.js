import React, { useState, useEffect, useRef } from "react";
import DropDownMenu from "../../components/DropdownMenu";
import TeacherStudentButtons from "../../components/TeacherStudentButtons";
import SubmitButtonCreatePost from '../../components/SubmitButtonCreatePost';
import ExampleSongCreatePost from '../../components/ExampleSongCreatePost';
import DescriptionCreatePost from '../../components/DescriptionCreatePost';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from "react-bootstrap/Dropdown";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";

// import UserContext from "../../utils/UserContext";
import "./style.css";





function CreatePost() {
    // const [TeacherOrStudent, SetStateOfTeacherOrStudent] = useState("");
    // const [Output, SetOutput] = useState({});
    // const [Instrument, SetInstrument] = useState("");
    // const [FormState, SetFormState] = useState("");
    
    
    // Enable below line to enable user context along with importing
    // const userState = useContext(UserContext);
    // const [Instruments, SetInstruments] = useState([]);
    // const [UserDescription, SetUserDescription] = useState("");
    // const [UserDescription, SetUserDescription] = useState("");
// email, username, userID from global context
    // const TeacherOrStudent = useRef();

    const teacherOrStudent = useRef();
    const instrumentPicked = useRef();
    const description = useRef();
    const urlYoutube = useRef();

    // const Description = useRef();


    // Use below for getting info using useRef based on what user put in, this is boilerplate from loginpage
    // function GetCreatePostInfo(event) {
    //     event.preventDefault();
    //     SetInstrument(instrumentRef);
        function createPostInfo() {
            console.log(teacherOrStudent.current.value);
            console.log(instrumentPicked.current.value);
            console.log(description.current.value);
            console.log(urlYoutube.current.value);




            // SetStateOfTeacherOrStudent(Instrument);
            // Instrument: instrumentPicked.current.value,
            // description: description.current.value,
            // teacherOrStudent: teacherOrStudent.current.value
            

        }
        // console.log(instrumentPicked.current.current.innerText);
        // console.log(Instrument);
        // API.registerLogin(user);
    
    

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // document.title = `You clicked ${count} times`;
      });




    return(
        <div>
              <>
              <Form.Control as="select" ref={teacherOrStudent}>
                        <option>Teacher</option>
                        <option>Student</option>
                    </Form.Control>

  <InputGroup>
    <FormControl
      ref={instrumentPicked}
      placeholder="What instrument?"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
</InputGroup>
<InputGroup>
    <FormControl
      ref={description}
      placeholder="Description of post"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
  </InputGroup>

  <InputGroup>
    <FormControl
      ref={urlYoutube}
      placeholder="URL of example youtube"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
  </InputGroup>
  <Button as="input" type="submit" value="Submit" onClick={createPostInfo}/>{' '}
</>
        {/* <DropDownMenu instrumentRef={SetInstrument}/> */}
        {/* <TeacherStudentButtons TeacherOrStudent = {SetStateOfTeacherOrStudent}/> */}
        {/* <TeacherStudentButtons TeacherOrStudent = {SetStateOfTeacherOrStudent}/>
        <DescriptionCreatePost />
        <ExampleSongCreatePost />
        <SubmitButtonCreatePost GetCreatePostInfo={GetCreatePostInfo} /> */}
        {/* <Button
Button className="submitButton" variant="primary" onClick={() => setCount(count + 1)}>
            Submit
        </Button>{' '} */}
        {/* <p className="DescriptionOfPostText">{TeacherOrStudent}</p> */}
        </div>
    )
}

export default CreatePost;