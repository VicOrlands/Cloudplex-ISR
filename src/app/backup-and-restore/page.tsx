import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import styles from "./styles.module.css";
import { FiArrowRight } from "react-icons/fi";
import { ButtonLink, ButtonTranparentLink } from "@/components/button/Button";

import image2 from "@/assets/backup/note.png";
import image3 from "@/assets/backup/file.png";
import AWSLogo from "@/assets/backup/aws.png";
import HeroImage from "@/assets/backup/hero.png";
import AzureLogo from "@/assets/backup/azure.png";
import image from "@/assets/backup/whitepaper.png";
import GoogleLogo from "@/assets/backup/google.png";
import clsx from "clsx";
import PricingModule from "./PricingModule";
import CloudStorage from "./CloudStorage";

export const metadata: Metadata = {
  title: "CloudPlexo Backup & Recovery Solutions - Protect Your Data",
  description: "Discover CloudPlexo's Backup and Recovery solutions to safeguard your data from ransomware and ensure secure data backup and recovery.",
  keywords: ['Data backup', 'Ransomware protection', 'Cloud data recovery', 'Hybrid cloud backup', 'Multi-cloud data protection']
};

function Main() {
  return (
    <div className={styles["backup"]}>
      <section className={styles["backup-hero"]}>
        <Image
          src={HeroImage}
          alt="CloudPlexo Backup & Recovery Solutions - Protect Your Data"
        />

        <div>
          <h1>Backup & Restore</h1>
          <p>
            Backup and Recover your data from On-premise or Cloud.<br />
            Protect your data from Ransomware.<br />
            Hybrid and Multi-cloud.
          </p>

          <div className={styles["btn-group"]}>
            <ButtonLink
              link="/contact-us"
              title="Contact Us" className={styles["btn"]} />
            <ButtonTranparentLink
              link="#backup-services"
              title="Learn More" />
          </div>
        </div>
      </section>

      <section className={styles["modules"]} id="backup-services">
        <div className={styles["modules-heading"]}>
          <h2>Data Backup & Recovery</h2>
          <p>
            Backing up your data is a crucial to be safe from Ransomware.
            CloudPlexo Backup and Recovery solution provides an automated
            backup and recovery solution for Desktops, laptops,
            think-clients, servers and also data stored in the cloud. Backup
            and restore is secure both at rest or in transit.
          </p>
        </div>

        <div className={styles["modules-cloud"]}>
          <h2>Cloud Modules</h2>

          <div>
            <Image
              src={AWSLogo}
              alt="Backup For AWS"
            />
            <p>Backup For AWS</p>
          </div>

          <div>
            <Image
              src={AzureLogo}
              alt="Backup For Microsoft Azure"
            />
            <p>Backup For Microsoft Azure</p>
          </div>

          <div>
            <Image
              src={GoogleLogo}
              alt="Backup For Google Cloud"
            />
            <p>Backup For Google Cloud</p>
          </div>
        </div>
      </section>

      <section className={styles["whitepaper"]}>
        <div className={styles["whitepaper-card"]}>
          <Image
            src={image}
            alt="How Secure is Your Data"
          />

          <h4>How Secure is Your Data?</h4>
        </div>

        <div className={styles["whitepaper-text"]}>
          <h3>Get the latest insights and trends on Cloud Security and Recovery.</h3>

          <Link href="/whitepaper">
            View Whitepaper <FiArrowRight size={20} style={{ marginLeft: 5 }} />
          </Link>
        </div>
      </section>

      <section className={clsx(styles["modules"], styles["flex-module"])}>
        <div>
          <h2>Remote Backup of Your Data</h2>
          <p>
            All data are remotely backed up using our secured Backup and
            Recovery Solution. A remote backup is a dedicated failsafe
            solution for backing up on premise and cloud data. Remote
            backup prevents data loss that can happen either as a result
            of logical damage to software or physical damage to hardware.
            Physical damage could be as a result of a manmade or natural
            disaster.
          </p>
        </div>

        <Image
          src={image2}
          alt="Remote Backup of Your Data"
        />
      </section>

      <section className={clsx(styles["modules"], styles["flex-module"])}>
        <Image
          src={image3}
          alt="Prevent Data Loss Due to Failed Storage Drives"
        />

        <div>
          <h2>Prevent Data Loss Due to Failed Storage Drives</h2>
          <p>
            In the case of a data loss due to manmade or natural disasters
            that can result to a failure of a storage drive. Our secured
            and reliable Backup and Recovery tool can help prevent storage
            drive failure data loss.
          </p>
        </div>
      </section>

      <PricingModule />
      <CloudStorage />
    </div>
  );
}

export default Main;
