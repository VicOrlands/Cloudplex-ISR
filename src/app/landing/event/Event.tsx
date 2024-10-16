"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import styles from "./events.module.css";
import { eventSuccessArray } from "./array";
import { MdArrowForward, MdArrowBack } from "react-icons/md";
import { EventsArray } from "@/app/events/arrays/eventsArray";

function Event() {
  const [currentEventIndex, setCurrentEventIndex] = useState<number>(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const currentEvent = eventSuccessArray[currentEventIndex];

  const handleNextEvent = () => {
    setCurrentEventIndex((prevIndex) =>
      prevIndex === eventSuccessArray.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousEvent = () => {
    setCurrentEventIndex((prevIndex) =>
      prevIndex === 0 ? eventSuccessArray.length - 1 : prevIndex - 1
    );
  };

  const upcomingEvents = EventsArray.filter(
    (event) => event.linkText === "Register"
  );

  const settings = {
    dots: true,
    speed: 500,
    arrows: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    beforeChange: (oldIndex: number, newIndex: React.SetStateAction<number>) =>
      setCurrentSlideIndex(newIndex),
    customPaging: (i: number) => (
      <div
        style={{
          width: "12px",
          height: "4px",
          backgroundColor: "#fff",
          opacity: i === currentSlideIndex ? 1 : 0.3,
        }}
      />
    ),
    appendDots: (
      dots:
        | string
        | number
        | bigint
        | boolean
        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
        | Iterable<React.ReactNode>
        | React.ReactPortal
        | Promise<React.AwaitedReactNode>
        | null
        | undefined
    ) => <ul style={{ marginBottom: 30 }}>{dots}</ul>,
  };

  return (
    <div className={styles.events}>
      <h2 id={styles["header-h2"]}>Upcoming Events</h2>

      <div className={styles["events-grid"]}>
        <section className={styles["upcoming-events"]}>
          {upcomingEvents.slice(0, 2).map((item) => (
            <div key={item.title} className={styles["upcoming-events-grid"]}>
              <Image
                loading="lazy"
                src={item.img}
                alt={item.title}
                priority={false}
                placeholder="blur"
              />
              <div>
                <h4>{item.date}</h4>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <Link href={item.link} target="blank">
                  Register
                </Link>
              </div>
            </div>
          ))}
        </section>

        <section className={styles["past-events"]}>
          <h2>Celebrating Thought Leadership Successes</h2>
          <Link href="/events">Go to event gallery</Link>

          <div className={styles["slider-container"]}>
            <div className={styles["slider"]}>
              <Slider {...settings}>
                {currentEvent.images.map((image, index) => (
                  <div key={index}>
                    <Image
                      loading="lazy"
                      src={image}
                      alt={`Event Image ${index + 1}`}
                      priority={false}
                      placeholder="blur"
                    />
                    {currentEvent.imgHeader || currentEvent.imgText ? (
                      <div className={styles["sliderText"]}>
                        <div
                          className={
                            currentEvent.imgHeader
                              ? styles.textContent
                              : styles.textContentWithoutHeader
                          }
                        >
                          {currentEvent.imgHeader && (
                            <h3>Business Day Event</h3>
                          )}
                          <p>{currentEvent.imgText}</p>
                        </div>
                      </div>
                    ) : null}
                  </div>
                ))}
              </Slider>
            </div>
            <section className={styles.btngroup}>
              <button
                type="button"
                aria-label="Arrow pointing left"
                onClick={handlePreviousEvent}
              >
                <MdArrowBack />
              </button>
              <button
                type="button"
                aria-label="Arrow pointing right"
                onClick={handleNextEvent}
              >
                <MdArrowForward />
              </button>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Event;
