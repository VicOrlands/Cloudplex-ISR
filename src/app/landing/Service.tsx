'use client'

import clsx from "clsx";
import React, { useState } from "react";
import styles from "./styles.module.css"
import { BsArrowRight } from "react-icons/bs";
import Image, { StaticImageData } from "next/image";

import backup from "@/assets/landing/backup.webp";
import devops from "@/assets/landing/devops.webp";
import wenduImage from "@/assets/landing/wendu.webp";
import maturity from "@/assets/landing/maturity.webp";
import security from "@/assets/landing/security.webp";
import aiscanImage from "@/assets/landing/aiscan.webp";
import microsoft from "@/assets/landing/microsoft.webp";
import cloudResource from "@/assets/landing/cloud.webp";
import omniChannel from "@/assets/landing/omni-channel.webp";
import managedcloud from "@/assets/landing/managedcloud.webp";
import cloudTraining from "@/assets/landing/cloud training.webp";
import cloudmigration from "@/assets/landing/cloudmigration.webp";

interface ProfessionalType {
    name: string,
    desc: string,
    image: StaticImageData,
    link: string,
}

interface ServiceTypes extends ProfessionalType {
    width: number,
    height: number
}

const serviceContent: ServiceTypes[] = [
    {
        name: "Wendu - Cloud Security and Cost Management Platform",
        desc: "Insights for both developers and management to run a secured, efficient, lean, cost-optimized and reliable cloud.",
        image: wenduImage,
        link: "https://wendu.io",
        width: 199,
        height: 171,
    },
    {
        name: "AI Scan",
        desc: "360 Degree Approach Where We Analyse How Your Data Can Be Recycled To Be Beneficial To Your Business.",
        image: aiscanImage,
        link: "/data-analytics",
        width: 200,
        height: 171,
    },
    {
        name: "AWS Managed Service",
        desc: "Experience unparalleled scalability and reliability with AWS Managed service, a cloud service designed to simplify your cloud infrastructure management.",
        image: managedcloud,
        link: "/aws-managed-cloud",
        width: 233,
        height: 171,
    },
    {
        name: "Backup & Restore",
        desc: "Prevent data loss from anywhere with CloudPlexo Cloud-Native Backup and Restore product.",
        image: backup,
        link: "/backup-and-restore",
        width: 228,
        height: 171,
    },
    {
        name: "Cloud Migration Factory",
        desc: "Automates the coordination of large migrations to Amazon Web Services, including multiple servers, by automating the use of several tools",
        image: cloudmigration,
        link: "/cloud-migration",
        width: 119,
        height: 171,
    },
    {
        name: "AWS Maturity Service",
        desc: "A transformative solution designed to propel your cloud operations towards enhanced efficiency, optimal performance, and strategic growth. ",
        image: maturity,
        link: "/aws-maturity-service",
        width: 167,
        height: 171,
    },
    {
        name: "Security Compliance",
        desc: "Ensure the highest level of security with AWS Config, empowering you to proactively assess, audit, and monitor your infrastructure for compliance with industry standards, mitigating risks and ensuring a robust security posture.",
        image: security,
        link: "/security-compliance",
        width: 170,
        height: 171,
    },
    {
        name: "Microsoft on AWS",
        desc: `Seamlessly run Microsoft workloads on AWS, leveraging the power of cloud computing to achieve unmatched scalability, flexibility, and reliability. Uncover the full potential of your Microsoft applications with AWS's robust and tailored infrastructure support.`,
        image: microsoft,
        link: "/microsoft-on-aws",
        width: 193,
        height: 171,
    },
    {
        name: "Cloud Resource Management",
        desc: `Streamline operational tasks and enhance efficiency with AWS Systems Manager, a comprehensive solution that simplifies resource and application management, enabling you to automate tasks, deploy software, and gain valuable insights for optimal performance.`,
        image: cloudResource,
        link: "/cloud-resource-managament",
        width: 160,
        height: 171,
    },
];

const professionalServices: ProfessionalType[] = [
    {
        name: "Omni-Channel Contact Center",
        desc: "Cloud-based contact-centre service that makes it easy for any business to deliver better customer service at lower cost. ",
        image: omniChannel,
        link: "/technologies",
    },
    {
        name: "Cloud Training",
        desc: "Our highly experienced Professionals are recognised in the industry to have the highest-rated technical skills by employers. ",
        image: cloudTraining,
        link: "/training",
    },
    {
        name: "DevOps as a Service",
        desc: `Streamline your software development lifecycle with CloudPlexo's DevOps solutions on the cloud.`,
        image: devops,
        link: "/devops-as-a-service",
    },
];

export default function Service() {
    const [activeTab, setActiveTab] = useState<boolean>(true);
    const [serviceIndex, setServiceIndex] = useState<number>(6);

    const handleViewMore = () => {
        setServiceIndex(serviceIndex === 6 ? serviceContent.length : 6);
    };

    return (
        <div className={styles.serviceContainer} id="product-services">
            <div>
                <h2>
                    Achieve Peak Efficiency with Our Innovative Products and Services
                </h2>

                <div className={styles.servicesTabNavigation}>
                    <ul>
                        <li
                            className={clsx(
                                styles.tabsTab,
                                {
                                    [styles.tabsTabActive]: activeTab,
                                    [styles.slideLeft]: activeTab
                                }
                            )}
                            onClick={() => setActiveTab(true)}
                        >
                            Solutions & Offerings
                        </li>
                        <li
                            className={clsx(
                                styles.tabsTab,
                                {
                                    [styles.tabsTabActive]: !activeTab,
                                    [styles.slideRight]: !activeTab
                                }
                            )}
                            onClick={() => setActiveTab(false)}
                        >
                            Professional Services
                        </li>
                    </ul>
                </div>

                {activeTab ? (
                    <div className={styles.tabContent}>
                        {serviceContent.slice(0, serviceIndex).map((service) => (
                            <div key={service.name}>
                                <Image
                                    src={service.image}
                                    alt="Achieve Peak Efficiency with Our Innovative Products and Services"
                                    height={service.height}
                                    width={service.width}
                                />

                                <section>
                                    <h3>{service.name}</h3>
                                    <p>{service.desc}</p>
                                    <a href={service.link}>
                                        Explore <BsArrowRight id={styles.icon} />
                                    </a>
                                </section>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className={styles.tabContent}>
                        {professionalServices.map((professional) => (
                            <div key={professional.name}>
                                <Image
                                    src={professional.image}
                                    alt="Achieve Peak Efficiency with Our Innovative Products and Services"
                                />

                                <section>
                                    <h3>{professional.name}</h3>
                                    <p>{professional.desc}</p>
                                    <a href={professional.link}>
                                        Explore <BsArrowRight id="icon" />
                                    </a>
                                </section>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab && (
                    <div className={styles.btnViewMore}>
                        <button
                            type="button"
                            onClick={handleViewMore}
                            aria-label={serviceIndex === 6 ? "View More" : "View less"}
                        >
                            {serviceIndex === 6 ? "View More" : "View less"}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
