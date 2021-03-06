import React from "react";
import MusicPlayer from "../MusicPlayer"
import Media from "react-bootstrap/Media";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "./style.css"




function MusicContainer(props) {
  console.log(props.author_id);
  let renderStyle = {};
  if (props.ownPost) {
    renderStyle = {
      backgroundColor: 'rgba(255,255,255,0.5)',
      color: "black"
    }
  }
  else {
    renderStyle = {
      backgroundColor: "white",
      color: "black",
      marginTop: 10
    }
  }
  return (

    <Media className="rounded" style={renderStyle}>
      <Media.Body>
        <Row>
          <Col>
            <h2 className="mt-0"><Link to={"/profile/" + props.author_id}>{props.name}</Link></h2>
            <h4>Role: {props.role}</h4>
            <span>Email:</span><p>{props.email}</p>
            <span>Phone:</span><p>{props.phone}</p>
            <p>{props.description}</p>
          </Col>
          <Col lg={5} md={5} sm={5} xs={5}>
            <MusicPlayer
              url={props.video}
            />
          </Col>
        </Row>
      </Media.Body>
    </Media>
  );
}


export default MusicContainer;