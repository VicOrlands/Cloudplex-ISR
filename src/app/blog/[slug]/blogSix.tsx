"use client"
import Image from "next/image";
import styles from "./styles.module.css"
import React, { Component } from "react";
import FeatherIcon from "feather-icons-react";
import blog1 from "@/assets/blog/awswellarchitect.jpg";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aligning CloudPlexo with the AWS Well-Architected Framework",
  description: "Discover how CloudPlexo aligns with the AWS Well-Architected Framework, offering users the ability to assess, monitor, and optimize their cloud workloads across multiple AWS cloud environments.",
  keywords: ["AWS Well-Architected Framework, CloudPlexo, cloud management, cloud workloads, 5 pillars of best practices, cloud infrastructure management, AWS cloud environments, cloud workload assessment, cloud cost optimization"]
};

export default class BlogSix extends Component {
  render() {
    return (
      <section className={styles["blog"]}>
        <ul className={styles["socials"]}>
          <li>Share</li>
          <li>
            <a
              href="https://www.facebook.com/sharer/sharer.php?u=https://cloudplexo.com/aws-well-architected-framework-alignment"
              target="blank"
            >
              <FeatherIcon
                icon="facebook"
              />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/intent/tweet?url=https://cloudplexo.com/aws-well-architected-framework-alignment"
              target="blank"
            >
              <FeatherIcon
                icon="twitter"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/shareArticle?mini=true&url=https://cloudplexo.com/aws-well-architected-framework-alignment"
              target="blank"
            >
              <FeatherIcon
                icon="linkedin"
              />
            </a>
          </li>
        </ul>

        <div className={styles["main-content"]}>
          <h1>AWS Well-Architected Alignment using CloudPlexo</h1>

          <Image
            src={blog1}
            alt="Aligning CloudPlexo with the AWS Well-Architected Framework"
          />

          <br />
          <br />

          <p>
            <h4>
              Are you using the AWS cloud? Are you confident that
              you’ve designed secure, lean and reliable applications
              in the cloud? Do you want to assess and monitor
              infrastructure for technology risk, resilience and
              agility, while Optimising cost?{" "}
            </h4>
            <br />
            Focusing on supporting the efficient management of AWS
            cloud, the AWS Well-Architected framework is provided to
            help cloud architects build secure, high-performing,
            resilient, and efficient infrastructure for their
            applications and workloads based on best practices.
            <br />
            <br />
            In line with this AWS Well-Architected framework,
            CloudPlexo has built its cloud management platform to
            enable our users to assess and monitor their cloud
            workloads based on the 5 Pillars of AWS well-architected
            framework and thereby enabling our customers to operate an
            AWS Well- Architected cloud.
            <br />
            <br />
            Furthermore, CloudPlexo CCMP extends best practices that
            underlie the AWS Well-Architected Framework across
            multiple AWS cloud environments, providing a consistent
            approach and automated tool for customers and partners to
            evaluate cloud applications and workloads against AWS
            Well-Architected Framework best practices. Let’s take a
            quick look at the AWS 5 pillars of best practices and
            their significance in cloud operations which clearly
            aligns with the offerings of CloudPlexo;
          </p>
          <h5>Operational excellence</h5>
          <p>
            The operational excellence pillar ensures that
            organizations gets streamlined supports for their business
            objectives, having the ability to run workloads
            effectively, gaining insight into their operations, and
            continuously improving supporting processes and procedures
            to deliver business value.
          </p>
          <h5>Security</h5>
          <p>
            The security pillar focuses on taking advantage of cloud
            technologies to protect data, systems, and assets in a way
            that can improve the security posture of businesses,
            organizations, and agencies. This pillar further features
            in-depth, best-practice design principles for architecting
            secure workloads on AWS.
          </p>
          <h5>Reliability</h5>
          <p>
            This pillar encompasses the ability of a workload to
            perform its intended function correctly and consistently
            when it’s expected to. This includes the ability to
            operate and test the workload through its total lifecycle
            with optimal implementation of distributed system design,
            recovery planning, and change management.
          </p>
          <h5>Performance efficiency</h5>
          <p>
            The performance efficiency pillar focuses on the efficient
            use of computing resources to meet requirements, and how
            to maintain efficiency as demand changes and technologies
            evolve. This involves optimized selection, review,
            monitoring, and trade-off analysis.
          </p>

          <h5>Cost optimization</h5>

          <p>
            The cost optimization pillar lays emphasis on aligning
            cost with the rate of resource consumption. This includes
            configuring notifications on exceeding usage or cost
            threshold, using the right pricing model for workload
            resources, providing cost and usage analysis with visual
            friendly representations, and offering a Cost and Usage
            Report (CUR) which will allow users to answer the most
            challenging questions on usage and cost.
          </p>

          <p>
            CloudPlexo cloud management enables its users to monitor
            and operate a well-architected cloud infrastructure with
            full visibility and control over resources and
            expenditures across multiple cloud environments.
          </p>
        </div>
      </section >
    );
  }
}
