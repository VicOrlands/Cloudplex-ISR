import img2 from "@/assets/aws_partnership/rds/finance 1.png";
import img1 from "@/assets/aws_partnership/rds/planning-schedule 1.png";
import Image from "next/image";
import styles from "../lambda/styles.module.css"
import { ButtonLink } from "@/components/button/Button";
import Review from "@/app/landing/review/Review";
import BlogGrid from "@/components/blogGrid/Grid";
import Partners from "@/components/partners/Partners";
import { AwsCTA } from "../../component/cta";
import clsx from "clsx";

{/* <SEO
  title="RDS Ready: Revolutionize Your Cloud Relational Database Management"
  description="Experience simplified database administration, seamless scalability, and cost-efficiency with CloudPlexo's RDS Ready service for AWS Redshift."
  keywords="RDS Ready, Relational Database Management, AWS Redshift Service, Scalable Database, Cost-Efficient Data Warehouse"
/> */}

export async function generateStaticParams() {
    return [
        { slug: "rds-ready" },
    ];
}

export default function RDSReady() {
    return (
        <div className={styles["awslambda-page"]}>
            <div className={styles["hero"]}>
                <div>
                    <h1>RDS Ready</h1>
                    <p>
                        A groundbreaking service that revolutionizes the way you manage
                        your relational databases in the cloud. Say goodbye to the
                        complexities of database administration and hello to seamless
                        scalability and effortless operations.
                    </p>
                    <ButtonLink
                        link="/contact-us"
                        className="btn"
                        title="Contact Sales"
                    />
                </div>
            </div>

            <div className={clsx(styles["grid-column"], styles["grid-img-bottom"])}>
                <div>
                    <h2 className="title">
                        Simplified Management and Monitoring
                    </h2>
                    <p>
                        Spend less time on management and more time on innovation.
                        Our AWS Redshift service delivery streamlines cluster
                        management and provides comprehensive monitoring, freeing up
                        your team's resources for strategic initiatives.
                    </p>
                </div>

                <div>
                    <Image
                        src={img1}
                        alt="Simplified Management and Monitoring"
                        className="img-fluid"
                    />
                </div>
            </div>

            <div className={styles["grid-column"]}>
                <div>
                    <Image src={img2} alt="management" />
                </div>

                <div>
                    <h3 className="title">Scalable and Cost-Effective</h3>
                    <p>
                        Scale your data warehouse effortlessly as your business
                        grows. With CloudPlexo's expertise, AWS Redshift allows you
                        to expand storage and compute resources as needed, ensuring
                        cost-efficiency and eliminating the need for upfront
                        investments.
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
