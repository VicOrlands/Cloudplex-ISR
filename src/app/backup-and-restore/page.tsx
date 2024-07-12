import Hero from "./Hero";
import Modules from "./Modules";
import Modules2 from "./Modules2";
import Modules3 from "./Modules3";
import type { Metadata } from "next";
import Whitepaper from "./Whitepaper";
import styles from "./styles.module.css";
import PricingModule from "./PricingModule";

export const metadata: Metadata = {
  title: "CloudPlexo Backup & Recovery Solutions - Protect Your Data",
  description: "Discover CloudPlexo's Backup and Recovery solutions to safeguard your data from ransomware and ensure secure data backup and recovery.",
  keywords: ['Data backup', 'Ransomware protection', 'Cloud data recovery', 'Hybrid cloud backup', 'Multi-cloud data protection']
};

function Main() {
  return (
    <div className={styles["backup"]}>
      <Hero />
      <Modules />
      <Whitepaper />
      <Modules2 />
      <Modules3 />
      <PricingModule />
      {/* <CloudStorage /> */}
    </div>
  );
}

export default Main;
