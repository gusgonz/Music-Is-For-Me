import React, {useContext, useRef, useState} from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { Redirect } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import Button from "react-bootstrap/Button";
import API from "../../utils/API";
import './style.css'


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

        if(firstName.current.value != ""){
            updatedUser.firstName = firstName.current.value;
        }
        if(lastName.current.value !=""){
            updatedUser.lastName = lastName.current.value;
        }
        if(bio.current.value != ""){
            updatedUser.bio = bio.current.value;
        }
        console.log(updatedUser);
        API.editUser(usr._id,updatedUser);
        userState.setCurrUser(updatedUser);
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
        <div className="userInfoFormContainer">
        <Form className="widthOfLoginFormUserInfoForm">
            <Form.Row>
                <Col>
                    <Form.Label className="formLabelTextMargins">First Name</Form.Label>
                    <Form.Control placeholder={usr.firstName} ref={firstName} />
                
                    <Form.Label className="formLabelTextMargins">Last Name</Form.Label>
                    <Form.Control placeholder={usr.lastName} ref={lastName} />
                </Col>
            </Form.Row>

            <Form.Row>
                <Col>
                    <Form.Label className="formLabelTextMargins">Bio</Form.Label>
                    <Form.Control as="textarea" rows="3" placeholder={usr.bio} ref={bio}/>
                </Col>
            </Form.Row>
            <Button className="marginSubmitButton" variant="success" onClick={saveUserInfo}>Save Changes</Button>
        </Form>
        </div>
    );
}


export default UserInfoForm;