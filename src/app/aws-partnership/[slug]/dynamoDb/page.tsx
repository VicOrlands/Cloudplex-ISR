import CostEffective from "@/assets/aws_dynamoDb/cost-effective.png";
import Commerce from "@/assets/aws_dynamoDb/e_commerce.png";
import Integration from "@/assets/aws_dynamoDb/integration.png";
import Scalability from "@/assets/aws_dynamoDb/scalability.png";
import Analytics from "@/assets/aws_dynamoDb/analytics.png";
import Banking from "@/assets/aws_dynamoDb/banking.png";
import Security from "@/assets/aws_dynamoDb/security.png";
import Data from "@/assets/aws_dynamoDb/data_flow.png";
import HeroImg from "@/assets/aws_dynamoDb/hero_img.png";
import Badge from "@/assets/aws_dynamoDb/partner_badge.png";
import { FAQ } from "./questions";
import FaqPage from "@/components/faq/faq";
import Review from "@/app/landing/review/Review";
import Image from "next/image";
import styles from "./styles.module.css"

const awsservices = [
  {
    img: Scalability,
    title: "Exceptional Scalability",
    descList: [
      "Handle Over 10 Trillion Daily Requests, Sustain Peaks of 20 Million Requests per Second!",
      "DynamoDB Delivery effortlessly manages immense request volumes, ensuring unparalleled scalability to meet your dynamic workloads.",
    ],
  },
  {
    img: Security,
    title: "Robust Security and Reliability",
    descList: [
      "Ensure Data Security and Reliability - 99.999% SLA, Encryption, and Automatic Backup!",
      "DynamoDB Delivery safeguards your data with top-notch security measures, including encryption, automatic backup, and a commitment to 99.999% availability.",
    ],
  },
  {
    img: CostEffective,
    title: "Cost-Effective Innovation",
    descList: [
      "Focus on Innovation, Minimize Costs - Fully Managed Serverless Database!",
      "DynamoDB Delivery empowers innovation by providing a fully managed serverless database that automatically scales, optimizing costs without compromising performance.",
    ],
  },
  {
    img: Integration,
    title: "Seamless Integration and Insightful Analytics",
    descList: [
      "Integrate and Analyze with Ease - Connect DynamoDB Delivery with AWS Services!",
      "DynamoDB Delivery seamlessly integrates with AWS services, offering built-in tools for analytics, insights extraction, and traffic trend monitoring. Maximize the potential of your data effortlessly.",
    ],
  },
]

export async function generateStaticParams() {
  return [{
    slug: "aws-dynamo-db"
  }]
}

const AWSDynamoDb = () => {
  return (
    <>
      <div className={styles["dynamo-page"]}>
        <div className={styles["dynamo-hero-section"]}>
          <div>
            <h1>
              Powerful AWS DynamoDB Delivery Solutions for Seamless
              Scalability
            </h1>
            <Image
              src={Badge}
              alt="CloudPlexo AWS Cloud - Expert Cloud Solutions"
            />
            <p>
              Your gateway to optimal noSQL database performance and delivery
              excellence. Our partnership service ensures scalable and
              reliable DynamoDB solutions tailored to your business needs.
            </p>

            <div className={styles["partnership-hero-btn"]}>
              <a href="#partnership">Get started</a>

              <a href="/contact-us">Learn more</a>
            </div>
          </div>

          <div className={styles["partnership-hero-img"]}>
            <Image
              src={HeroImg}
              alt="CloudPlexo AWS Cloud - Expert Cloud Solutions"
            />
          </div>
        </div>

        <div className={styles["dynamo-services"]}>
          <h2>Create something remarkable</h2>
          <h3 id={styles["partnership"]}>
            Supercharge Your Decision-Making with CloudPlexo DynamoDB Delivery
          </h3>

          <div className={styles["dynamo-services-column"]}>
            {awsservices.map((service) => (
              <div key={service.title}>
                <Image src={service.img} alt={service.title} />
                <p>{service.title}</p>
                {service.descList.map((desc) => (
                  <ul key={desc}>
                    <li>{desc}</li>
                  </ul>
                ))}
              </div>
            ))}
          </div>

          <div className={styles["dynamo-use-cases"]}>
            <h2>Use Cases</h2>

            <div className={styles["use-cases"]}>
              <section>
                <div>
                  <Image src={Banking} alt="Empowering Banking Operations" />
                </div>
                <p>Empowering Banking Operations</p>
              </section>

              <section>
                <div>
                  <Image
                    src={Commerce}
                    alt="Tailored for E-commerce Excellence"
                  />
                </div>
                <p>Tailored for E-commerce Excellence</p>
              </section>

              <section>
                <div>
                  <Image
                    src={Analytics}
                    alt="Perfect for Streaming Analytics"
                  />
                </div>
                <p>Perfect for Streaming Analytics</p>
              </section>

              <section>
                <div>
                  <Image src={Data} alt="Efficient Ride-Sharing Data Flow" />
                </div>
                <p>Efficient Ride-Sharing Data Flow</p>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Review />

      <FaqPage
        questions={FAQ}
        title="Let's Transform Your Data Management"
        subtitle="Whether you're exploring DynamoDB for the first time or looking to optimize your existing setup, our consultation services are tailored to your unique needs"
      />
    </>
  );
}

export default AWSDynamoDb;
