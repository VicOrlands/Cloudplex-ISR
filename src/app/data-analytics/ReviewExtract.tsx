"use client"

import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import styles from "../landing/testimonial/testimonial.module.css";
import secondStyles from "./styles.module.css";
import {
    MdOutlineKeyboardArrowLeft,
    MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { casestudy } from "../landing/testimonial/testimonialData";
import VideoPlayer from "@/components/videoPlayer/VideoPlayer";

const ReviewExtract: React.FC = () => {
    const [sliderRef, setSliderRef] = useState<Slider | null>(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    if (!isClient) {
        return (
            <div className={styles.reviewContainer}>
                <h2>
                    With CloudPlexo, the possibilities for customer innovation are endless.
                </h2>
                <div className={styles.reviewVideo}>
                    <h3>Loading videos...</h3>
                </div>
            </div>
        );
    }

    return (
        <div className={clsx(secondStyles["reviewExtract"], styles.reviewContainer)}>
            <h2>With Cloudplexo, the possibilities for customer innovation are endless.</h2>

            <div className={styles.reviewVideo}>
                <Slider ref={setSliderRef} {...settings}>
                    {casestudy.map((cases, key) => (
                        <div className={styles.videoWrap} key={key}>
                            <div className={styles.imageWrap}>
                                <VideoPlayer
                                    src={cases.link}
                                    poster={cases.image.src}
                                />
                            </div>
                            <div className={styles.contentWrap}>
                                <Image
                                    loading="lazy"
                                    priority={false}
                                    src={cases.logo}
                                    className={styles.logoImage}
                                    alt="Top Cloud Services providers with CloudPlexo's Innovative Solutions reviews"
                                />

                                <h3>{cases.quote}</h3>
                                <Link href={cases.caselink}>Read case study</Link>
                                <h4>{cases.speaker}</h4>
                                <h6>{cases.company}</h6>
                            </div>
                            <section className={clsx(styles.btngroup, styles.mobile)}>
                                <button
                                    type="button"
                                    aria-label="Arrow pointing left"
                                    onClick={sliderRef?.slickPrev}
                                >
                                    <MdOutlineKeyboardArrowLeft />
                                </button>
                                <button
                                    type="button"
                                    aria-label="Arrow pointing right"
                                    onClick={sliderRef?.slickNext}
                                >
                                    <MdOutlineKeyboardArrowRight />
                                </button>
                            </section>
                        </div>
                    ))}
                </Slider>
                <section className={clsx(styles.btngroup, styles.desktop)}>
                    <button
                        type="button"
                        aria-label="Arrow pointing left"
                        onClick={sliderRef?.slickPrev}
                    >
                        <MdOutlineKeyboardArrowLeft />
                    </button>
                    <button
                        type="button"
                        aria-label="Arrow pointing right"
                        onClick={sliderRef?.slickNext}
                    >
                        <MdOutlineKeyboardArrowRight />
                    </button>
                </section>
            </div>
        </div>
    );
}

export default ReviewExtract;
