"use client"
import React from "react";
import styles from "./styles.module.css"
import posterImage from "@/assets/training/videothumbnail.png";
import VideoPlayer from "@/components/videoPlayer/VideoPlayer";

function VideoSection() {
  return (
    <section className={styles["video-section"]}>
      <section>
        <VideoPlayer
          poster={posterImage.src}
          src="https://cloudplexo.com/TrainingReview_Bimbo_1.mp4"
        />

        <div>
          <h2>Words from our Alumni</h2>
          <p>
            "Fantastic trainer .......passed my AWS Certification in one
            sitting"
          </p>
        </div>
      </section>
    </section>
  );
}

export default VideoSection;
