"use client";

import React, { CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import styles from "./grid.module.css";
import { BsArrowLeft, BsArrowRight, BsArrowUpRight } from "react-icons/bs";
import "./style.css";

import clsx from "clsx";
import { blogs } from "@/app/blog/array";
import FooterCTA from "../callToAction/footerCTA";

interface SampleArrowProps {
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

const SampleNextArrow: React.FC<SampleArrowProps> = ({
  className,
  style,
  onClick,
}) => {
  return (
    <BsArrowRight
      color="#3E54AC"
      onClick={onClick}
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#fff",
        padding: "10px",
        borderRadius: "50%",
        height: "40px",
        width: "40px",
        boxShadow: "0px 6.39px 11.18px 0px #0000001A",
        marginRight: "-30px",
      }}
    />
  );
};

const SamplePrevArrow: React.FC<SampleArrowProps> = ({
  className,
  style,
  onClick,
}) => {
  return (
    <BsArrowLeft
      color="#3E54AC"
      onClick={onClick}
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#fff",
        padding: "10px",
        borderRadius: "50%",
        height: "40px",
        width: "40px",
        boxShadow: "0px 6.39px 11.18px 0px #0000001A",
        marginLeft: "-30px",
      }}
    />
  );
};

const BlogGrid: React.FC = () => {
  const settings = {
    lazyLoad: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1425,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          nextArrow: false,
          prevArrow: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: false,
          prevArrow: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: false,
          prevArrow: false,
        },
      },
    ],
  };

  return (
    <>
      <section className={styles.blogCatalog}>
        <h2>Our Latest News Updates and Posts</h2>

        <div className={styles.blogpageCarousel}>
          <Slider {...settings}>
            {blogs.slice(0, 6).map((blog, index) => (
              <div
                className={clsx(styles.blogpageParent, "blogpageParent")}
                key={index}
              >
                <div className={styles.blogpageCatalogImage}>
                  <Image
                    loading="lazy"
                    src={blog.image}
                    alt={blog.title}
                    height={blog.image.height}
                    width={blog.image.width}
                  />
                </div>

                <div className={styles.content}>
                  <h6>{blog.date ? blog.date : "20 Jan 2024"}</h6>
                  <Link href={`/blog/${blog.link}`}>
                    <div className={styles.contentTitle}>
                      <h5>{blog.title}</h5>
                      <BsArrowUpRight size={22} color="#101828" />
                    </div>
                  </Link>
                  <p className={styles.textDesc}>{blog.desc}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <Link href="/blog" className={styles.button}>
          View Our Blogs
        </Link>
      </section>

      <FooterCTA />
    </>
  );
};

export default BlogGrid;
