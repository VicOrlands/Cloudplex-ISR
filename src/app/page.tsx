import Image from "next/image";
import type { Metadata } from "next";
import styles from "./page.module.css";
import logo from "@/assets/landing/gtco.webp";

import HeroSection from "@/pages/Landing/hero/Hero";
import Partners from "@/pages/Landing/Partners";
import Service from "@/pages/Landing/Service";
import Badges from "@/pages/Landing/Badges";
import Event from "@/pages/Landing/event/Event";
import Review from "@/pages/Landing/review/Review";
import Clients from "@/pages/Landing/Client";

export const metadata: Metadata = {
  title: "Top Cloud Services providers in with CloudPlexo's Innovative Solutions.",
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
          <h2>Leading Africa and Nigeria's FSI Revolution</h2>
          <p>
            CloudPlexo, an advanced AWS partner, is the first to leverage 100%
            AWS Lagos local zone for data residency requirement to spearhead
            the shift of GTCO Pensions to the AWS Cloud.
          </p>
        </div>

        <div>
          <Image
            src={logo}
            alt="Top Cloud Services providers with CloudPlexo's Innovative Solutions"
          />
        </div>
      </section>

    </div>
  );
}
