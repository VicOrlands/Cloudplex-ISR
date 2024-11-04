"use client"

import Image from "next/image";
import Footer from "../footer/page";
import styles from "./styles.module.css";
import React, { Component } from "react";
import logo from "@/assets/casestudies/logo.webp";
import bp from "@/assets/casestudies/cryptosmart.webp";
import landerImg from "@/assets/casestudies/cryptosmartBg.webp";

class CryptoSmart extends Component {
  render() {
    return (
      <>
        <section className={styles["gtb-pensions-page"]}>
          <h1>
            CryptoSmart collaborates with CloudPlexo for Application
            Modernisation with Kubernetes
          </h1>

          <section className={styles["logo-images"]}>
            <Image
              src={bp}
              alt="CryptoSmart collaborates with CloudPlexo for Application Modernisation with Kubernetes"
            />

            <Image
              src={logo}
              alt="CryptoSmart collaborates with CloudPlexo for Application Modernisation with Kubernetes"
            />
          </section>

          <section className={styles["main-body"]}>
            <Image
              src={landerImg}
              alt="CryptoSmart collaborates with CloudPlexo for Application Modernisation with Kubernetes"
            />
            <h2>Introduction</h2>
            <p>
              CryptoSmart (Bitsave Smart Ltd) is a leading B2B asset management
              company in Africa, focusing on sustainable crypto wealth.
              Cryptosmart in addition enables businesses to  set up your trading
              department to solely trade your company profits and beat the
              inflation. Their services include:
            </p>
            <ol>
              <li>
                Crypto Education: One-on-one tutoring to provide comprehensive
                knowledge of the crypto space.
              </li>
              <li>
                Asset Management: Helping businesses profit from the crypto
                market without the need for direct trading.
              </li>
              <li>
                Crypto Consultation: Offering expert advice based on years of
                experience in the blockchain industry.
              </li>
            </ol>
            <p>
              They aim to enhance companies' economic structures and help them
              manage crypto assets effectively.
            </p>
            <p>
              With the rapid growth of the cryptocurrency market, CryptoSmart
              needed to modernize its infrastructure to handle increased demand,
              improve scalability, and ensure high availability and security.
            </p>
            <h2>Challenge</h2>
            <ul>
              <li>
                CryptoSmart seeks to launch their blockchain solution, migrating
                from Namecheap to AWS for heightened service availability,
                reliability, and flexibility.
              </li>
              <li>
                CryptoSmart also aims to optimize current cloud infrastructure,
                enhance its security measures, achieve scalability, and
                streamline operations.
              </li>
            </ul>
            <p>
              CryptoSmart seeks to host its Blockchain Infrastructure on AWS.
            </p>
            <h2>Cloudplexo's Solution</h2>
            <p>
              CryptoSmart engaged CloudPlexo, an AWS Partner, to modernize their
              application infrastructure leveraging Kubernetes and AWS services.
              The solution involved the following key steps:
            </p>
            <ol>
              <li>
                <b>Assessment and Planning</b>
                <br />
                CloudPlexo conducted a comprehensive assessment of CryptoSmart’s
                existing infrastructure. A detailed modernization plan was
                created, focusing on:
                <ul>
                  <li>
                    Migrating to a containerized architecture using Kubernetes.
                  </li>
                  <li>
                    Conducting AWS Well-Architected Reviews to identify and
                    address gaps in the current setup.
                  </li>
                  <li>
                    Implementing AWS best practices for security, reliability,
                    performance efficiency, and cost optimization.
                  </li>
                </ul>
              </li>
              <li>
                <b>Containerization with Kubernetes</b>
                <br />
                CryptoSmart’s application was containerized using Docker.
                Kubernetes was chosen for orchestration due to its robust
                capabilities in managing containerized applications. Amazon
                Elastic Kubernetes Service (EKS) was utilized to manage
                Kubernetes clusters, providing:
                <ul>
                  <li>Scalability and high availability.</li>
                  <li>Seamless integration with other AWS services.</li>
                  <li>Simplified cluster management and maintenance.</li>
                </ul>
              </li>
              <li>
                <b>AWS Well-Architected Reviews</b>
                <br />
                CloudPlexo conducted a series of AWS Well-Architected Reviews on
                various CryptoSmart workloads to ensure the infrastructure
                adhered to AWS best practices. Key focus areas included:
                <ul>
                  <li>
                    Operational Excellence: Automating operations to improve
                    system reliability and reduce human error.
                  </li>
                  <li>
                    Security: Implementing robust security measures, including
                    identity and access management, data protection, and
                    continuous monitoring.
                  </li>
                  <li>
                    Reliability: Designing systems for high availability and
                    disaster recovery.
                  </li>
                  <li>
                    Performance Efficiency: Optimizing resource usage and
                    application performance.
                  </li>
                  <li>
                    Cost Optimization: Identifying opportunities to reduce costs
                    without compromising performance or security.
                  </li>
                </ul>
              </li>
              <li>
                <b>CI/CD Pipeline with AWS DevOps Tools</b>
                <br />A continuous integration and continuous deployment (CI/CD)
                pipeline was established using Github Actions
                <ul>
                  <li>Automated testing and deployment.</li>
                  <li>Faster release cycles with minimal downtime.</li>
                  <li>Consistent and reliable deployment processes.</li>
                </ul>
              </li>
              <li>
                <b>
                  Monitoring and Logging with Amazon CloudWatch and AWS X-Ray
                </b>
                <br />
                Amazon CloudWatch and AWS X-Ray were implemented to monitor
                application performance and gain insights into the behavior of
                distributed applications. This setup provided:
                <ul>
                  <li>Real-time monitoring and alerting.</li>
                  <li>
                    In-depth analysis of application performance and tracing of
                    requests.
                  </li>
                  <li>Proactive identification and resolution of issues.</li>
                </ul>
              </li>
            </ol>
            <h2>AWS Products</h2>
            <p>
              Amazon Kubernetes Service (EKS); Amazon S3; AWS Client VPN; AWS
              Site-to-Site VPN; Amazon RDS Aurora for MySQL, S3 buckets, Route
              53, RDS, and GuardDuty.me
            </p>

            <h2>Benefits</h2>
            <p>
              By leveraging the CloudPlexo’s AWS expertise, CryptoSmart achieved
              improved cost efficiency, heightened security, a scalable and
              high-performing infrastructure, and streamlined operations. This
              strategic move aligns with CryptoSmart commitment to innovation,
              delivering enhanced value to users and setting the stage for
              CryptoSmart's future success on the cloud.
            </p>

            <h2>Conclusion</h2>
            <p>
              By partnering with CloudPlexo and leveraging Kubernetes along with
              AWS services, CryptoSmart successfully modernized its application
              infrastructure. This transformation not only improved scalability,
              security, and performance but also streamlined operations and
              reduced costs, positioning CryptoSmart for continued growth in the
              dynamic cryptocurrency market.
            </p>
          </section>
        </section>

        <Footer />
      </>
    );
  }
}

export default CryptoSmart;
