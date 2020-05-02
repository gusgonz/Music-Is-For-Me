import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import MusicContainer from "../../components/MusicContainer";
import API from "../../utils/API";
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DropDownMenu from "../../components/DropdownMenu";
import TeacherStudentButtons from "../../components/TeacherStudentButtons";
import "./style.css";




function CreatePost() {
    const [Instruments, SetInstruments] = useState([]);
    const [TeacherOrStudent, SetStateOfTeacherOrStudent] = useState([]);
    const [count, setCount] = useState(0);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        document.title = `You clicked ${count} times`;
      });



    return(
        <div>
              
        <DropDownMenu />
        <TeacherStudentButtons />
        <Button className="submitButton" variant="primary" onClick={() => setCount(count + 1)}>
            Submit
        </Button>{' '}

        </div>
    )
}

export default CreatePost;