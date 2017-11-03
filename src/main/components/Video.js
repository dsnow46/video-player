import React from "react";
import VideoComponent from "./VideoComponent";

function Video(props) {
  return props.Videos.map((item) => {
    return <VideoComponent vid={item.url}/>
  });
  return Video;
}

export default Video;
