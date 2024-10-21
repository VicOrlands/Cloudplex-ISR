"use client";

import Link from "next/link";
import React, { useState } from "react";
import Slider from "react-slick";
import styles from "./testimonial.module.css";
import { Player, BigPlayButton } from "video-react";
import Image, { StaticImageData } from "next/image";
import { MdArrowForward, MdArrowBack } from "react-icons/md";
import { LazyBackgroundImage } from "@/components/backgroundImage/bg";

import img1 from "@/assets/reviews/video1.webp";
import img2 from "@/assets/reviews/video2.webp";
import img3 from "@/assets/reviews/Immersion day.webp";
import icanlogo from "@/assets/reviews/ican.webp";
import livelilogo from "@/assets/reviews/liveli.webp";
import vectorquote from "@/assets/reviews/vector.webp";
import vectorquote2 from "@/assets/reviews/vector1.webp";
import gtcologo from "@/assets/partners/GTCO_logo.webp";
import BgImage from "@/assets/reviews/testimonialbg.webp";
import convexityLogo from "@/assets/landing/convexitylogo.webp";
import convexity from "@/assets/landing/convexity-placeholder.webp";
import bitbarterLogo from "@/assets/landing/bitbarter.webp";
import bitbarter from "@/assets/landing/bitbarter-thumbnail.webp";
import clsx from "clsx";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

interface CaseStudyProps {
  id: number;
  image: StaticImageData;
  link: string;
  quote: string;
  logo: StaticImageData;
  speaker: string;
  caselink: string;
  company: string;
}

export const casestudy: CaseStudyProps[] = [
  {
    id: 1,
    image: convexity,
    link: "https://cloudplexo.com/Convexity_Case_Study_Testimonial.mp4",
    quote:
      "“With CloudPlexo, they help you to get a robust solution that will stand the test of time.”",
    company: "Convexity",
    logo: convexityLogo,
    speaker: "CTO | Co-founder",
    caselink: "/case-study/convexity-case-study",
  },
  {
    id: 5,
    image: bitbarter,
    link: "https://cloudplexo.com/BitBarter-Customer-review.mp4",
    quote:
      "“If you have issues around infrastructure layer provisioning & deployment, CloudPlexo might just be the right partner that you need.”",
    company: "Bitbarter",
    logo: bitbarterLogo,
    speaker: "CEO",
    caselink: "/case-study",
  },
  {
    id: 2,
    image: img2,
    link: "https://cloudplexo.com/Liveli-Customer-Sucess.mp4",
    quote:
      "“I would definitely advise anyone anybody to migrate their cloud services with a partner like CloudPlexo.”",
    company: "Liveli",
    logo: livelilogo,
    speaker: "CTO",
    caselink: "/case-study/liveli-case-study",
  },
  {
    id: 3,
    image: img1,
    link: "https://cloudplexo.com/ICAN_ONLINE_TUTORS_final.mp4 ",
    company: "IcanOnline Tutors",
    quote:
      "“We highly recommend CloudPlexo, if  you are having any challenges  with your website and mobile apps”",
    logo: icanlogo,
    speaker: "Founder & CEO",
    caselink: "/case-study/case-study-in-the-edtech-sector",
  },
  {
    id: 4,
    image: img3,
    link: "https://cloudplexo.com/GT_Pension_Immersion+Day_Testimonial.mp4",
    company: "Guarantee Trust Pension Managers",
    quote: `"I had a great time with the CloudPlexo team, learning more about AWS and the cloud"`,
    logo: gtcologo,
    speaker: "Taiwo Owolabi",
    caselink: "/case-study/case-study-of-gt-pensions-managers",
  },
];

