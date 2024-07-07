"use client"

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./styles.module.css"
import {
    HiOutlineArrowSmallLeft,
    HiOutlineArrowSmallRight,
} from "react-icons/hi2";

import firstSliderLogo from "@/assets/events/logo.webp";
import awsLogo from "@/assets/events/awsLogo.webp";
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
import fourthSliderImg2 from "@/assets/events/event.webp";
import { ButtonTranparentLink } from "@/components/button/Button";

const eventSuccessArray = [
    {
        img: firstSliderLogo,
        text: `From startups to industry giants, the Fintechfusion Summit had it all. It was a knowledge feast, an incredible day of insights, innovation, unparalled networking and limitless opportunities at the Fintech Summit 2023!`,
        images: [
            secondSliderImg1,
            secondSliderImg2,
            secondSliderImg3,
            secondSliderImg4,
            secondSliderImg5,
        ],
        link: "/fintech-fusion-summit",
    },
    {
        img: awsLogo,
        text: `🚀 Just concluded an enriching AWS Immersion Day with the GT Pension Manager's team, and immense appreciation to the AWS team <a href="https://www.linkedin.com/in/kayode-ranger/">Kayode A. Akomolafe (Tech Ranger)</a>, <a href="https://www.linkedin.com/in/ousintkd/">Ousseynou khadim BEYE</a>, <a href="https://www.linkedin.com/in/onaopemipo-osunyomi-45a73244/">Onaopemipo Osunyomi</a>, and <a href="https://www.linkedin.com/in/eberenkoro"/>Ebere Nkoro</a> for their invaluable insights and guidance! 💡`,
        images: [sliderImg1, sliderImg2, sliderImg3, sliderImg4],
        link: "",
    },
    {
        img: awsLogo,
        text: `Heartfelt appreciation to the incredible members of the AWS team <a href="https://www.linkedin.com/in/eberenkoro/">Ebere Nkoro</a> and <a href="https://www.linkedin.com/in/osaretin-j-63692093/">Osaretin J</a> for their unparalleled support and seamless organisation, which contributed immensely to the success of this event.`,
        images: [thirdSliderImg1, thirdSliderImg2],
        link: "",
    },
    {
        img: awsLogo,
        text: `The energy was electric as attendees soaked in the insightful discussions and invaluable connections made. From groundbreaking tech insights to entrepreneurial wisdom, the mixer catalyzes innovation and collaboration.`,
        images: [fourthSliderImg2],
        link: "",
    },
];

function EventsSuccess() {
    const [currentEventIndex, setCurrentEventIndex] = useState<number>(0);
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
        speed: 500,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
    };

    return (
        <div className={styles["events-summit"]}>
            <div>
                <h2>Celebrating Our Event Successes</h2>
                <h4>Completed Events Gallery</h4>
            </div>

            <div className={styles["events-summit-container"]}>
                <section className={styles["left-side"]}>
                    <Slider {...settings}>
                        {currentEvent.images.map((image) => (
                            <div key={image.src}>
                                <Image
                                    src={image}
                                    alt="CloudPlexo's Cloud Solution Webinars - CloudPlexo"
                                />
                            </div>
                        ))}
                    </Slider>
                </section>
                <section className={styles["right-side"]}>
                    <Image
                        src={currentEvent.img}
                        alt="CloudPlexo's Cloud Solution Webinars - CloudPlexo"
                    />
                    <h2
                        dangerouslySetInnerHTML={{
                            __html: currentEvent.text,
                        }}
                    ></h2>
                    <section>
                        <ButtonTranparentLink link={currentEvent.link} title="Learn more" className={styles["btn"]} />

                        <button
                            type="button"
                            aria-label="Arrow left"
                            onClick={handlePreviousEvent}
                        >
                            <HiOutlineArrowSmallLeft />
                        </button>
                        <button
                            type="button"
                            aria-label="Arrow right"
                            onClick={handleNextEvent}
                        >
                            <HiOutlineArrowSmallRight />
                        </button>
                    </section>
                </section>
            </div>
        </div>
    );
}

export default EventsSuccess;
