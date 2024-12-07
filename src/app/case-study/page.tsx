"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./casestudy.module.css";
import { BsArrowUpRight } from "react-icons/bs";
import BgImg from "@/assets/casestudies/hero.webp"
import { LazyBackgroundImage } from "@/components/backgroundImage/bg";

import Slide from "./slider/Slide";
import { useContent } from "@/lib/actions";
import { casestudy, caseTags } from "./caseArray";

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
    const { data, isError, isLoading } = useContent("case-studies")

    if (isError) return <div>failed to load</div>

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

    const publishedCaseStudies = data.filter((caseStudy: { published: boolean }) => caseStudy?.published);
    const study = publishedCaseStudies ? [...publishedCaseStudies] : casestudy

    const handleSelect = (caseTag: string) => {
        setTag(caseTag);
    };

    const filterCases = tag === "" ? study : study?.filter((caseItem) => caseItem.tag === tag);

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
