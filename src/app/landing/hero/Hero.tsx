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
            CIO100 Symposium and Awards
            <IoIosArrowRoundForward
              size={20}
              color="#3E54AC"
              style={{ marginLeft: 5 }}
            />
          </h4>
        </Link>
        <h1>Modernise and Secure All Processes</h1>
        <p>Agile, flexible, secure—cloud strategies designed to drive your digital transformation</p>

        <div className={styles.buttonGroup}>
          <a href="/schedule-consultation">Book a free consultation</a>
        </div>
      </div>

      <picture className={styles.heroImgContainer}>
        <source
          media="(max-width: 900px)"
          srcSet={heroImageSm.src}
        />
        <source
          media="(max-width: 1024px)"
          srcSet={heroImageMd.src}
        />
        <source
          media="(max-width: 1200px)"
          srcSet={heroImageLg.src}
        />
        <Image
          src={heroImageXl}
          alt="Top Cloud Services providers with CloudPlexo's Innovative Solutions"
          priority
          width={heroImageXl.width}
          height={heroImageXl.height}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={75}
          loading="eager"
        />
      </picture>
    </section>
  );
};

export default HeroSection;
