"use client"

import React, { useState } from "react";
import axios from "axios";
import styles from './cta.module.css'
import { HiOutlineEnvelope } from "react-icons/hi2";

const CTAForm: React.FC = () => {
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
        <div className={styles.heroCta}>
            <HiOutlineEnvelope size={32} color="#667085" />

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
                Subscribe
            </button>
        </div>
    );

}

export default CTAForm;
