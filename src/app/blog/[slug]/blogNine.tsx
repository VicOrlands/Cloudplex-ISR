"use client"
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css"
import React, { Component } from "react";
import FeatherIcon from "feather-icons-react";
import blog1 from "@/assets/blog/rightsizing.webp";

{/* <SEO
  title="Leveraging Rightsizing Recommendations for Cost Optimization in Cloud Deployments"
  description="Discover how CloudPlexo, an AWS Partner, extends rightsizing recommendations to help businesses optimize cloud deployments, reduce costs, and enhance efficiency in line with best practices"
  keywords="Rightsizing Recommendations, CloudPlexo, Cost Optimization, Cloud Deployments, AWS Partner, Cloud resource optimization, AWS cost-saving, CloudPlexo's rightsizing, Cloud economics, AWS cost management"
/> */}

export default class BlogNine extends Component {
  render() {
    return (
      <section className={styles["blog"]}>
        <ul className={styles["socials"]}>
          <li>Share</li>
          <li>
            <Link
              href="https://www.facebook.com/sharer/sharer.php?u=https://cloudplexo.com/the-benefits-of-building-a-cloud-native-company"
              target="blank"
            >
              <FeatherIcon
                icon="facebook"
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://twitter.com/intent/tweet?url=https://cloudplexo.com/the-benefits-of-building-a-cloud-native-company"
              target="blank"
            >
              <FeatherIcon
                icon="twitter"
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/shareArticle?mini=true&url=https://cloudplexo.com/the-benefits-of-building-a-cloud-native-company"
              target="blank"
            >
              <FeatherIcon
                icon="linkedin"
              />
            </Link>
          </li>
        </ul>

        <div className={styles["main-content"]}>
          <h1>Rightsizing Recommendation - An Approach to Save on Your AWS Cost</h1>

          <Image
            src={blog1}
            alt="Leveraging Rightsizing Recommendations for Cost Optimization in Cloud Deployments"
          />

          <br />
          <br />

          <p>
            <span style={{ fontWeight: "800" }}> </span>
            The cloud technology is a major breakthrough in scaling IT
            infrastructure, unleashing opportunities for flexible
            deployments and resource management. However, cloud
            environment services are delivered through lots of
            Software-as-a-Service (SaaS) which build up into
            significant workloads that can further stretch the budget
            of cloud users if not efficiently used.
            <br />
            <br />
            With the surge in cloud adoption across businesses,
            companies and organizations, it is highly beneficial to
            understand and implement the economics of cloud
            deployments which are wound around planning, governance,
            in-depth insights and continuous optimization. This will
            enable cloud users to take full advantage of the flexible
            architecture of the cloud to their best interest.
            <br />
            <br />
            Rightsizing cloud resources should be the aim of
            cloud-based IT teams. Rightsizing recommendation makes
            this goal achievable with an enviable impact level as
            provided on the CloudPlexo Platform. This is made
            available to companies, organization, and enterprises
            including Small-Medium Enterprises (SMEs).
            <br />
            <br />
            As an AWS (Amazon Web Services) partner, CloudPlexo
            extends the rightsizing recommendations feature in AWS
            Cost Explorer to its clients, enabling them to identify
            cost-saving opportunities by downsizing or optimizing
            Amazon EC2 instances.
            <br />
            <br />
            CloudPlexo further provides rightsizing recommendation to
            help customers have a strong grasp of the economics of
            cloud deployments, giving them personalized data that are
            crucial and significantly useful in planning, governance,
            and continuous optimization of their cloud applications to
            yield maximum efficiency in line with best practices.
            <br />
            <br />
            The use of rightsizing recommendation capabilities on AWS
            transforms your cost optimization business strategy from
            just delivering the difference in public pricing between
            current instance type and recommended instance type
            options to now offer estimated cost savings, inclusive of
            their Reserved Instances and Savings Plans discounts, as
            well as instance hours covered by Reserved Instances or
            Savings Plans.
            <br />
            <br />
            Cost savings calculations that are used in AWS rightsizing
            recommendations includes Consolidated recommendations
            accross accounts – to provide consolidated recommendations
            accross mutiple AWS accounts that will not affect the
            performance of active applications; CPU Usage Analysis -
            determining if an instance is idle or underutilized;
            Intelligent recommendation – using a recommendation
            machine learning engine to identify the optimal Amazon EC2
            instance types for a particular workload; and Savings
            calculation - examining the instance running to identify
            whether it was partially or fully covered by an RI or
            Savings Plans, or running On-Demand.
            <br />
            <br />
            Put together and properly applied, rightsizing
            recommendations can leave a business, company or
            organization with overwhelming savings, cutting cost to
            the minimum without compromising efficiency.
          </p>
        </div>
      </section>
    );
  }
}
