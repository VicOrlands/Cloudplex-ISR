import Image from "next/image";
import styles from "./styles.module.css"
import FaqPage from "@/components/faq/faq";
import { businessSolutions, FAQContent } from "./array";
import wenduImage from "@/assets/maturityservice/wendu.png";
import BgImg from "@/assets/aws_partnership/call-to-action.png"
import heroImage from "@/assets/maturityservice/heroimage.png";
import benefitImage from "@/assets/maturityservice/benefit.png";
import optimizationImage from "@/assets/maturityservice/optimization.png";
import { ButtonLink, ButtonTranparentLink } from "@/components/button/Button";
import { LazyBackgroundImage } from "@/components/backgroundImage/bg";

export interface MetaProps {
  slug: string
}

export async function generateMetadata() {
  return {
    title: "AWS Maturity Assessment with CloudPlexo's Expert Solutions",
    description: `Elevate your AWS maturity in with CloudPlexo's expert services. Enhance performance, security, and scalability on the AWS platform. Explore our solutions now.`,
    keywords: ['aws cloud maturity assessment'],
    alternates: {
      canonical: 'https://cloudplexo.com/aws-maturity-assessment',
    },
  }
}

export default function AWSMaturityService() {
  return (
    <>
      <section className={styles["maturityservice"]}>
        <div className={styles["hero"]}>
          <div>
            <h1>CloudPlexo AWS Maturity Service</h1>
            <p>
              A transformative solution designed to propel your cloud
              operations towards enhanced efficiency, optimal performance,
              and strategic growth. With a steadfast focus on continuous
              cloud cost optimization, this service is tailored to meet the
              evolving needs of modern businesses.
            </p>

            <ButtonLink link="#maturity-services"
              title="Learn More" />
          </div>

          <Image
            src={heroImage}
            alt="AWS Maturity Assessment with CloudPlexo's Expert Solutions"
          />
        </div>

        <div className={styles["core-benefits"]} id="maturity-services">
          <Image
            src={benefitImage}
            alt="The Core Benefit"
          />

          <div>
            <h2>The Core Benefit</h2>
            <p>
              At the heart of our Cloud Maturity Service lies the
              commitment to continuous cloud cost optimization.
              <br />
              <br />
              We understand the dynamic nature of cloud expenses and the
              importance of adapting to changing business requirements.
              With our expertise, advanced tools, and industry insights,
              we ensure that your cloud expenses remain aligned with your
              organisational goals at all times.
            </p>
          </div>
        </div>

        <div className={styles["business-problems"]}>
          <h2>Solving Business Problems</h2>

          <div className={styles["service-row"]}>
            <Image
              src={wenduImage}
              alt="Solving Business Problems"
            />

            <div className={styles["text-parent"]}>
              <h4>Wendu - Security and Cost Management Platform (Powered by AI)</h4>
              <p>
                Harness the power of Wendu's AI-driven insights to monitor
                security, cost, and optimization metrics in real time.
              </p>

              <ButtonTranparentLink
                link="https://wendu.io"
                title="Learn More"
              />
            </div>
          </div>

          <div className={styles["service-row"]}>
            <Image
              src={optimizationImage}
              alt="Monthly Cost Optimization Strategy Sessions"
            />

            <div className={styles["text-parent"]}>
              <h4>Monthly Cost Optimization Strategy Sessions</h4>
              <p>
                Collaborate with both CloudPlexo & AWS experts to develop
                tailored cost optimization strategies, ensuring maximum
                value from your cloud investments.
              </p>

              <ButtonTranparentLink
                link="/contact-us"
                title="Contact Sales"
              />
            </div>
          </div>

          <div className={styles["service-solutions"]}>
            {businessSolutions.map((solution) => (
              <div key={solution.title}>
                <h4>{solution.title}</h4>
                <p>{solution.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section >

      <FaqPage title={""} subtitle={""} questions={FAQContent} />

      <LazyBackgroundImage src={BgImg} className={styles["footer-bg"]}>
        <div className={styles["cta"]}>
          <h2>
            With CloudPlexo’s AWS Maturity Service, you embark on a
            journey of continuous improvement, cost optimization, and
            strategic alignment. Our commitment is to enable your
            organization to navigate the complexities of the cloud
            landscape while achieving substantial financial benefits.
          </h2>

          <div>
            <ButtonLink link="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html"
              title="Learn more about AWS consolidated billing" />

            <ButtonTranparentLink
              link="/contact-us"
              title="Contact Us"
            />
          </div>
        </div>
      </LazyBackgroundImage>
    </ >
  );
}
