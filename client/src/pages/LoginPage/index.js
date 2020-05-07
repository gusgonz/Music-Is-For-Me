import React, {useRef} from 'react';
import "./style.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import API from "../../utils/API";



function Login() {
    const email = useRef();
    const password = useRef();

    function GetLoginInfo(event) {
        event.preventDefault();
        const user = {
            email: email.current.value,
            password: password.current.value
        }
        console.log(user);
        API.registerLogin(user);
    }

    return(
        <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label className="DescriptionOfPostText">Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" ref={email}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label className="DescriptionOfPostText">Password</Form.Label>
    <Form.Control type="password" placeholder="Password" ref={password}/>
  </Form.Group>
  <Button variant="primary" type="submit" onClick={GetLoginInfo}>
    Submit
  </Button>
</Form>
    )
}

export default Login;