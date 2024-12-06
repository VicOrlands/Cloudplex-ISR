"use client"

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./styles.module.css";
import { BsArrowUpRight } from "react-icons/bs";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";
import { extractFirstParagraph, formatDate } from "@/lib/utils"

interface Blog {
    thumbnail: string;
    title: string;
    slug: string;
    date: string;
    author: string;
    content: string;
    key: string;
    description?: string;
}

interface PaginationProps {
    data: Blog[];
    pageLimit: number;
    dataLimit: number;
}

const Pagination: React.FC<PaginationProps> = ({ data, pageLimit, dataLimit }) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const totalPages = Math.ceil(data.length / dataLimit);
    const [pages] = useState<number>(Math.round(data.length / dataLimit));

    function goToPreviousPage() {
        setCurrentPage((page) => Math.max(page - 1, 1));
    }

    function goToNextPage() {
        setCurrentPage((page) => Math.min(page + 1, totalPages));
    }

    function changePage(event: React.MouseEvent<HTMLParagraphElement>) {
        const target = event.target as HTMLParagraphElement;
        const pageNumber = Number(target.textContent);
        if (!isNaN(pageNumber)) {
            setCurrentPage(pageNumber);
        }
    }

    const getPaginatedData = () => {
        const startIndex = (currentPage - 1) * dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
    };

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return Array.from({ length: pageLimit }, (_, idx) => start + idx + 1).filter(page => page <= totalPages);
    };

    return (
        <section className={styles["courses-container"]}>
            <div className={styles.blogCatalog}>
                {getPaginatedData().map((blog) => (
                    <article key={blog.slug} className={styles.blogCard}
                    >
                        <div className={styles.imgContainer}>
                            <Link href={`/blog/${blog.slug}`}>
                                <Image
                                    priority
                                    src={blog.thumbnail}
                                    alt={blog.title}
                                    width={300}
                                    height={300}
                                />
                            </Link>
                        </div>

                        <div className={styles.content}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                {blog.author && <h6>By {blog.author}</h6>}
                                <h6>{formatDate(blog.date) || "2022 / 2024"}</h6>
                            </div>
                            <Link href={`/blog/${blog.slug}`}>
                                <div className={styles.contentTitle}>
                                    <h5>{blog.title}</h5>
                                    <BsArrowUpRight color="#101828" size={24} />
                                </div>
                            </Link>
                            <p>{blog?.description}</p>
                        </div>
                    </article>
                ))}
            </div>

            <div className={styles["pagination"]}>
                <p
                    onClick={goToPreviousPage}
                    className={
                        styles["prev"] +
                        " " +
                        (currentPage === 1 ? styles["disabled"] : styles[" "])
                    }
                >
                    <HiOutlineArrowSmLeft
                        className={
                            styles["courses-category-font"] +
                            " " +
                            (currentPage === 1 ? styles["disabled"] : styles[" "])
                        }
                    />
                    <span>Previous</span>
                </p>

                {/* show page numbers */}
                <div>
                    {getPaginationGroup().map((item, index) => (
                        <p
                            key={item + index}
                            onClick={changePage}
                            className={
                                styles["paginationItem"] +
                                " " +
                                (currentPage === item ? styles["active"] : currentPage === pages ? styles["disabled"]
                                    : styles[" "])
                            }
                        >
                            <span>{item}</span>
                        </p>
                    ))}

                    <p className={styles["mobile-page-item"]}>Page {currentPage} of {totalPages}</p>
                </div>

                <p
                    onClick={goToNextPage}
                    className={
                        styles["next"] +
                        " " +
                        (currentPage === pages + 1 ? styles["disabled"] : styles[" "])
                    }
                ><span>Next</span>

                    <HiOutlineArrowSmRight
                        className={
                            styles["courses-category-font"] +
                            " " +
                            (currentPage === pages + 1 ? styles["disabled"] : styles[" "])
                        }
                    />
                </p>
            </div>

        </section>
    );
};

export default Pagination;
