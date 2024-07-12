import Image from "next/image";
import styles from "./styles.module.css";
import HeroImg from "@/assets/cloud-resource/hero.png";
import MicrosoftWorkload from "@/assets/cloud-resource/microsoft.png";
import Performance from "@/assets/cloud-resource/performance.png";
import CloudConsulting from "@/assets/cloud-resource/operational.png";
import CloudSolutions from "@/assets/cloud-resource/cloud_solutions.png";
import Review from "../landing/review/Review";
import FaqPage from "@/components/faq/faq";
import { questions } from "./questions";
import { ButtonLink, ButtonTranparentLink } from "@/components/button/Button";

const Microsoft = () => {
  const awsservices = [
    {
      img: MicrosoftWorkload,
      title: "Seamless Microsoft Workload Migration",
      serviceList: [
        "Challenge: Streamlining Microsoft workloads on AWS for enhanced efficiency",
        "Solution: CloudPlexo's expertise ensures a seamless migration, optimizing Microsoft workloads on AWS to unlock unparalleled performance and scalability.",
      ],
    },
    {
      img: CloudConsulting,
      title: "Strategic Cloud Consulting for Enhanced Productivity",
      serviceList: [
        "Challenge: Navigating the cloud landscape for optimal productivity",
        "Solution: CloudPlexo's consulting services guide businesses in strategically leveraging AWS, empowering them to harness the full potential of Microsoft workloads in the cloud.",
      ],
    },
    {
      img: CloudSolutions,
      title: "Tailored Cloud Solutions for Regulatory Compliance",
      serviceList: [
        "Challenge: Adhering to regulatory requirements while operating on the cloud",
        "Solution: CloudPlexo provides tailored cloud solutions ensuring that Microsoft workloads on AWS comply with industry regulations, fostering a secure and compliant environment.",
      ],
    },
    {
      img: Performance,
      title: "Performance-Driven Cost Optimization:",
      serviceList: [
        "Challenge: Balancing performance with cost-effectiveness",
        "Solution: CloudPlexo implements cost optimization strategies, ensuring that Microsoft workloads on AWS deliver peak performance while maintaining a strategic approach to cost management.",
      ],
    },
  ]

  return (
    <>
      <div className={styles["aws-dynamo-page"]}>
        <div className={styles["dynamo-hero-section"]}>
          <div>
            <h1>Orchestrating Microsoft Workloads in the AWS Symphony</h1>
            <p>
              Embark on a revolutionary fusion of Microsoft Workloads and AWS
              with CloudPlexo, where expertise meets innovation.
            </p>

            <div className={styles["partnership-hero-btn"]}>
              <ButtonLink link={"#partnership"} title={"Get started"} className={styles['btn']} />

              <ButtonTranparentLink link={"/contact-us"} title={"Learn more"} className={styles['btn2']} />
            </div>
          </div>

          <Image
            src={HeroImg}
            alt="CloudPlexo AWS Cloud - Expert Cloud Solutions"
          />
        </div>

        <div className={styles["aws-dynamo-services"]}>
          <h2>CloudPlexo's Distinct Use Cases</h2>
          <h3 id="partnership">
            Explore how our cloud computing prowess transforms Microsoft
            workloads on AWS, offering tailored solutions for a seamless and
            optimized cloud experience.
          </h3>

          <div className={styles["aws-dynamo-services-column"]}>
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

      <div className={styles["client-stories"]}>
        <h2 id={styles["heading-h1"]}>Client Success Stories</h2>
        <p id={styles["heading-p"]}>
          Explore how CloudPlexo has transformed businesses by implementing
          AWS Config for robust security compliance.
        </p>
        <Review />
      </div>

      <FaqPage title={"Let's redefine your cloud experience together!"} subtitle={"Your journey to an efficient, secure, and optimized cloud resource management with AWS Systems Manager"} questions={questions} />
    </>
  );
}

export default Microsoft;
