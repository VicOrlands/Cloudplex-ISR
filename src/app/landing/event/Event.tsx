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
import event1 from "@/assets/events/events1/one.webp";
import event2 from "@/assets/events/events1/two.webp";
import event3 from "@/assets/events/events1/three.webp";
import event4 from "@/assets/events/events1/four.webp";
import event5 from "@/assets/events/events1/five.webp";
import event6 from "@/assets/events/events1/six.webp";
import event7 from "@/assets/events/events1/seven.webp";
import event8 from "@/assets/events/events1/eight.webp";
import event9 from "@/assets/events/events1/nine.webp";
import event10 from "@/assets/events/events1/ten.webp";
import event11 from "@/assets/events/events1/eleven.webp";
import firstSliderLogo from "@/assets/events/logo.webp";
import businessDayLogo from "@/assets/events/Digital-Journal.webp";
import sliderImg1 from "@/assets/events/Immersion image 1.webp";
import sliderImg2 from "@/assets/events/Immersion image 2.webp";
import sliderImg3 from "@/assets/events/Immersion image 3.webp";
import sliderImg4 from "@/assets/events/Immersiin image 4.webp";
import secondSliderImg1 from "@/assets/events/DSC_0144.webp";
import secondSliderImg2 from "@/assets/events/DSC_0158.webp";
import secondSliderImg3 from "@/assets/events/DSC_0171.webp";
import secondSliderImg4 from "@/assets/events/DSC_0196.webp";
import secondSliderImg5 from "@/assets/events/DSC_0212.webp";
import thirdSliderImg1 from "@/assets/events/1691070055643.webp";
import thirdSliderImg2 from "@/assets/events/1691070093414.webp";
import kigali1 from "@/assets/events/kigali/first.webp"
import kigali2 from "@/assets/events/kigali/second.webp"
import kigali3 from "@/assets/events/kigali/third.webp"
import kigali4 from "@/assets/events/kigali/fourth.webp"
import kigali5 from "@/assets/events/kigali/fifth.webp"
import kigali6 from "@/assets/events/kigali/sixth.webp"
import kigali7 from "@/assets/events/kigali/seventh.webp"

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
        text: `We were thrilled to co-host & sponsor the BusinessDay Economic Club's "C-Suite Executives Roundtable Dinner." It was an evening of insightful discussions and valuable connections. <br/><br/> Thank you to all who attended and made it a success! <br/><br/>We're excited to see the future collaborations and innovations sparked by this event!`,
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
    {
        img: awsLogo,
        imgText: "",
        text: `Kigali Mixer Event. Watch a recap of the event <a href="https://cloudplexo.com/Kigali-mixer.mp4">here</a>`,
        images: [
            kigali1,
            kigali2,
            kigali3,
            kigali4,
            kigali5,
            kigali6,
            kigali7,
        ],
        width: 128,
    },
];

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
                                    loading="lazy"
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
                        loading="lazy"
                        src={currentEvent.img}
                        alt="CloudPlexo's Cloud Solution Webinars - CloudPlexo"
                        height={40}
                        width={currentEvent.width}
                    />
                    <h4
                        dangerouslySetInnerHTML={{
                            __html: currentEvent.text,
                        }}
                    ></h4>
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
