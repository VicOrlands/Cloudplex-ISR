"use client"
import React, { useEffect, useRef } from "react";
import "./slick.css"
import Slider from "react-slick";
import styles from "./styles.module.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const sliderFeedback = [
  {
    feedback: `"I enjoyed every bit of my class. I don't regret paying that money, even though it's just day one. Samuel is a brilliant tutor. Wow"`,
    name: "Bimbo",
  },
  {
    feedback: `"I just finished my first class. I am excited. Awesome facilitator. I am sure I would be able to learn a lot. He is also able to give relatable examples to my field"`,
    name: "Ayodeji",
  },
  {
    feedback: `"My class went well. The tutor really did justice to today's training. He used simple words I would be able to understand. I really enjoyed the training. Thank you"`,
    name: "Pelumi",
  },
  {
    feedback: `"I just wrote my AWS exam at 4am yesterday. The results just came through and I passed. Thanks to CloudPlexo"`,
    name: "Chike",
  },
];

const Review = () => {
  const sliderRef = useRef<Slider | null>(null);

  const scroll = (e: WheelEvent) => {
    if (!sliderRef.current) return;

    e.deltaY > 0
      ? sliderRef.current.slickNext()
      : sliderRef.current.slickPrev();
  };

  useEffect(() => {
    window.addEventListener("wheel", scroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", scroll);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles["training-reviews"]}>
      <div className={styles["slides-heading"]}>
        <div>
          <h2>Our Customer Feedback</h2>
          <p>
            Don’t take our word for it. Trust our customers
          </p>
        </div>

        <div className={styles["custom-arrows"]}>
          <button
            type="button"
            aria-label="arrow pointing left"
            onClick={() => sliderRef.current?.slickPrev()}

          >
            <FiChevronLeft size={20} />
            Previous
          </button>
          <button
            type="button"
            aria-label="arrow pointing right"
            onClick={() => sliderRef.current?.slickNext()}

          >
            Next
            <FiChevronRight size={20} />
          </button>
        </div>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {sliderFeedback.map((slide, index) => (
          <div className={styles["review-box"]} key={index}>
            <h4>{slide.name}</h4>
            <p>{slide.feedback}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Review;
