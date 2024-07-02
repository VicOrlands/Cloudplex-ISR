"use client"

import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import styles from "./reviews.module.css";
import 'video-react/dist/video-react.css';
import { Player, BigPlayButton } from "video-react";
import Image, { StaticImageData } from "next/image";

import img1 from "@/assets/reviews/video1.png";
import img2 from "@/assets/reviews/video2.png";
import img3 from "@/assets/reviews/Immersion day.png";
import icanlogo from "@/assets/reviews/ican.png";
import livelilogo from "@/assets/reviews/liveli.png";
import vectorquote from "@/assets/reviews/vector.png";
import vectorquote2 from "@/assets/reviews/vector1.png";
import gtcologo from "@/assets/partners/GTCO_logo.webp";
import BgImage from "@/assets/reviews/testimonialbg.png"
import {
    BsArrowLeft,
    BsArrowRight,
    BsArrowLeftCircle,
    BsArrowRightCircle,
} from "react-icons/bs";
import clsx from "clsx";
import Link from "next/link";

const LazyBackgroundImage = ({ src, className, children }: {
    src: StaticImageData, className: string, children: React.ReactNode
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsLoaded(true);
                        observer.disconnect();
                    }
                });
            },
            {
                rootMargin: "100px",
            },
        );

        if (bgRef.current) {
            observer.observe(bgRef.current);
        }

        return () => {
            if (observer && observer.disconnect) {
                observer.disconnect();
            }
        };
    }, []);

    return (
        <div
            ref={bgRef}
            className={className}
            style={{
                backgroundImage: isLoaded ? `url(${src.src})` : "none",
            }}
        >
            {children}
        </div>
    );
};


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

const Review: React.FC = () => {
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

    const casestudy: CaseStudyProps[] = [
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
    return (
        <div className={styles.reviewContainer}>
            <h2>
                With Cloudplexo, the possibilities for customer innovation are
                endless.
            </h2>

            <div className={styles.reviewVideo}>
                <Slider ref={setSliderRef} {...videosettings}>
                    {casestudy.map((cases, key) => (
                        <div className={styles.videoWrap} key={key}>
                            <div className={styles.imageWrap}>
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
                            <div className={styles.contentWrap}>
                                <Image
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
                                <div className={styles.controls}>
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

            <LazyBackgroundImage src={BgImage} className={styles.wordsReview}>
                <div className={styles.reviewsCarouselContainer}>
                    <Slider {...settings}>
                        {wordreview.map((review, index) => (
                            <div className={styles.reviewBox} key={index}>
                                <Image
                                    src={vectorquote}
                                    className={styles.quote1}
                                    alt="Top Cloud Services providers with CloudPlexo's Innovative Solutions"
                                />

                                <Image
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
