"use client"

import Image from "next/image";
import Footer from "../footer/page";
import styles from "./styles.module.css"
import React, { Component } from "react";
import liveli from "@/assets/casestudies/liveli.webp";
import logo from "@/assets/casestudies/logo.webp";

{/* <SEO
  title="Liveli's Cloud Cost Optimization with Wendu on AWS - A Case Study in High Savings"
  description="Discover how Liveli, a Social Networking and Live Entertainment Hub, achieved significant cost savings of up to 28% on AWS through CloudPlexo's Wendu Cloud Security and Cost Management Platform."
  keywords="Cloud Cost Optimization, AWS Cost Savings, CloudPlexo Wendu, Liveli Case Study, Cloud Security and Cost Management Platform"
/> */}

class Liveli extends Component {
  render() {
    return (
      <React.Fragment>
        <section className={styles["gtb-pensions-page"]}>
          <section className={styles["logo-images"]}>
            <Image
              src={logo}
              alt="Liveli's Cloud Cost Optimization with Wendu on AWS - A Case Study in High Savings"
            />
            <Image
              src={liveli}
              alt="Liveli's Cloud Cost Optimization with Wendu on AWS - A Case Study in High Savings"
            />
          </section>

          <section className={styles["main-body"]}>
            <h2>The Company</h2>
            <p>
              Liveli is a company based in Ontario, Canada. Liveli is a Social
              Networking and Live Entertainment Hub. Users can share their
              Lifestyle, Earn real money from posts and contents, stream live
              events, watch live entertainment and stay connected to Family &
              Friends. Liveli is your all in one App
            </p>
            <h2>
              <strong>Solution</strong>
            </h2>
            <p>Wendu Cloud Security and Cost Management Platform solution</p>
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
              Prior to using Wendu, the team at Liveli lacked the maturity and
              the process to manage their cloud environment and infrastructure
              in order to discover areas cloud optimization can be applied to
              reduce spend. Liveli was looking for a high-level management
              tool to help manage their cloud environment. CloudPlexo provided
              Wendu - Cloud security and cost management platform through
              continuous monitoring, total visibility of operations spending,
              identifying underutilized and idle resources.
            </p>
            <h2>
              <strong>Working Together</strong>
            </h2>
            <p>Trusted Independent Software Vendor (ISV) for Liveli</p>
            <h2>
              <strong>Why Amazon Web Services</strong>
            </h2>
            <p>
              AWS was the preferred choice as the world-leading cloud platform
              for flexibility, elasticity, scale and cost. CloudPlexo worked
              with Liveli on their cloud management objective to meet all
              their requirements. CloudPlexo SaaS solution used a range of AWS
              services such as; AWS RDS Aurora Serverless, Lambda, Api
              gateway, Amazon S3, AWS Step functions, AWS Certificate Manager,
              AWS secret manager, cloudfront.
            </p>
            <h2>
              <strong>Outcomes</strong>
            </h2>
            <p>
              CloudPlexo SaaS solution, Wendu Cloud Security and cost
              management platform implemented within AWS solved Liveli cost
              optimization of cloud environments through the use of Wendu for
              high-level management of their cloud environment, cost
              optimization, scheduling of non-production VM’s and databases,
              forecasting and inventory management. As a result Liveli were
              able to make significant cost savings of up to 28%.
            </p>
          </section>
        </section>

        <Footer />
      </React.Fragment >
    );
  }
}

export default Liveli;
