import { pillars, reviews } from "./Arrays";
import HeroImage from "@/assets/well-architected/aws-well-architected-framework-hero.svg";
import CustomerCareImage from "@/assets/well-architected/aws-well-architected-framework-customer-care.png";
import Image from "next/image";
import styles from "./styles.module.css"
import Link from "next/link";

{/* <SEO
  title="Aligning CloudPlexo with the AWS
Well-Architected Framework"
  description="Discover how CloudPlexo
aligns with the AWS Well-Architected Framework, offering users the ability
to assess, monitor, and optimize their cloud workloads across multiple AWS
cloud environments"
  keywords="AWS
Well-Architected Framework, CloudPlexo, cloud management, cloud workloads,
5 pillars of best practices, cloud infrastructure management, AWS cloud
environments, cloud workload assessment, cloud cost optimization"
/> */}

export async function generateStaticParams() {
  return [
    { slug: "aws-well-architected-framework-alignment" },
  ];
}

export default function AWSWellArchitected() {
  return (
    <div className={styles["aws-partnership-parent"]}>
      <section className={styles["hero-section"]}>
        <Image
          src={HeroImage}
          alt="Aligning CloudPlexo with the AWS
      Well-Architected Framework"
        />

        <div className={styles["hero-section-paragraph"]}>
          <h1>AWS Well-Architected Framework Review</h1>
          <p>
            AWS designed the Well-Architected Framework Review to help cloud
            architects build better, secure, and cost-effective infrastructure
            for their apps.
          </p>

          <Link href="#get-started">
            Get Started
          </Link>
        </div>
      </section>

      <section className={styles["well-architected-review-matters"]}>
        <h2>Why AWS Well-Architected Review Matters</h2>
        <p>
          In a rapidly evolving digital landscape, having a robust and
          scalable infrastructure is paramount. AWS Well-Architected is your
          guiding light on this journey, ensuring that your cloud environment
          is Secure, Highly efficient, Reliable, Performant & Cost Effective.
        </p>

        <div>
          <h2>Pillars of AWS Well-Architected Framework Review</h2>

          <section className={styles["pillars-of-well-architected-framework"]}>
            {pillars.map((pillar) => (
              <div key={pillar.title} className={styles["pillar"]}>
                <Image src={pillar.icon} alt={pillar.title} />
                <div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.body}</p>
                </div>
              </div>
            ))}
          </section>
        </div>
      </section>

      <section className={styles["well-architected-reviews"]}>
        <h2>
          The AWS Well-Architected Framework Review is a process that helps
          you evaluate and improve your cloud architectures.
        </h2>

        {reviews.map((review, index) => (
          <div className={styles["framework-review"]} key={review.title}>
            <h3>
              {index + 1}. {review.title}
            </h3>
            <ul>
              {review.points.map((point, idx) => (
                <li key={point + idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className={styles["well-architected-form"]} id="get-started">
        <div className={styles["form"]}>
          <h2>
            Want to Master the AWS Well-Architected Framework Review? Let's
            Begin!
          </h2>
          <form action="POST">
            <label htmlFor="full_name">
              Full Name
              <input
                type="text"
                id="full_name"
                placeholder="Input your full name"
              />
            </label>

            <label htmlFor="email">
              Work Email
              <input
                type="email"
                id="email"
                placeholder="olivia@untitledui.com"
              />
            </label>

            <label htmlFor="company_name">
              Company Name
              <input
                type="text"
                id="company_name"
                placeholder="Input your company name"
              />
            </label>

            <button type="submit" aria-label="Submit">
              Submit
            </button>
          </form>
        </div>

        <Image
          src={CustomerCareImage}
          alt="Want to Master the AWS Well-Architected Framework Review"
        />
      </section>
    </div>
  );
}
