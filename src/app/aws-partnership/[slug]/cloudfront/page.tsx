import HeroImg from "@/assets/aws_cloudfront/AWS-Badge Amazon CloudFront Delivery.png";
import Security from "@/assets/aws_cloudfront/Advanced Security Features.png";
import Website from "@/assets/aws_cloudfront/website_performance.png";
import Scalability from "@/assets/aws_cloudfront/scalability.png";
import Global from "@/assets/aws_cloudfront/global.png";
import { FAQ } from "./questions";
import Review from "@/app/landing/review/Review";
import FaqPage from "@/components/faq/faq";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css"

const awsservices = [
  {
    img: Global,
    title: "Global Content Delivery Acceleration",
    serviceList: [
      "Accelerate content delivery worldwide with AWS CloudFront, ensuring your users experience fast and reliable access regardless of their location.",
    ],
  },
  {
    img: Website,
    title: "Enhanced Website Performance",
    serviceList: [
      `Optimize your website's performance by leveraging CloudFront's content caching and distribution capabilities, reducing latency and improving user experience.`,
    ],
  },
  {
    img: Scalability,
    title: "Scalability and Flexibility",
    serviceList: [
      "Scale your content delivery seamlessly with CloudFront, adapting to changing traffic patterns and ensuring a consistently high level of performance.",
    ],
  },
  {
    img: Security,
    title: "Advanced Security Features",
    serviceList: [
      `Safeguard your content with CloudFront's built-in security features, including DDoS protection and SSL/TLS encryption, ensuring a secure and trustworthy user experience.`,
    ],
  },
]

export async function generateStaticParams() {
  return [{
    slug: "amazon-cloudfront-delivery"
  }]
}

const CloudFront = () => {
  return (
    <>
      <div className={styles["main-cloudfront-page"]}>
        <div className={styles["cloudfront-dynamo-hero-section"]}>
          <div>
            <h1>Navigating AWS CloudFront with CloudPlexo</h1>
            <p>
              Empower your content delivery strategy with CloudPlexo's
              expertise in leveraging AWS CloudFront. Explore a world of
              benefits, discover compelling use cases, and find answers to
              your questions as we redefine how you distribute content across
              the globe.
            </p>

            <div className={styles["cloudfront-partnership-hero-btn"]}>
              <Link href="#partnership">Get started</Link>

              <Link href="/contact-us">Learn more</Link>
            </div>
          </div>

          <div className={styles["cloudfront-partnership-hero-img"]}>
            <Image
              src={HeroImg}
              alt="CloudPlexo AWS Cloud - Expert Cloud Solutions"
            />
          </div>
        </div>

        <div className={styles["cloudfront-services"]} id="partnership">
          <h2>Key Benefits</h2>

          <div className={styles["cloudfront-services-column"]}>
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
        title="Ready to Optimize Your Content Delivery?"
        subtitle="Let's redefine how your audience experiences your content!"
      />
    </>
  )
}

export default CloudFront;
