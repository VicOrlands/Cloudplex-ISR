"use client"

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";
import 'video-react/dist/video-react.css';

import axios from "axios";
import { EventsArray, WebinarArray } from "./eventsArray";
import CTAForm from "@/components/callToAction/cta";
import { Player, BigPlayButton } from "video-react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { LazyBackgroundImage } from "@/components/backgroundImage/bg";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";

import Thumbnail from "@/assets/events/events-video-thumbnail.webp";
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
import BgImg from "@/assets/events/Background_pattern.png"

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
    const eventsPerPage = 6
    const paginationLimit = 4
    const [email, setEmail] = useState<string>("")
    const [currentPage, setCurrentPage] = useState<number>(1);
    const totalPages = Math.ceil(EventsArray.length / eventsPerPage);
    const [pages] = useState<number>(Math.round(EventsArray.length / eventsPerPage));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async () => {
        const emailRegex = new RegExp(
            /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
            "gm",
        );
        const isValidEmail = emailRegex.test(email);
        if (email !== "") {
            if (isValidEmail) {
                const saveform = await axios.post(
                    "https://enr95mz778.execute-api.eu-west-1.amazonaws.com/Prod/newsletter-cloudplexo",
                    { email: email },
                );
                if (saveform.status === 200) {
                    alert("Email address submitted successfully");
                    setEmail("");
                } else {
                    alert("Form not submitted");
                }
            } else {
                alert("Invalid format");
            }
        } else {
            alert("Empty input! Fill in your email address");
        }
    };

    function nextEvents() {
        setCurrentPage((page) => Math.min(page + 1, totalPages));
    }

    function prevEvents() {
        setCurrentPage((page) => Math.max(page - 1, 1));
    }

    const getPaginatedData = () => {
        const startIndex = (currentPage - 1) * eventsPerPage;
        const endIndex = startIndex + eventsPerPage;
        return EventsArray.slice(startIndex, endIndex);
    };

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / paginationLimit) * paginationLimit;
        return Array.from({ length: paginationLimit }, (_, idx) => start + idx + 1).filter(page => page <= totalPages);
    };

    function changePage(event: React.MouseEvent<HTMLParagraphElement>) {
        const target = event.target as HTMLParagraphElement;
        const pageNumber = Number(target.textContent);
        if (!isNaN(pageNumber)) {
            setCurrentPage(pageNumber);
        }
    }

    return (
        <section className={styles.eventParent}>
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
            </LazyBackgroundImage>

            <article className={styles.eventSocials}>
                {getPaginatedData().map((event) => (
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
                                <h5>{event.imgRightText}</h5>
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
                                <Link href={event.link.includes("https://") ? event.link : `/events/${event.link}`} target={event.link.includes("https://") ? "blank" : "_top"} aria-label="Register">
                                    {event.linkText}
                                </Link>
                                <MdOutlineArrowOutward id="icon" size={16} color="#3E54AC" />
                            </div>
                        </div>
                    </div>
                ))}
            </article>
            <div className={styles["pagination"]}>
                <p onClick={prevEvents} className={currentPage === 1 ? styles["disabled"] : styles[" "]}>
                    <HiOutlineArrowSmLeft size={24} fill="#475467" />
                    <span>Previous</span>
                </p>

                <div>
                    {getPaginationGroup().map((item, idx) => (
                        <p key={idx} onClick={changePage} className={
                            styles["paginationItem"] +
                            " " +
                            (currentPage === item ? styles["active"]
                                : styles[" "])}>{item}</p>
                    ))}
                    <p className={styles["mobile-page-item"]}>Page {currentPage} of {totalPages}</p>
                </div>

                <p onClick={nextEvents} className={currentPage === pages ? styles["disabled"] : styles[" "]}>
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
                                <Link href={webinar.link.includes("https://") ? webinar.link : `/events/${webinar.link}`}>
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

            <footer className={styles["footer"]}>
                <div>
                    <h2>Sign up for our newsletter</h2>
                    <p>Be the first to know about releases and industry news and insights.</p>
                </div>

                <div className={styles["input-section"]}>
                    <div>
                        <input
                            type="text"
                            placeholder="Enter your email"
                            value={email}
                            onChange={handleChange}
                        />
                        <p>We care about your data in our <Link href="/privacy-policy">privacy policy.</Link></p>
                    </div>
                    <button
                        aria-label="submit"
                        onClick={handleSubmit}
                        className={styles.button}
                    >
                        Subscribe
                    </button>
                </div>
            </footer>
        </section>
    );
}

export default Events;
