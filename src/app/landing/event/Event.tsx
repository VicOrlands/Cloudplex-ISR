"use client"

import React, { useState } from "react";
import Link from "next/link";
import styles from "./events.module.css";
import Image, { StaticImageData } from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    MdOutlineKeyboardArrowLeft,
    MdOutlineKeyboardArrowRight,
} from "react-icons/md";

import awsLogo from "@/assets/events/awsLogo.webp";
import event1 from "@/assets/events/events1/one.jpg";
import event2 from "@/assets/events/events1/two.png";
import event3 from "@/assets/events/events1/three.jpg";
import event4 from "@/assets/events/events1/four.jpg";
import event5 from "@/assets/events/events1/five.jpg";
import event6 from "@/assets/events/events1/six.jpg";
import event7 from "@/assets/events/events1/seven.jpg";
import event8 from "@/assets/events/events1/eight.jpg";
import event9 from "@/assets/events/events1/nine.jpg";
import event10 from "@/assets/events/events1/ten.jpg";
import event11 from "@/assets/events/events1/eleven.jpg";
import firstSliderLogo from "@/assets/events/logo.webp";
import businessDayLogo from "@/assets/events/Digital-Journal.webp";
import sliderImg1 from "@/assets/events/Immersion image 1.jpeg";
import sliderImg2 from "@/assets/events/Immersion image 2.jpeg";
import sliderImg3 from "@/assets/events/Immersion image 3.jpeg";
import sliderImg4 from "@/assets/events/Immersiin image 4.jpeg";
import secondSliderImg1 from "@/assets/events/DSC_0144.jpg";
import secondSliderImg2 from "@/assets/events/DSC_0158.jpg";
import secondSliderImg3 from "@/assets/events/DSC_0171.jpg";
import secondSliderImg4 from "@/assets/events/DSC_0196.jpg";
import secondSliderImg5 from "@/assets/events/DSC_0212.jpg";
import thirdSliderImg1 from "@/assets/events/1691070055643.jpeg";
import thirdSliderImg2 from "@/assets/events/1691070093414.jpeg";

interface EventProps {
    img: StaticImageData,
    imgText: string,
    text: string,
    images: StaticImageData[],
    width: number
}

const eventSuccessArray: EventProps[] = [
    {
        img: businessDayLogo,
        imgText: `We were thrilled to co-host & sponsor the BusinessDay Economic Club's "C-Suite Executives Roundtable Dinner." It was an evening of insightful discussions and valuable connections.`,
        text: `We were thrilled to co-host & sponsor the BusinessDay Economic Club's "C-Suite Executives Roundtable Dinner." It was an evening of insightful discussions and valuable connections.Thank you to all who attended and made it a success!We're excited to see the future collaborations and innovations sparked by this event!`,
        images: [
            event2,
            event1,
            event3,
            event4,
            event5,
            event6,
            event7,
            event8,
            event9,
            event10,
            event11,
        ],
        width: 307,
    },
    {
        img: firstSliderLogo,
        imgText:
            "The Fintechfusion Summit Was an incredible day of insights, innovation, unparalled networking and limitless opportunities.",
        text: `From startups to industry giants, the Fintechfusion Summit had it all. It was a knowledge feast, an incredible day of insights, innovation, unparalled networking and limitless opportunities at the Fintech Summit 2023!`,
        images: [
            secondSliderImg1,
            secondSliderImg2,
            secondSliderImg3,
            secondSliderImg4,
            secondSliderImg5,
        ],
        width: 128,
    },
    {
        img: awsLogo,
        imgText: "",
        text: `Just concluded an enriching AWS Immersion Day with the GT Pension Manager's team, and immense appreciation to the AWS team <a href="https://www.linkedin.com/in/kayode-ranger/">Kayode A. Akomolafe (Tech Ranger)</a>, <a href="https://www.linkedin.com/in/ousintkd/">Ousseynou khadim BEYE</a>, <a href="https://www.linkedin.com/in/onaopemipo-osunyomi-45a73244/">Onaopemipo Osunyomi</a>, and <a href="https://www.linkedin.com/in/eberenkoro/">Ebere Nkoro</a> for their invaluable insights and guidance!`,
        images: [sliderImg1, sliderImg2, sliderImg3, sliderImg4],
        width: 128,
    },
    {
        img: awsLogo,
        imgText: "",
        text: `Heartfelt appreciation to the incredible members of the AWS team <a href="https://www.linkedin.com/in/eberenkoro/">Ebere Nkoro</a> and <a href="https://www.linkedin.com/in/osaretin-j-63692093/">Osaretin J</a> for their unparalleled support and seamless organisation, which contributed immensely to the success of this event.`,
        images: [thirdSliderImg1, thirdSliderImg2],
        width: 128,
    },
];

