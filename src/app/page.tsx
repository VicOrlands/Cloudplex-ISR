import Image from "next/image";
import type { Metadata } from "next";
import styles from "./page.module.css";
import logo from "@/assets/landing/gtco.webp";

import HeroSection from "@/app/landing/hero/Hero";
import Partners from "@/components/partners/Partners";
import Service from "@/app/landing/Service";
import Badges from "@/app/landing/Badges";
import Event from "@/app/landing/event/Event";
import Review from "@/app/landing/review/Review";
import Clients from "@/app/landing/Client";
import BlogGrid from "@/components/blogGrid/Grid";

export const metadata: Metadata = {
  title:
    "Scalable Cloud Services by CloudPlexo | Expert Cloud Service Providers",
  description:
    "Choose CloudPlexo for cloud services and solutions. As leading cloud service providers, we offer scalable, reliable, and cutting-edge cloud technologies.",
  keywords: [
    "cloud services",
    "cloud service providers",
    "cloud solutions",
    "scalable cloud services",
    "cloud based backup services",
  ],
  metadataBase: new URL("https://www.cloudplexo.com"),
  alternates: {
    canonical: "https://www.cloudplexo.com",
  },
};

export default function Home() {
  return (
    <div className={styles.main}>
      <HeroSection />
      <Partners />
      <Service />
      <Badges />
      <Event />
      <Review />
      <Clients />

      <section className={styles.gtcoSection}>
        <div>
          <h2>Leading Nigeria's FSI Revolution</h2>
          <p>
            CloudPlexo, an advanced AWS partner, is the first to leverage 100%
            AWS Lagos local zone for data residency requirement to spearhead the
            shift of GTCO Pensions to the AWS Cloud.
          </p>
        </div>

        <div>
          <Image
            loading="lazy"
            src={logo}
            alt="Top Cloud Services providers with CloudPlexo's Innovative Solutions"
            priority={false}
          />
        </div>
      </section>

      <BlogGrid />
    </div>
  );
}
