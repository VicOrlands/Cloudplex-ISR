"use client";

import React, { useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import axios from "axios";

function Newsletter() {
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
        <footer className={styles["footer"]}>
            <div>
                <h2>Sign up for our newsletter</h2>
                <p>Be the first to know about releases and industry news and insights.</p>
            </div>

            <div className={styles["input-section"]}>
                <div>
                    <input
                        type="text"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleChange}
                    />
                    <p>
                        We care about your data in our{" "}
                        <Link href="/privacy-policy">privacy policy.</Link>
                    </p>
                </div>
                <button
                    aria-label="submit"
                    onClick={handleSubmit}
                    className={styles.button}
                >
                    Subscribe
                </button>
            </div>
        </footer>
    );
}

export default Newsletter;