// link component
const parseTextWithLinks = (text: string) => {
    const linkRegex = /<a href="([^"]+)">([^<]+)<\/a>/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
        if (match.index > lastIndex) {
            parts.push(text.substring(lastIndex, match.index));
        }
        parts.push(
            <Link href={match[1]} key={match.index}>
                {match[2]}
            </Link>
        );
        lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
        parts.push(text.substring(lastIndex));
    }

    return parts;
};


function Event() {
    const [currentEventIndex, setCurrentEventIndex] = useState<number>(0);
    const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
    const currentEvent = eventSuccessArray[currentEventIndex];

    const handleNextEvent = () => {
        setCurrentEventIndex((prevIndex) =>
            prevIndex === eventSuccessArray.length - 1 ? 0 : prevIndex + 1,
        );
    };

    const handlePreviousEvent = () => {
        setCurrentEventIndex((prevIndex) =>
            prevIndex === 0 ? eventSuccessArray.length - 1 : prevIndex - 1,
        );
    };

    const settings = {
        dots: true,
        speed: 500,
        arrows: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        beforeChange: (oldIndex: number, newIndex: React.SetStateAction<number>) => setCurrentSlideIndex(newIndex),
        customPaging: (i: number) => (
            <div
                style={{
                    width: "12px",
                    height: "3px",
                    backgroundColor: "#fff",
                    opacity: i === currentSlideIndex ? 1 : 0.3,
                }}
            />
        ),
        appendDots: (dots: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined) => <ul style={{ marginBottom: 40 }}>{dots}</ul>,
    };

    const parsedContent = parseTextWithLinks(currentEvent.text);

    return (
        <div className={styles.events}>
            <div>
                <h2>Celebrating Thought Leadership Sucesses</h2>
                <h4>Completed Thought Leadership Gallery</h4>
            </div>

            <div className={styles.eventsContainer}>
                <section className={styles.leftSide}>
                    <Slider {...settings}>
                        {currentEvent.images.map((image, index) => (
                            <div key={index}>
                                <Image
                                    src={image}
                                    alt="CloudPlexo's Cloud Solution Webinars - CloudPlexo"
                                />
                                <div className={styles.sliderText}>
                                    <div className={styles.textContent}>
                                        <h3>
                                            {currentEvent.imgText !== "" && "Business Day Event"}
                                        </h3>
                                        <p>{currentEvent.imgText}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </section>
                <section className={styles.rightSide}>
                    <Image
                        src={currentEvent.img}
                        alt="CloudPlexo's Cloud Solution Webinars - CloudPlexo"
                        height={40}
                        width={currentEvent.width}
                    />
                    <h4>{parsedContent}</h4>
                    <section>
                        <Link href="/events" className={styles.viewAllButton}>
                            View All Our Events
                        </Link>
                    </section>
                </section>

                <section className={styles.btngroup}>
                    <button
                        type="button"
                        aria-label="Arrow pointing left"
                        onClick={handlePreviousEvent}
                    >
                        <MdOutlineKeyboardArrowLeft />
                    </button>
                    <button
                        type="button"
                        aria-label="Arrow pointing right"
                        onClick={handleNextEvent}
                    >
                        <MdOutlineKeyboardArrowRight />
                    </button>
                </section>
            </div>
        </div>
    );
}

export default Event;
