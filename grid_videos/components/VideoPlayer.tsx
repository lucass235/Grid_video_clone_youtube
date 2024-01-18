"use client";
import React from "react";
import ReactPlayer from "react-player";

type Props = {
    src?: string;
    title?: string;
    };

const VideoPlayer = (props: Props) => {
  //video path
  

  return (
    <div>
        <h1>{props.title}</h1>
        <ReactPlayer
            width="500px"
            height="400px"
            url={props.src}
            controls={true}
            // light is usefull incase of dark mode
            light={false}
            // picture in picture
            pip={true}
        />
      {/* <source src={props.src} type="video/mp4" /> */}
    </div>
  );
};

export default VideoPlayer;
