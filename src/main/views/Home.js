import React from "react";
import ReactPlayer from "react-player";

function Home(props){
  return(
    <div className="videoplayer">
      <ReactPlayer className="videos" url="https://www.youtube.com/watch?v=wzY7S_RGHm4" playing/>
      <button className="prevbutton">PREV</button>
      <button className="nextbutton">NEXT</button>
    </div>
  )
}

export default Home;
