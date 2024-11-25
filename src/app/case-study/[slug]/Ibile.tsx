"use client"

import React, { Component } from "react";
import logo from "@/assets/casestudies/logo.webp";
import bp from "@/assets/casestudies/ibile.png";
import landerImg from "@/assets/casestudies/BillyronkBg.webp";
import Image from "next/image";
import Footer from "../footer/page";
import styles from "./styles.module.css";

class Ibile extends Component {
    render() {
        return (
            <>
                <section className={styles["gtb-pensions-page"]}>
                    <h1>IBILE MFB Case Study</h1>

                    <section className={styles["logo-images"]}>
                        <Image
                            src={bp}
                            alt="Kobo360's Success Story: Enhancing Cloud Security and Cost Optimization with Wendu by CloudPlexo"
                            className={styles["phastImg"]}
                        />

                        <Image
                            src={logo}
                            alt="Kobo360's Success Story: Enhancing Cloud Security and Cost Optimization with Wendu by CloudPlexo"
                        />
                    </section>

                    <section className={styles["main-body"]}>
                        <Image
                            src={landerImg}
                            alt="Kobo360's Success Story: Enhancing Cloud Security and Cost Optimization with Wendu by CloudPlexo"
                        />

                        <p>In the financial sector, building secure, scalable, and resilient infrastructure is crucial. Financial institutions are tasked with the responsibilities of protecting sensitive data, ensuring regulatory compliance, and delivering a seamless experience to customers and as the industry increasingly adopts cloud-based solutions to meet these needs, selecting the right infrastructure becomes vital for optimising performance, controlling costs, and supporting long-term growth.</p>

                        <h2>Overview</h2>
                        <p>IBILE Microfinance Bank (MFB) is a financial institution that provides accessible financial solutions to individuals and businesses. With a mission to empower communities and boost economic development, IBILE MFB is dedicated to delivering efficient banking services tailored to the unique needs of its clients.</p>

                        <p>As the bank expanded, its operations and customer base grew, creating a demand for more robust, scalable, and secure IT infrastructure. IBILE MFB recognized the need to upgrade its cloud infrastructure. Partnering with CloudPlexo, a trusted AWS partner, they aimed to achieve better performance, enhanced scalability, and significant cost savings.</p>

                        <h2>Quote from IBILE:</h2>
                        <p>“Cloudplexo helps you with setting up your cloud infrastructure in the right way to minimise cost without reducing efficiency of your apps hosted on the cloud”
                            <br />
                            <b>Name: Michael Onyike</b> <br />
                            <b>Position: Head Information Technology</b>
                        </p>

                        <h2>Challenges:</h2>
                        <p>The co-location of their application and database on a single server led to resource competition, limited scalability, and a higher risk of downtime. Furthermore, underutilized instances contributed to unnecessary expenses, underscoring the need for closer monitoring and optimization to better support their growing operational needs.</p>
                        <ol>
                            <li>Outdated EC2 Instances: The Bank faced some limitations due to outdated instance types, which affected performance and cost-efficiency.</li>
                            <li>Co-location of Application and Database: The co-location of their application and database on a single server led to  resource competition, limited scalability, and a higher risk of downtime.</li>
                            <li>Underutilization of Resources: Underutilised instances led to unnecessary expenses, bringing the need for more detailed monitoring.</li>
                        </ol>

                        <h2>Solutions:</h2>
                        <p>CloudPlexo worked with IBILE MFB to:</p>
                        <ol>
                            <li>Upgrade Cloud Infrastructure for Better Performance and Cost Efficiency.</li>
                            <li>Separate Application and Database for Scalability and Reliability: This is to improve performance, scalability, and reduce risks.</li>
                            <li>Re-Architect Infrastructure for Scalability and High Availability: CloudPlexo re-architected IBILE MFB’s cloud environment to prioritize scalability and high availability. This includes implementing load balancers, autoscaling groups, and adopting managed database services like Amazon RDS for better fault tolerance and availability.</li>
                            <li>Optimize Cloud Costs through Regular Reviews: Regular cloud resource utilization reviews are important to ensure resources are right-sized and only necessary resources are being used.</li>
                            <li>Implement AWS Cost Optimization Tools: Activating AWS Cost Optimizer to receive recommendations on the most appropriate instance types based on actual workload requirements will optimise costs and resource allocation.</li>
                        </ol>
                        <p>By implementing these solutions, IBILE MFB improved performance, scalability, and significant cost savings in their AWS environment.</p>
                    </section>
                </section>

                <Footer />
            </>
        );
    }
}

export default Ibile;
