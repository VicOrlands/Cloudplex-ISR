"use client"

import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import HeroImg from "@/assets/database-as-a-service/database.webp";
import styles from "../data-analytics/styles.module.css";
import footerImg from "@/assets/database-as-a-service/footer-image.png"
import ReviewExtract from "../data-analytics/ReviewExtract";
import { ButtonLink } from "@/components/button/Button";
import Partners from "@/components/partners/Partners";

const features = [
    {
        icon: <Icon />,
        title: " Custom Architecture Design",
        body: "Get a database solution tailored to your specific business needs. We design purpose-built architectures that align with your goals, ensuring optimal performance."
    },
    {
        icon: <Icon />,
        title: "Seamless Migration",
        body: "Transition to AWS with ease. Our team ensures a smooth migration process, minimizing downtime and disruption while transferring your data securely to Amazon RDS or Aurora."
    },
    {
        icon: <Icon />,
        title: "Continuous Optimization",
        body: "Keep your database running at peak efficiency. CloudPlexo provides ongoing optimization services, ensuring your database is always performing at its best and scaling as needed."
    },
    {
        icon: <Icon />,
        title: "Secure and Scalable Infrastructure",
        body: "Built on Amazon RDS and Aurora, our database solutions offer the scalability to grow with your business and the security to protect your data."
    },
]

const Database = () => {
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
                    <h1>Optimize Your Databases</h1>
                    <p>
                        Managing databases effectively is crucial for your business’s success. CloudPlexo’s Database as a Service (DBaaS) on AWS offers a reliable and purpose-built solution tailored to your needs. Leveraging Amazon RDS and Aurora, we ensure high performance and scalability, helping you maintain robust and secure database operations.
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
                <h2>Features of CloudPlexo Database as a Service (DBaaS)</h2>
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
                        <h2>Start Your Database Journey</h2>
                        <p>Ready to optimize your database operations? Contact us today to learn how CloudPlexo’s Database as a Service can transform your business. Let’s work together to create a scalable, secure, and cost-effective database solution tailored to your needs.</p>
                        <ButtonLink title="Get started" link="/contact-us" />
                    </div>

                    <Image src={footerImg} alt="CloudPlexo AWS Cloud - Expert Cloud Solutions" height={footerImg.height} />
                </section>
            </div>
        </div>
    );
}

export default Database;

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
                fill="#000"
                d="M29 38.236a.75.75 0 100-1.5v1.5zm8.25-8.75a.75.75 0 101.5 0h-1.5zM26 20.236h4v-1.5h-4v1.5zm-7.25 9.25v-1h-1.5v1h1.5zm0-1v-1h-1.5v1h1.5zM29 36.736h-3v1.5h3v-1.5zm8.25-9.25v1h1.5v-1h-1.5zm-20 2c0 1.864-.002 3.338.153 4.489.158 1.172.49 2.12 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01-.138-1.027-.14-2.382-.14-4.29h-1.5zm8.75 7.25c-1.907 0-3.261-.002-4.29-.14-1.005-.135-1.585-.39-2.008-.812l-1.06 1.06c.748.75 1.697 1.08 2.869 1.239 1.15.155 2.625.153 4.489.153v-1.5zm4-16.5c1.907 0 3.262.002 4.29.14 1.005.135 1.585.389 2.008.812l1.06-1.06c-.748-.75-1.697-1.081-2.869-1.24-1.15-.154-2.625-.152-4.489-.152v1.5zm8.75 7.25c0-1.864.002-3.338-.153-4.49-.158-1.171-.49-2.12-1.238-2.87l-1.06 1.06c.422.425.676 1.005.811 2.01.138 1.029.14 2.383.14 4.29h1.5zM26 18.736c-1.864 0-3.338-.002-4.489.153-1.172.158-2.121.49-2.87 1.238l1.06 1.06c.424-.422 1.004-.676 2.01-.811 1.028-.138 2.382-.14 4.289-.14v-1.5zm-7.25 8.75c0-1.907.002-3.261.14-4.29.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869-.155 1.15-.153 2.625-.153 4.489h1.5zm-.75 1.75h20v-1.5H18v1.5zm19.25-.75v1h1.5v-1h-1.5z"
            ></path>
            <path
                stroke="#000"
                strokeLinecap="round"
                strokeWidth="1.5"
                d="M29.5 23.986H34m-12 10v-2m0-7v-2m3 11v-2m0-7v-2M35.333 33.37a1.9 1.9 0 011.321-.004c.784.287 1.346 1.074 1.346 2 0 1.17-.895 2.119-2 2.119h-3.5c-.828 0-1.5-.711-1.5-1.588 0-.877.672-1.59 1.5-1.59a1.409 1.409 0 01.291.03m0 0a2.2 2.2 0 01-.124-.734c0-1.17.895-2.118 2-2.118 1.029 0 1.876.823 1.987 1.88m-3.863.973c.197.04.38.123.542.238"
            ></path>
        </svg>
    );
}