import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import styles from "./styles.module.css";
import { LazyBackgroundImage } from "@/components/backgroundImage/bg";
import { ButtonLink, ButtonTranparentLink } from "@/components/button/Button";

import heroImage from "@/assets/solutions/aws1.png";
import heroImage2 from "@/assets/solutions/aws2.png";
import monitor from "@/assets/solutions/monitor.png";
import patch from "@/assets/solutions/patch.png";
import backup from "@/assets/solutions/backup.png";
import cost from "@/assets/solutions/cost.png";
import security from "@/assets/solutions/security.png";
import automate from "@/assets/solutions/automate.png";
import Partners from "@/components/partners/Partners";
import BgImg from "@/assets/solutions/bg.png";

export const metadata: Metadata = {
  title: "AWS Managed Services & Database Migration | CloudPlexo",
  description:
    "Explore CloudPlexo's AWS managed services for seamless cloud and database migration solutions. Elevate your business with our comprehensive AWS cloud services.",
  keywords: [
    "aws managed services",
    "aws database migration service",
    "aws cloud services",
  ],
  alternates: {
    canonical: "https://www.cloudplexo.com/aws-managed-cloud",
  },
};

export default function AWSManagedCloud() {
  const services = [
    {
      name: "Patching & Maintenance",
      desc: "With our Patching and Maintenance feature, we take care of all aspects of managing and maintaining the underlying infrastructure, including operating system updates, security patches, and software upgrades.",
      image: patch,
    },
    {
      name: "24x7 Monitoring",
      desc: "With our advanced monitoring tools and services, we ensure that your cloud environment is always up and running smoothly. Our team of experts is available around the clock to quickly detect and address any issues or incidents, so you can focus on running your business.",
      image: monitor,
    },
    {
      name: "Data Backup",
      desc: "We understand how important it is for our clients to have a reliable and scalable data backup solution. That's why we offer data backup as a key feature of our AWS Managed service. With our data backup solution, our clients can easily create and manage backups of their critical data using a variety of AWS tools and services such as Amazon S3, Amazon EBS, and Amazon RDS.",
      image: backup,
    },
  ];

  const benefits = [
    {
      name: "Cost Optimization",
      desc: "AWS Managed Cloud can help you optimize your costs by providing cost-effective pricing models and tools to monitor and manage your cloud costs.",
      image: cost,
    },
    {
      name: "Automation",
      desc: "AWS Managed Cloud includes a range of automation tools that can help you streamline your operations and improve your efficiency.",
      image: automate,
    },
    {
      name: "Monitoring and Analytics",
      desc: "AWS Managed Cloud provides a range of monitoring and analytics tools that can help you gain insights into your infrastructure and applications, so you can optimize their performance.",
      image: monitor,
    },
    {
      name: "Security",
      desc: "AWS Managed Cloud is built with security in mind. It provides a range of security features and is designed to meet a range of compliance requirements.",
      image: security,
    },
  ];

  return (
    <div className={styles["solutions"]}>
      <section className={styles["hero"]}>
        <div>
          <h1>AWS Managed Service Solutions.</h1>
          <p>
            Experience unparalleled scalability and reliability with AWS Managed
            Cloud Service by CloudPlexo designed to simplify your cloud
            infrastructure management. Let's manage your cloud and you can focus
            on your business.
          </p>

          <div className={styles["hero-button"]}>
            <ButtonLink
              link="/contact-us"
              title="Contact Sales"
              className={styles["btn"]}
            />

            <ButtonTranparentLink
              link="#services"
              title="Learn More"
              className={styles["btn2"]}
            />
          </div>
        </div>

        <Image
          src={heroImage}
          alt="Expert AWS Managed Cloud Services | CloudPlexo Solutions"
        />
      </section>

      <Partners />

      <section className={styles["solutions-list"]} id="services">
        <h2>Cloudplexo’s AWS Managed Services Include:</h2>

        {services.map((service, key) => (
          <div className={styles["service-row"]} key={key}>
            <div>
              <Image src={service.image} alt={service.name} />
              <h3>{service.name}</h3>
            </div>

            <p>{service.desc}</p>
          </div>
        ))}
      </section>

      <section className={styles["why-choose-us"]}>
        <Image src={heroImage2} alt="Why Choose Us" />

        <div>
          <h3>Why Choose Us?</h3>
          <p>
            We provide a range of cost-saving features, including cost-effective
            pricing models and tools to monitor and manage your cloud costs.
            This means you can optimize your costs and avoid unexpected
            expenses.
          </p>

          <div>
            <Link href="/contact-us">
              Learn more on cloud cost optimization
            </Link>
          </div>
        </div>
      </section>

      <section className={styles["solutions-list"]}>
        <h2>More Benefits of AWS Managed Cloud Solution</h2>

        {benefits.map((service, key) => (
          <div className={styles["service-row"]} key={key}>
            <div>
              <Image src={service.image} alt={service.name} />
              <h3>{service.name}</h3>
            </div>

            <p>{service.desc}</p>
          </div>
        ))}
      </section>

      <LazyBackgroundImage src={BgImg} className={styles["aws-managed-image"]}>
        <section className={styles["aws-managed-cloud"]}>
          <h2>Leverage the Power of AWS Managed Cloud with Cloudplexo</h2>
          <p>
            Our solution provides a range of benefits, including expert
            management, scalability and flexibility, security and compliance,
            cost savings, and automation and efficiency. With Cloudplexo, you
            can trust that your cloud infrastructure is in good hands, allowing
            you to focus on your core business objectives.
          </p>

          <ButtonLink link="/contact-us" title="Contact Sales" />
        </section>
      </LazyBackgroundImage>
    </div>
  );
}
