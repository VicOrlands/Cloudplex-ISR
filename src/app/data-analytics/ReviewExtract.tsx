"use client"

import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'video-react/dist/video-react.css';
import { Player, BigPlayButton } from "video-react";
import { casestudy } from "../landing/testimonial/Testimonial";
import styles from "../landing/testimonial/testimonial.module.css";
import secondStyles from "./styles.module.css";
import {
    MdOutlineKeyboardArrowLeft,
    MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const ReviewExtract: React.FC = () => {
    const [sliderRef, setSliderRef] = useState<Slider | null>(null);

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className={clsx(secondStyles["reviewExtract"], styles.reviewContainer)}>
            <h2>With Cloudplexo, the possibilities for customer innovation are endless.</h2>

            <div className={styles.reviewVideo}>
                <Slider ref={setSliderRef} {...settings}>
                    {casestudy.map((cases, key) => (
                        <div className={styles.videoWrap} key={key}>
                            <div className={styles.imageWrap}>
                                <Player
                                    playsInline
                                    src={cases.link}
                                    fluid
                                    poster={cases.image.src}
                                >
                                    <BigPlayButton
                                        position="center"
                                    />
                                </Player>
                            </div>
                            <div className={styles.contentWrap}>
                                <Image
                                    loading="lazy"
                                    priority={false}
                                    src={cases.logo}
                                    className={styles.logoImage}
                                    alt="Top Cloud Services providers with CloudPlexo's Innovative Solutions reviews"
                                />

                                <h6>{cases.company}</h6>
                                <p className={styles.quote}>{cases.quote}</p>
                                <p className={styles.quoteSpeaker}>{cases.speaker}</p>
                                <Link href={cases.caselink}>
                                    Read case study
                                </Link>
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
