import React, { useEffect, useState, useContext } from "react";
import Media from "react-bootstrap/Media";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import API from "../../utils/API";
import ConnectToSpotify from "../ConnectToSpotify";
import UserInfoForm from "../UserInfoForm"
import UserContext from "../../utils/UserContext";
import Row from 'react-bootstrap/Row'

import "./style.css";

function Profile() {
  const { id } = useParams();
  const [currProfile, setCurrProfile] = useState({});
  const [editProfile, setEditProfile] = useState(false);
  const userState = useContext(UserContext);

  function loadUser() {
    API.getUser(id).then(results => {
      setCurrProfile(results.data);
      console.log(results.data);
    });
  }

  function editUserProfile() {
    setEditProfile(true);
  }

  useEffect(() => {
    loadUser();
  }, []);

  // if accessing your own profile
  if (id === userState.currUser._id) {
    console.log("your profile");
    if (editProfile) {
      return (<UserInfoForm editState={setEditProfile} />)
    }
    return (
      <Container style={{ paddingBottom: 37 }}>
        <Media>
          <Media.Body>
            <img
              width={200}
              height={200}
              className="mr-3"
              src={userState.currUser.has_spotify ? userState.currUser.spotify_data.image_url : "https://via.placeholder.com/200"}
              alt="Generic placeholder"
            />

            <h2 className="profileNameText alignLeft">{userState.currUser.firstName} {userState.currUser.lastName}</h2>

            <Card.Text>
              <p className="emailText alignLeft">{userState.currUser.email}</p>
            </Card.Text>

            <p className="bioText alignLeft">
              {userState.currUser.bio ? userState.currUser.bio : "this user has not created a bio yet."}
            </p>
            <Button variant="success" onClick={editUserProfile}>Edit Profile</Button>

          </Media.Body>
        </Media>
        {userState.currUser.has_spotify ? "" : <ConnectToSpotify userID={id} hasSpotify={userState.currUser.has_spotify} changeProfile={userState.setCurrUser} />}


      </Container >
    )
  }
  else if (!userState.currUser._id) {
    return <h2 className="container whiteText amaticGoogleFont">You Must Be Logged In To View This Page</h2>
  }

  //if viewing someone elses profile
  return (
    <Container>
      <Media>
        <img
          width={200}
          height={200}
          className="mr-3"
          src={currProfile.has_spotify ? currProfile.spotify_data.image_url : "https://via.placeholder.com/200"}
          alt="Generic placeholder"
        />
        <Media.Body>
          <h2 className="amaticGoogleFont alignLeft"> {currProfile.firstName} {currProfile.lastName}</h2>

          <Card.Text>
            <p className="alignLeft">{currProfile.email}</p>
          </Card.Text>

          <p className="alignLeft">
            {currProfile.bio ? currProfile.bio : "this user has not created a bio yet."}
          </p>
        </Media.Body>
      </Media>

    </Container >
  );
}


export default Profile;
