"use client";

import React, { useState, useRef, useEffect } from 'react';
import { MdPlayArrow, MdPause } from 'react-icons/md';
import styles from "./video.module.css"
import clsx from 'clsx';

interface VideoPlayerProps {
    src: string;
    poster?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, poster }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [isClient, setIsClient] = useState<boolean>(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const togglePlay = () => {
        if (!videoRef.current) return;

        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying((prev) => !prev);
    };

    if (!isClient) {
        return (
            <div className={styles["video-container"]}>
                <video
                    className={styles["video-player"]}
                    poster={poster}
                    preload="none"
                >
                    <source src={src} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        );
    }

    return (
        <div className={styles["video-container"]}>
            <video
                ref={videoRef}
                className={styles["video-player"]}
                poster={poster}
                controls={isPlaying}
                preload="none"
                onEnded={() => setIsPlaying(false)}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {isClient && (
                <button
                    onClick={togglePlay}
                    className={clsx(styles["play-button"], { [styles["playing"]]: isPlaying })}
                    aria-label={isPlaying ? styles['Pause video'] : styles['Play video']}
                >
                    {isPlaying ? <MdPause size={32} /> : <MdPlayArrow size={32} />}
                </button>
            )}
        </div>
    );
};

export default VideoPlayer;