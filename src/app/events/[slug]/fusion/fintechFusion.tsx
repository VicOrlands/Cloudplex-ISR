"use client"

import React from "react";
import Image from "next/image";
import EventsSuccess from "./success";
import styles from "./styles.module.css";
import CTAForm from "@/components/callToAction/cta";
import { LazyBackgroundImage } from "@/components/backgroundImage/bg";

import Img from "@/assets/events/DSC_0212.jpg";
import logo from "@/assets/events/fintech-fusion/event logo.png";
import BgImg from "@/assets/events/fintech-fusion/hero_background.png";
import BgImg2 from "@/assets/events/fintech-fusion/email_notification_bg.png";
import { ButtonLink, ButtonTranparentLink } from "@/components/button/Button";

export default function Fintech() {
    return (
        <div>
            <LazyBackgroundImage src={BgImg} className={styles["fintech-page"]} >
                <section className={styles["fintech-hero-section"]}>
                    <div>
                        <Image src={logo} alt="Cloudplexo Fintech fusion summit" />

                        <h1>Unlocking The FinTech Potential</h1>
                        <p>
                            Join our exclusive event, where we're unveiling the secrets to
                            leveraging Generative AI with AWS to discover untapped product
                            segments.
                        </p>

                        <ButtonLink link="#email-notification" title="Keep me updated" />
                    </div>
                </section>
            </LazyBackgroundImage>

            <section className={styles["fintech-body-section"]}>
                <Image src={Img} alt="Cloudplexo Fintech fusion summit" />
                <p>
                    By attending, you're setting yourself on a path to harness the
                    unparalleled potential of cutting-edge technology. Gain a decisive
                    competitive edge and position your Fintech enterprise at the forefront
                    of innovation and success.
                </p>
                <p>
                    But that's not all! Dive deep into a real-world case study and a Voice
                    of the Customer session, providing invaluable, firsthand insights.
                    Witness how CloudPlexo, as your AWS cloud partner, empowers Fintech
                    customers to maximize Generative AI and AWS, propelling them towards
                    unparalleled growth and triumph in the market.But that's not all! Dive
                    deep into a real-world case study and a Voice of the Customer session,
                    providing invaluable, firsthand insights. Witness how CloudPlexo, as
                    your AWS cloud partner, empowers Fintech customers to maximize
                    Generative AI and AWS, propelling them towards unparalleled growth and
                    triumph in the market.
                </p>
                <ButtonLink link="#email-notification" title="Keep me updated" className={styles['btn']} />
            </section>

            <EventsSuccess />

            <LazyBackgroundImage src={BgImg2} className={styles["email-section"]} >
                <section className={styles["fintech-email"]} id="email-notification">
                    <ButtonTranparentLink link="/events" title="Go to events" className={styles['go-to-events-button']} />

                    <h2>When we get the scoop, you'll get the news.</h2>
                    <p>
                        Get updated on the most recent developments in the industry, including
                        news, interviews, cutting-edge technologies, and valuable resources.
                    </p>

                    <CTAForm />
                </section>
            </LazyBackgroundImage>
        </div>
    );
}
