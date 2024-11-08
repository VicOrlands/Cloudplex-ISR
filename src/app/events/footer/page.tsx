import Image from "next/image";
import styles from "./styles.module.css";
import Partner1 from "@/assets/startups/partners/MaxFiles-logo.png";
import Partner2 from "@/assets/startups/partners/borderless.png";
import Partner6 from "@/assets/startups/partners/logo1.png";
import Partner4 from "@/assets/startups/partners/hub_one.png";
import Partner5 from "@/assets/startups/partners/ibadan_startup.png";
import Partner3 from "@/assets/startups/partners/cafe_one.png";
import Partner9 from "@/assets/startups/partners/sdc.png";
import Partner10 from "@/assets/startups/partners/start_innovation_hub.png";
import Partner8 from "@/assets/startups/partners/root.png";
import Partner7 from "@/assets/startups/partners/vatebra_logo.png";

const partners = [
  Partner1,
  Partner2,
  Partner6,
  Partner4,
  Partner5,
  Partner3,
  Partner9,
  Partner10,
  Partner8,
  Partner7,
];

function Footer() {
  return (
    <section className={styles.eventPartners}>
      <h2>Join 4,000+ companies already growing</h2>

      <div className={styles.eventPartnersLogos}>
        {partners.map((partner, index) => (
          <div className={styles.partnersLogo} key={index}>
            <Image
              src={partner}
              alt="Ready to supercharge your startup journey"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Footer;
