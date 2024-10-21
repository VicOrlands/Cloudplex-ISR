"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./videoplayer.css"
import styles from "./styles.module.css";
import { Player, BigPlayButton } from "video-react";

import EventsSuccess from "./event/Event";
import { supportArray } from "./arrayList";
import FaqPage from "@/components/faq/faq";
import Review from "../landing/testimonial/Testimonial";
import { QuestionsProps } from "../aws-partnership/[slug]/cloudMigration/questions";

import logo from "@/assets/startups/logo.png";
import hero_map from "@/assets/startups/hero_map.webp";
import posterImage from "@/assets/startups/poster.webp";
import Partner9 from "@/assets/startups/partners/sdc.png";
import Partner8 from "@/assets/startups/partners/root.png";
import Partner6 from "@/assets/startups/partners/logo1.png";
import Partner4 from "@/assets/startups/partners/hub_one.png";
import Partner3 from "@/assets/startups/partners/cafe_one.png";
import Partner2 from "@/assets/startups/partners/borderless.png";
import Partner7 from "@/assets/startups/partners/vatebra_logo.png";
import Partner1 from "@/assets/startups/partners/MaxFiles-logo.png";
import Partner5 from "@/assets/startups/partners/ibadan_startup.png";
import Partner10 from "@/assets/startups/partners/start_innovation_hub.png";

const FAQ: QuestionsProps[] = [];

const images = [
  Partner1,
  Partner2,
  Partner3,
  Partner4,
  Partner5,
  Partner6,
  Partner7,
  Partner8,
  Partner9,
  Partner10,
]

export default function Startups() {
  return (
    <>
      <div className={styles["startup-page"]}>
        <div className={styles["hero-section"]}>
          <section className={styles["hero-left"]}>
            <div className={styles["hero-img-parent"]}>
              <h6>CloudPlexo For Startup</h6>
              <Image
                loading="lazy"
                src={logo}
                alt="Ready to supercharge your startup journey? - Cloudplexo"
              />
            </div>

            <h1>
              Ready to <span>supercharge</span> your startup journey?
            </h1>
            <p>Access free perks and resources to scale your Startup from Africa to the world.
            </p>
            <Link href="/contact-us">Get started</Link>
          </section>

          <section className={styles["hero-right"]}>
            <Image
              loading="lazy"
              src={hero_map}
              alt="Ready to supercharge your startup journey? - Cloudplexo"
            />
          </section>
        </div>

        <div className={styles["video-section"]}>
          <Player
            playsInline
            poster={posterImage.src}
            src="https://cloudplexo.com/cloudplexo-startup-video.mp4"
          >
            <BigPlayButton position="center" className={styles["video-button"]} />
          </Player>
        </div>

        <div className={styles["support-section"]}>
          <p>
            We work with incubators, accelerators, angel investors, seed/venture
            capital firms, founder communities, and startup enabling organisations
            across Africa to provide startups with free AWS credits, technical
            support, training, resources, and more. These exclusive benefits are
            designed to help startups quickly get started on AWS and grow their
            business.
          </p>

          <h2>How we Support and Scale Startups</h2>

          <section className={styles["support-and-scale"]}>
            {supportArray.map((item) => (
              <article key={item.title}>
                <Image loading="lazy" src={item.img} alt={item.title} />
                <h4>{item.title}</h4>
                <p>{item.body}</p>
              </article>
            ))}
          </section>
        </div>

        <div className={styles["recent-events"]}>
          <h2>Our Recent Events</h2>
          <p>
            We’ve collaboratively partnered with some of the amazing founders &
            startup communities, accelerators, incubators, to impact 100+ startups
            across Nigeria.
          </p>
          <EventsSuccess />
        </div>

        <div className={styles["partners"]}>
          <h2>Featured Partners</h2>

          <div className={styles["partners-logo-container"]}>
            {images.map((img, index) => (
              <div className={styles["partners-logo"]} key={index}>
                <Image
                  loading="lazy"
                  src={img.src}
                  alt="Our Trusted Partners & Clients logo"
                  width={img.width}
                  height={img.height}
                />
              </div>
            )
            )}
          </div>
        </div>
      </div>

      <Review />

      <FaqPage
        questions={FAQ}
        title="Ready to transform your startup journey?"
        subtitle="Apply now for CloudPlexo's Startup Accelerator Program and join a community dedicated to innovation, growth, and success."
      />
    </>
  );
}
