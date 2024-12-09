"use client";

import React, { CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import { BsArrowLeft, BsArrowRight, BsArrowUpRight } from "react-icons/bs";

import "./style.css";
import clsx from "clsx";
import styles from "./grid.module.css";
import { fetchBlogs } from "@/lib/actions";
import FooterCTA from "../callToAction/footerCTA";

type SampleArrowProps = {
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

type BlogProps = {
  key: string;
  slug: string;
  date: string;
  title: string;
  author: string;
  content: string;
  thumbnail: string;
  description: string;
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

const BlogGrid: React.FC = async () => {
  const blogs = await fetchBlogs()

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
            {blogs.slice(0, 6).map((blog: BlogProps) => (
              <div
                className={clsx(styles.blogpageParent, "blogpageParent")}
                key={blog.key}
              >
                <div className={styles.blogpageCatalogImage}>
                  <Image
                    loading="lazy"
                    src={blog.thumbnail}
                    alt={blog.title}
                    height={300}
                    width={300}
                  />
                </div>

                <div className={styles.content}>
                  <h6>{blog.date}</h6>
                  <Link href={`/blog/${blog.slug}`}>
                    <div className={styles.contentTitle}>
                      <h5>{blog.title}</h5>
                      <BsArrowUpRight size={22} color="#101828" />
                    </div>
                  </Link>
                  <p className={styles.textDesc}>{blog.description}</p>
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
