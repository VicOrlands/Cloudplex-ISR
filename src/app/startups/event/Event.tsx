"use client"

import React, { useState } from "react";
import "./events.css";
import Image from "next/image";
import {
  HiOutlineArrowSmallLeft,
  HiOutlineArrowSmallRight,
} from "react-icons/hi2";
import { eventsArray } from "../arrayList";

function EventsSuccess() {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const currentEvent = eventsArray[currentEventIndex];

  const handleNextEvent = () => {
    setCurrentEventIndex((prevIndex) =>
      prevIndex === eventsArray.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handlePreviousEvent = () => {
    setCurrentEventIndex((prevIndex) =>
      prevIndex === 0 ? eventsArray.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className="events-summit-container">
      <section className="left-side">
        <Image
          src={currentEvent.img}
          alt="Ready to supercharge your startup journey - CloudPlexo"
        />
      </section>
      <section className="right-side">
        <h2
          dangerouslySetInnerHTML={{
            __html: currentEvent.text,
          }}
        ></h2>

        <section>
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
  );
}

export default EventsSuccess;
