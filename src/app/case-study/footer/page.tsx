"use client"

import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";
import { casestudy } from "../caseArray";
import { usePathname } from 'next/navigation'
import { BsArrowUpRight } from "react-icons/bs";

export default function Footer() {
    const pathname = usePathname()
    const url = `${pathname}`
    const filteredCaseStudies = casestudy.filter((item) => `/case-study/${item.slug}/` !== url);

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
                {filteredCaseStudies.slice(0, 4).map((cases) => (
                    <div className={styles["casefooter-list-item"]} key={cases.slug}>
                        <div className={styles["casefooter-img"]}>
                            <Image
                                src={cases.thumbnail}
                                alt="Cloud Billing Solutions: Case Studies in Cost Optimization and Savings"
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
