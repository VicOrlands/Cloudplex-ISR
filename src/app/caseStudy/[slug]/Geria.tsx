"use client"

import Image from "next/image";
import Footer from "../footer/page";
import styles from "./styles.module.css"
import React, { Component } from "react";
import geria from "@/assets/casestudies/geria.png";
import logo from "@/assets/casestudies/logo.png";

class Geria extends Component {
  // <SEO
  //   title="Geria's AWS Cost Optimization Success Story with CloudPlexo CCMP"
  //   description="Learn how Geria, a UK-based company bridging the IT talent gap with African IT professionals, achieved remarkable cost savings of up to 28% on AWS using CloudPlexo's Cloud Management Platform (CCMP)."
  //   keywords="AWS Cost Optimization, CloudPlexo CCMP, Geria Case Study, AWS Cost Savings, Cloud Management Platform"
  // />

  render() {
    return (
      <React.Fragment>
        <section className={styles["gtb-pensions-page"]}>
          <section className={styles["logo-images"]}>
            <Image
              src={logo}
              alt="Geria's AWS Cost Optimization Success Story with CloudPlexo CCMP"
            />
            <Image
              src={geria}
              alt="Geria's AWS Cost Optimization Success Story with CloudPlexo CCMP"
            />
          </section>

          <section className={styles["main-body"]}>
            <h2>The Company</h2>
            <p>
              Geria is a company based in the United Kingdom. It connects
              talented software engineers, developers, designers, and project
              managers from Africa to UK technology companies. There is a
              growing IT talent gap in the UK and the rest of Europe. Geria
              bridges this gap by using African-based skilled IT talents,
              offering quality job opportunities contributing to the UK and
              African economy. These professionals are passionate about IT and
              Geria.io is passionate about problem-solving. The company mainly
              focuses on the development of software projects
            </p>
            <h2>
              <strong>Solution</strong>
            </h2>
            <p>CloudPlexo Cloud Management Platform (CCMP) solution.</p>
            <h2>
              <strong>Products</strong>
            </h2>
            <p>
              AWS RDS Aurora Serverless, Lambda, Api gateway, Amazon S3, AWS
              Step functions, AWS Certificate Manager, AWS secret manager,
              cloudfront.
            </p>
            <h2>
              <strong>Business Challenge</strong>
            </h2>
            <p>
              Prior to using CloudPlexo, they team at Geria lacked the
              maturity and the process to manage their cloud environment and
              infrastructure in order to discover areas cloud optimization can
              be applied to reduce spend. Geria was looking for a high-level
              management tool to help manage their cloud environment.
              CloudPlexo provided this solution through continuous monitoring,
              total visibility of operations spending, identifying
              underutilized and idle resources.
            </p>
            <h2>
              <strong>Working Together</strong>
            </h2>
            <p>Trusted Independent Software Vendor (ISV) for Geria</p>
            <h2>
              <strong>Why Amazon Web Services</strong>
            </h2>
            <p>
              AWS was the preferred choice as the world-leading cloud platform
              for flexibility, elasticity, scale and cost. CloudPlexo worked
              with Geria on their cloud management objective to meet all their
              requirements. CloudPlexo SaaS solution used a range of AWS
              services such as; AWS RDS Aurora Serverless, Lambda, Api
              gateway, Amazon S3, AWS Step functions, AWS Certificate Manager,
              AWS secret manager, cloudfront.{" "}
            </p>
            <h2>
              <strong>Outcomes</strong>
            </h2>
            <p>
              CloudPlexo SaaS solution, CloudPlexo Cloud Management Platform
              (CCMP) implemented within AWS solved Geria cost optimization of
              cloud environments through the use of CCMP for high-level
              management of their cloud environment, cost optimization,
              scheduling of non-production VM’s and databases, forecasting and
              inventory management. As a result Geria were able to make
              significant cost savings of up to 28%.
            </p>
          </section>
        </section>

        <Footer />
      </React.Fragment >
    );
  }
}

export default Geria;
