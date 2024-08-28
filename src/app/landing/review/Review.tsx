"use client"

import Link from "next/link";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./reviews.module.css";
import 'video-react/dist/video-react.css';
import { Player, BigPlayButton } from "video-react";
import Image, { StaticImageData } from "next/image";
import { LazyBackgroundImage } from "@/components/backgroundImage/bg";
import {
    MdOutlineKeyboardArrowLeft,
    MdOutlineKeyboardArrowRight,
} from "react-icons/md";

import img1 from "@/assets/reviews/video1.webp";
import img2 from "@/assets/reviews/video2.webp";
import img3 from "@/assets/reviews/Immersion day.webp";
import icanlogo from "@/assets/reviews/ican.webp";
import livelilogo from "@/assets/reviews/liveli.webp";
import vectorquote from "@/assets/reviews/vector.webp";
import vectorquote2 from "@/assets/reviews/vector1.webp";
import gtcologo from "@/assets/partners/GTCO_logo.webp";
import BgImage from "@/assets/reviews/testimonialbg.webp"
import convexityLogo from "@/assets/landing/convexitylogo.webp"
import convexity from "@/assets/landing/convexity-placeholder.webp"
import bitbarterLogo from "@/assets/landing/bitbarter.webp"
import bitbarter from "@/assets/landing/bitbarter-thumbnail.webp"
import clsx from "clsx";

interface CaseStudyProps {
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

export const casestudy: CaseStudyProps[] = [
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

const wordreview: {
    content: string,
    by: string
}[] = [
        {
            content:
                "CloudPlexo is the best in their league, providing top-notch services for our cloud-based enterprise. Their advanced software identifies vulnerabilities, optimizes cost efficiency, and streamlines resources",
            by: "CTO, PhastPay",
        },
        {
            content:
                "CloudPlexo provides good and quality assistance to IOT, and they are fast in providing solutions to technical problems.",
            by: "CEO, IoT",
        },
        {
            content:
                "CloudPlexo has helped us reduce our cloud cost by up to 30%; and the technical team are very experienced in providing solutions.",
            by: "CTO, Liveli.App",
        },
        {
            content:
                "Upskilling your team in developing data solutions or applications in the cloud leverging cloud native tools count on CloudPlexo. CloudPlexo upskilled our team in deploying a serverless data lake solution in the cloud.",
            by: "Data Manager, Accenture",
        },
        {
            content:
                "Building data driven applications, choosing the right technology, and following best practices in the cloud. CloudPlexo guided our team on the right direction for our data to cloud and pre-empting pitfalls.",
            by: "Senior Data Engineer, BP Oil",
        },
        {
            content:
                "CloudPlexo enables organisations using public clouds to visualize all their cloud spending in one place. The team at cloudPlexo are constantly innovating and we look forward to what they would release next to assist us further with our cloud strategy.",
            by: "CEO, Geria",
        },
        {
            content:
                "CloudPlexo is a tool both finance and developers can use. Having all our cloud environments managed in one consolidated, easy-to-use platform has helped us significantly reduce our AWS bill.",
            by: "Cloud Solutions Manager, Inttix",
        },
        {
            content:
                "CloudPlexo is a tool both finance and developers can use. Having all our cloud environments managed in one consolidated, easy-to-use platform has helped us significantly reduce our AWS bill.",
            by: "CEO, Sentaloe",
        },
    ];

const Review: React.FC = () => {
    const [sliderRef, setSliderRef] = useState<Slider | null>(null);

    const settings = {
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
        <div className={styles.reviewContainer}>
            <h2>With CloudPlexo, the possibilities for customer innovation are endless.</h2>

            <div className={styles.reviewVideo}>
                <Slider ref={setSliderRef} {...videosettings}>
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

            <LazyBackgroundImage src={BgImage} className={styles.wordsReview}>
                <div className={styles.reviewsCarouselContainer}>
                    <Slider {...settings}>
                        {wordreview.map((review, index) => (
                            <div className={styles.reviewBox} key={index}>
                                <Image
                                    loading="lazy"
                                    priority={false}
                                    src={vectorquote}
                                    className={styles.quote1}
                                    alt="Top Cloud Services providers with CloudPlexo's Innovative Solutions"
                                />

                                <Image
                                    loading="lazy"
                                    priority={false}
                                    src={vectorquote2}
                                    className={styles.quote2}
                                    alt="Top Cloud Services providers with CloudPlexo's Innovative Solutions"
                                />

                                <div>
                                    <p className={styles.reviewsPara}>{review.content}</p>
                                    <p className={styles.reviewsHeader}>{review.by}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </LazyBackgroundImage>
        </div>
    );
}

export default Review;
