import React, {useContext, useRef, useState} from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { Redirect } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import Button from "react-bootstrap/Button";


function UserInfoForm(props) {
    const userState = useContext(UserContext);
    const [saveUser, setSaveUser] = useState(false);
    const firstName = useRef();
    const lastName = useRef();
    const bio = useRef();
    const usr = userState.currUser;

    function saveUserInfo(){
        console.log(userState.currUser);
        const updatedUser = {...usr};

        if(firstName != ""){
            updatedUser.firstName = firstName.current.value;
        }
        if(lastName!=""){
            updatedUser.lastName = bio.current.value;
        }
        if(bio != ""){
            updatedUser.bio = bio.current.value;
        }
        console.log(updatedUser);
        props.editState(false);
        setSaveUser(true);
    }

    if(saveUser){
        console.log("saving..")
        return(
            <Redirect to={"/profile/"+usr._id}></Redirect>
        )
    }
    return (
        <Form>
            <Form.Row>
                <Col>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control placeholder={usr.firstName} ref={firstName} />
                </Col>
                <Col>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control placeholder={usr.lastName} ref={lastName} />
                </Col>
            </Form.Row>

            <Form.Row>
                <Col>
                    <Form.Label>Bio</Form.Label>
                    <Form.Control as="textarea" rows="3" placeholder="Enter Bio Here" ref={bio}/>
                </Col>
            </Form.Row>
            <Button onClick={saveUserInfo}>Save Changes</Button>
        </Form>
    );
}


export default UserInfoForm;