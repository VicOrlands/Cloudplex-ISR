"use client"

import React, { useState } from "react";

import Link from "next/link";
import Slider from "react-slick";
import { casestudy } from "./caseArray";
import styles from "./casestudy.module.css";
import { BsArrowUpRight } from "react-icons/bs";
import BgImg from "@/assets/casestudies/hero.webp"
import Image, { StaticImageData } from "next/image";
import { Player, BigPlayButton } from "video-react";
import extraStyles from "../landing/testimonial/testimonial.module.css"
import { LazyBackgroundImage } from "@/components/backgroundImage/bg";
import clsx from "clsx";
import {
    BsArrowLeftCircle,
    BsArrowRightCircle,
} from "react-icons/bs";
import {
    MdOutlineKeyboardArrowLeft,
    MdOutlineKeyboardArrowRight,
} from "react-icons/md";

import img1 from "@/assets/reviews/video1.webp";
import img2 from "@/assets/reviews/video2.webp";
import img3 from "@/assets/reviews/Immersion day.webp";
import icanlogo from "@/assets/reviews/ican.webp";
import livelilogo from "@/assets/reviews/liveli.webp";
import gtcologo from "@/assets/partners/GTCO_logo.webp";
import convexityLogo from "@/assets/landing/convexitylogo.webp"
import convexity from "@/assets/landing/convexity-placeholder.webp"
import bitbarterLogo from "@/assets/landing/bitbarter.webp"
import bitbarter from "@/assets/landing/bitbarter-thumbnail.webp"

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
        image: convexity,
        link: "https://cloudplexo.com/Convexity_Case_Study_Testimonial.mp4",
        quote:
            "“With CloudPlexo, they help you to get a robust solution that will stand the test of time.”",
        company: null,
        title: null,
        logo: convexityLogo,
        speaker: "CTO | Co-founder - Convexity",
        caselink: "/case-study/convexity-case-study",
    },
    {
        id: 5,
        image: bitbarter,
        link: "https://cloudplexo.com/BitBarter-Customer-review.mp4",
        quote:
            "“If you have issues around infrastructure layer provisioning & deployment, CloudPlexo might just be the right partner that you need.”",
        company: null,
        title: null,
        logo: bitbarterLogo,
        speaker: "CEO Bitbarter",
        caselink: "/case-study",
    },
    {
        id: 2,
        image: img2,
        link: "https://cloudplexo.com/Liveli-Customer-Sucess.mp4",
        quote:
            "“I would defintely advise anyone anybody to migrate their cloud services with a partner like CloudPlexo.”",
        company: null,
        title: null,
        logo: livelilogo,
        speaker: "CTO Liveli",
        caselink: "/case-study/liveli-case-study",
    },
    {
        id: 3,
        image: img1,
        link: "https://cloudplexo.com/ICAN_ONLINE_TUTORS_final.mp4 ",
        company: null,
        title: "CTO of Liveli",
        quote:
            "“We highly recommend CloudPlexo, if  you are having any challenges  with your website and mobile apps”",
        logo: icanlogo,
        speaker: "Founder & CEO of IcanOnline Tutors",
        caselink: "/case-study/case-study-in-the-edtech-sector",
    },
    {
        id: 4,
        image: img3,
        link: "https://cloudplexo.com/GT_Pension_Immersion+Day_Testimonial.mp4",
        company: "Guarantee Trust Pension Managers",
        title: "CloudPlexo Immersion Day",
        quote: `"I had a great time with the CloudPlexo team, learning more about AWS and the cloud"`,
        logo: gtcologo,
        speaker: "Taiwo Owolabi",
        caselink: "/case-study/case-study-of-gt-pensions-managers",
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
                        {reviews.map((cases, index) => (
                            <div className={extraStyles.videoWrap} key={index}>
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

                                    <h3>{cases.quote}</h3>
                                    <Link href={cases.caselink}>Read case study</Link>
                                    <h4>{cases.speaker}</h4>
                                    <h6>{cases.company}</h6>
                                </div>
                                <section className={clsx(extraStyles.btngroup, extraStyles.mobile)}>
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
                    <section className={clsx(extraStyles.btngroup, extraStyles.desktop)}>
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

                <div className={styles["casestudy-list"]}>
                    {casestudy.map((cases, index) => (
                        <div className={styles["casestudy-list-item"]} key={index}>
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
                                            href={`/case-study/${cases.link}`}
                                        >
                                            <h5>
                                                {cases.title}
                                            </h5>
                                        </Link>
                                        <Link href={`/case-study/${cases.link}`}>
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
