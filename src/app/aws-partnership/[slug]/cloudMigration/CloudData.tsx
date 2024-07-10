import test from "@/assets/cloud/test.gif";
import select from "@/assets/cloud/select.gif";
import analyse from "@/assets/cloud/analyse.gif";
import optimize from "@/assets/cloud/optimize.gif";
import improve from "@/assets/cloud/improve.gif";
import migrate from "@/assets/cloud/migrate.gif";
import { FAQ } from "./questions";
import Image from "next/image";
import styles from "./styles.module.css"
import FaqPage from "@/components/faq/faq";

const ProductArchitecture = [
  {
    id: 1,
    title: "Select",
    image: select,
    desc: "Select the right applications from backlog to migrate to the cloud.",
  },
  {
    id: 2,
    title: "Analyse & Prepare",
    image: analyse,
    desc: "Analyse migration and prepare migration tasks.",
  },
  {
    id: 3,
    title: "Cloud Migration",
    image: migrate,
    desc: "Cloud Migration Factory automates the manual coordination and automates large migrations to the cloud.",
  },
  {
    id: 4,
    title: "Improve",
    image: improve,
    desc: "Feedback loop on lessons learnt and improve migrations.",
  },
  {
    id: 5,
    title: "Test & Verify",
    image: test,
    desc: "Validation and conducting User Acceptance Test (UAT).",
  },
  {
    id: 6,
    title: "Optimize",
    image: optimize,
    desc: "Operations in the cloud, workload Optimisation and Improvements",
  },
];

export async function generateStaticParams() {
  return ProductArchitecture.map(({ id, title, image, desc }) => ({
    id, title, image, desc
  }))
}

export default function CloudData() {
  return (
    <>
      <section className={styles["cloud-migration-product"]}>
        <h2>How it works</h2>

        {ProductArchitecture.map((product) => (
          <div key={product.id} className={styles["cloud-migration-product-data"]}>
            <div>
              <Image
                src={product.image}
                alt="Product Architecture"
              />
            </div>
            <div>
              <h4>{product.title}</h4>
              <p>{product.desc}</p>
            </div>
          </div>
        ))}
      </section>

      <FaqPage
        questions={FAQ}
        title="Ready to Elevate Your Business with AWS?"
        subtitle="Our expert team is here to guide you through a seamless transition, optimizing your infrastructure for enhanced performance, scalability, and security."
      />
    </>
  );
}
