"use client"

import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";
import { casestudy } from "../caseArray";
import { usePathname } from 'next/navigation'
import { BsArrowUpRight } from "react-icons/bs";

export default function Footer() {
    const pathname = usePathname()
    const [email, setEmail] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async () => {
        const emailRegex = new RegExp(
            /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
            "gm",
        );
        const isValidEmail = emailRegex.test(email);

        if (email !== "") {
            if (isValidEmail) {
                const saveform = await axios.post(
                    "https://enr95mz778.execute-api.eu-west-1.amazonaws.com/Prod/newsletter-cloudplexo",
                    { email: email },
                );
                if (saveform.status === 200) {
                    alert("You have successfully subscribed to our newsletter");
                    setEmail("");
                } else {
                    alert("Form not submitted");
                }
            } else {
                alert("Invalid format");
            }
        } else {
            alert("Empty input! Fill in your email address");
        }
    };

    const url = `${pathname}`
    const filteredCaseStudies = casestudy.filter((item) => `/case-study/${item.link}/` !== url);

    return (
        <>
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
                        <div className={styles["casefooter-list-item"]} key={cases.link}>
                            <div className={styles["casefooter-img"]}>
                                <Image
                                    src={cases.image}
                                    alt="Cloud Billing Solutions: Case Studies in Cost Optimization and Savings"
                                />
                            </div>

                            <div className={styles["content-title"]}>
                                <h5>
                                    <Link href={`/case-study/${cases.link}`}
                                    >
                                        {cases.title}
                                    </Link>
                                </h5>

                                <Link href={`/case-study/${cases.link}`} className={styles["link"]}>
                                    <BsArrowUpRight />
                                </Link>
                            </div>

                            <p className={styles["casefooter-description"]}>{cases.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles["casefooter-newsletter"]}>
                <h2>Sign up for our newsletter</h2>
                <p>Be the first to know about releases, industry news and insights.</p>

                <div className={styles["text-input"]}>
                    <input
                        type="text"
                        value={email}
                        placeholder="Enter your email"
                        onChange={handleChange}
                    />
                    <button type="submit" aria-label="submit" onClick={handleSubmit}>
                        Subscribe
                    </button>
                </div>
            </div>
        </>
    );
}
