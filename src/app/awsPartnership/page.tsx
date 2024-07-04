import Link from "next/link";
import Image from "next/image";
import styles from "./aws.module.css";
import { awsservices } from "./awsArray";
import { GoArrowRight } from "react-icons/go";

import { AwsCTA } from "./component/cta";
import Review from "../landing/review/Review";
import BlogGrid from "@/components/blogGrid/Grid";
import Partners from "../../components/partners/Partners";
import { LazyBackgroundImage } from "@/components/backgroundImage/bg";
import { ButtonLink, ButtonTranparentLink } from "@/components/button/Button";

import techbadge from "@/assets/landing/badges/techbadge.png";
import BgImg from "@/assets/aws_partnership/AwsBackground.webp"
import consultingbadge from "@/assets/landing/badges/AWS-Consulting-Partner-Badge 1.png";

const AWSPartnership = () => {
    return (
        <div className={styles["aws-partnership-page"]}>
            <LazyBackgroundImage src={BgImg} className={styles["partnership-hero"]}>
                <div className={styles["partnership-hero-section"]}>
                    <div>
                        <h1 className={styles["partnership-hero-main-title"]}>
                            CloudPlexo AWS Cloud
                        </h1>
                        <p className={styles["partnership-hero-paragraph"]}>
                            We help businesses to run an efficient and cost-optimized cloud.
                            We provide developers as well as management with the insights
                            needed to run an efficient, cost optimised, lean and reliable
                            cloud environment.
                        </p>

                        <div className={styles["partnership-hero-button-container"]}>
                            <ButtonLink link={"#partnership"} title="Learn more" className={styles["btn"]} />

                            <ButtonTranparentLink link={"/contactUs"} title="Contact Sales" className={styles["btn2"]} />
                        </div>
                    </div>

                    <div className={styles["partnership-hero-button-img"]}>
                        <div>
                            <Image
                                src={consultingbadge}
                                alt="CloudPlexo AWS Cloud - Expert Cloud Solutions"
                            />
                        </div>
                        <div>
                            <Image
                                src={techbadge}
                                alt="CloudPlexo AWS Cloud - Expert Cloud Solutions"
                            />
                        </div>
                    </div>
                </div>
            </LazyBackgroundImage>

            <div className={styles["aws-partnership-services"]}>
                <h3 id={styles["partnership"]}>Our Partnership Services</h3>
                <h2>Uncover the Benefits of Expert AWS Guidance</h2>

                <div className={styles["aws-partnership-services-column"]}>
                    {awsservices.map((service) => (
                        <div key={service.title}>
                            <Image src={service.img} alt={service.title} />
                            <p className={styles["aws-partnership-services-title"]}>
                                {service.title}
                            </p>
                            <p className={styles["aws-partnership-services-desc"]}>
                                {service.desc}
                            </p>
                            <Link
                                href={service.link.includes("https://") ? service.link : `/awsPartnership/${service.link}`}
                                className={
                                    service.link === "" ? styles["btn-inactive"] : styles["btn-active"]
                                }
                            >
                                Explore{" "}
                                <GoArrowRight
                                    className={service.link === "" ? styles["inactive"] : styles["active"]}
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <Partners />

            <div className={styles['reviewSection']}>
                <Review />
            </div>

            <BlogGrid />

            <AwsCTA />
        </div>
    );
}

export default AWSPartnership;
