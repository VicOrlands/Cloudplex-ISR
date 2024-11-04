"use client"

import Image from "next/image";
import Footer from "../footer/page";
import styles from "./styles.module.css";
import React, { Component } from "react";
import kobo from "@/assets/casestudies/kobo.webp";
import logo from "@/assets/casestudies/logo.webp";

class Kobo extends Component {

  // <SEO
  //   title="Kobo360's Success Story: Enhancing Cloud Security and Cost Optimization with Wendu by CloudPlexo"
  //   description="Discover how Kobo360, Africa's leader in logistics solutions, partnered with CloudPlexo to implement Wendu for cloud security and cost management on AWS, improving their security posture and optimizing costs."
  //   keywords="Cloud Security and Cost Optimization, Kobo360 Case Study, Logistics Solutions, Cloud Security Management, Cloud Cost Optimization, Wendu by CloudPlexo, AWS Services, Security Posture Improvement"
  // />

  render() {
    return (
      <React.Fragment>
        <section className={styles["gtb-pensions-page"]}>
          <section className={styles["logo-images"]}>
            <Image
              src={logo}
              alt="Kobo360's Success Story: Enhancing Cloud Security and Cost Optimization with Wendu by CloudPlexo"
            />
            <Image
              src={kobo}
              alt="Kobo360's Success Story: Enhancing Cloud Security and Cost Optimization with Wendu by CloudPlexo"
            />{" "}
          </section>

          <section className={styles["main-body"]}>
            <h2>The Company</h2>
            <p>
              Kobo360 is a company based in Lagos, Nigeria. Kobo360 is
              Africa’s innovation leader in integrated logistics solutions and
              truck brokerage services. Kobo360 aggregates end-to-end haulage
              operations to help cargo owners, truck owners, drivers, and
              cargo recipients achieve an efficient supply chain framework.
            </p>
            <h2>
              <strong>Solution</strong>
            </h2>
            <p>Wendu - Cloud Security and Management Platform.</p>
            <h2>
              <strong>Products</strong>
            </h2>
            <p>
              AWS RDS Aurora Serverless, Lambda, AWS Glue, ECS, AWS Fargate,
              Api gateway, Amazon S3, AWS Step functions, AWS Certificate
              Manager, AWS secret manager, Cloudfront.
            </p>
            <h2>
              <strong>Business Challenge</strong>
            </h2>
            <p>
              Prior to using Wendu by CloudPlexo, the team at Kob0360 lacked
              the maturity and the process to manage their Cloud Security,
              Health of cloud environment and infrastructure in order to
              discover areas security flaws and cost optimization can be
              applied to reduce spend. Kobo360 was looking for a high-level
              management tool to help manage their cloud environment.
              CloudPlexo provided wendu by cloudplexo solution that provides
              continuous monitoring, security visibility, cloud health, total
              visibility of operations spending, identifying underutilized and
              idle resources.
            </p>
            <h2>
              <strong>Working Together</strong>
            </h2>
            <p>Trusted Independent Software Vendor (ISV) for Kobo360</p>
            <h2>
              <strong>Why Amazon Web Services</strong>
            </h2>
            <p>
              AWS was the preferred choice as the world-leading cloud platform
              for flexibility, elasticity, scale and cost. CloudPlexo worked
              with Kobo360 on their cloud security and management objective to
              meet all their requirements. CloudPlexo SaaS solution used a
              range of AWS services such as; AWS RDS Aurora Serverless,
              Lambda, AWS Glue, Api gateway, Amazon S3, AWS Step functions,
              AWS Certificate Manager, AWS secret manager, cloudfront.{" "}
            </p>
            <h2>
              <strong>Outcomes</strong>
            </h2>
            <p>
              CloudPlexo SaaS solution, wendu cloud Security and cost
              management platform implemented within AWS solved Kobo360 cloud
              security and cost optimization of cloud environments through the
              use of Wendu for high-level management of cloud security, cloud
              health, well-architected assessment, cost optimization,
              scheduling of non-production VM’s and databases, forecasting and
              inventory management. As a result kobo360 were able to improve
              the security posture of their cloud environment.
            </p>
          </section>
        </section>

        <Footer />
      </React.Fragment>
    );
  }
}

export default Kobo;
