import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css"
import HeroImage from "@/assets/backup/hero.png";

function Hero() {
  return (
    <section className={styles["backup-hero"]}>
      <div className={styles["backup-image"]}>
        <Image
          src={HeroImage}
          alt="CloudPlexo Backup & Recovery Solutions - Protect Your Data"
          className="img-fluid d-block mx-auto"
        />
      </div>

      <div>
        <h2>Backup & Restore</h2>
        <p>
          Backup and Recover your data from On-premise or Cloud. <br />{" "}
          Protect your data from Ransomware.
          <br /> Hybrid and Multi-cloud.
        </p>

        <div className={styles["btn-group"]}>
          <Link
            href="/contact-us"
          >
            Contact Us
          </Link>
          <Link
            href="#backup-services"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
