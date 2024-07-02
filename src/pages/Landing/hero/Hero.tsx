"use client"

import Link from 'next/link'
import styles from "./hero.module.css"
import Image, { getImageProps } from 'next/image'
import { IoIosArrowRoundForward } from "react-icons/io";
import heroImageSm from "@/assets/landing/mobile-sm.webp";
import heroImageMd from "@/assets/landing/mobile-md.webp";
import heroImageLg from "@/assets/landing/heroimage-lg.webp";
import heroImageXl from "@/assets/landing/heroimage-xl.webp";

const HeroSection = () => {
    const common = { alt: `Top Cloud Services providers with CloudPlexo's Innovative Solutions`, width: 372, height: 304, priority: true }
    const {
        props: { srcSet: mobile, },
    } = getImageProps({ ...common, src: heroImageSm })
    const {
        props: { srcSet: mediumScreen },
    } = getImageProps({ ...common, src: heroImageMd })
    const {
        props: { srcSet: tablet },
    } = getImageProps({ ...common, src: heroImageLg })
    const {
        props: { srcSet: desktop, ...rest },
    } = getImageProps({ ...common, src: heroImageXl })

    return (
        <section className={styles.heroTopSection}>
            <div className={styles.heroTextContainer}>
                <Link href="/events">
                    <h4>
                        <span>Latest News</span>
                        Business day event
                        <IoIosArrowRoundForward
                            size={20}
                            color="#3E54AC"
                            style={{ marginLeft: 5 }}
                        />
                    </h4>
                </Link>
                <h1>Modernise and Secure All Processes</h1>
                <p>
                    Cloud Native strategies that enable business agility, flexibility,
                    scalability and data security of the cloud to solve the challenges in
                    today's business world through digital transformation.
                </p>

                <div className={styles.buttonGroup}>
                    <a href="/contact-us">Contact Sales</a>
                    <a href="#product-services">Learn More</a>
                </div>
            </div>

            <div className={styles.heroImgContainer}>
                <picture>
                    <source media="(max-width: 600px)" srcSet={mobile} />
                    <source media="(max-width: 900px)" srcSet={mediumScreen} />
                    <source media="(min-width: 1000px)" srcSet={tablet} />
                    <source media="(min-width: 1200px)" srcSet={desktop} />
                    <Image alt="Top Cloud Services providers with CloudPlexo's Innovative Solutions" {...rest} priority />
                </picture>
            </div>
        </section>
    );
};

export default HeroSection;
