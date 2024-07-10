"use client"

import React, { Component } from "react";
import Image from "next/image";
import Footer from "../footer/page";
import styles from "./styles.module.css";
import logo from "@/assets/casestudies/logo.png";
import bp from "@/assets/casestudies/billyronks.png";
import landerImg from "@/assets/casestudies/BillyronkBg.webp";

class BillyRonks extends Component {
  render() {
    return (
      <>
        <section className={styles["gtb-pensions-page"]}>
          <h1>
            BillyRonks selected CloudPlexo as AWS Advanced partner to provide a
            Well Architected Review & Remediation
          </h1>

          <section className={styles["logo-images"]}>
            <Image
              src={bp}
              alt="BillyRonks selected CloudPlexo as AWS Advanced partner
                        to provide a Well Architected Review & Remediation"
            />

            <Image
              src={logo}
              alt="BillyRonks selected CloudPlexo as AWS Advanced partner
                        to provide a Well Architected Review & Remediation"
            />
          </section>

          <section className={styles["main-body"]}>
            <Image
              src={landerImg}
              alt="BillyRonks selected CloudPlexo as AWS Advanced partner
                        to provide a Well Architected Review & Remediation"
            />

            <h2>Overview</h2>
            <p>
              BillyRonks Global Ltd, founded in 2018, is a global, dynamic, and
              trustworthy telecoms firm that provides key services such as
              Wholesale Carrier Services, Business and Retail Voice, Value Added
              Services, and more. BillyRonks Global Ltd has been internationally
              licensed and expertise in the telecommunications business.
              BillyRonks telecom network equipment, ICT products and solutions,
              and smart gadgets are among the most advanced technologies for
              delivering competitive connectivity services that keep customers
              ahead of the competition in the global telecommunications
              Environment
            </p>
            <p>
              BillyRonks selected CloudPlexo as AWS Advanced partner to provide
              a Well Architected Review & Remediation for their application
              running in AWS, with the objective of reducing cost, improving
              operations & security of their cloud environment.
            </p>

            <h2>Customer Challenge</h2>
            <p>
              BillyRonks needed to implement best practices on cost
              optimization, security & efficient operations in AWS requires a
              specific skill set. For that reason, they decided to look for
              support within the AWS partner network.
            </p>

            <h2>Partner Solution</h2>
            <p>
              CloudPlexo SaaS solution -{" "}
              <strong>Wendu Cloud Security and Management platform</strong>{" "}
              automates well-architected assessment for the customer and with in
              depth drill-down on cost and security and in collaboration with
              certified CloudPlexo Solutions Architects.
            </p>
            <p>
              CloudPlexo is an AWS partner and is enrolled in the AWS
              Well-Architected Partner Program, which means CloudPlexo has the
              expertise to perform Well - Architected Reviews.
            </p>

            <h2>What is a Well-Architected Review (WAR)?</h2>
            <p>
              A Well-Architected Review (WAR) is a process developed by AWS to
              enable cloud architects build secure, high-performing, resilient,
              and efficient infrastructure for applications. The WAR is designed
              to assess a cloud workload against AWS's best practices and
              identify tasks to improve the AWS workload within one of the
              following 6 pillars:
            </p>
            <ul>
              <li>Operational Excellence Pillar</li>
              <li>Security Pillar</li>
              <li>Reliability Pillar</li>
              <li>Performance Efficiency Pillar</li>
              <li>Cost Optimization Pillar</li>
              <li>Sustainability Pillar</li>
            </ul>
            <p>A Well-Architected Review consists of two steps:</p>
            <ul>
              <li>Review</li>
              <li>Remediate</li>
            </ul>
            <p>
              The ultimate objective is to enhance the AWS environment where
              application workload runs across one or more key WAR pillars,
              aiming for a scenario where the workload environment is configured
              following AWS Best Practices.
            </p>

            <h2>Results and Benefits</h2>
            <p>
              During the CloudPlexo review, in collaboration with BillyRonks,
              the workload environment was assessed. The review yielded a set of
              actions, which were then prioritized and deliberated upon with
              BillyRonks, leading to the formulation of a systematic plan to
              enhance the AWS environment.
            </p>
            <p>
              Throughout the remediation phase of the WAR process, the list of
              actions was addressed, discussed, documented, and executed. This
              resulted in improvements to the AWS applications across all six
              WAR pillars.
            </p>
          </section>
        </section>

        <Footer />
      </>
    );
  }
}

export default BillyRonks;
