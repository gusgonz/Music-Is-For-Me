import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import "./style.css";

function Profile() {
  return (
    <Container>
      <Card style={{ width: "500px", height: "600px" }}>
        <Image src="https://www.placecage.com/200/200" rounded />
        <Card.Body>
          <Card.Title>
            <h1 className="Name">Nicolas Cage</h1>
          </Card.Title>

          <Card.Text>
            <a>email: test@yahoo.com</a>
          </Card.Text>

          <Card.Text>
            <p className="Bio">
              Nicolas Cage was born Nicolas Kim Coppola on January 7, 1964, in
              Long Beach, California, to choreographer Joy Vogelsang and
              literature professor August Coppola. ... He chose the name Cage as
              a tribute to comic-book superhero Luke Cage. Cage is known for his
              edgy, intense personality and for his passion for method acting.
            </p>
          </Card.Text>
          <Button variant="primary" href="https://www.spotify.com/">
            Spotify
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

// ======================================

export default Profile;
