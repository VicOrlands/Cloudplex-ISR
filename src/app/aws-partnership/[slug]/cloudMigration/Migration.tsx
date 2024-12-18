import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css"
import data from "@/assets/cloud/data.gif";
import HeroImg from "@/assets/cloud/codecollaboration.png";
import Partners from "@/components/partners/Partners";
import Testimonial from "@/app/landing/testimonial/Testimonial";

export default function Migration() {
  return (
    <section className={styles["cloud-migration"]}>
      <div className={styles["cloud-migration-hero-section"]}>
        <div>
          <h1>Migrating large numbers of servers to the AWS Cloud.</h1>
          <p>
            Cloud Migration Factory automates the coordination and automation
            of large migrations to the cloud, including multiple servers, by
            automating manual processes and integrating multiple tools
            efficiently.
          </p>

          <div className={styles["partnership-hero-btn"]}>
            <Link href="/contact-us">Contact us</Link>

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

      <Partners />

      <section id="partnership" className={styles["cloud-migration-cost"]}>
        <div>
          <Image
            src={data}
            alt="Efficient Cloud Migration Services | CloudPlexo"
          />
        </div>

        <div>
          <h2>Cloud Migration + Cost Savings = Innovation + Agility</h2>
          <p>
            Power transformational Goals that drive innovation. Reduce IT
            cost, increase innovation and become more agile by embracing cloud
            migration.
          </p>
          <p>
            The key to modern business success is agility to respond to
            ever-changing business requirements. Transition to the cloud
            provides cost savings, scalability, performance and agility.
          </p>
        </div>
      </section>

      <section className={styles["cloud-migration-success"]}>
        <h2 id={styles["success-h2"]}>Client Success Stories</h2>
        <p id={styles["p-header"]}>Explore how CloudPlexo has transformed businesses</p>

        <Testimonial />
      </section>
    </section>
  );
}
