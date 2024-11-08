"use client";

import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css"
import { ToastContainer, toast } from "react-toastify";
import logo from "@/assets/landing/logo-white.svg";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const state = {
    grid1: [
        { title: "Terms of Services", link: "/terms-of-service" },
        { title: "AWS Partnership", link: "/aws-partnership" },
        { title: "Contact Us", link: "/contact-us" },
        { title: "Privacy Policy", link: "/privacy-policy" },
        { title: "Cookie Policy", link: "/cookie-policy" },
    ],
    grid2: [
        { title: "Founders Lab", link: "/founders-lab" },
        { title: "Innovation Challenge", link: "/innovation-challenge" },
        { title: "Training", link: "/training" },
        { title: "FAQ", link: "/faq" },
    ],
    grid3: [
        { title: "Blogs", link: "/blog" },
        { title: "Case studies", link: "/case-study" },
        { title: "Whitepaper", link: "/whitepaper" },
        { title: "Press Releases", link: "/press-release" },
    ],
};

const Footer = () => {
    const [email, setEmail] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async () => {
        const emailRegex = new RegExp(
            /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
            "gm"
        );
        const isValidEmail = emailRegex.test(email);
        if (email !== "") {
            if (isValidEmail) {
                const saveform = await axios.post(
                    "https://enr95mz778.execute-api.eu-west-1.amazonaws.com/Prod/newsletter-cloudplexo",
                    { email: email }
                );
                if (saveform.status === 200) {
                    toast.success("Email address submitted successfully", {
                        position: "top-right",
                        hideProgressBar: true,
                        closeOnClick: true,
                        autoClose: 2000,
                        theme: 'colored'
                    });
                    setEmail("");
                } else {
                    toast.error("Form not submitted", {
                        position: "top-right",
                        hideProgressBar: true,
                        closeOnClick: true,
                        autoClose: 2000,
                        theme: 'colored'
                    });
                }
            } else {
                toast.error("Invalid format", {
                    position: "top-right",
                    hideProgressBar: true,
                    closeOnClick: true,
                    autoClose: 2000,
                    theme: 'colored',
                });
            }
        } else {
            toast.error("Empty input! Fill in your email address", {
                position: "top-right",
                hideProgressBar: true,
                closeOnClick: true,
                autoClose: 2000,
                theme: 'colored'
            });
        }
    };

    return (
        <>
            <ToastContainer style={{ fontSize: "1.6rem" }} />
            <footer className={styles["footer-parent"]}>
                <div className={styles["newsletter"]}>
                    <div>
                        <h2>Join our newsletter</h2>
                        <p>We’ll send you a nice letter once per week. No spam.</p>
                    </div>

                    <div className={styles["input-section"]}>
                        <input
                            type="text"
                            placeholder="Enter your email"
                            value={email}
                            onChange={handleChange}
                        />
                        <button
                            aria-label="submit"
                            onClick={handleSubmit}
                            className={styles.button}
                        >
                            Subscribe
                        </button>
                    </div>
                </div>

                <section className={styles["footer-main"]}>
                    <div className={styles["first-div"]}>
                        <Image
                            src={logo}
                            loading="lazy"
                            alt="Wendu - Cloud Security and Cost"
                        />
                        <div className={styles["address"]}>
                            <p>
                                <b>Headquarters London:</b> 124 City Rd, London EC1V 2NX London, United Kingdom.
                            </p>
                            <p>
                                <b>Lagos:</b> 15 Ihuntayi Rd, Oniru Rd, Victoria Island 101001.
                            </p>
                            <p>
                                <b>Abuja:</b> First Floor, Nigerian Merit Award House, 22 Aguyi Ironsi Street, Maitama.
                            </p>
                            <p>
                                <b>Kenya:</b> Kenyatta Avenue ICEA Building, 17th floor, Kenyatta Avenue, P.O BOX 15168-00400, Nairobi.
                            </p>
                        </div>
                        <div className={styles["footer-main-social-links"]}>
                            <Link href="https://www.linkedin.com/company/cloudplexo/mycompany">
                                <BsLinkedin color="white" size={24} />
                            </Link>
                            <Link href="https://www.instagram.com/cloudplexo/">
                                <BsInstagram color="white" size={24} />
                            </Link>
                            <Link href="https://web.facebook.com/CloudplexoCMP">
                                <BsFacebook color="white" size={24} />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h5>Company</h5>
                        <ul>
                            {state.grid1.map((grid, key) => (
                                <li key={key}>
                                    <Link href={grid.link}>{grid.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h5>Useful Links</h5>
                        <ul>
                            {state.grid2.map((grid, key) => (
                                <li key={key}>
                                    <Link href={grid.link}>{grid.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h5>Resources</h5>
                        <ul>
                            {state.grid3.map((grid, key) => (
                                <li key={key}>
                                    <a href={grid.link}>{grid.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </footer >
        </>
    );
}

export default Footer;
