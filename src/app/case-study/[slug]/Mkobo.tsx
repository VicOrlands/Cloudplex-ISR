"use client"

import React, { Component } from "react";
import Image from "next/image";
import Footer from "../footer/page";
import styles from "./styles.module.css";
import logo from "@/assets/casestudies/logo.webp";
import bp from "@/assets/casestudies/mkobo.webp";
import landerImg from "@/assets/casestudies/mkoboBg.webp";

class Mkobo extends Component {
  render() {
    return (
      <>
        <section className={styles["gtb-pensions-page"]}>
          <h1>
            Mkobo uses CloudPlexo’s SaaS solution - to discover cost
            optimization opportunities and security posture.
          </h1>

          <section className={styles["logo-images"]}>
            <Image
              src={bp}
              alt="Kobo360's Success Story: Enhancing Cloud Security and Cost Optimization with Wendu by CloudPlexo"
            />

            <Image
              src={logo}
              alt="Kobo360's Success Story: Enhancing Cloud Security and Cost Optimization with Wendu by CloudPlexo"
            />
          </section>

          <section className={styles["main-body"]}>
            <Image
              src={landerImg}
              alt="Kobo360's Success Story: Enhancing Cloud Security and Cost Optimization with Wendu by CloudPlexo"
            />

            <h2>Overview</h2>
            <p>
              Mkobo Microfinance Bank is a financial institution based in
              Nigeria that specializes in providing microfinance services to
              individuals and small businesses. Established with a vision to
              promote financial inclusion and empower underserved communities,
              Mkobo Microfinance Bank offers a range of financial products and
              services tailored to the needs of its target market.
            </p>
            <p>
              The bank's offerings typically include savings accounts, loans,
              and other financial services designed to meet the unique
              requirements of micro-entrepreneurs, low-income earners, and
              individuals without access to traditional banking services. Mkobo
              Microfinance Bank utilizes innovative technology to deliver its
              services efficiently and reach a wider customer base, often
              leveraging mobile banking and digital platforms to facilitate
              transactions and access to financial services.
            </p>
            <p>
              In addition to its core financial services, Mkobo Microfinance
              Bank is committed to fostering financial literacy and empowering
              its clients through financial education programs and
              capacity-building initiatives. By providing accessible and
              affordable financial solutions, the bank plays a vital role in
              driving economic growth, poverty reduction, and financial
              empowerment within the communities it serves.
            </p>

            <h2>Customer Challenge</h2>
            <p>
              This initiative aims to optimize current cloud infrastructure,
              enhance security measures, achieve scalability, and streamline
              operations. By leveraging the Cloud Maturity Service, Mkobo
              anticipates improved cost efficiency, heightened security, a
              scalable and high-performing infrastructure, and streamlined
              operations. This strategic move aligns with Mkobo 's commitment to
              innovation, ensuring the platform remains at the forefront of the
              real estate technology landscape, delivering enhanced value to
              users. This allows room for more innovation on AWS by the Mkobo
              team.
            </p>

            <h2>Partner Solution</h2>
            <p>
              Mkobo using CloudPlexo SaaS solution -{" "}
              <strong>Wendu Cloud Security and Management platform</strong> and
              AWS compute optimizer to discover cost optimization opportunities
              and security posture. Mkobo received a full report with cloud
              security recommendations and opportunities for cost efficiency. To
              generate data-rich reports, Wendu scans an organization’s cloud
              infrastructure against AWS best practices, including the design
              principles outlined in the AWS Well-Architected Framework. This
              approach enables customers to evaluate their architecture based on
              the AWS Well-Architected Framework’s pillars of operational
              excellence, security, reliability, performance efficiency, and
              cost optimization.
            </p>
            <p>
              Collaboration with Mkobo and CloudPlexo Cloud experts used the
              visibility and insights produced to save Mkobo 25% percent of our
              overall AWS bill by taking action. Mkobo drastically reduced waste
              by identifying whether any instances were overprovisioned.
            </p>

            <h2>Results and Benefits</h2>
            <p>
              Provided a high level of transparency of cloud environment and
              management of cloud security, cloud health, well-architected
              assessment, cost optimization, over-provisioned resources
              discovery. Cost optimization by reduction of its AWS bill by 25
              percent.
            </p>
          </section>
        </section>

        <Footer />
      </>
    );
  }
}

export default Mkobo;
