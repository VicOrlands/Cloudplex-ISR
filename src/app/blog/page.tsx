"use client"

import useSWR from "swr"
import styles from "./styles.module.css";
import BgImg from "@/assets/blog/blog-hero.webp"
import CTAForm from "@/components/callToAction/cta";
import Pagination from "@/components/pagination/pagination";
import { LazyBackgroundImage } from "@/components/backgroundImage/bg";

import { fetchBlogs, fetchContent } from "@/lib/actions";

const Blogpage: React.FC = () => {
    const initialData = fetchBlogs()
    const { data, error, isLoading } = useSWR("blog", fetchContent, {
        initialData,
        revalidateOnFocus: true,
        revalidateOnReconnect: true
    })

    if (error) return <div>failed to load</div>

    if (isLoading) {
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

                <div className={styles.loadingDiv}>
                    <h4 className={styles.loadingHeader}>Loading Blogs...</h4>
                </div>
            </>
        )
    }

    const blogPosts = data.filter((blog: { published: boolean }) => blog.published) || [];

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

            <Pagination data={blogPosts} pageLimit={4} dataLimit={12} />
        </>
    );

}

export default Blogpage;
