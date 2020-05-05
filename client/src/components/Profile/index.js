import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
// import Row from "react-bootstrap/Row";

function Profile() {
  return (
    <Container>
      <Card style={{ width: "18rem" }}>
        <Image src="holder.js/171x180" roundedCircle />
        <Card.Body>
          <Card.Title>User Name</Card.Title>
          <Card.Text>something about the user bio</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

// ======================================

export default Profile;
