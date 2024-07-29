"use client"
import React, { useState } from "react";
import styles from "./Pagination.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";

const Pagination = ({ data, pageLimit, dataLimit }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pages] = useState(Math.round(data.length / dataLimit));

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <section className={styles["courses-container"]}>
      <div className={styles["courses-container-header"]}>
        <h3>Our Popular Courses</h3>

        <div className={styles["pagination"]}>
          {/* previous button */}
          <p
            onClick={goToPreviousPage}
            className={
              styles["prev"] +
              " " +
              (currentPage === 1 ? styles["disabled"] : styles[" "])
            }
          >
            <IoIosArrowBack
              className={
                styles["courses-category-font"] +
                " " +
                (currentPage === 1 ? styles["disabled"] : styles[" "])
              }
            />
          </p>

          {/* show page numbers */}
          {getPaginationGroup().map((item, index) => (
            <p
              key={item + index}
              onClick={changePage}
              className={
                styles["paginationItem"] +
                " " +
                (currentPage === item ? styles["active"] : styles[" "])
              }
            >
              <span>{item}</span>
            </p>
          ))}

          {/* next button */}
          <p
            onClick={goToNextPage}
            className={
              styles["next"] +
              " " +
              (currentPage === pages + 1 ? styles["disabled"] : styles[" "])
            }
          >
            <IoIosArrowForward
              className={
                styles["courses-category-font"] +
                " " +
                (currentPage === pages + 1 ? styles["disabled"] : styles[" "])
              }
            />
          </p>
        </div>
      </div>

      <div className={styles["flex-courses"]}>
        {getPaginatedData().map((post) => (
          <article key={post.name} className={styles["flex-courses-column"]}>
            <div className={styles["flex-courses-image-container"]}>
              <Link
                href={`/training/${post.link}`}
                state={{
                  courseLink: post.link,
                }}
              >
                <Image loading="lazy" src={post.img} alt={post.name} />
              </Link>
            </div>
            <Link
              href={`/training/${post.link}`}
              state={{
                courseLink: post.link,
              }}
            >
              <h5>{post.name}</h5>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Pagination;
