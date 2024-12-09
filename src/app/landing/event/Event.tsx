"use client";

import { useState } from "react";
import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";
import dynamic from 'next/dynamic';
import styles from "./events.module.css";

import { eventSuccessArray } from "./array";
import { fetchContent } from "@/lib/actions";
import { EventProps } from "@/app/events/page";
import { useInView } from "react-intersection-observer";
import { formatDate, hasDatePassed } from "@/lib/utils";

const Slider = dynamic(() => import('react-slick'), { ssr: false });

type Event = {
  date: string;
  published: boolean;
}

function Event() {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0)
  const { data: events = [], error, isLoading } = useSWR<EventProps[]>(
    "events",
    fetchContent, {
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
  }
  );

  if (error) return <div>Failed to load events</div>

  if (isLoading) return <div>Loading events...</div>

  const upcomingEvents = events.filter(({ published, date }: Event) => published && !hasDatePassed(date))

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
    <div className={styles.events} ref={ref}>
      {upcomingEvents.length > 1 && <h2 id={styles["header-h2"]}>Upcoming Events</h2>}

      {inView &&
        <div className={styles["events-grid"]}>
          {upcomingEvents.length > 0 ?
            <section className={styles["upcoming-events"]}>
              {upcomingEvents.length == 1 && <h2 id={styles["header-h2"]}>Upcoming Events</h2>}
              {upcomingEvents.slice(0, 2).map((item) => (
                <div key={item.key} className={styles["upcoming-events-grid"]}>
                  <Image
                    loading="lazy"
                    src={item.images[0]}
                    alt={item.title}
                    priority={false}
                    width={300}
                    height={300}
                  />
                  <div>
                    <h4>{formatDate(item.date)}</h4>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <Link href={item.key} target="blank">
                      Register
                    </Link>
                  </div>
                </div>
              ))}
            </section>
            :
            <section>
              <h2 id={styles["header-h2"]}>Upcoming Events</h2>

              <div className={styles["upcoming-events-grid"]}>
                <div className={styles["upcoming-events-blur"]}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="70"
                    height="70"
                    fill="none"
                    stroke="#c5c4c4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="15" y1="9" x2="9" y2="15" />
                    <line x1="9" y1="9" x2="15" y2="15" />
                  </svg>
                </div>
                <div>
                  <h3>Event</h3>
                  <p>no upcoming event at this time</p>
                </div>
              </div>
            </section>
          }

          <section className={styles["past-events"]}>
            <h2>Celebrating Thought Leadership Successes</h2>
            <Link href="/events">Go to event gallery</Link>

            <div className={styles["slider-container"]}>
              <div className={styles["slider"]}>
                <Slider {...settings}>
                  {eventSuccessArray.map((event) => (
                    <div key={event.image.src}>
                      <Image
                        loading="lazy"
                        src={event.image.src}
                        priority={false}
                        alt="Event Image"
                        placeholder="blur"
                        width={event.width}
                        height={event.image.height}
                        blurDataURL={event.image.blurDataURL}
                      />
                      {event.text !== "" ? (
                        <div className={styles["sliderText"]}>
                          <div
                            className={
                              event.text !== ""
                                ? styles.textContent
                                : styles.textContentWithoutHeader
                            }
                          >
                            {event.text !== "" && (
                              <h3>Business Day Event</h3>
                            )}
                            <p>{event.text}</p>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </section>
        </div>
      }
    </div>
  );
}

export default Event;
