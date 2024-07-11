"use client"

import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";
import CTAForm from "@/components/callToAction/cta";

import BgImg from "@/assets/press release/press-hero.png"
import image1 from "@/assets/press release/digital-journal.png";
import image2 from "@/assets/press release/chameleon.png";
import image3 from "@/assets/press release/techpoint.png";
import image4 from "@/assets/press release/benzinga.png";
import image5 from "@/assets/press release/technews.png";
import image6 from "@/assets/press release/business-day.png";
import { LazyBackgroundImage } from "@/components/backgroundImage/bg";

export default function PressRelease() {
    const pressReleaseList = [
        {
            image: image6,
            title:
                "CloudPlexo Facilitates Seamless Cloud Migration to AWS, Unveiling Exclusive Benefits for Businesses",
            desc: "In a strategic move to empower businesses with cutting-edge cloud technology, CloudPlexo announces its comprehensive Cloud Migration Program to AWS in 2024.",
            link: "https://techcabal.com/2024/02/28/cloudplexo-facilitates-seamless-cloud-migration-to-aws-unveiling-exclusive-benefits-for-businesses/",
        },
        {
            image: image1,
            title:
                "CloudPlexo Launches AWS Well-Architected Alignment Tool to Assess Cloud Environment",
            desc: "CloudPlexo, cloud optimization and efficiency SaaS platform provider, announces the launch of its AWS Well-Architected Alignment Tool which enables cloud architects, customers and partners to evaluate or assess cloud environment architectures to determine their level of alignment with specific cloud solutions and industry best practices.",
            link: "https://www.digitaljournal.com/pr/cloudplexo-launches-aws-well-architected-alignment-tool-to-assess-cloud-environment",
        },
        {
            image: image2,
            title:
                "CloudPlexo Achieves AWS ISV Partner Status in AWS Partner Network",
            desc: "CloudPlexo, the cloud management platform that aims to help companies shrink their cloud expenses by up to 40%, announced today that it has achieved Amazon Web Services (AWS) Independent Software Vendors (ISV) Partner Status. The designation of AWS ISV Partner is an achievement that CloudPlexo accomplished through AWS’ comprehensive ISV partner path process that includes testing against the highest industry standards for software companies offering integrations with AWS.",
            link: "https://marketchameleon.com/PressReleases/i/1188102/UK/cloudplexo-achieves-aws-isv-partner-status-in",
        },
        {
            image: image3,
            title:
                "CloudPlexo accepted into AWS Jumpstart Program to drive cloud innovation",
            desc: "CloudPlexo, a leading provider of cloud solutions, is proud to announce that it has been accepted into the Amazon Web Services (AWS) Jumpstart Program. This prestigious program is designed to help promising startups and SMEs leverage the power of AWS to build, grow and scale their businesses.",
            link: "https://techpoint.africa/2023/05/09/cloudplexo-accepted-into-aws-jumpstart-program-to-drive-cloud-innovation/",
        },
        {
            image: image1,
            title: "CloudPlexo Launches Cloud Resource Scheduler for AWS",
            desc: "Cloud cost management platform provider, CloudPlexo, announces the launch of its Cloud Resource Scheduler, a tool that enables the smart scheduling of cloud resources on AWS as a key strategy for cutting down cloud cost.",
            link: "https://www.digitaljournal.com/pr/cloudplexo-launches-cloud-resource-scheduler-for-aws",
        },
        {
            image: image4,
            title: "CloudPlexo Launches Service Recommendations Solution for AWS",
            desc: "CloudPlexo, cloud optimization and efficiency SaaS platform provider, announces the launch of its new Service Recommendations solution for AWS, helping cloud users to promptly and intelligently identify resource optimization deficiencies and opportunities for effective decision-making, cost savings, waste elimination and data-driven advisory services.",
            link: "https://www.benzinga.com/pressreleases/21/07/ab21908486/cloudplexo-launches-service-recommendations-solution-for-aws",
        },
        {
            image: image5,
            title: "CloudPlexo Achieves Amazon RDS Ready Designation",
            desc: "9 June, 2021 – CloudPlexo announced today that it has achieved the Amazon RDS Ready designation, part of the Amazon Web Services, Inc. (AWS) Service Ready Program. This designation recognizes that CloudPlexo Cloud Management Platform (CCMP) has demonstrated successful integration with Amazon Relational Database Service (Amazon RDS).",
            link: "https://news.technewspoint.com/story/302862/cloudplexo-achieves-amazon-rds-ready-designation.html",
        },
    ];

    //   <SEO
    //     title="CloudPlexo Press Release"
    //     description="Stay updated on the latest industry developments, news, interviews, and cutting-edge technologies with CloudPlexo's press releases"
    //     keywords="Cloud Industry Updates, Cutting-Edge Technologies"
    //   />

    return (
        <div className={styles["press-release"]}>
            <LazyBackgroundImage src={BgImg} className={styles["hero-bg"]}>
                <section className={styles["press-release-hero"]}>
                    <div className={styles["press-release-hero-content"]}>
                        <h1>Press Releases</h1>
                        <p>
                            Get updated on the most recent developments in the industry,
                            including news, interviews, cutting-edge technologies, and
                            valuable resources.
                        </p>

                        <CTAForm />
                    </div>
                </section>
            </LazyBackgroundImage>

            <section className={styles["press-release-catalog"]}>
                {pressReleaseList.map((list, index) => (
                    <div className={styles["press-card"]} key={index}>
                        <div>
                            <Image src={list.image} alt="CloudPlexo Press Release" />
                        </div>

                        <div className={styles["press-content"]}>
                            <h4>{list.title}</h4>
                            <p>{list.desc}</p>
                            <Link href={list.link} target="_blank" rel="noreferrer">
                                Read More
                            </Link>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}
