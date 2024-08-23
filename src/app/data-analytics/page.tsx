"use client"

import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./styles.module.css";
import HeroImg from "@/assets/data-analytics/data-visualization.webp";
import footerImg from "@/assets/data-analytics/footer-image.png"
import { ButtonLink } from "@/components/button/Button";
import Partners from "@/components/partners/Partners";
import ReviewExtract from "./ReviewExtract";

const features = [
    {
        icon: <Icon />,
        title: "Comprehensive Data Management",
        body: "Collect, store, and manage your data seamlessly. CloudPlexo integrates with AWS services like Amazon S3 and Amazon Redshift, providing a reliable infrastructure for all your data needs."
    },
    {
        icon: <Icon />,
        title: "Real-Time Data Processing",
        body: "Process large datasets in real-time with the power of Amazon Glue and Amazon EMR. CloudPlexo ensures your data is ready when you need it, allowing you to respond swiftly to changing conditions."
    },
    {
        icon: <Icon />,
        title: "Intuitive Data Visualization",
        body: "Turn complex data into easy-to-understand visuals with Amazon QuickSight. CloudPlexo offers intuitive dashboards that help you see trends, patterns, and insights at a glance."
    },
    {
        icon: <Icon />,
        title: "Scalable and Secure Infrastructure",
        body: "Built on AWS, CloudPlexo provides a scalable platform that grows with your business. Enjoy enterprise-grade security and performance, ensuring your data is protected and accessible as you expand."
    },
]

const DataAnalytics = () => {
    const [email, setEmail] = useState<string>("")

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
                    alert("Email address submitted successfully");
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

    return (
        <div className={styles["data-analytics"]}>
            <div className={styles["hero"]}>
                <div>
                    <h1>Data-Driven Strategic Advantage</h1>
                    <p>
                        CloudPlexo Data Analytics on AWS offers a complete solution to help you collect, process, and analyze data efficiently. With real-time data processing and clear visualizations, CloudPlexo enables you to make smart decisions that drive growth.
                    </p>

                    <div className={styles["email"]}>
                        <input
                            type="text"
                            placeholder="Enter your work email address"
                            value={email}
                            onChange={handleChange}
                        />
                        <button
                            aria-label="submit"
                            onClick={handleSubmit}
                            className={styles.button}
                        >
                            Get Started
                        </button>
                    </div>
                    <h6>We care about your data in our <a href="/privacy-policy">privacy policy.</a></h6>
                </div>

                <Image
                    src={HeroImg}
                    alt="CloudPlexo AWS Cloud - Expert Cloud Solutions"
                />
            </div>

            <Partners />

            <div className={styles["data-analytics-services"]}>
                <h4>Features</h4>
                <h2>Overflowing with useful features</h2>
                <div className={styles["grid-column"]}>
                    {features.map((service) => (
                        <div key={service.title}>
                            <div>{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.body}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles['reviewSection']}>
                <ReviewExtract />
            </div>

            <div className={styles['footer']}>
                <section>
                    <div>
                        <h2>Ready to Begin?</h2>
                        <p>Take the first step toward transforming your data strategy. Contact us today to see how CloudPlexo Data Analytics on AWS can elevate your business. Let’s work together to turn your data into a powerful asset that drives growth and innovation.</p>
                        <ButtonLink title="Get started" link="/contact-us" />
                    </div>

                    <Image src={footerImg} alt="CloudPlexo AWS Cloud - Expert Cloud Solutions" height={footerImg.height} />
                </section>
            </div>
        </div>
    );
}

export default DataAnalytics;

function Icon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="57" fill="none">
            <rect
                width="48"
                height="48"
                x="4"
                y="4.486"
                fill="#EFF0FA"
                rx="24"
            ></rect>
            <rect
                width="48"
                height="48"
                x="4"
                y="4.486"
                stroke="#C2C8EF"
                strokeWidth="8"
                rx="24"
            ></rect>
            <path
                fill="#3E54AC"
                fillRule="evenodd"
                d="M28.476 20.236c-2.75 0-4.964 2.2-4.964 4.897 0 .462.065.909.185 1.33.497.145.963.36 1.383.64a.751.751 0 01.343.478.752.752 0 01.006.3.752.752 0 01-.324.49.751.751 0 01-.579.106.75.75 0 01-.273-.123 3.54 3.54 0 00-1.967-.59c-1.961 0-3.536 1.57-3.536 3.487 0 1.916 1.575 3.485 3.536 3.485a.75.75 0 010 1.5c-2.773 0-5.036-2.224-5.036-4.985 0-2.705 2.17-4.893 4.864-4.983a6.399 6.399 0 01-.102-1.135c0-3.541 2.902-6.397 6.464-6.397 3.158 0 5.796 2.244 6.355 5.22 2.3.978 3.919 3.239 3.919 5.883 0 3.074-2.188 5.63-5.093 6.253a.75.75 0 01-.89-.577.75.75 0 01.576-.89c2.24-.48 3.907-2.446 3.907-4.786 0-2.137-1.39-3.962-3.338-4.628a5.003 5.003 0 00-1.626-.27c-.583 0-1.14.1-1.658.28a.75.75 0 01-.94-.466.75.75 0 01.446-.95 6.5 6.5 0 013.024-.305 4.96 4.96 0 00-4.682-3.264zm2.041 13.707c.3.286.312.76.026 1.06l-2.857 3a.749.749 0 01-.543.233.75.75 0 01-.543-.233l-1.143-1.2a.751.751 0 01-.22-.54.75.75 0 011.306-.494l.6.63 2.314-2.43a.75.75 0 011.06-.026z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}