const testimonials: {
  content: string;
  by: string;
}[] = [
    {
      content:
        "CloudPlexo is the best in their league, providing top-notch services for our cloud-based enterprise. Their advanced software identifies vulnerabilities, optimizes cost efficiency, and streamlines resources",
      by: "CTO, PhastPay",
    },
    {
      content:
        "CloudPlexo provides good and quality assistance to IOT, and they are fast in providing solutions to technical problems.",
      by: "CEO, IoT",
    },
    {
      content:
        "CloudPlexo has helped us reduce our cloud cost by up to 30%; and the technical team are very experienced in providing solutions.",
      by: "CTO, Liveli.App",
    },
    {
      content:
        "Upskilling your team in developing data solutions or applications in the cloud leverging cloud native tools count on CloudPlexo. CloudPlexo upskilled our team in deploying a serverless data lake solution in the cloud.",
      by: "Data Manager, Accenture",
    },
    {
      content:
        "Building data driven applications, choosing the right technology, and following best practices in the cloud. CloudPlexo guided our team on the right direction for our data to cloud and pre-empting pitfalls.",
      by: "Senior Data Engineer, BP Oil",
    },
    {
      content:
        "CloudPlexo enables organisations using public clouds to visualize all their cloud spending in one place. The team at cloudPlexo are constantly innovating and we look forward to what they would release next to assist us further with our cloud strategy.",
      by: "CEO, Geria",
    },
    {
      content:
        "CloudPlexo is a tool both finance and developers can use. Having all our cloud environments managed in one consolidated, easy-to-use platform has helped us significantly reduce our AWS bill.",
      by: "Cloud Solutions Manager, Inttix",
    },
    {
      content:
        "CloudPlexo is a tool both finance and developers can use. Having all our cloud environments managed in one consolidated, easy-to-use platform has helped us significantly reduce our AWS bill.",
      by: "CEO, Sentaloe",
    },
  ];

const Testimonial: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver();
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);

  const SlickArrowLeft = ({ ...props }) => (
    <button
      {...props}
      type="button"
      aria-label="button"
      className={clsx(styles.arrow, styles.left)}
    >
      <MdArrowBack />
    </button>
  );
  const SlickArrowRight = ({ ...props }) => (
    <button
      {...props}
      type="button"
      aria-label="button"
      className={clsx(styles.arrow, styles.right)}
    >
      <MdArrowForward />
    </button>
  );

  const settings = {
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    speed: 500,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const videosettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={clsx(styles.reviewContainer, { [styles.visible]: isVisible })} ref={ref}>
      {isVisible && (
        <>
          <h2>
            With CloudPlexo, the possibilities for customer innovation are endless.
          </h2>

          <div className={styles.reviewVideo}>
            <Slider ref={setSliderRef} {...videosettings}>
              {casestudy.map((cases, index) =>
                <div className={styles.videoWrap} key={index}>
                  <div className={styles.imageWrap}>
                    <Player
                      playsInline
                      src={cases.link}
                      fluid
                      poster={cases.image.src}
                    >
                      <BigPlayButton position="center" />
                    </Player>
                  </div>
                  <div className={styles.contentWrap}>
                    <Image
                      loading="lazy"
                      priority={false}
                      src={cases.logo}
                      className={styles.logoImage}
                      alt="Top Cloud Services providers with CloudPlexo's Innovative Solutions reviews"
                    />
                    <h3>{cases.quote}</h3>
                    <Link href={cases.caselink}>Read case study</Link>
                    <h4>{cases.speaker}</h4>
                    <h6>{cases.company}</h6>
                  </div>
                  <section className={clsx(styles.btngroup, styles.mobile)}>
                    <button
                      type="button"
                      aria-label="Arrow pointing left"
                      onClick={sliderRef?.slickPrev}
                    >
                      <MdArrowBack />
                    </button>
                    <button
                      type="button"
                      aria-label="Arrow pointing right"
                      onClick={sliderRef?.slickNext}
                    >
                      <MdArrowForward />
                    </button>
                  </section>
                </div>
              )}
            </Slider>
            <section className={clsx(styles.btngroup, styles.desktop)}>
              <button
                type="button"
                aria-label="Arrow pointing left"
                onClick={sliderRef?.slickPrev}
              >
                <MdArrowBack />
              </button>
              <button
                type="button"
                aria-label="Arrow pointing right"
                onClick={sliderRef?.slickNext}
              >
                <MdArrowForward />
              </button>
            </section>
          </div>

          <LazyBackgroundImage src={BgImage} className={styles.wordsReview}>
            <div className={styles.reviewsCarouselContainer}>
              <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                  <div className={styles.reviewBox} key={index}>
                    <Image
                      loading="lazy"
                      placeholder="blur"
                      priority={false}
                      src={vectorquote}
                      className={styles.quoteImg1}
                      alt="Top Cloud Services providers with CloudPlexo's Innovative Solutions"
                    />

                    <Image
                      loading="lazy"
                      priority={false}
                      src={vectorquote2}
                      className={styles.quoteImg2}
                      alt="Top Cloud Services providers with CloudPlexo's Innovative Solutions"
                    />

                    <div>
                      <h3>{testimonial.content}</h3>
                      <h4>{testimonial.by}</h4>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </LazyBackgroundImage>
        </>)}
    </div>
  );
};

export default Testimonial;
