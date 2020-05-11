import React from "react";
import "./style.css";
import ReactPlayer from "react-player";

function MusicPlayer(props) {
    return (
      <ReactPlayer
      url={props.url}
      controls
      height = "90%"
      width = "95%"
      style={{
        marginTop:"3%"
      }}
      />

      
)
}


export default MusicPlayer;