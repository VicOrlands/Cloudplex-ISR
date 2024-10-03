import { StaticImageData } from "next/image";
import WebinarImage1 from "@/assets/webinar/Webinar1.png";
import WebinarImage2 from "@/assets/webinar/Webinar2.png";
import WebinarImage3 from "@/assets/webinar/Webinar3.png";
import WebinarImage4 from "@/assets/webinar/Webinar4.png";
import WebinarImage5 from "@/assets/webinar/Webinar5.png";
import WebinarImage6 from "@/assets/webinar/Webinar6.png";

// speakers
import ewere from "@/assets/webinar/authors/Ewere.png";
import tosin from "@/assets/webinar/authors/Tosin.png";
import mayowa from "@/assets/webinar/authors/Mayowa.png";
import kehinde from "@/assets/webinar/authors/Kehinde.png";
import jaylynn from "@/assets/webinar/authors/Jaylynn.png";
import michael from "@/assets/webinar/authors/Michael.png";
import simisola from "@/assets/webinar/authors/Simisola.png";
import benjamin from "@/assets/webinar/authors/Benjamin.png";

export interface Speaker {
  image: StaticImageData;
  name: string;
  jobTitle: string;
}

export interface WebinarProps {
  image: StaticImageData;
  name: string;
  link: string;
  speakers: Speaker[];
}

export const WebinarArray: WebinarProps[] = [
  {
    image: WebinarImage1,
    name: "Cloud Cost Savings Strategies In Times of Economic Uncertainties",
    link: "https://www.eventleaf.com/e/CCOW",
    speakers: [],
  },
  {
    image: WebinarImage2,
    name: "Edge Computing: Driving the next evolution of internet & Technology",
    link: "edge-computing",
    speakers: [
      {
        image: ewere,
        name: "Ewere",
        jobTitle:
          "Head of Infrastructure & Data Protection Officer at Indicina AWS Hero (Africa)",
      },
      {
        image: simisola,
        name: "Simisola Saheyi",
        jobTitle: "IT Infrastructure Lead (Xpress Payment Solutions LTD)",
      },
      {
        image: kehinde,
        name: "Kehinde Olashore",
        jobTitle: "CTO (Datacrest Technologies) Kehinde",
      },
    ],
  },
  {
    image: WebinarImage3,
    name: "Leveraging Cloud Solutions For Business Growth.",
    link: "leveraging-cloud-solutions-for-business-growth",
    speakers: [
      {
        image: benjamin,
        name: "Benjamin",
        jobTitle: "CTO Patricia Technologies",
      },
      {
        image: mayowa,
        name: "Mayowa",
        jobTitle: "Head of Engineering Renmoney",
      },
      {
        image: ewere,
        name: "Ewere",
        jobTitle:
          "Head of Infrastructure & Data Protection Officer at Indicina AWS Hero (Africa)",
      },
    ],
  },
  {
    image: WebinarImage5,
    name: "Cloud Security & Requirements",
    link: "cloud-security-and-requirements",
    speakers: [
      {
        image: tosin,
        name: "Tosin Komolafe",
        jobTitle: "ERP Expert | Forex & Crypto Trader | Communicator",
      },
      {
        image: jaylynn,
        name: "Jaylynn Kirui",
        jobTitle: "Cyber Security | Microsoft",
      },
      {
        image: michael,
        name: "Michael Lawrence",
        jobTitle:
          "Security Engineer | CEH, 2X GCP, ISO 27001 LA & LI, AWS Security, CKAD",
      },
    ],
  },
  {
    image: WebinarImage6,
    name: "Cloud Modernization",
    link: "cloud-modernization",
    speakers: [],
  },
  {
    image: WebinarImage4,
    name: "Getting Your Security Foundations Right",
    link: "getting-your-security-foundations-right",
    speakers: [],
  },
];
