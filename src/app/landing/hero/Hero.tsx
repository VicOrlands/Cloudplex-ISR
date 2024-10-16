"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./hero.module.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import heroImageSm from "@/assets/landing/mobile-sm.webp";
import heroImageMd from "@/assets/landing/mobile-md.webp";
import heroImageLg from "@/assets/landing/heroimage-lg.webp";
import heroImageXl from "@/assets/landing/heroimage-xl.webp";

const HeroSection = () => {
  return (
    <section className={styles.heroTopSection}>
      <div className={styles.heroTextContainer}>
        <Link href="/events">
          <h4>
            <span>Latest News</span>
            Founders’ Mixer
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
          <source
            media="(max-width: 1024px)"
            srcSet={heroImageSm.src}
            height={heroImageSm.height}
            width={heroImageSm.width}
          />
          <source
            media="(max-width: 900px)"
            srcSet={heroImageMd.src}
            height={heroImageMd.height}
            width={heroImageMd.width}
          />
          <source
            media="(max-width: 1000px)"
            srcSet={heroImageLg.src}
            height={heroImageLg.height}
            width={heroImageLg.width}
          />
          <Image
            priority
            src={heroImageXl}
            alt="Top Cloud Services providers with CloudPlexo's Innovative Solutions"
            height={heroImageXl.height}
            width={heroImageXl.width}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkiAMAAGQAYG61VcsAAAAASUVORK5CYII="
          />
        </picture>
      </div>
    </section>
  );
};

export default HeroSection;
