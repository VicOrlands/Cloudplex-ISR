import { FAQ } from "./questions";
import Automated from "@/assets/aws_ec2/backups.png";
import Monitoring from "@/assets/aws_ec2/monitoring.png";
import HeroImg from "@/assets/aws_ec2/aws ec2 badge.png";
import WindowsOptimized from "@/assets/aws_ec2/windows.png";
import SeamlessIntegration from "@/assets/aws_ec2/seamless.png";
import styles from "./styles.module.css"
import Link from "next/link";
import Image from "next/image";
import Review from "@/app/landing/review/Review";
import FaqPage from "@/components/faq/faq";

const awsservices = [
  {
    img: WindowsOptimized,
    title: "Windows-Optimized Instances",
    serviceList: [
      "Choose from a variety of Windows-optimized EC2 instances tailored to meet the specific requirements of your applications, ensuring optimal performance.",
    ],
  },
  {
    img: SeamlessIntegration,
    title: "Seamless Integration",
    serviceList: [
      `Integrate CloudPlexo's AWS EC2 Service seamlessly with your existing Windows infrastructure, allowing for a smooth transition without disruptions.`,
    ],
  },
  {
    img: Automated,
    title: "Automated Backups",
    serviceList: [
      "Protect your critical Windows workloads with automated backup solutions, ensuring data integrity and easy recovery in case of unexpected events.",
    ],
  },
  {
    img: Monitoring,
    title: "Monitoring and Analytics",
    serviceList: [
      "Gain insights into your Windows workloads with our advanced monitoring and analytics tools. Track performance metrics, identify bottlenecks, and optimize resource allocation for improved efficiency.",
    ],
  },
]

export async function generateStaticParams() {
  return [{
    slug: "amazon-ec2"
  }]
}

const Ec2 = () => {
  return (
    <>
      <div className={styles["main-ec2-page"]}>
        <div className={styles["ec2-dynamo-hero-section"]}>
          <div>
            <h1>
              Seamless Performance with CloudPlexo's AWS EC2 Service Delivery
              for Microsoft Windows
            </h1>
            <p>
              Experience unmatched speed and reliability as you seamlessly run
              and scale your Microsoft Windows applications on the CloudPlexo
              AWS EC2 Service, delivering optimal performance for your
              business.
            </p>

            <div className={styles["main-ec2-hero-btn"]}>
              <Link href="#partnership">Get started</Link>

              <Link href="/contact-us">Learn more</Link>
            </div>
          </div>

          <div className={styles["main-ec2-hero-img"]}>
            <Image
              src={HeroImg}
              alt="CloudPlexo AWS Cloud - Expert Cloud Solutions"
            />
          </div>
        </div>

        <div className={styles["main-ec2-services"]}>
          <h2>Precision in Performance, Harmony in Integration.</h2>
          <h3 id="partnership">
            Transform Your Windows Workloads with CloudPlexo's AWS EC2 Service
            Features
          </h3>

          <div className={styles["main-ec2-services-column"]}>
            {awsservices.map((service) => (
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
        title="Tailored solutions ensure efficiency across various industries."
        subtitle="Transform your digital landscape with CloudPlexo's AWS EC2 Service. Elevate your performance across industries"
      />
    </>
  );
}

export default Ec2;
