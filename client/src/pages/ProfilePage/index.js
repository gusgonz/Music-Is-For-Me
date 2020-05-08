import React from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Profile from "../../components/Profile";

function ProfilePage() {
  return (
    <Container>
      <a href='http://localhost:8888'> Login to Spotify </a>
      <Profile />
    </Container>
  );
}

export default ProfilePage;

// =====================example
