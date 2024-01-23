"use client";
import { Button, LinearProgress } from "@mui/material";
import React, { use, useEffect, useRef, useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import ReplayIcon from "@mui/icons-material/Replay";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import PauseIcon from "@mui/icons-material/Pause";

type Props = {
    src?: string;
    title?: string;
    play?: boolean;
};

interface HTMLVideoElementWithWebkit extends HTMLVideoElement {
  webkitRequestFullscreen?: () => Promise<void>;
}

const VideoPlayer = (props: Props) => {
    
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElementWithWebkit>(null);

    const [progress, setProgress] = useState(0);
    
    // Função para atualizar o progresso
    const updateProgress = () => {
        const video = videoRef.current;
        if (video) {
            const value = (video.currentTime / video.duration) * 100;
            setProgress(value);
        }
    };

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            setIsPlaying(false);
            video.pause();
        }
    }, [props.play]);
    


    const onPlayVideo = () => {
        const video = videoRef.current;
        if (video) {
            setIsPlaying(!video.paused);
            video.paused ? video.play() : video.pause();
        } 
    }

    const [isMuted, setIsMuted] = useState(false);

    // ...

    const onToggleMute = () => {
        const video = videoRef.current;
        if (video) {
            const muted = !video.muted;
            video.muted = muted;
            setIsMuted(muted);
        }
    };

    const onReplayVideo = () => {
        const video = videoRef.current;
        if (video) {
            video.currentTime = 0;
            if (!isPlaying) {
                video.play();
                setIsPlaying(true);
            }
        }
    };

    const onToggleFullscreen = () => {
        const video = videoRef.current;
        if (video) {
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.webkitRequestFullscreen) { /* Safari */
                video.webkitRequestFullscreen();
            }
        }
    };

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.addEventListener('timeupdate', updateProgress);
        }
        return () => {
            if (video) {
                video.removeEventListener('timeupdate', updateProgress);
            }
        };
    }, []);

  
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
                }}>
                <video className="w-full" ref={videoRef} src={props.src}></video>
                <LinearProgress variant="determinate" value={progress} />
                <div className="flex justify-center items-center">
                    <Button startIcon={isPlaying ? <PlayArrowIcon></PlayArrowIcon>: <PauseIcon></PauseIcon>} onClick={onPlayVideo}></Button>
                    <Button startIcon={isMuted ? <VolumeOffIcon></VolumeOffIcon> : <VolumeUpIcon></VolumeUpIcon>} onClick={onToggleMute}></Button>
                    <Button startIcon={<ReplayIcon></ReplayIcon>} onClick={onReplayVideo}></Button>
                    <Button startIcon={<FullscreenIcon></FullscreenIcon>} onClick={onToggleFullscreen}></Button>

                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;
