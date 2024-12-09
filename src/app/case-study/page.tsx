"use client";

import useSWR from "swr"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "./casestudy.module.css";
import { BsArrowUpRight } from "react-icons/bs";
import BgImg from "@/assets/casestudies/hero.webp"
import { LazyBackgroundImage } from "@/components/backgroundImage/bg";

import Slide from "./slider/Slide";
import { caseTags } from "./caseArray";
import { fetchCaseStudies, fetchContent } from "@/lib/actions";

export interface CaseStudyProps {
    thumbnail: string,
    title: string,
    description: string,
    slug: string,
    tag: string,
    date: string,
    content: string,
    published: boolean,
    author: string,
    key: string,
    coverImage: string
}

const CaseList: React.FC = () => {
    const [tag, setTag] = useState<string>("");

    // combined server fetch and client side fetch for better experience
    // REASON: since swr revalidates data when page is onFocus, it checks for new case studies and fetches it(no need to refresh the page). Meanwhile, initialData is fetched on req and works better for SEO too.
    const initialData = fetchCaseStudies()
    const { data, error, isLoading } = useSWR("case-studies", fetchContent, {
        initialData,
        revalidateOnFocus: true,
        revalidateOnReconnect: true
    })

    if (error) return <div>failed to load</div>

    if (isLoading) {
        return (
            <section className={styles["casestudy"]}>
                <LazyBackgroundImage src={BgImg} className={styles["case-hero-bg"]}>
                    <div className={styles["casestudy-hero"]}>
                        <div className={styles["casestudy-hero-content"]}>
                            <h1>Case Studies</h1>
                            <p>
                                Get updated on the most recent developments in the industry,
                                including news, interviews, cutting-edge technologies, and
                                valuable resources.
                            </p>
                        </div>
                    </div>
                </LazyBackgroundImage>


                <div className={styles["casestudy-catalog"]}>
                    <Slide />

                    <div className={styles["casestudy-list"]}>
                        <h3 style={{ fontSize: "1.6rem", fontWeight: 500 }}>Loading Case Studies...</h3>
                    </div>
                </div>
            </section>
        )
    }

    const study = data.filter((caseStudy: { published: boolean }) => caseStudy.published);

    const filterCases = tag === "" ? study : study?.filter((caseItem: { tag: string; }) => caseItem.tag === tag);

    const handleSelect = (caseTag: string) => {
        setTag(caseTag);
    };

    return (
        <section className={styles["casestudy"]}>
            <LazyBackgroundImage src={BgImg} className={styles["case-hero-bg"]}>
                <div className={styles["casestudy-hero"]}>
                    <div className={styles["casestudy-hero-content"]}>
                        <h1>Case Studies</h1>
                        <p>
                            Get updated on the most recent developments in the industry,
                            including news, interviews, cutting-edge technologies, and
                            valuable resources.
                        </p>
                    </div>
                </div>
            </LazyBackgroundImage>


            <div className={styles["casestudy-catalog"]}>
                <Slide />

                <header className={styles["case-tags"]}>
                    <h5 onClick={() => handleSelect("")} className={tag === "" ? styles.active : ""}>All</h5>
                    {caseTags.map((caseTag) => (
                        <h5 key={caseTag} onClick={() => handleSelect(caseTag)}
                            className={caseTag === tag ? styles.active : ""}
                        >
                            {caseTag}
                        </h5>
                    ))}
                </header>
                <header className={styles["case-tags-mobile"]}>
                    <select
                        className={styles["case-tags-select"]}
                        onChange={(e) => handleSelect(e.target.value)}
                    >
                        <option value={""}>
                            All
                        </option>
                        {caseTags.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </header>

                <div className={styles["casestudy-list"]}>
                    {filterCases && filterCases.length > 0 ? filterCases?.map((cases: CaseStudyProps, index: number) => (
                        <div className={styles["casestudy-list-item"]} key={cases.slug + index}>
                            <div className={styles["imgcontainer"]}>
                                <Image
                                    src={cases.thumbnail}
                                    alt={cases.title}
                                    width={50}
                                    height={50}
                                />
                            </div>

                            {cases.slug === "" &&
                                cases.description === "" &&
                                cases.title === "" ? null : (
                                <>
                                    <div className={styles["content-title"]}>
                                        <Link
                                            href={`/case-study/${cases.slug}`}
                                        >
                                            <h5>{cases.title}</h5>
                                        </Link>
                                        <Link href={`/case-study/${cases.slug}`}>
                                            <BsArrowUpRight />
                                        </Link>
                                    </div>

                                    <p>{cases.description}</p>
                                </>
                            )}
                        </div>
                    )) : (
                        <div style={{ padding: "50px 0" }}>
                            <h3 style={{ fontSize: '1.6rem', fontWeight: 500 }}>No Available Case Study</h3>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default CaseList;
