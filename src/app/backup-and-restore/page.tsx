import Image from "next/image";
import type { Metadata } from "next";
import styles from "./styles.module.css";
import { ButtonLink } from "@/components/button/Button";
import { Icon, AwsIcon, AzureIcon, KvmIcon } from "./Icon";
import { LazyBackgroundImage } from "@/components/backgroundImage/bg";
import clsx from "clsx";

import AWSLogo from "@/assets/backup/aws.png";
import footer from "@/assets/backup/footer.png"
import Veeam from "@/assets/backup/veam logo.png";
import HeroImage from "@/assets/backup/hero.webp";
import AzureLogo from "@/assets/backup/azure.png";
import GoogleLogo from "@/assets/backup/google.png";
import BdrLogo from "@/assets/backup/BDR Suite logo.png";
import BgImg from "@/assets/backup/Backgroundpattern.png";

export const metadata: Metadata = {
  title: "CloudPlexo Backup & Recovery Solutions - Protect Your Data",
  description: "Discover CloudPlexo's Backup and Recovery solutions to safeguard your data from ransomware and ensure secure data backup and recovery.",
  keywords: ['Data backup', 'Ransomware protection', 'Cloud data recovery', 'Hybrid cloud backup', 'Multi-cloud data protection'],
  alternates: {
    canonical: 'https://cloudplexo.com/backup-and-restore',
  },
};

const logos = [
  AWSLogo,
  GoogleLogo,
  AzureLogo,
  Veeam,
  BdrLogo
]

const cloud = [
  {
    icon: <AwsIcon />,
    title: 'AWS Backup & Recovery',
    body: 'Backup EC2 instances without agents, store backups in the cloud or on-premises, with full instance and volume-level recovery.'
  },
  {
    icon: <AzureIcon />,
    title: 'Azure Backup & Recovery',
    body: 'Backup virtual machines without an agent, store backups in the cloud or on local servers, and perform complete recovery at both the VM and volume level.'
  },
  {
    icon: <AzureIcon />,
    title: 'GCP Backup & Recovery',
    body: 'Agentless backup for Google Cloud VMs, store backups in Google Cloud Storage or on-premises, and perform full VM and volume-level recovery.'
  }
]

const virtual = [
  {
    icon: <AwsIcon />,
    title: 'VMware Backup & Replication',
    body: 'Agentless VM backup & replication, Instant VM & granular recovery, Store backups locally or cloud.'
  },
  {
    icon: <AzureIcon />,
    title: 'Hyper-V Backup & Replication',
    body: 'Agentless VM backup & replication, Instant VM & granular recovery, Store backups locally or cloud.'
  },
  {
    icon: <KvmIcon />,
    title: 'KVM Backup & Replication',
    body: 'Agentless VM backup, Instant VM restore, granular recovery, Store backups locally or cloud.'
  }
]

const application = [
  {
    icon: <AwsIcon />,
    title: 'AWS Backup & Recovery',
    body: 'Backup EC2 instances without agents, store backups in the cloud or on-premises, with full instance and volume-level recovery.'
  },
  {
    icon: <AzureIcon />,
    title: 'Azure Backup & Recovery',
    body: 'Backup virtual machines without an agent, store backups in the cloud or on local servers, and perform complete recovery at both the VM and volume level.'
  },
  {
    icon: <AzureIcon />,
    title: 'GCP Backup & Recovery',
    body: 'Agentless backup for Google Cloud VMs, store backups in Google Cloud Storage or on-premises, and perform full VM and volume-level recovery.'
  }
]

const endpoint = [
  {
    icon: <AwsIcon />,
    title: 'Windows Endpoint Backup & Recovery',
    body: 'Disk-image backup & BMR, File-level backup, Remote backup with centralized management.'
  },
  {
    icon: <AzureIcon />,
    title: 'Linux Endpoint Backup & Recovery',
    body: 'File-level backup & recovery, Store backups locally or cloud, Remote backup with centralized management.'
  },
  {
    icon: <KvmIcon />,
    title: 'Mac Endpoint Backup & Recovery',
    body: 'File-level backup & recovery, Store backups locally or cloud, Remote backup with centralized management.'
  }
]

