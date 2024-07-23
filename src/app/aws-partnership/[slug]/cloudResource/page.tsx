import { FAQ } from "./questions";
import HeroImg from "@/assets/aws_microsoft/hero.webp";
import Inventory from "@/assets/aws_microsoft/inventory.png";
import Automated from "@/assets/aws_microsoft/automated.png";
import Operational from "@/assets/aws_microsoft/operational.png";
import Configuration from "@/assets/aws_microsoft/configuration.png";
import Review from "@/app/landing/review/Review";
import FaqPage from "@/components/faq/faq";
import styles from "./styles.module.css"
import Link from "next/link";
import Image from "next/image";

const awsArray = [
  {
    img: Automated,
    title: "Automated Patching and Compliance",
    paragraph:
      "Keep your systems up-to-date and compliant effortlessly, ensuring security and regulatory standards are met without manual intervention.",
  },
  {
    img: Inventory,
    title: "Inventory and Resource Tracking",
    paragraph:
      "Gain real-time insights into your AWS resources, enabling strategic decision-making and efficient resource allocation.",
  },
  {
    img: Configuration,
    title: "Configuration Management",
    paragraph:
      "Ensure consistency across your cloud environment by centrally managing configurations, making updates, and tracking changes seamlessly.",
  },
  {
    img: Operational,
    title: "Operational Insights with Run Command",
    paragraph:
      "Execute commands across your AWS resources, gaining operational insights and taking corrective actions without the need for direct access.",
  },
]

export async function generateStaticParams() {
  return [{
    slug: "cloud-resource-managament"
  }]
}

const CloudResource = () => {
  return (
    <>
      <div className={styles["cloud-resource-page"]}>
        <div className={styles["cloud-resource-dynamo-hero-section"]}>
          <div>
            <h1>
              Optimizing Cloud Resources Seamlessly via AWS Systems Manager
            </h1>
            <p>
              Empower your business with CloudPlexo's expert management of
              cloud resources using AWS Systems Manager.
            </p>

            <div className={styles["partnership-hero-btn"]}>
              <Link href="/contact-us">Get started</Link>

              <Link href="#partnership">Learn more</Link>
            </div>
          </div>

          <div className={styles["partnership-hero-img"]}>
            <Image
              src={HeroImg}
              alt="CloudPlexo AWS Cloud - Expert Cloud Solutions"
            />
          </div>
        </div>
        <div className={styles["cloud-resource-services"]}>
          <h2>CloudPlexo's Distinct Use Cases</h2>
          <h3 id="partnership">
            Revolutionize your cloud experience with tailored solutions
            designed to streamline, optimize, and secure your AWS
            infrastructure.
          </h3>

          <div className={styles["cloud-resource-services-column"]}>
            {awsArray.map((service) => (
              <div key={service.title}>
                <Image src={service.img} alt={service.title} />
                <h3>{service.title}</h3>
                <p>{service.paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles["cloud-resource-stories"]}>
        <div className={styles["heading"]}>
          <h2 className={styles["head-h2"]}>Client Success Stories</h2>
          <p className={styles["head-p"]}>
            Explore how CloudPlexo has transformed businesses by
            implementing AWS Config for robust security compliance.
          </p>
        </div>

        <Review />
      </div>

      <FaqPage
        questions={FAQ}
        title="Ready to elevate your Microsoft workloads on AWS?"
        subtitle="Your seamless, scalable, and secure cloud journey begins here."
      />
    </>
  )
}

export default CloudResource;
