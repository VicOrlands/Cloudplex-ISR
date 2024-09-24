import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./styles.module.css";
import { BlogsProps } from "@/app/blog/array";
import { BsArrowUpRight } from "react-icons/bs";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";

interface PaginationProps {
    data: BlogsProps[];
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
                {getPaginatedData().map((blog, index) => (
                    <article key={index} className={styles.blogCard}
                    >
                        <div className={styles.imgContainer}>
                            <Link href={`/blog/${blog.link}`}>
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                />
                            </Link>
                        </div>

                        <div className={styles.content}>
                            <h6>{blog.date ? blog.date : "2022 / 2024"}</h6>
                            <Link href={`/blog/${blog.link}`}>
                                <div className={styles.contentTitle}>
                                    <h5>{blog.title}</h5>
                                    <BsArrowUpRight color="#101828" size={24} />
                                </div>
                            </Link>
                            <p>{blog.desc}</p>
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
