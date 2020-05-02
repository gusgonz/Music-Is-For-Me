import React from "react";
import MusicPlayer from "../MusicPlayer"
import Media from "react-bootstrap/Media";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";




function MusicContainer(props) {

  return (
    
      <Media style={{border:"2px solid blue"}}>
        <Media.Body>
    <Row>
      <Col>
      <h2 className="mt-0">{props.title}</h2> 
          <h4>Title: {props.name}</h4>
          <span>Contact:</span><a href={"/" + props.userID}>{props.email}</a>
          <p>{props.type}</p>
      </Col>
      <Col lg={5} md={5} sm={5} xs={5}>
      <MusicPlayer
            url={props.url}
          />
      </Col>
    </Row>
        </Media.Body>
      </Media>
  );
}


export default MusicContainer;