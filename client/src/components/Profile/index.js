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
      <Container>
        <Media>
          <img
            width={200}
            height={200}
            className="mr-3"
            src="https://www.placecage.com/c/200/300"
            alt="Generic placeholder"
          />
          <Media.Body>
            <h2 className="amaticGoogleFont alignLeft">{currProfile.firstName} {currProfile.lastName}</h2>

            <Card.Text>
              <p className="alignLeft">{currProfile.email}</p>
            </Card.Text>

            <p className="alignLeft">
              Nicolas Cage was born Nicolas Kim Coppola on January 7, 1964, in
              Long Beach, California, to choreographer Joy Vogelsang and
              literature professor August Coppola. ... He chose the name Cage as
              a tribute to comic-book superhero Luke Cage. Cage is known for his
              edgy, intense personality and for his passion for method acting.
    </p>
          </Media.Body>
          <Button variant="danger" onClick={editUserProfile}>Edit Profile</Button>
        </Media>
        <ConnectToSpotify userID={id} hasSpotify={currProfile.has_spotify} changeProfile={setCurrProfile} />

      </Container >
    )
  }
  else if (!userState.currUser._id) {
    return <h2 className="amaticGoogleFont">You Must Be Logged In To View This Page</h2>
  }

  //if viewing someone elses profile
  return (
    <Container>
      <Media>
        <img
          width={200}
          height={200}
          className="mr-3"
          src="https://www.placecage.com/c/200/300"
          alt="Generic placeholder"
        />
        <Media.Body>
          <h1>Nicolas Cage</h1>

          <Card.Text>
            <a>email: NicoCage@yahoo.com</a>
          </Card.Text>

          <p>
            Nicolas Cage was born Nicolas Kim Coppola on January 7, 1964, in
            Long Beach, California, to choreographer Joy Vogelsang and
            literature professor August Coppola. ... He chose the name Cage as
            a tribute to comic-book superhero Luke Cage. Cage is known for his
            edgy, intense personality and for his passion for method acting.
    </p>
        </Media.Body>
      </Media>

    </Container >
  );
}


export default Profile;
