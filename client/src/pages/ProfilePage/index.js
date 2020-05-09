import React from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Profile from "../../components/Profile";
import ConnectToSpotify from "../../components/ConnectToSpotify";


function ProfilePage() {
  return (
    <Container>
      <ConnectToSpotify />
      <Profile />
    </Container>
  );
}

export default ProfilePage;

// =====================example
