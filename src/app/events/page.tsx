"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";
import useSWR from "swr"
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";
import { useRouter, useSearchParams } from "next/navigation";

import { MdOutlineArrowOutward } from "react-icons/md";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import BgImg from "@/assets/events/Background_pattern.webp";
import Thumbnail from "@/assets/events/events-video-thumbnail.webp";
import { LazyBackgroundImage } from "@/components/backgroundImage/bg";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";

import Footer from "./footer/page";
import { hasDatePassed } from "@/lib/utils";
import { fetchContent } from "@/lib/actions";
import CTAForm from "@/components/callToAction/cta";
import { WebinarArray } from "./arrays/webinarArray";
import VideoPlayer from "@/components/videoPlayer/VideoPlayer";

export interface EventProps {
  key: string;
  about: string;
  date: string;
  title: string;
  images: string[];
  videos: string[];
  register: string;
  location: string;
  published: boolean;
  description: string;
}

function EventsWithURLParam() {
  const router = useRouter();
  const searchParams = useSearchParams()

  const page = searchParams.get('page')
  const currentPageFromUrl = parseInt(page as string, 10) || 1;

  const { data: events = [], error, isLoading } = useSWR<EventProps[]>(
    "events",
    fetchContent, {
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
  }
  );

  const eventsPerPage = useRef<number>(8);
  const paginationLimit = 4;
  const [currentPage, setCurrentPage] = useState<number>(currentPageFromUrl);
  const totalPages = Math.ceil(events.length / eventsPerPage.current);

  const [pages] = useState<number>(
    Math.round(events.length / eventsPerPage.current)
  );

  useEffect(() => {
    router.push(`/events?page=${currentPage}`);
  }, [currentPage, router]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 769 && window.innerWidth <= 1425) {
        eventsPerPage.current = 6;
      } else {
        eventsPerPage.current = 8;
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * eventsPerPage.current;
    const endIndex = startIndex + eventsPerPage.current;
    return events.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / paginationLimit) * paginationLimit;
    return Array.from(
      { length: paginationLimit },
      (_, idx) => start + idx + 1
    ).filter((page) => page <= totalPages);
  };

  if (error) {
    return <div>Failed to load events</div>;
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
        {isLoading ? (
          <h3 style={{ fontSize: "1.6rem", fontWeight: 500 }}>Loading Events...</h3>
        ) :
          getPaginatedData().length > 0 ? (
            getPaginatedData()?.map((event: EventProps) => (
              <div className={styles.eventSocialsGrid} key={event.key}>
                <div className={styles.eventSocialsImgContainer}>
                  {event?.images?.length > 0 &&
                    <Image
                      src={event?.images[0]}
                      alt={`${event.title} - CloudPlexo`}
                      width={300}
                      height={300}
                    />}
                </div>
                <div className={styles.eventSocialsBodyContainer}>
                  <h3>{event.title}</h3>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: event.description,
                    }}
                  ></p>
                  <div>
                    <Link
                      href={hasDatePassed(event.date)
                        ? `/events/${event.key}`
                        : event.key
                      }
                      target={hasDatePassed(event.date) ? "_top" : "blank"}
                      aria-label="Register"
                    >
                      {hasDatePassed(event.date) ? "View info" : "Register"}
                    </Link>
                    <MdOutlineArrowOutward id="icon" size={16} color="#3E54AC" />
                  </div>
                </div>
              </div>
            ))) : (
            <h3>No Events Available</h3>
          )}
      </article>
      {!isLoading && totalPages > 1 &&
        <div className={styles["pagination"]}>
          <p
            onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))}
            className={currentPage === 1 ? styles["disabled"] : styles[" "]}
          >
            <HiOutlineArrowSmLeft size={24} fill="#475467" />
            <span>Previous</span>
          </p>

          <div>
            {getPaginationGroup().map((item) => (
              <p
                key={item}
                onClick={() => setCurrentPage(item)}
                className={
                  styles["paginationItem"] +
                  " " + (currentPage === item ? styles["active"] : styles[" "])
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
            onClick={() => setCurrentPage((page) => Math.min(page + 1, totalPages))}
            className={currentPage === pages ? styles["disabled"] : styles[" "]}
          >
            <span>Next</span>
            <HiOutlineArrowSmRight size={24} fill="#475467" />
          </p>
        </div>
      }

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
  )
}

const EventsPage: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EventsWithURLParam />
    </Suspense>
  );
}

export default EventsPage;
