"use client"

import React, { useState } from "react";

import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { casestudy } from "./caseArray";
import styles from "./casestudy.module.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowUpRight } from "react-icons/bs";
import BgImg from "@/assets/casestudies/hero.webp"
import Image, { StaticImageData } from "next/image";
import extraStyles from "../landing/review/reviews.module.css"
import { LazyBackgroundImage } from "@/components/backgroundImage/bg";
import clsx from "clsx";
import {
    BsArrowLeft,
    BsArrowRight,
    BsArrowLeftCircle,
    BsArrowRightCircle,
} from "react-icons/bs";
import 'video-react/dist/video-react.css';
import { Player, BigPlayButton } from "video-react";

import img1 from "@/assets/reviews/video1.webp";
import img2 from "@/assets/reviews/video2.webp";
import img3 from "@/assets/reviews/Immersion day.webp";
import icanlogo from "@/assets/reviews/ican.webp";
import livelilogo from "@/assets/reviews/liveli.webp";
import gtcologo from "@/assets/partners/GTCO_logo.webp";

interface ReviewProps {
    id: number,
    image: StaticImageData,
    link: string,
    title: string | null,
    quote: string,
    logo: StaticImageData,
    speaker: string,
    caselink: string,
    company: string | null
}

const reviews: ReviewProps[] = [
    {
        id: 1,
        image: img2,
        link: "https://cloudplexo.com/Liveli-Customer-Sucess.mp4",
        quote:
            "“I would defintely advise anyone anybody to migrate their cloud services with a partner like Cloudplexo.”",
        company: null,
        title: null,
        logo: livelilogo,
        speaker: "CTO Liveli",
        caselink: "/liveli-case-study",
    },
    {
        id: 2,
        image: img1,
        link: "https://cloudplexo.com/ICAN_ONLINE_TUTORS_final.mp4 ",
        company: null,
        title: "CTO of Liveli",
        quote:
            "“We highly recommend Cloudplexo, if  you are having any challenges  with your website and mobile apps”",
        logo: icanlogo,
        speaker: "Founder & CEO of IcanOnline Tutors",
        caselink: "/case-study-in-the-edtech-sector",
    },
    {
        id: 3,
        image: img3,
        link: "https://cloudplexo.com/GT_Pension_Immersion+Day_Testimonial.mp4",
        company: "Guarantee Trust Pension Managers",
        title: "Cloudplexo Immersion Day",
        quote: `"I had a great time with the Cloudplexo team, learning more about AWS and the cloud"`,
        logo: gtcologo,
        speaker: "Taiwo Owolabi",
        caselink: "#",
    },
];

const CaseList: React.FC = () => {
    const [sliderRef, setSliderRef] = useState<Slider | null>(null);

    const SlickArrowLeft: React.FC<{
        [x: string]: any;
        currentSlide: any;
        slideCount: any;
    }> = ({ currentSlide, slideCount, ...props }) => (
        <button type="button" aria-label="button" {...props} className={clsx(styles.arrow, styles.left)}>
            <BsArrowLeftCircle />
        </button>
    );
    const SlickArrowRight: React.FC<{
        [x: string]: any;
        currentSlide: any;
        slideCount: any;
    }> = ({ currentSlide, slideCount, ...props }) => (
        <button {...props} type="button" aria-label="button" className={clsx(styles.arrow, styles.right)}>
            <BsArrowRightCircle />
        </button>
    );

    const settings = {
        nextArrow: <SlickArrowRight currentSlide={undefined} slideCount={undefined} />,
        prevArrow: <SlickArrowLeft currentSlide={undefined} slideCount={undefined} />,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const videosettings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <section className={styles["casestudy"]}>
            <LazyBackgroundImage src={BgImg} className={styles["case-hero-bg"]}>
                <div className={styles["casestudy-hero"]}>
                    <div className={styles["casestudy-content"]}>
                        <h1>Case Studies</h1>
                        <p>
                            Get updated on the most recent developments in the industry,
                            including news, interviews, cutting-edge technologies, and
                            valuable resources.
                        </p>
                    </div>
                </div>
            </LazyBackgroundImage>



            <div className={styles["casestudy-catalog"]}>
                <div className={extraStyles.reviewVideo}>
                    <Slider ref={setSliderRef} {...videosettings}>
                        {reviews.map((cases, key) => (
                            <div className={extraStyles.videoWrap} key={key}>
                                <div className={extraStyles.imageWrap}>
                                    <Player
                                        playsInline
                                        poster={cases.image.src}
                                        src={cases.link}
                                        fluid
                                    >
                                        <BigPlayButton
                                            position="center"
                                        />
                                    </Player>
                                </div>
                                <div className={extraStyles.contentWrap}>
                                    <Image
                                        src={cases.logo}
                                        className={extraStyles.logoImage}
                                        alt="Top Cloud Services providers with CloudPlexo's Innovative Solutions reviews"
                                    />

                                    <h6>{cases.company}</h6>
                                    <p className={extraStyles.quote}>{cases.quote}</p>
                                    <p className={extraStyles.quoteSpeaker}>{cases.speaker}</p>
                                    <Link href={cases.caselink}>
                                        Read case study
                                    </Link>
                                    <div className={extraStyles.controls}>
                                        <button
                                            type="button"
                                            aria-label="button"
                                            onClick={sliderRef?.slickPrev}
                                        >
                                            <BsArrowLeft size={25} color="#3E54AC" />
                                        </button>
                                        <button
                                            type="button"
                                            aria-label="button"
                                            onClick={sliderRef?.slickNext}
                                        >
                                            <BsArrowRight size={25} color="#3E54AC" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className={styles["casestudy-list"]}>
                    {casestudy.map((cases, key) => (
                        <div className={styles["casestudy-list-item"]}>
                            <div className={styles["imgcontainer"]}>
                                <Image
                                    src={cases.image}
                                    alt="Cloud Billing Solutions: Case Studies in Cost Optimization and Savings"
                                />
                            </div>

                            {cases.link === "" &&
                                cases.desc === "" &&
                                cases.title === "" ? null : (
                                <>
                                    <div className={styles["content-title"]}>
                                        <Link
                                            href={`/caseStudy/${cases.link}`}
                                        >
                                            <h5>
                                                {cases.title}
                                            </h5>
                                        </Link>
                                        <Link href={`/caseStudy/${cases.link}`}>
                                            <BsArrowUpRight />
                                        </Link>
                                    </div>

                                    <p>{cases.desc}</p>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CaseList;
