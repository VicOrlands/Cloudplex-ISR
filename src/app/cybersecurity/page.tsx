"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react"
import styles from "./styles.module.css";
import {
  faq,
  imgArray,
  hero_map,
  monitoring,
  featuresArray,
} from "./arrayList";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

export default function Cyber() {
  const [dropdown, setDropdown] = useState<Array<number>>([]);

  const handleOpen = (id: number) => {
    if (dropdown.includes(id)) {
      setDropdown(dropdown.filter((item) => item !== id));
    } else {
      setDropdown([...dropdown, id]);
    }
  };
  return (
    <div className={styles["cyber-page"]}>
      <div className={styles["hero-section"]}>
        <section className={styles["hero-up"]}>
          <h6>New Service</h6>
          <h1>
            Protect Your Digital Assets with CloudPlexo Cybersecurity Services
          </h1>
          <p>Safeguard Your Business in the Cloud</p>

          <div className={styles["button-group"]}>
            <Link href="#get-started">Get started</Link>
            <Link href="/contact-us">Contact us</Link>
          </div>
        </section>

        <section className={styles["hero-down"]}>
          <Image
            src={hero_map}
            alt="Ready to supercharge your startup journey?"
          />
        </section>
      </div>

      <div className={styles["cyber-partners"]}>
        {imgArray.map((item) => (
          <div key={item.src} className={styles["cyber-partners-logo"]}>
            <Image src={item} alt="Ready to supercharge your startup journey" />
          </div>
        ))}
      </div>

      <div className={styles["cyber-features-section"]} id="get-started">
        <h6>features</h6>

        <h2>Our Comprehensive Cybersecurity Solutions</h2>
        <p>
          From threat detection and prevention to compliance management, our
          range of services covers all aspects of cybersecurity. Whether you're
          a small startup or a large enterprise, we have the tools and expertise
          to protect your assets and maintain your peace of mind.
        </p>

        <section className={styles["cyber-features"]}>
          {featuresArray.map((item) => (
            <article key={item.title}>
              <Image src={item.img} alt={item.title} />
              <h4>{item.title}</h4>
              <p>{item.body}</p>
            </article>
          ))}
        </section>
      </div>

      <div className={styles["faq-section"]}>
        <h2>Frequently asked questions</h2>
        <h6>Everything you need to know about the product and billing.</h6>

        {faq.map((fa) => (
          <div key={fa.id} className={styles["faq"]}>
            <section>
              <h4>{fa.question}</h4>

              {dropdown.includes(fa.id) ? (
                <AiOutlineMinusCircle
                  id={styles["icon"]}
                  onClick={() => handleOpen(fa.id)}
                />
              ) : (
                <AiOutlinePlusCircle
                  id={styles["icon"]}
                  onClick={() => handleOpen(fa.id)}
                />
              )}
            </section>
            {dropdown.includes(fa.id) && <p>{fa.answer}</p>}
          </div>
        ))}
      </div>

      <div className={styles["roi-section"]}>
        <Image src={monitoring} alt="Ready to supercharge your startup journey" />
        <h2>Experience the CloudPlexo Advantage</h2>
        <h6>We can help safeguard your digital assets with confidence.</h6>

        <section>
          <div>
            <h3>50+</h3>
            <p>Integrations</p>
          </div>

          <div>
            <h3>100%</h3>
            <p>Return on investment</p>
          </div>

          <div>
            <h3>24/7</h3>
            <p>Customer support</p>
          </div>
        </section>
      </div>

      <div className={styles["cyber-footer"]}>
        <section>
          <h3>Take Control of Your Cybersecurity Today</h3>
          <p>
            Don't wait until it's too late. Secure your business with
            CloudPlexo's trusted cybersecurity services. Contact us now for a
            consultation.
          </p>
        </section>

        <Link href="/contact-us">Get started</Link>
      </div>
    </div>
  );
}
