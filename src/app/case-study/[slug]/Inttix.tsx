"use client"

import Image from "next/image";
import Footer from "../footer/page";
import styles from "./styles.module.css"
import React, { Component } from "react";
import inttix from "@/assets/casestudies/inttix1.webp";
import logo from "@/assets/casestudies/logo.webp";

{/* <SEO
  title="Inttix's Success Story: AWS-Optimized AI Development with CloudPlexo CCMP"
  description="Discover how Inttix, an AI development company, leveraged CloudPlexo's Cloud Management Platform (CCMP) and AWS services to gain visibility into their cloud operations, optimize spending, and save up to 23% on their AWS bills."
  keywords="AWS AI Development, Inttix Case Study, AI Development Company, AWS Optimization, CloudPlexo CCMP, Cloud Operations Visibility, Cloud Cost Savings"
/> */}

class Inttix extends Component {
  render() {
    return (
      <React.Fragment>
        <section className={styles["gtb-pensions-page"]}>
          <section className={styles["logo-images"]}>
            <Image
              src={logo}
              alt="Inttix's Success Story: AWS-Optimized AI Development with CloudPlexo CCMP"
            />
            <Image
              src={inttix}
              alt="Inttix's Success Story: AWS-Optimized AI Development with CloudPlexo CCMP"
            />
          </section>

          <section className={styles["main-body"]}>
            <h2>The Company</h2>
            <p>
              Inttix, an artificial intelligence development company. The
              company is a Data/AI, Analytical cloud first innovative solutions
              provider offering intelligent data driven business applications to
              customers. It develops commercial-grade data solutions. Inttix
              primary focus is assisting companies develop, expand and lead via
              Analytics and AI as it provides clear data solutions roadmap.
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
              Before Inttix started the utilization of CloudPlexo Cloud
              Management Platform (CCMP) solution, Inttix lacked the
              experience and the tools for managing multiple cloud
              environments and was not able to optimize cloud operations
              spend. Another challenge was the company needed a tool that
              could offer constant monitoring of underutilized provisioned
              resources and in addition schedule non-production VMs and
              databases to save on cost.
            </p>
            <h2>
              <strong>Working Together</strong>
            </h2>
            <p>Trusted Independent Software Vendor (ISV) for Inttix</p>
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
              Using CloudPlexo Cloud Management Platform (CCMP) solution,
              Inttix company and partners received full visibility into their
              cloud operations and spend in various cloud settings in a single
              platform. Inttix was able to save up to 23% on there AWS cloud
              bill through scheduling non-production VMs and databases using
              CCMP.
            </p>
          </section>
        </section>

        <Footer />
      </React.Fragment >
    );
  }
}

export default Inttix;
