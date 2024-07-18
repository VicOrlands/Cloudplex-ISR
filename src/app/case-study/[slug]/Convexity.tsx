"use client"

import React, { Component } from "react";
import Image from "next/image";
import Footer from "../footer/page";
import styles from "./styles.module.css";
import logo from "@/assets/casestudies/logo.png";
import bp from "@/assets/casestudies/convexity.png";
import landerImg from "@/assets/casestudies/convexityBg.webp";

{/* <SEO
  title="AWS Case Study: Re-architecting Infrastructure from Monolithic to 
  Microservices for Convexity"
  description=" Re-architecting from a monolithic to a microservices architecture
  on AWS enabled Convexity to overcome its scalability, deployment,
  and resource management challenges. This transformation not only
  improved their operational efficiency and reduced costs but also
  empowered them to innovate rapidly and deliver a superior user
  experience to their clients."
  keywords="AWS, Microservices, Financial Services, Cloud Computing,
  Scalability, CI/CD, Containers, API Gateway, Service Mesh, Data
  Management, Monitoring"
/> */}

class Convexity extends Component {
  render() {
    return (
      <>
        <section className={styles["gtb-pensions-page"]}>
          <h1>
            AWS Case Study: Re-architecting Infrastructure from Monolithic to
            Microservices for Convexity
          </h1>

          <section className={styles["logo-images"]}>
            <Image
              src={bp}
              alt="AWS Case Study: Re-architecting Infrastructure from Monolithic to Microservices for Convexity"
            />

            <Image
              src={logo}
              alt="AWS Case Study: Re-architecting Infrastructure from Monolithic to Microservices for Convexity"
            />
          </section>

          <section className={styles["main-body"]}>
            <Image
              src={landerImg}
              alt="AWS Case Study: Re-architecting Infrastructure from Monolithic to Microservices for Convexity"
            />

            <h2>About Convexity</h2>
            <p>
              Convexity Technology Limited stands as a prominent blockchain
              consultancy firm, not only in Nigeria but also across Africa. At
              the forefront of their offerings is their groundbreaking solution
              known as the ‘Convexity Humanitarian Aid Transfer Solution.’ This
              innovation is designed to establish comprehensive visibility and
              transparency in the distribution of humanitarian aid throughout
              Nigeria and Africa.
            </p>
            <p>
              This solution seamlessly connects all stakeholders involved in the
              aid distribution chain, spanning from donors to beneficiaries,
              leveraging the power of blockchain technology to ensure efficiency
              and accountability.{" "}
            </p>
            <p>
              The Convexity Humanitarian Aid Transfer Solution (CHATS)
              represents the flagship product of Convexity. With a dedicated
              product team boasting over two decades of collective experience in
              both humanitarian and financial sectors, CHATS is purpose-built to
              tackle distribution challenges associated with Cash & Voucher
              Assistance (CVA) in Africa. By harnessing blockchain technology,
              CHATS aims to combat fraud in aid administration and enhance the
              welfare of vulnerable individuals and households.{" "}
            </p>
            <p>
              The Convexity team is actively developing a digital cash and
              voucher transfer platform underpinned by blockchain technology,
              facilitating the seamless movement of funds between donors, NGOs,
              and other relevant parties. Blockchain's inherent immutability and
              transparency empower donors and auditors to monitor aid
              distribution processes closely.
            </p>
            <p>
              CHATS ensures that all aid recipients possess a wallet account
              linked to a verified individual, offering multiple channels for
              aid redemption, including USSD, SMS vouchers, QR code paper
              vouchers, and NFC cards for beneficiaries without internet access
              or smartphones. Moreover, aid distribution is meticulously
              geo-fenced and mapped to prevent unauthorized disbursements,
              thereby providing donors with real-time visibility into their
              funded projects.
            </p>
            <p>
              Crucially, the CHATS system is fortified with a non-custodial
              smart contract cryptocurrency fund management system, allowing
              donors to intervene in case of suspected malpractice during the
              disbursement process by pausing or retracting funds. This
              proactive measure further solidifies trust and accountability
              within the aid ecosystem, fostering impactful humanitarian
              initiatives across Nigeria and Africa.
            </p>

            <h2>Challenges</h2>
            <ol>
              <li>
                Scalability Issues: The monolithic architecture made it
                difficult to scale individual components independently, leading
                to resource inefficiencies and performance bottlenecks.
              </li>
              <li>
                Deployment Bottlenecks: Any change or update required the entire
                application to be redeployed, increasing downtime and the risk
                of introducing bugs.
              </li>
              <li>
                Limited Agility: The tightly coupled components slowed down the
                development process and hindered the ability to innovate
                rapidly.
              </li>
              <li>
                Resource Management: Inefficient resource utilization resulted
                in higher operational costs.
              </li>
            </ol>

            <h2>Objectives</h2>
            <ol>
              <li>
                Improve Scalability: Enable independent scaling of different
                services to better handle load variations and optimize resource
                usage.
              </li>
              <li>
                Enhance Agility: Allow for faster deployment and more frequent
                updates with minimal downtime.
              </li>
              <li>
                Optimize Resource Utilization: Reduce operational costs by
                leveraging AWS's flexible infrastructure and services.
              </li>
              <li>
                Increase Reliability: Ensure high availability and fault
                tolerance for critical financial services.
              </li>
            </ol>

            <h2>Cloudplexo's Solution</h2>
            <p>
              Convexity partnered with CloudPlexo expertise on AWS to
              re-architect their monolithic application into a microservices
              architecture leveraging CloudPlexo’s DevOps service. The solution
              involved the following key steps:
            </p>
            <ul>
              <li>
                Assessment and Planning
                <br /> CloudPlexo AWS Solution Architects conducted a thorough
                assessment of Convexity's existing infrastructure. A detailed
                plan was developed to transition to a microservices
                architecture, considering the following aspects:
                <ul>
                  <li>Identifying and defining microservices boundaries.</li>
                  <li>
                    Selecting appropriate AWS services for hosting and managing
                    microservices.
                  </li>
                  <li>
                    Establishing a robust CI/CD pipeline for continuous
                    integration and deployment.
                  </li>
                </ul>
              </li>
              <li>
                Service Decomposition
                <br />
                The monolithic application was decomposed into discrete,
                independently deployable microservices. Key functionalities such
                as user authentication, analytics, reporting, and notification
                services were separated into individual microservices.
              </li>
              <li>
                Containerization with Amazon ECS
                <br />
                Each microservice was containerized using Docker. Amazon Elastic
                Container Service (ECS) was chosen to orchestrate and manage
                these containers, providing:
                <ul>
                  <li>Scalability and load balancing.</li>
                  <li>Simplified management of containerized applications</li>
                  <li>Integration with other AWS services.</li>
                </ul>
              </li>
              <li>
                API Gateway and Service Mesh
                <br /> Amazon API Gateway was implemented to provide a unified
                entry point for all microservices, enabling:
                <ul>
                  <li>Traffic management.</li>
                  <li>Authorization and access control.</li>
                  <li>Monitoring and logging.</li>
                </ul>
                AWS App Mesh was used to manage the communication between
                microservices, ensuring:
                <ul>
                  <li>Secure and reliable service-to-service communication.</li>
                  <li>Observability and tracing.</li>
                </ul>
              </li>

              <li>
                Data Management with Amazon RDS and DynamoDB
                <br /> Data storage was re-architected to use a combination of
                Amazon RDS for relational data and Amazon DynamoDB for
                high-performance NoSQL needs. This setup provided:
                <ul>
                  <li>Scalability and high availability.</li>
                  <li>Optimized query performance.</li>
                  <li>Cost-effective storage solutions.</li>
                </ul>
              </li>

              <li>
                CI/CD Pipeline with Github Actions
                <br /> An automated CI/CD pipeline was established using Github
                Actions for Continuous integration and delivery.
                <ul>
                  <li>Automated testing and deployment.</li>
                  <li>Reduced deployment times and errors.</li>
                </ul>
              </li>

              <li>
                Monitoring and Logging with Amazon CloudWatch
                <br /> Amazon CloudWatch was implemented to monitor application
                performance and health. This included:
                <ul>
                  <li>Real-time monitoring and alerts.</li>
                  <li>Detailed logging and metrics collection.</li>
                  <li>
                    Insights for proactive troubleshooting and optimization.
                  </li>
                </ul>
              </li>
            </ul>

            <h2>Results</h2>
            <p>
              Scalability: Convexity can now independently scale each
              microservice based on demand, significantly improving resource
              utilization and performance.
            </p>
            <p>
              Deployment Efficiency: Deployment times were reduced by 70%, with
              the ability to deploy updates to individual microservices without
              affecting the entire application.
            </p>
            <p>
              Agility: Development cycles became faster and more efficient,
              allowing Convexity to roll out new features and updates more
              frequently.
            </p>
            <p>
              Cost Optimization: The move to AWS and microservices architecture
              resulted in a 30% reduction in operational costs due to better
              resource management and scalability.
            </p>
            <p>
              Reliability: The new architecture provided enhanced fault
              tolerance and high availability, ensuring consistent service
              delivery to Convexity's clients.
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
              Re-architecting from a monolithic to a microservices architecture
              on AWS enabled Convexity to overcome its scalability, deployment,
              and resource management challenges. This transformation not only
              improved their operational efficiency and reduced costs but also
              empowered them to innovate rapidly and deliver a superior user
              experience to their clients.
            </p>
            <p>AWS Services Used:</p>
            <ul>
              <li>Amazon ECS</li>
              <li>Amazon ECR</li>
              <li>Amazon X-ray</li>
              <li>AWS App Mesh</li>
              <li>Amazon CloudWatch</li>
              <li>Amazon RDS for MySQL</li>
            </ul>
          </section>
        </section>

        <Footer />
      </>
    );
  }
}

export default Convexity;
