import React from "react";
import MusicPlayer from "../MusicPlayer"





function MusicContainer(props) {

  return (
    <div className="media" style={{border:"2px solid blue"}}>
      <div className="media-body">
        <div className="row">
        <div className="col-8">
          <h2 className="mt-0">{props.title}</h2> 
          <h4>Title: {props.name}</h4>
          <span>Contact:</span><a href={"/" + props.userID}>{props.email}</a>
        </div>

        <div className="col-4">
          <MusicPlayer
            url={props.url}
          />
        </div>
        </div>
      </div>
    </div>
  );
}


export default MusicContainer;