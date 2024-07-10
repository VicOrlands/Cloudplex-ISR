import clsx from "clsx";
import Image from "next/image";
import styles from './styles.module.css'
import { AwsCTA } from "../../component/cta";
import { ButtonLink } from "@/components/button/Button";

import img2 from "@/assets/aws_partnership/lambda/enterprise 1.png";
import img1 from "@/assets/aws_partnership/lambda/people-collaborating 1.png";
import Partners from "@/components/partners/Partners";
import Review from "@/app/landing/review/Review";
import BlogGrid from "@/components/blogGrid/Grid";

export default function Lambda() {
    return (
        <div className={styles["awslambda-page"]}>
            <div className={styles["hero"]}>
                <div>
                    <h1>AWS Lambda Service Delivery</h1>
                    <p>
                        A serverless computing service by Amazon Web Services that enables
                        developers to run code without managing servers, automatically
                        scaling and responding to various events.
                    </p>
                    <ButtonLink
                        link="/contactUs"
                        className="btn"
                        title="Contact Sales"
                    />
                </div>
            </div>

            <div className={clsx(styles["grid-column"], styles["grid-img-bottom"])}>
                <div>
                    <h2>
                        Focus on Innovation, Not Infrastructure
                    </h2>
                    <p>
                        Let us handle the complexities of infrastructure management.
                        Our AWS Lambda service delivery empowers your team to focus on
                        innovation, while we take care of operational tasks,
                        deployments, and monitoring.
                    </p>
                </div>

                <div>
                    <Image
                        src={img1}
                        alt="AWS Lambda Service Delivery. Focus on Innovation, Not Infrastructure"
                    />
                </div>
            </div>

            <div className={styles["grid-column"]}>
                <div>
                    <Image
                        src={img2}
                        alt="Expert Support and Monitoring"
                    />
                </div>
                <div>
                    <h2>Expert Support and Monitoring</h2>
                    <p>
                        CloudPlexo offers round-the-clock expert support for your AWS
                        Lambda-powered applications. Rely on us for monitoring,
                        troubleshooting, and performance optimization, ensuring smooth
                        and seamless operations.
                    </p>
                </div>
            </div>

            <Partners />

            <div className={styles["reviewSection"]}>
                <Review />
            </div>

            <BlogGrid />

            <AwsCTA />

        </div>
    );
}
