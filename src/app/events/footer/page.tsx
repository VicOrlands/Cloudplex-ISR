"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";
import axios from "axios";
import Partner1 from "@/assets/startups/partners/MaxFiles-logo.png";
import Partner2 from "@/assets/startups/partners/borderless.png";
import Partner6 from "@/assets/startups/partners/logo1.png";
import Partner4 from "@/assets/startups/partners/hub_one.png";
import Partner5 from "@/assets/startups/partners/ibadan_startup.png";
import Partner3 from "@/assets/startups/partners/cafe_one.png";
import Partner9 from "@/assets/startups/partners/sdc.png";
import Partner10 from "@/assets/startups/partners/start_innovation_hub.png";
import Partner8 from "@/assets/startups/partners/root.png";
import Partner7 from "@/assets/startups/partners/vatebra_logo.png";

const partners = [
  Partner1,
  Partner2,
  Partner6,
  Partner4,
  Partner5,
  Partner3,
  Partner9,
  Partner10,
  Partner8,
  Partner7,
];

function Footer() {
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
    <>
      <section className={styles.eventPartners}>
        <h2>Join 4,000+ companies already growing</h2>

        <div className={styles.eventPartnersLogos}>
          {partners.map((partner, index) => (
            <div className={styles.partnersLogo} key={index}>
              <Image
                src={partner}
                alt="Ready to supercharge your startup journey"
              />
            </div>
          ))}
        </div>
      </section>

      <footer className={styles["footer"]}>
        <div>
          <h2>Sign up for our newsletter</h2>
          <p>
            Be the first to know about releases and industry news and insights.
          </p>
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
    </>
  );
}

export default Footer;
