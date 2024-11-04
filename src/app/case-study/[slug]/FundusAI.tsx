"use client"

import Image from "next/image";
import Footer from "../footer/page";
import styles from "./styles.module.css"
import React, { Component } from "react";
import logo from "@/assets/casestudies/logo.webp";
import bp from "@/assets/casestudies/fundus.webp";
import landerImg from "@/assets/casestudies/fundusBg.svg";

class FundusAI extends Component {
  render() {
    return (
      <>
        <section className={styles["gtb-pensions-page"]}>
          <h1>
            FundusAI partners with CloudPlexo for Database Migration,
            Application Migration and Cloud Maturity Service
          </h1>

          <section className={styles["logo-images"]}>
            <Image
              src={bp}
              alt="FundusAI partners with CloudPlexo for Database Migration, Application Migration and Cloud Maturity Service"
            />

            <Image
              src={logo}
              alt="FundusAI partners with CloudPlexo for Database Migration, Application Migration and Cloud Maturity Service"
            />
          </section>

          <section className={styles["main-body"]}>
            <Image
              src={landerImg}
              alt="FundusAI partners with CloudPlexo for Database Migration, Application Migration and Cloud Maturity Service"
            />

            <h2>About FundusAI</h2>
            <p>
              FundusAI is Africa’s first AI-powered ecosystem for personalized
              diabetes care, specializing in the automated diagnosis of diabetic
              retinopathy to prevent blindness due to late diagnosis. The
              platform includes a unified health record system, personalized
              meal recommendations, and a community forum that provides
              unrestricted access to healthcare professionals. FundusAI’s AI
              diagnostic device for diabetic retinopathy allows doctors to
              diagnose more patients in less time, significantly contributing to
              the prevention of blindness in diabetic patients. The company's
              value proposition lies in leveraging advanced technology to
              empower healthcare professionals, streamline workflows, improve
              diagnostic precision, and enhance patient outcomes. FundusAI
              embarked on a transformative project to elevate its cloud
              capabilities using CloudPlexo's AWS Maturity Services. The
              objectives were to develop an optimized cloud infrastructure on
              AWS, strengthen security measures, achieve scalability, improve
              their platform's AI capabilities, and streamline operations. By
              leveraging CloudPlexo's AWS Cloud Maturity Service, FundusAI
              anticipates enhanced cost efficiency, elevated security levels, a
              scalable and high-performing infrastructure, and streamlined
              operations.
            </p>

            <h2>Challenges</h2>
            <ul>
              <li>
                Service Availability: FundusAI sought to migrate their web
                application to AWS for heightened service availability,
                reliability, and flexibility.
              </li>
              <li>
                Database Migration: FundusAI needed to migrate their database to
                AWS to improve performance and manageability.
              </li>
              <li>
                Application Hosting: FundusAI aimed to host their web
                application on AWS to benefit from the cloud's scalability and
                reliability.
              </li>
            </ul>

            <h2>Solution</h2>
            <p>
              FundusAI collaborated with CloudPlexo’s AWS experts to migrate
              their database and application to AWS, achieving an optimized
              cloud infrastructure. The key components of the solution included:
            </p>
            <ul>
              <li>
                <b>Database Migration with AWS DMS</b>
                <br />
                CloudPlexo utilized AWS Database Migration Service (DMS) to
                seamlessly migrate FundusAI's database to Amazon RDS Aurora for
                MySQL. This migration provided:
                <ul>
                  <li>
                    Enhanced Performance: Improved database performance and
                    scalability.
                  </li>
                  <li>
                    High Availability: Automated backups and replication for
                    reliability.
                  </li>
                  <li>
                    Ease of Management: Simplified database management and
                    maintenance.
                  </li>
                </ul>
              </li>
              <li>
                <b>Application Migration and Hosting with Amazon ECS</b>
                <br />
                FundusAI’s web application was containerized using Docker and
                deployed on Amazon Elastic Container Service (ECS). This
                approach offered:
                <ul>
                  <li>
                    Scalability: Easy scaling of the application to handle
                    varying loads.
                  </li>
                  <li>
                    Reliability: High availability and fault tolerance through
                    distributed container management.
                  </li>
                  <li>
                    Integration: Seamless integration with other AWS services
                    for enhanced functionality.
                  </li>
                </ul>
              </li>
              <li>
                <b>Security and Networking Enhancements</b>
                <br />
                To ensure secure and reliable access, the following AWS services
                were implemented:
                <ul>
                  <li>
                    AWS Client VPN and Site-to-Site VPN: Secure connections
                    between on-premises networks and AWS environments.
                  </li>
                  <li>
                    Amazon GuardDuty: Continuous threat detection and monitoring
                    for enhanced security.
                  </li>
                  <li>
                    Amazon Route 53: Reliable and scalable DNS web service for
                    routing user requests.
                  </li>
                </ul>
              </li>
              <li>
                <b>Storage and Data Management with Amazon S3</b>
                <br />
                Amazon S3 was used for scalable and secure object storage,
                providing:
                <ul>
                  <li>
                    Durability and Availability: Highly durable and available
                    storage for critical data.
                  </li>
                  <li>
                    Cost Efficiency: Cost-effective storage solutions with
                    flexible pricing options.
                  </li>
                  <li>
                    Security: Advanced security features to protect sensitive
                    data.
                  </li>
                </ul>
              </li>
            </ul>

            <h2>AWS Products Utilized</h2>
            <ul>
              <li>
                Amazon Elastic Container Service (ECS); AWS DMS; Amazon S3; AWS
                Client VPN; AWS Site-to-Site VPN; Amazon RDS Aurora for MySQL,
                Route 53, RDS, and GuardDuty.
              </li>
            </ul>

            <h2>Results</h2>
            <ol>
              <li>
                Enhanced Service Availability: AWS services heightened service
                availability, reliability, and flexibility for FundusAI’s
                platform.
              </li>
              <li>
                Scalability and Performance: The use of EC2, RDS, S3, Route 53,
                and GuardDuty provided a scalable and high-performing
                infrastructure.
              </li>
              <li>
                Improved Security: Robust security measures were implemented,
                ensuring the protection of sensitive health data.
              </li>
              <li>
                Cost Efficiency: Optimized resource utilization and cost
                management strategies reduced operational expenses.
              </li>
              <li>
                Operational Efficiency: Streamlined operations and simplified
                management enabled faster and more reliable service delivery.
              </li>
            </ol>

            <h2>Conclusion</h2>
            <p>
              By partnering with CloudPlexo and leveraging AWS services,
              FundusAI successfully migrated its database and application to
              AWS, achieving a robust, scalable, and secure cloud
              infrastructure. This transformation not only improved service
              availability and performance but also ensured better security and
              cost efficiency, positioning FundusAI for future growth and
              success.
            </p>
          </section>
        </section>

        <Footer />
      </>
    );
  }
}

export default FundusAI;
