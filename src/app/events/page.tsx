"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";
import 'video-react/dist/video-react.css';

import { EventsArray, WebinarArray } from "./eventsArray";
import CTAForm from "@/components/callToAction/cta";
import { Player, BigPlayButton } from "video-react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";

import Thumbnail from "@/assets/events/events-video-thumbnail.png";
import Partner1 from "@/assets/startups/partners/MaxFiles-logo.png";
import Partner2 from "@/assets/startups/partners/borderless.png";
import Partner6 from "@/assets/startups/partners/logo1.png";
import Partner4 from "@/assets/startups/partners/hub_one.png";
import Partner5 from "@/assets/startups/partners/ibadan_startup.png";
import Partner3 from "@/assets/startups/partners/cafe_one.png";
import Partner9 from "@/assets/startups/partners/sdc.png";
import Partner10 from "@/assets/startups/partners/start_innovation_hub.png";
import Partner8 from "@/assets/startups/partners/root.png";
import Partner7 from "@/assets/startups/partners/vatebra_logo.png";

const partners = [
    Partner1,
    Partner2,
    Partner6,
    Partner4,
    Partner5,
    Partner3,
    Partner9,
    Partner10,
    Partner8,
    Partner7,
];

function Events() {
    return (
        <section className={styles.eventParent}>
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
                    <Player
                        playsInline
                        aspectRatio="2.2:1"
                        poster={Thumbnail.src}
                        src="https://cloudplexo.com/Marketing-Migration.mp4"
                    >
                        <BigPlayButton position="center" />
                    </Player>
                </div>
            </div>

            <article className={styles.eventSocials}>
                {EventsArray.map((event) => (
                    <div className={styles.eventSocialsGrid} key={event.title}>
                        <div className={styles.eventSocialsImgContainer}>
                            <Image
                                src={event.img}
                                alt="CloudPlexo's Cloud Solution Webinars - CloudPlexo"
                            />
                            <div
                                className={
                                    event.date !== ""
                                        ? styles.justifyHeading
                                        : styles.alignHeadingCenter
                                }
                            >
                                {event.date !== "" && <h5>{event.date}</h5>}
                                <h5>{event.title}</h5>
                            </div>
                        </div>
                        <div className={styles.eventSocialsBodyContainer}>
                            <h3>{event.title}</h3>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: event.text,
                                }}
                            ></p>
                            <div>
                                {event.link.includes("https://") ?
                                    <Link href={event.link} aria-label="Learn more">
                                        Register
                                    </Link>
                                    :
                                    <Link href={`/events/${event.link}`} aria-label="Learn more">
                                        Learn More
                                    </Link>
                                }
                                <MdOutlineArrowOutward id="icon" size={16} color="#3E54AC" />
                            </div>
                        </div>
                    </div>
                ))}
            </article>

            <div className={styles.eventWebinars}>
                <h2>Webinars</h2>

                <div className={styles.eventWebinarGrid}>
                    {WebinarArray.map((webinar) => (
                        <div className={styles.eventWebinarCard} key={webinar.slug}>
                            <div className={styles.eventWebinarCardImage}>
                                <Image
                                    src={webinar.image}
                                    alt="CloudPlexo's Cloud Solution Webinars - CloudPlexo"
                                />
                            </div>
                            <div className={styles.eventWebinarCardContent}>
                                <h5>{webinar.name}</h5>
                                <Link href={webinar.slug.includes("https://") ? webinar.slug : `/events/${webinar.slug}`}>
                                    Explore <HiOutlineArrowSmallRight id={styles.icon} />
                                </Link>
                            </div>
                        </div>
                    )
                    )}
                </div>
            </div>

            <section className={styles.eventPartners}>
                <h2>Join 4,000+ companies already growing</h2>

                <div className={styles.eventPartnersLogos}>
                    {partners.map((partner, index) => (
                        <div className={styles.partnersLogo} key={index}>
                            <Image
                                src={partner}
                                alt="Ready to supercharge your startup journey"
                            />
                        </div>
                    ))}
                </div>
            </section>
        </section>
    );
}

export default Events;
