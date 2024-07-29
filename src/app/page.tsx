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
  title: "Top Cloud Services Providers - CloudPlexo's Innovative solutions.",
  description: "Transform your business in with CloudPlexo's cutting-edge solutions. From cloud services to digital transformation, we elevate your success. Explore now!",
  keywords: ['cloud services', 'cloud service providers', 'cloud solutions', 'scalable cloud services', 'cloud based backup services', 'cloud solutions', 'scalable cloud services', 'cloud based backup services', 'Cloud services', 'Cloud technology', 'Cloud computing solutions', 'Cloud-based solutions', 'Scalable cloud services']
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
            AWS Lagos local zone for data residency requirement to spearhead
            the shift of GTCO Pensions to the AWS Cloud.
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
