"use client";

import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import React, { useState, useEffect } from "react";
import styles from "./testimonial.module.css";
import { MdArrowForward, MdArrowBack } from "react-icons/md";
import { casestudy, testimonials } from './testimonialData';
import VideoPlayer from "@/components/videoPlayer/VideoPlayer";
import { useInView } from "react-intersection-observer";

import clsx from "clsx";
import vectorquote from "@/assets/reviews/vector.webp";
import vectorquote2 from "@/assets/reviews/vector1.webp";

interface SlickArrowProps {
  currentSlide?: number;
  slideCount?: number;
  onClick?: () => void;
  className?: string;
  [key: string]: any;
}

const SlickArrowLeft = React.forwardRef<HTMLButtonElement, SlickArrowProps>(
  ({ onClick, ...props }, ref) => {
    const { currentSlide, slideCount, ...buttonProps } = props;

    return (
      <button
        ref={ref}
        onClick={onClick}
        type="button"
        aria-label="Previous slide"
        className={clsx(styles.arrow, styles.left)}
      >
        <MdArrowBack />
      </button>
    );
  }
);

const SlickArrowRight = React.forwardRef<HTMLButtonElement, SlickArrowProps>(
  ({ onClick, ...props }, ref) => {
    const { currentSlide, slideCount, ...buttonProps } = props;

    return (
      <button
        ref={ref}
        onClick={onClick}
        type="button"
        aria-label="Next slide"
        className={clsx(styles.arrow, styles.right)}
      >
        <MdArrowForward />
      </button>
    );
  }
);

SlickArrowLeft.displayName = 'SlickArrowLeft';
SlickArrowRight.displayName = 'SlickArrowRight';

const Testimonial: React.FC = () => {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isClient, setIsClient] = useState(false);
  const [videoSliderRef, setVideoSliderRef] = useState<Slider | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const settings = {
    speed: 500,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: styles.customDot,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };

  const videosettings = {
    speed: 500,
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // dotsClass: styles.videoDot,
  };

  if (!isClient) {
    return (
      <div className={styles.reviewContainer}>
        <h5>Case Studies</h5>
        <h2>Real Results, Real Stories – Explore How We’re Transforming Businesses.</h2>
        <div className={styles.reviewVideo}>
          <h3>Loading videos...</h3>
        </div>
      </div>
    );
  }

  return (
    <div className={styles["reviewContainer"]} ref={ref}>
      <h5>Case Studies</h5>
      <h2>Real Results, Real Stories – Explore How We’re Transforming Businesses.</h2>

      {inView && <>
        <div className={styles.reviewVideo}>
          <Slider ref={setVideoSliderRef} {...videosettings}>
            {casestudy.map((cases, index) =>
              <div key={index} className={styles.videoWrap}>
                <VideoPlayer
                  src={cases.link}
                  poster={cases.image.src}
                />
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
                    onClick={videoSliderRef?.slickPrev}
                  >
                    <MdArrowBack />
                  </button>
                  <button
                    type="button"
                    aria-label="Arrow pointing right"
                    onClick={videoSliderRef?.slickNext}
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
              onClick={videoSliderRef?.slickPrev}
            >
              <MdArrowBack />
            </button>
            <button
              type="button"
              aria-label="Arrow pointing right"
              onClick={videoSliderRef?.slickNext}
            >
              <MdArrowForward />
            </button>
          </section>
        </div>

        <div className={styles.reviewsCarouselContainer}>
          <h5>Case Studies</h5>
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
      </>}
    </div>
  );
};

export default Testimonial;
