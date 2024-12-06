"use client"

import styles from "./styles.module.css";
import BgImg from "@/assets/blog/blog-hero.webp"
import CTAForm from "@/components/callToAction/cta";
import Pagination from "@/components/pagination/pagination";
import { LazyBackgroundImage } from "@/components/backgroundImage/bg";

import { useContent } from "@/lib/actions";
import { blogs as oldBlogs } from "./array";

const Blogpage: React.FC = () => {
    const { data, isError, isLoading } = useContent("blog")

    const blogPosts = data?.filter((blog: { published: boolean }) => blog.published) || [];


    if (isError) return <div>failed to load</div>

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

                <div>Loading Blogs...</div>
            </>
        )
    }

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
