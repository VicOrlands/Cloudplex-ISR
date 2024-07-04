"use client"

import { useEffect } from "react";
import styles from "./styles.module.css";
import BgImg from "@/assets/blog/blog-hero.png"

import { BlogsProps, blogs } from "./array";
import Pagination from "@/components/pagination";
import CTAForm from "@/components/callToAction/cta";
import { LazyBackgroundImage } from "@/components/backgroundImage/bg";

export interface PaginationProps {
    data: BlogsProps[];
    pageLimit: number;
    dataLimit: number;
}

const Blog: React.FC<PaginationProps> = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

    }, [])

    return (
        <>
            <LazyBackgroundImage src={BgImg} className={styles.blogHeroBg}>
                <div className={styles.blogHero}>
                    <h2>Blogs</h2>
                    <p>
                        Get updated on the most recent developments in the industry,
                        including news, interviews, cutting-edge technologies, and
                        valuable resources.
                    </p>

                    <CTAForm />
                </div>
            </LazyBackgroundImage>

            <Pagination data={blogs} pageLimit={4} dataLimit={12} />
        </>
    );

}

export default Blog;