const server = [
  {
    icon: <AwsIcon />,
    title: 'Windows Server Backup & Recovery',
    body: 'Disk-image backup & BMR, File-level backup, Remote backup with centralized management.'
  },
  {
    icon: <AzureIcon />,
    title: 'Linux Endpoint Backup & Recovery',
    body: 'File-level backup & recovery, Store backups locally or cloud, Remote backup with centralized management.'
  },
  {
    icon: <KvmIcon />,
    title: 'NAS Backup & Recovery',
    body: 'File-level backup & recovery, CIFS/NFS share backup – NAS, Windows, Linux, Store backups locally or cloud.'
  }
]

const saas = [
  {
    icon: <AwsIcon />,
    title: 'Microsoft 365 Backup & Recovery',
    body: 'Backup for Mails, OneDrive, Sites & Teams, Store backups locally or cloud, Restore to same/different user.'
  },
  {
    icon: <AzureIcon />,
    title: 'Google Workspace Backup & Recovery',
    body: 'Backup for Gmail, Google Drive & Shared Drive, Store backups locally or cloud, Restore to same/different user.'
  },
]

function Main() {
  return (
    <div className={styles["backup"]}>
      <LazyBackgroundImage src={BgImg} className={styles["bg-backup"]}>
        <section className={styles["backup-hero"]}>
          <div>
            <h1>Backup & Restore</h1>
            <br />
            <br />

            <p>Backup and Recover your data from On-premise or Cloud.</p>
            <p>Protect your data from Ransomware.</p>
            <p>Hybrid and Multi-cloud.</p>

            <ul>
              <li><Icon /> Cloud Backup & Recover</li>
              <li><Icon /> Virtual Machine Backup & Recovery</li>
              <li><Icon /> Application Backup & Recovery</li>
              <li><Icon /> Endpoint backup & Recovery</li>
              <li><Icon /> Server backup & Recovery</li>
            </ul>

            <h6>Our Partners</h6>
            {
              logos.map(item => (
                <Image src={item} key={item.src}
                  className={styles["logos"]}
                  alt="Our Partners - CloudPlexo Backup & Recovery Solutions" />
              ))
            }
          </div>

          <Image
            src={HeroImage}
            className={styles["hero-img"]}
            alt="CloudPlexo Backup & Recovery Solutions - Protect Your Data"
          />
        </section>
      </LazyBackgroundImage>

      <section className={styles["modules"]}>
        <h2>Cloud Backup and Recovery</h2>
        <div className={styles["grid"]}>
          {
            cloud.map(item => (
              <div key={item.title}>
                <>{item.icon}</>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))
          }
        </div>

        <h2>Virtual Machine Backup and Recovery</h2>
        <div className={styles["grid"]}>
          {
            virtual.map(item => (
              <div key={item.title}>
                <>{item.icon}</>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))
          }
        </div>

        <h2>Application Backup and Recovery</h2>
        <div className={styles["grid"]}>
          {
            application.map(item => (
              <div key={item.title}>
                <>{item.icon}</>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))
          }
        </div>

        <h2>Endpoint Backup and Recovery</h2>
        <div className={styles["grid"]}>
          {
            endpoint.map(item => (
              <div key={item.title}>
                <>{item.icon}</>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))
          }
        </div>

        <h2>Server Backup and Recovery</h2>
        <div className={styles["grid"]}>
          {
            server.map(item => (
              <div key={item.title}>
                <>{item.icon}</>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))
          }
        </div>

        <h2>SaaS Backup and Recovery</h2>
        <div className={clsx(styles["grid"], styles["saas-grid"])}>
          {
            saas.map(item => (
              <div key={item.title}>
                <>{item.icon}</>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))
          }
        </div>

        <section className={styles["footer"]}>
          <div>
            <h2>Don’t let data loss threaten your business continuity.</h2>
            <p>Secure your data with a reliable backup solution. Take the first step towards peace of mind, knowing your business is protected with our cloud backup and restore services.</p>
            <ButtonLink title="Get Started" link="/contact-us" className={styles["btn"]} />
          </div>

          <Image src={footer}
            alt="CloudPlexo Backup & Recovery Solutions" />
        </section>
      </section>
    </div>
  );
}

export default Main;
