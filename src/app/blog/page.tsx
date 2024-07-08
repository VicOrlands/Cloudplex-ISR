"use client"

import styles from "./styles.module.css";
import BgImg from "@/assets/blog/blog-hero.webp"

import { blogs } from "./array";
import Pagination from "@/components/pagination/pagination";
import CTAForm from "@/components/callToAction/cta";
import { LazyBackgroundImage } from "@/components/backgroundImage/bg";

const Blogpage: React.FC = () => {
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

export default Blogpage;
