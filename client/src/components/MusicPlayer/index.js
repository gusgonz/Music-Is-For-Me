import React from "react";
import "./style.css";
import ReactPlayer from "react-player";

function MusicPlayer(props) {
    return (
      <ReactPlayer
      url={props.url}
      controls
      height = "100%"
      width = "95%"
      />

      
)
}


export default MusicPlayer;