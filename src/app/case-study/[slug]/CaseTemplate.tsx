"use client"

import Image from "next/image";
import Footer from "../footer/page";
import styles from "./styles.module.css"
import logo from "@/assets/casestudies/logo.webp";
import landerImg from "@/assets/casestudies/koboAccBg.webp";

import remarkGfm from "remark-gfm";
import { CaseStudyProps } from "../page";
import ReactMarkdown from "react-markdown";
import { formatDate } from "@/lib/utils";

export default function CaseTemplate(props: CaseStudyProps) {
    const { title, thumbnail, coverImage, content, author, date } = props

    return (
        <>
            <section className={styles["gtb-pensions-page"]}>
                <h1>{title}</h1>

                <section className={styles["logo-images"]}>
                    <Image
                        src={logo}
                        alt="Liveli's Cloud Cost Optimization with Wendu on AWS - A Case Study in High Savings"
                    />
                    <Image
                        src={thumbnail}
                        alt="Liveli's Cloud Cost Optimization with Wendu on AWS - A Case Study in High Savings"
                        width={300}
                        height={100}
                    />
                </section>

                <section className={styles["main-body"]}>
                    {/* <Image
                        src={coverImage || landerImg}
                        alt="Rearchitecting KoboAccountant's Application Infrastructure to Microservices on AWS"
                    /> */}
                    <p>By <b>{author}</b> on {formatDate(date)}</p>

                    <ReactMarkdown
                        children={content}
                        remarkPlugins={[remarkGfm]}
                        components={{
                            img: ({ node, ...props }) => <img {...props} />,
                            h1: ({ node, ...props }) => <h1 {...props} />,
                            h2: ({ node, ...props }) => <h2 {...props} />,
                            h3: ({ node, ...props }) => <h3 {...props} />,
                            ul: ({ node, ...props }) => <ul {...props} />,
                            li: ({ node, ...props }) => <li {...props} />,
                            p: ({ node, ...props }) => <p {...props} />,
                        }}
                    />
                </section>
            </section>

            <Footer />
        </ >
    );
}
