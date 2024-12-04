"use client"

import Image, { StaticImageData } from "next/image";
import styles from "./styles.module.css"
import { formatDate } from "@/lib/utils";

import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import FeatherIcon from "feather-icons-react";
import { CopyBlock, codepen } from "react-code-blocks";

export interface BlogProps {
    key: string | undefined; slug?: string | undefined; date?: string | undefined; title?: string | undefined; desc?: string | undefined; author?: string | undefined; content?: string | undefined; published?: boolean | undefined; thumbnail?: string | StaticImageData | undefined;
}

export default function BlogTemplate(props: BlogProps) {
    const { content, date, slug, thumbnail, author, title } = props

    return (
        <section className={styles["blog"]}>
            <ul className={styles["socials"]}>
                <li>Share</li>
                <li>
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=https://cloudplexo.com/${slug}`} target="blank">
                        <FeatherIcon icon="facebook" /></a>
                </li>
                <li>
                    <a href={`https://twitter.com/intent/tweet?url=https://cloudplexo.com/${slug}`} target="blank">
                        <FeatherIcon icon="twitter" /></a>
                </li>
                <li>
                    <a href={`https://www.linkedin.com/shareArticle?mini=true&url=https://cloudplexo.com/${slug}`} target="blank"
                    > <FeatherIcon icon="linkedin" /></a>
                </li>
            </ul>

            <div className={styles["main-content"]}>
                <h1>{title}</h1>
                <br />
                <div style={{ display: "flex", alignItems: 'center', justifyContent: 'space-between' }}>
                    <p style={{ margin: 0 }}>Author: <b>{author}</b></p>
                    <p style={{ margin: 0 }}>{formatDate(date)}</p>
                </div>
                <br />
                <br />

                <Image
                    src={thumbnail || ""}
                    alt="img"
                    width={300}
                    height={300}
                />

                <br />
                <br />

                <ReactMarkdown
                    children={content}
                    remarkPlugins={[remarkGfm]}
                    components={{
                        code({ node, className, children, ...props }) {
                            const match = /language-(\w+)/.exec(className || "");
                            return match ? (
                                <CopyBlock
                                    text={String(children).replace(/\n$/, "")}
                                    language={match[1]}
                                    showLineNumbers={false}
                                    theme={codepen}
                                    customStyle={{ fontSize: "1.6rem", padding: "20px 8px" }}
                                    wrapLongLines={true} />
                            ) : (
                                <code
                                    {...props}
                                    style={{
                                        background: "#e3e4e6",
                                        padding: "4px 8px",
                                        borderRadius: "4px",
                                        lineHeight: "32px"
                                    }}
                                >
                                    {children}
                                </code>
                            );
                        },
                        img: ({ node, ...props }) => <img {...props} />,
                        h1: ({ node, ...props }) => <h1 {...props} />,
                        h2: ({ node, ...props }) => <h2 {...props} />,
                        h3: ({ node, ...props }) => <h3 {...props} />,
                        ul: ({ node, ...props }) => <ul {...props} />,
                        li: ({ node, ...props }) => <li {...props} />,
                        p: ({ node, ...props }) => <p {...props} />,
                    }}
                />
            </div>
        </section >
    );
}
