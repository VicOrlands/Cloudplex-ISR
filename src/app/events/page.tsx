"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";

import { EventsArray } from "./arrays/eventsArray";
import { WebinarArray } from "./arrays/webinarArray";
import CTAForm from "@/components/callToAction/cta";
import { MdOutlineArrowOutward } from "react-icons/md";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { LazyBackgroundImage } from "@/components/backgroundImage/bg";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";

import Thumbnail from "@/assets/events/events-video-thumbnail.webp";
import BgImg from "@/assets/events/Background_pattern.webp";
import Footer from "./footer/page";
import VideoPlayer from "@/components/videoPlayer/VideoPlayer";

function Events() {
  const eventsPerPage = useRef<number>(8);
  const paginationLimit = 4;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(
    Math.ceil(EventsArray.length / eventsPerPage.current)
  );

  const [pages] = useState<number>(
    Math.round(EventsArray.length / eventsPerPage.current)
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 769 && window.innerWidth <= 1425) {
        eventsPerPage.current = 6;
      } else {
        eventsPerPage.current = 8;
      }
      setTotalPages(Math.ceil(EventsArray.length / eventsPerPage.current));
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function nextEvents() {
    setCurrentPage((page) => Math.min(page + 1, totalPages));
  }

  function prevEvents() {
    setCurrentPage((page) => Math.max(page - 1, 1));
  }

  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * eventsPerPage.current;
    const endIndex = startIndex + eventsPerPage.current;
    return EventsArray.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start =
      Math.floor((currentPage - 1) / paginationLimit) * paginationLimit;
    return Array.from(
      { length: paginationLimit },
      (_, idx) => start + idx + 1
    ).filter((page) => page <= totalPages);
  };

  function changePage(event: React.MouseEvent<HTMLParagraphElement>) {
    const target = event.target as HTMLParagraphElement;
    const pageNumber = Number(target.textContent);
    if (!isNaN(pageNumber)) {
      setCurrentPage(pageNumber);
    }
  }

  return (
    <>
      <LazyBackgroundImage src={BgImg} className={styles["bgImg"]}>
        <div className={styles.eventsHero}>
          <div>
            <h1>Events</h1>
            <p>
              Get updated on the most recent developments in the industry,
              including news, interviews, cutting-edge technologies, and
              valuable resources.
            </p>
            <CTAForm />
          </div>

          <div className={styles.eventsHeroVideo}>
            <VideoPlayer
              src="https://cloudplexo.com/Marketing-Migration.mp4"
              poster={Thumbnail.src}
            />
          </div>
        </div>
      </LazyBackgroundImage>

      <article className={styles.eventSocials}>
        {getPaginatedData().map((event) => (
          <div className={styles.eventSocialsGrid} key={event.title}>
            <div className={styles.eventSocialsImgContainer}>
              <Image
                src={event.img}
                alt="CloudPlexo's Cloud Solution Webinars - CloudPlexo"
              />
            </div>
            <div className={styles.eventSocialsBodyContainer}>
              <h3>{event.title}</h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: event.text,
                }}
              ></p>
              <div>
                <Link
                  href={
                    event.link.includes("https://")
                      ? event.link
                      : `/events/${event.link}`
                  }
                  target={event.link.includes("https://") ? "blank" : "_top"}
                  aria-label="Register"
                >
                  {event.linkText}
                </Link>
                <MdOutlineArrowOutward id="icon" size={16} color="#3E54AC" />
              </div>
            </div>
          </div>
        ))}
      </article>
      <div className={styles["pagination"]}>
        <p
          onClick={prevEvents}
          className={currentPage === 1 ? styles["disabled"] : styles[" "]}
        >
          <HiOutlineArrowSmLeft size={24} fill="#475467" />
          <span>Previous</span>
        </p>

        <div>
          {getPaginationGroup().map((item, idx) => (
            <p
              key={idx}
              onClick={changePage}
              className={
                styles["paginationItem"] +
                " " +
                (currentPage === item ? styles["active"] : styles[" "])
              }
            >
              {item}
            </p>
          ))}
          <p className={styles["mobile-page-item"]}>
            Page {currentPage} of {totalPages}
          </p>
        </div>

        <p
          onClick={nextEvents}
          className={currentPage === pages ? styles["disabled"] : styles[" "]}
        >
          <span>Next</span>
          <HiOutlineArrowSmRight size={24} fill="#475467" />
        </p>
      </div>

      <div className={styles.eventWebinars}>
        <h2>Webinars</h2>

        <div className={styles.eventWebinarGrid}>
          {WebinarArray.map((webinar) => (
            <div className={styles.eventWebinarCard} key={webinar.link}>
              <div className={styles.eventWebinarCardImage}>
                <Image
                  src={webinar.image}
                  alt="CloudPlexo's Cloud Solution Webinars - CloudPlexo"
                />
              </div>
              <div className={styles.eventWebinarCardContent}>
                <h5>{webinar.name}</h5>
                <Link
                  href={
                    webinar.link.includes("https://")
                      ? webinar.link
                      : `/events/${webinar.link}`
                  }
                >
                  Explore <HiOutlineArrowSmallRight id={styles.icon} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Events;
