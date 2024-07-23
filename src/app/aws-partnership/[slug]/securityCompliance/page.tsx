import styles from "./styles.module.css";
import { FAQ } from "./questions";
import checkIcon from "@/assets/aws_partnership/Check icon.png";
import HeroImg from "@/assets/aws_partnership/security-protection.png";
import Review from "@/app/landing/review/Review";
import FaqPage from "@/components/faq/faq";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  return [
    { slug: "security-compliance" },
  ];
}

const SecurityCompliance = () => {
  return (
    <>
      <div className={styles["security-compliance-page"]}>
        <div className={styles["security-compliance-hero-section"]}>
          <div>
            <h1>
              Robust Security Compliance with CloudPlexo's AWS Config
              Expertise
            </h1>
            <p>
              Elevate your cloud infrastructure to new heights, assured by our
              commitment to cutting-edge solutions and unparalleled
              consultancy in AWS Config.
            </p>

            <Link href="/contact-us">Get started</Link>
          </div>

          <div className={styles["security-compliance-hero-img"]}>
            <Image
              src={HeroImg}
              alt="CloudPlexo AWS Cloud - Expert Cloud Solutions"
            />
          </div>
        </div>

        <div className={styles["security-compliance-services"]}>
          <h2>Why AWS Config for Security Compliance?</h2>
          <h3 id="partnership">
            Empower your cloud infrastructure with AWS Config, a service that
            provides visibility into the configuration changes in your AWS
            resources. Ensure a secure and compliant environment with
            real-time monitoring and automated assessments.
          </h3>

          <div className={styles["security-compliance-services-column"]}>
            <ul>
              <li>
                <Image src={checkIcon} alt="security compliance check icon" />
                Real-time Visibility
              </li>
              <li>
                <Image src={checkIcon} alt="security compliance check icon" />
                Automated Monitoring and Assessment
              </li>
              <li>
                <Image src={checkIcon} alt="security compliance check icon" />
                Automate customer support and close leads faster
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles["security-compliance-client-stories"]}>
        <div className={styles["heading"]}>
          <h2 className={styles["heading-h2"]}>Client Success Stories</h2>
          <h3 className={styles["heading-h3"]}>
            Explore how CloudPlexo has transformed businesses by
            implementing AWS Config for robust security compliance.
          </h3>
        </div>

        <Review />
      </div>

      <FaqPage
        questions={FAQ}
        title="Ready to elevate your cloud security?"
        subtitle="Contact us today for a consultation and discover how AWS Config can revolutionize your security compliance strategy"
      />
    </>
  );
}

export default SecurityCompliance;
