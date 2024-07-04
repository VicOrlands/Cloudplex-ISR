import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import styles from "./styles.module.css";
import { BsArrowUpRight } from "react-icons/bs";
import { PaginationProps } from "@/app/blog/page";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


const Pagination: React.FC<PaginationProps> = ({ data, pageLimit, dataLimit }) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pages] = useState<number>(Math.round(data.length / dataLimit));
    let lastPage = Math.floor((pages) / dataLimit) * pageLimit;

    function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
    }

    function goToNextPage() {
        setCurrentPage((page) => page + 1);
    }

    function changePage(event: React.MouseEvent<HTMLParagraphElement>) {
        const target = event.target as HTMLParagraphElement;
        const pageNumber = Number(target.textContent);
        setCurrentPage(pageNumber);
    }

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
    };

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return Array.from({ length: pageLimit }, (_, idx) => start + idx + 1);
    };


    return (
        <section className={styles["courses-container"]}>
            <div className={styles.blogCatalog}>
                {getPaginatedData().map((blog, index) => (
                    <article key={index} className={styles.blogCard}
                    >
                        <div className={styles.imgContainer}>
                            <Link href={blog.link}>
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                />
                            </Link>
                        </div>

                        <div className={styles.content}>
                            <Link href={blog.link}>
                                <div className={styles.contentTitle}>
                                    <h5>{blog.title}</h5>
                                    <BsArrowUpRight color="#000" size={24} />
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
                        onClick={() => {
                            console.log("item:", item)
                            console.log("page:", lastPage)
                            changePage
                        }}
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

        </section>
    );
};

export default Pagination;
