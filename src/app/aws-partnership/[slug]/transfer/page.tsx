import styles from "./styles.module.css";
import { FAQ } from "./questions";
import Globe from "@/assets/aws_transfer/globe.png";
import Access from "@/assets/aws_transfer/access.png";
import Workflows from "@/assets/aws_transfer/website.png";
import Architecture from "@/assets/aws_transfer/architecture.png";
import HeroImg from "@/assets/aws_transfer/AWS-Badge Amazon CloudFront Delivery.png";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import Review from "@/app/landing/review/Review";
import FaqPage from "@/components/faq/faq";

const awsArray = [
  {
    img: Globe,
    title: "Scalable and Secure File Transfer",
    serviceList: [
      "Facilitate seamless and secure file transfers at scale with AWS Transfer Family, ensuring your data moves efficiently across your organization.",
    ],
  },
  {
    img: Workflows,
    title: "Integration with Existing Workflows",
    serviceList: [
      `CloudPlexo seamlessly integrates AWS Transfer Family into your existing workflows, minimizing disruptions and enhancing overall operational efficiency.`,
    ],
  },
  {
    img: Access,
    title: "Granular Access Controls",
    serviceList: [
      "Ensure data security by implementing granular access controls with AWS Transfer Family, allowing you to define who can access your files and from where.",
    ],
  },
  {
    img: Architecture,
    title: "Highly Available Architecture",
    serviceList: [
      `Rely on the high availability of AWS Transfer Family, ensuring your file transfer infrastructure remains resilient and accessible at all times.`,
    ],
  },
]

export async function generateStaticParams() {
  return awsArray.map(({ title, img, serviceList }) => ({
    title, img, serviceList
  }))
}

const Transfer: React.FC = () => {
  return (
    <>
      <div className={styles["transfer-main-page"]}>
        <div className={styles["transfer-dynamo-hero-section"]}>
          <div>
            <h1>Modernizing File Transfers with AWS Transfer Family</h1>
            <p>
              Empower your file transfer workflows with CloudPlexo's
              proficiency in harnessing AWS Transfer Family.
            </p>

            <div className={styles["transfer-partnership-hero-btn"]}>
              <Link href="#partnership">Get started</Link>

              <Link href="/contactUs">Learn more</Link>
            </div>
          </div>

          <div className={styles["transfer-partnership-hero-img"]}>
            <Image
              src={HeroImg}
              alt="CloudPlexo AWS Cloud - Expert Cloud Solutions"
            />
          </div>
        </div>
        <div className={styles["transfer-services"]}>
          <h2>Key Benefits</h2>

          <div className={styles["transfer-services-column"]}>
            {awsArray.map((service) => (
              <div key={service.title}>
                <Image src={service.img} alt={service.title} />
                <h3>{service.title}</h3>
                {service.serviceList.map((list) => (
                  <ul key={list}>
                    <li>{list}</li>
                  </ul>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Review />

      <FaqPage
        questions={FAQ}
        title="Ready to Transform Your File Transfer Experience?"
        subtitle="Schedule a consultation with CloudPlexo today and embark on a journey of secure, scalable, and efficient file transfers with AWS Transfer Family."
      />
    </>
  );
}

export default Transfer;
