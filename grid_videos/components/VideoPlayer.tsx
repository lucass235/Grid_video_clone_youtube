"use client";
import React, { use, useState } from "react";
import ReactPlayer from "react-player";

type Props = {
    src?: string;
    title?: string;
    play?: boolean;
};

const VideoPlayer = (props: Props) => {
    
    const [isPlaying, setIsPlaying] = useState(false);
    
    const playVideo = () => {
        setIsPlaying(true);
    };

    const stopVideo = () => {
        setIsPlaying(false);
    };
  

    return (
        <div>
            <h1>{props.title}</h1>
            <div
                className="player-wrapper"
                style={{
                maxWidth: "500px",
                margin: "auto",
                position: "relative",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
            >
                <ReactPlayer
                    width="100%"
                    height="400px"
                    url={props.src}
                    controls={true}
                    light={false}
                    pip={true}
                    style={{ borderRadius: "8px" }}
                    playing={isPlaying}
                />
            </div>
        </div>
    );
};

export default VideoPlayer;
