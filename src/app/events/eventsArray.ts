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

import Nairobi from "@/assets/events/nairobi.webp";
import fintech from "@/assets/events/DSC_0144.webp";
import founders from "@/assets/events/founders.webp";
import Kigali from "@/assets/events/kigali_event.webp";
import businessDay from "@/assets/events/events1/seven.webp";
import GenerativeAI from "@/assets/events/1691070093414.webp";
import Immersion from "@/assets/events/Immersion image 1.webp";
import GenAI from "@/assets/events/GenerativeAI.webp"

export interface Speaker {
    image: StaticImageData;
    name: string;
    jobTitle: string;
}

export interface WebinarProps {
    image: StaticImageData,
    name: string,
    link: string,
    speakers: Speaker[]
}

export interface EventsProps {
    img: StaticImageData,
    title: string,
    text: string,
    link: string,
    date: string,
}

export const WebinarArray: WebinarProps[] = [
    {
        image: WebinarImage1,
        name: "Cloud Cost Savings Strategies In Times of Economic Uncertainties",
        link: "https://www.eventleaf.com/e/CCOW",
        speakers: []
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
        ]
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
        ]
    },
    {
        image: WebinarImage4,
        name: "Getting Your Security Foundations Right",
        link: "getting-your-security-foundations-right",
        speakers: []
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
        ]
    },
    {
        image: WebinarImage6,
        name: "Cloud Modernization",
        link: "cloud-modernization",
        speakers: []
    },
];

export const EventsArray: EventsProps[] = [
    {
        img: GenAI,
        title: "August Gen-AI Fridays",
        text: `August Gen-AI Fridays: Getting started on Amazon Bedrock`,
        link: "https://www.linkedin.com/events/7226214750320246784/comments/",
        date: "Every Friday of August",
    },
    {
        img: Nairobi,
        title: "Tech Safari Nairobi Mixer",
        text: `We're hosting our Tech Safari Mixer in Nairobi 🎉Hosted by Tech Safari, along with AWS Startups, CloudPlexo and Infobip for founders, investors, ecosystem players and tech-curious. ​Early bird tickets are on sale and if you prefer to pay with MPesa, click here. ​You will be added to the event page when you make the payment. ​If you need help or have questions, reach out to Daniel (daniel [at] techsafari.io).`,
        link: "https://lu.ma/gjpmq019",
        date: "Thursday 4 July",
    },
    {
        img: Kigali,
        title: "KIGALI CTO & Founders Mixer",
        text: `Call out to Founders in Kigali, Rwanda! 🚀Looking to connect with fellow CTOs, founders, and industry experts? Join us at CTO & Founders Mixer on Friday 21st June by 4pm CAT for an evening of networking, insights, and collaboration as we bring together top minds in the industry. Gain valuable knowledge to propel your ventures forward in the dynamic world of Amazon Web Services (AWS).Don't miss out on this opportunity to share experiences and connect with like-minded individuals.`,
        link: "https://lu.ma/g8jo2rcm",
        date: "21 Jun 2024",
    },
    {
        img: businessDay,
        title: "Business Day Event",
        text: `We were thrilled to co-host & sponsor the BusinessDay Economic Club's "C-Suite Executives Roundtable Dinner." It was an evening of insightful discussions and valuable connections.Thank you to all who attended and made it a success!We're excited to see the future collaborations and innovations sparked by this event!`,
        link: "",
        date: "07 Jun 2024",
    },
    {
        img: founders,
        title: "CTO’s & Founders Mixer",
        text: `The energy was electric as attendees soaked in the insightful discussions and invaluable connections made. From groundbreaking tech insights to entrepreneurial wisdom, the mixer catalyzes innovation and collaboration.`,
        link: "",
        date: "22 Apr 2024",
    },
    {
        img: fintech,
        title: "Fintech Fusion Submit",
        text: `From startups to industry giants, the Fintechfusion Summit had it all. It was a knowledge feast, an incredible day of insights, innovation, unparalled networking and limitless opportunities at the Fintech Summit 2023!`,
        link: "fintech-fusion-summit",
        date: "02 Nov 2023",
    },
    {
        img: Immersion,
        title: "AWS Immersion Day",
        text: `🚀 Just concluded an enriching AWS Immersion Day with the GT Pension Manager's team, and immense appreciation to the AWS team <a href="https://www.linkedin.com/in/kayode-ranger/">Kayode A. Akomolafe (Tech Ranger)</a>, <a href="https://www.linkedin.com/in/ousintkd/">Ousseynou khadim BEYE</a>, <a href="https://www.linkedin.com/in/onaopemipo-osunyomi-45a73244/">Onaopemipo Osunyomi</a>, and <a href="https://www.linkedin.com/in/eberenkoro"/>Ebere Nkoro</a> for their invaluable insights and guidance! 💡`,
        link: "",
        date: "",
    },
    {
        img: GenerativeAI,
        title: "Generative AI",
        text: `Heartfelt appreciation to the incredible members of the AWS team <a href="https://www.linkedin.com/in/eberenkoro/">Ebere Nkoro</a> and <a href="https://www.linkedin.com/in/osaretin-j-63692093/">Osaretin J</a> for their unparalleled support and seamless organisation, which contributed immensely to the success of this event.`,
        link: "",
        date: "",
    },
];