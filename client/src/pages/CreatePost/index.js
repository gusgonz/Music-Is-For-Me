import React, { useState, useEffect, useRef, useContext } from "react";
import { Redirect } from "react-router-dom";
import Container from "react-bootstrap/Container";
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from "react-bootstrap/Dropdown";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import UserContext from "../../utils/UserContext";
import "./style.css";
import API from "../../utils/API";





function CreatePost() {

  const userState = useContext(UserContext);
  const teacherOrStudent = useRef();
  const instrumentPicked = useRef();
  const description = useRef();
  const urlYoutube = useRef();
  const phoneNumber = useRef();

  const [postCreated, setPostCreated] = useState(false);

  // const Description = useRef();


  // Use below for getting info using useRef based on what user put in, this is boilerplate from loginpage
  // function GetCreatePostInfo(event) {
  //     event.preventDefault();
  //     SetInstrument(instrumentRef);
  function createPostInfo() {
    // console.log(teacherOrStudent.current.value);
    // console.log(instrumentPicked.current.value);
    // console.log(description.current.value);
    // console.log(urlYoutube.current.value);

    //below creates object of all the user inputs
    let CreatePostObject = {
      title: teacherOrStudent.current.value,
      role: instrumentPicked.current.value,
      description: description.current.value,
      video: urlYoutube.current.value,
      author_id: userState.currUser._id,
      email: userState.currUser.email,
      phone: phoneNumber.current.value,
      name: userState.currUser.firstName + " "+ userState.currUser.lastName
    }
    console.log(CreatePostObject);
    API.createPost(CreatePostObject).then(results => {
      console.log(results);
      setPostCreated(true);
    })

  }

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {

  });

  if (!userState.currUser._id) {
    return <div>
      <h2 className="whiteText amaticGoogleFont">You Must Be Logged In To View This Page</h2>
    </div>
  }

  else if (postCreated) {
    return <Redirect to="/posts"></Redirect>
  }


  return (
    <Container>
      <div>
        <>
          <p className="alignTextLeft">Hey there, are you a music teacher or a student?</p>
          {/* <Form.Label>First Name</Form.Label> */}
          <Form.Control as="select" ref={teacherOrStudent}>
            <option>Teacher</option>
            <option>Student</option>
          </Form.Control>
          <p className="alignTextLeft">What instruments do you play or want to learn?</p>
          <InputGroup>
            <FormControl
              ref={instrumentPicked}
              placeholder="What instrument?"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </InputGroup>
          <p className="alignTextLeft">Below write a description of what you wanna do.</p>
          <InputGroup>
            <FormControl
              ref={description}
              as="textarea"
              placeholder="Description of post"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              rows="6"
            />
          </InputGroup>
          <p className="alignTextLeft">Put your favorite song below.</p>
          <InputGroup>
            <FormControl
              ref={urlYoutube}
              placeholder="URL of example youtube"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </InputGroup>
          <p className="alignTextLeft">If you're feeling secure put in your phone number.</p>
          <InputGroup>
            <FormControl
              ref={phoneNumber}
              placeholder="Phone number: optional"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </InputGroup>
          <Button className="submitBtn" variant="danger" type="submit" onClick={createPostInfo}>Submit</Button>{' '}</>
      </div>
    </Container>
  )
}

export default CreatePost;