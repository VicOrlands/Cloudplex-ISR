import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import styles from "./styles.module.css"
import { Whitepaper } from "./whitepaperArray";
import CTAForm from "@/components/callToAction/cta";

const MoreInfo = [
  "The Cloud Space",
  "Types of Cloud",
  "The Choice of Cloud from Financial Perspective",
  "Cloud Services",
  "Cloud Computing Components",
  "Cloud Security",
  "The Cloud Adoption Framework",
];

export const metadata: Metadata = {
  title: "CloudPlexo Whitepapers & E-books",
  description: "Explore CloudPlexo's collection of whitepapers and e-books covering topics like cloud migration, cloud security, cloud services, and more. Stay updated with industry insights.",
  keywords: ['CloudPlexo industry insights', 'CloudPlexo resources', 'CloudPlexo whitepapers', 'CloudPlexo e-books'],
  alternates: {
    canonical: "https://www.cloudplexo.com/whitepaper"
  }
};

function WhitePaper() {
  return (
    <section className={styles["whitepaper"]}>
      <div>
        <h1>Whitepapers & E-books</h1>
        <p>
          Get updated on the most recent developments in the industry,
          including news, interviews, cutting-edge technologies, and
          valuable resources.
        </p>
        <CTAForm />
      </div>

      {Whitepaper.map((list, index) => (
        <div className={styles["whitepaper-card"]} key={index}>
          <Image src={list.image} alt={list.name} />

          <div className={styles["whitepaper-content"]}>
            <h3>{list.name}</h3>
            <p>{list.desc}</p>
            <ul>
              {MoreInfo.map((info, idx) => (
                <li key={idx}>{info}</li>
              ))}
            </ul>
            <Link href={`/whitepaper/${list.link}`} rel="noreferrer">
              Read More
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}

export default WhitePaper;
