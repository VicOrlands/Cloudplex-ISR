"use client"

import { Key } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";
import { usePathname } from 'next/navigation'
import { BsArrowUpRight } from "react-icons/bs";
import { useContent } from "@/lib/actions";

type CaseType = {
    slug: Key;
    title: string;
    thumbnail: string;
    description: string;
}

export default function Footer() {
    const { data, isError, isLoading } = useContent("case-studies")

    const pathname = usePathname()
    const url = `${pathname}`

    const publishedData = data.filter((caseStudy: { published: boolean }) => caseStudy.published)

    const filteredCaseStudies = publishedData?.filter(({ slug }: { slug: string }) => `/case-study/${slug}/` !== url);

    if (isError) return null

    if (isLoading) return <div>Loading more case studies...</div>

    return (
        <div className={styles["casefooter"]}>
            <nav>
                <h4>More Case Studies</h4>

                <Link href="/case-study" id={styles["link"]}>
                    View all case studies
                </Link>
            </nav>

            <p>
                Tools and strategies modern teams need to help their companies grow.
            </p>

            <div className={styles["casefooter-list"]}>
                {filteredCaseStudies.slice(0, 4).map((cases: CaseType) => (
                    <div className={styles["casefooter-list-item"]} key={cases.slug}>
                        <div className={styles["casefooter-img"]}>
                            <Image
                                src={cases.thumbnail}
                                alt="Cloud Billing Solutions: Case Studies in Cost Optimization and Savings"
                                width={300}
                                height={300}
                            />
                        </div>

                        <div className={styles["content-title"]}>
                            <h5>
                                <Link href={`/case-study/${cases.slug}`}
                                >
                                    {cases.title}
                                </Link>
                            </h5>

                            <Link href={`/case-study/${cases.slug}`} className={styles["link"]}>
                                <BsArrowUpRight />
                            </Link>
                        </div>

                        <p className={styles["casefooter-description"]}>{cases.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
