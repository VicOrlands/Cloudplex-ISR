"use client"

import Link from "next/link";
import Image from "next/image";
import Footer from "../footer/page";
import styles from "./styles.module.css"
import React, { Component } from "react";
import logo from "@/assets/casestudies/logo.png";
import bp from "@/assets/casestudies/dukia.png";
import landerImg from "@/assets/casestudies/dukiaBg.webp";

class Dukia extends Component {
  render() {
    return (
      <>
        <section className={styles["gtb-pensions-page"]}>
          <h1>
            CloudPlexo Rearchitecting Dukia's Infrastructure to Microservices on
            AWS.
          </h1>

          <section className={styles["logo-images"]}>
            <Image
              src={bp}
              alt="CloudPlexo Rearchitecting Dukia's Infrastructure to Microservices on AWS."
            />

            <Image
              src={logo}
              alt="CloudPlexo Rearchitecting Dukia's Infrastructure to Microservices on AWS."
            />
          </section>

          <section className={styles["main-body"]}>
            <Image
              src={landerImg}
              alt="CloudPlexo Rearchitecting Dukia's Infrastructure to Microservices on AWS."
            />
            <h2>Background</h2>
            <p>
              Dukia is a digital marketplace redefining the world of NFTs and
              digital ownership. It is an innovative and culturally oriented
              platform where users can surf, design, amass, sell, auction, and
              gift NFTs. Dukia places a high value on the security of its
              customers' digital assets. Creators can easily mint and sell NFTs
              with ultra-low fees while retaining ownership rights, and
              collectors can discover and purchase unique NFTs directly from
              creators on Dukia's user-friendly platform.
            </p>
            <h2>Challenge</h2>
            <p>
              Dukia sought to embark on a transformative journey to rearchitect
              its application infrastructure, transitioning from a monolithic
              model to a microservices architecture on AWS. This project aimed
              to elevate its cloud capabilities, enhancing scalability, agility,
              maintainability, and security using CloudPlexo's AWS Maturity
              Services.
            </p>
            <h2>Cloudplexo's Solution</h2>
            <ol>
              <li>
                CloudPlexo’s experts undertook a comprehensive analysis of
                Dukia's existing application, identifying microservices
                boundaries, and seamlessly integrating AWS services to support
                the new architecture. The solution was crafted to improve
                infrastructure according to AWS best practices.
              </li>
              <li>
                Key Steps in the Solution:
                <ol type="a">
                  <li>
                    Comprehensive Analysis and Microservices Identification
                    <ul>
                      <li>
                        Detailed examination of the existing monolithic
                        application.
                      </li>
                      <li>
                        Identification of discrete functional components to be
                        transitioned into microservices.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Containerization and Deployment:
                    <ul>
                      <li>
                        Containerization of identified microservices using
                        Docker.
                      </li>
                      <li>
                        Deployment and orchestration using AWS services to
                        ensure scalability and reliability.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Database Management with Amazon RDS:
                    <ul>
                      <li>
                        Migration of database to Amazon RDS for SQL Server to
                        enhance performance, scalability, and reliability.
                      </li>
                      <li>
                        Use of Amazon DynamoDB for handling high-throughput and
                        low-latency data access.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Enhanced Security and Compliance:
                    <ul>
                      <li>
                        Implementation of AWS Config and AWS Systems Manager for
                        improved configuration management and compliance.
                      </li>
                      <li>
                        Integration of AWS EventBridge for real-time event
                        monitoring and automation.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Storage and Data Management:
                    <ul>
                      <li>
                        Use of Amazon S3 for scalable and secure object storage.
                      </li>
                      <li>
                        Leveraging S3's cost-effective storage solutions with
                        built-in security features.
                      </li>
                    </ul>
                  </li>
                </ol>
              </li>
            </ol>
            <h2>AWS Products Utilized</h2>
            <ul>
              <li>
                Amazon RDS for SQL Server: For reliable and scalable database
                management.
              </li>
              <li>
                Amazon EC2: For flexible compute capacity and scalability.
              </li>
              <li>Amazon S3: For secure and scalable object storage.</li>
              <li>
                AWS Config: For enhanced configuration management and
                compliance.
              </li>
              <li>
                AWS Systems Manager: For operational data management and
                resource administration.
              </li>
              <li>
                AWS EventBridge: For event-driven application architectures.
              </li>
              <li>
                Amazon DynamoDB: For fast, flexible, and highly scalable NoSQL
                data management.
              </li>
            </ul>
            <h2>Results</h2>
            <p>
              This strategic initiative leveraged the benefits of microservices
              to enhance scalability, agility, and maintainability. Key benefits
              included:
            </p>
            <ul>
              <li>
                Enhanced Scalability: Independent scaling of microservices to
                handle varying loads efficiently.
              </li>
              <li>
                Increased Agility: Faster development cycles and deployment
                processes, enabling rapid response to business needs.
              </li>
              <li>
                Improved Security: Enhanced security measures to protect digital
                assets.
              </li>
              <li>
                Optimized Operations: Streamlined operations through efficient
                resource utilization and automation.
              </li>
            </ul>
            <p>
              This rearchitecting effort by CloudPlexo positioned Dukia for
              greater flexibility, faster development cycles, and improved
              responsiveness to evolving business needs.
            </p>
            <h2>Conclusion</h2>
            <p>
              By choosing AWS for this transition and leveraging CloudPlexo's
              Cloud Maturity Service, Dukia established a reliable foundation
              for its microservices architecture. This fostered innovation and
              future growth while improving cost efficiency, security,
              scalability, and operational efficiency. The rearchitected
              infrastructure aligns with Dukia's vision for a modular,
              resilient, and scalable platform, ensuring sustained success in
              the dynamic world of NFTs and digital ownership.
            </p>
          </section>
        </section>

        <Footer />
      </>
    );
  }
}

export default Dukia;
