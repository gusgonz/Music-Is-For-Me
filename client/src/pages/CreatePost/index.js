import React, { useState, useEffect } from "react";
import DropDownMenu from "../../components/DropdownMenu";
import TeacherStudentButtons from "../../components/TeacherStudentButtons";
import SubmitButtonCreatePost from '../../components/SubmitButtonCreatePost';
import ExampleSongCreatePost from '../../components/ExampleSongCreatePost';
import DescriptionCreatePost from '../../components/DescriptionCreatePost';
import "./style.css";





function CreatePost() {
    // const [Instruments, SetInstruments] = useState([]);
    const [TeacherOrStudent, SetStateOfTeacherOrStudent] = useState("");
    // const TeacherOrStudent = useRef();
    // const InstrumentPicked = useRef();
    // const Description = useRef();
    // const [UserDescription, SetUserDescription] = useState([]);
    

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // document.title = `You clicked ${count} times`;
      });




    return(
        <div>
              
        <DropDownMenu />
        <TeacherStudentButtons TeacherOrStudent = {SetStateOfTeacherOrStudent}/>
        <DescriptionCreatePost />
        <ExampleSongCreatePost />
        <SubmitButtonCreatePost />
        {/* <Button
Button className="submitButton" variant="primary" onClick={() => setCount(count + 1)}>
            Submit
        </Button>{' '} */}
        <p>{TeacherOrStudent}</p>
        </div>
    )
}

export default CreatePost;