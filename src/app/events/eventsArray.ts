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
import PublicSector from "@/assets/events/public sector strategic engagement.png"
import AmazonQ from "@/assets/events/amazoq advantage.png"
import Brunch from "@/assets/events/Nairobi Founders Brunch.png"
import AccraConnect from "@/assets/events/tech connect.png"

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
    linkText: string,
    imgRightText: string
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
    {
        image: WebinarImage4,
        name: "Getting Your Security Foundations Right",
        link: "getting-your-security-foundations-right",
        speakers: []
    },
];

export const EventsArray: EventsProps[] = [
    {
        img: AccraConnect,
        title: "TECH CONNECT ACCRA",
        text: `This Tech Ecosystem Mixer is a unique gathering designed to bring together key players from Ghana’s fast-growing tech ecosystem, including founders, operators, investors, and ecosystem builders. It will serve as a platform for discussions around collaboration, innovation, and business expansion within the region.`,
        link: "https://lu.ma/bzlis1e6",
        date: "Wednesday, October 2",
        linkText: "Register",
        imgRightText: "4:00 PM - 9:00 PM GMT"
    },
    {
        img: AmazonQ,
        title: "The Amazon Q Advantage",
        text: `Join us for our upcoming workshop, "The Amazon Q Advantage," and learn how to harness the power of generative AI without compromising your data security.`,
        link: "https://bit.ly/qadvantage24",
        date: "October 3rd & 4th, 2024",
        linkText: "Register",
        imgRightText: "11:00 AM (GMT+1)"
    },
    {
        img: PublicSector,
        title: "Unlocking Digital Transformation in Nigeria's Public Sector ",
        text: ``,
        link: "https://bit.ly/publicsector24",
        date: "September 17th, 2024",
        linkText: "View info",
        imgRightText: "2pm (WAT)"
    },
    {
        img: Brunch,
        title: "Nairobi Founders Brunch",
        text: `Join us for Nairobi Founders' Brunch Next Monday!🥂 <a href="https://www.linkedin.com/company/cloudplexo/mycompany/" target="blank">CloudPlexo</a> and <a href="https://www.linkedin.com/company/amazon-web-services/" target="blank">Amazon Web Services (AWS)</a> Startups will be bringing the amazing founders and leaders together to connect, learn, and build with fellow innovators on`,
        link: "https://www.linkedin.com/posts/cloudplexo_cloudplexo-awsstartups-kenya-activity-7239472733938499585-dT6O",
        date: "Monday 9th September",
        linkText: "View info",
        imgRightText: "1pm"
    },
    {
        img: GenAI,
        title: "August Gen-AI Fridays: Getting started on Amazon Bedrock",
        text: ``,
        link: "https://www.linkedin.com/events/7226214750320246784/comments/",
        date: "Every Friday of August",
        linkText: "View info",
        imgRightText: "August Gen-AI"
    },
    {
        img: Nairobi,
        title: "Tech Safari Nairobi Mixer",
        text: `We're hosting our Tech Safari Mixer in Nairobi 🎉Hosted by Tech Safari, along with AWS Startups, CloudPlexo and Infobip for founders, investors, ecosystem players and tech-curious. ​Early bird tickets are on sale and if you prefer to pay with MPesa, click here. ​You will be added to the event page when you make the payment. ​If you need help or have questions, reach out to Daniel (daniel [at] techsafari.io).`,
        link: "https://lu.ma/gjpmq019",
        date: "Thursday 4 July",
        linkText: "View info",
        imgRightText: "Tech Safari Nairobi Mixer"
    },
    {
        img: Kigali,
        title: "KIGALI CTO & Founders Mixer",
        text: `Call out to Founders in Kigali, Rwanda! 🚀Looking to connect with fellow CTOs, founders, and industry experts? Join us at CTO & Founders Mixer on Friday 21st June by 4pm CAT for an evening of networking, insights, and collaboration as we bring together top minds in the industry. Gain valuable knowledge to propel your ventures forward in the dynamic world of Amazon Web Services (AWS).Don't miss out on this opportunity to share experiences and connect with like-minded individuals.`,
        link: "https://lu.ma/g8jo2rcm",
        date: "21 Jun 2024",
        linkText: "View info",
        imgRightText: "KIGALI CTO & Founders Mixer"
    },
    {
        img: businessDay,
        title: "Business Day Event",
        text: `We were thrilled to co-host & sponsor the BusinessDay Economic Club's "C-Suite Executives Roundtable Dinner." It was an evening of insightful discussions and valuable connections.Thank you to all who attended and made it a success!We're excited to see the future collaborations and innovations sparked by this event!`,
        link: "",
        date: "07 Jun 2024",
        linkText: "View info",
        imgRightText: "Business Day Event"
    },
    {
        img: founders,
        title: "CTO’s & Founders Mixer",
        text: `The energy was electric as attendees soaked in the insightful discussions and invaluable connections made. From groundbreaking tech insights to entrepreneurial wisdom, the mixer catalyzes innovation and collaboration.`,
        link: "",
        date: "22 Apr 2024",
        linkText: "View info",
        imgRightText: "CTO’s & Founders Mixer"
    },
    {
        img: fintech,
        title: "Fintech Fusion Submit",
        text: `From startups to industry giants, the Fintechfusion Summit had it all. It was a knowledge feast, an incredible day of insights, innovation, unparalled networking and limitless opportunities at the Fintech Summit 2023!`,
        link: "fintech-fusion-summit",
        date: "02 Nov 2023",
        linkText: "View info",
        imgRightText: "Fintech Fusion Submit"
    },
    {
        img: Immersion,
        title: "AWS Immersion Day",
        text: `🚀 Just concluded an enriching AWS Immersion Day with the GT Pension Manager's team, and immense appreciation to the AWS team <a target="blank" href="https://www.linkedin.com/in/kayode-ranger/">Kayode A. Akomolafe (Tech Ranger)</a>, <a target="blank" href="https://www.linkedin.com/in/ousintkd/">Ousseynou khadim BEYE</a>, <a href="https://www.linkedin.com/in/onaopemipo-osunyomi-45a73244/" target="blank">Onaopemipo Osunyomi</a>, and <a href="https://www.linkedin.com/in/eberenkoro"/>Ebere Nkoro</a> for their invaluable insights and guidance! 💡`,
        link: "",
        date: "",
        linkText: "View info",
        imgRightText: "AWS Immersion Day"
    },
    {
        img: GenerativeAI,
        title: "Generative AI",
        text: `Heartfelt appreciation to the incredible members of the AWS team <a target="blank" href="https://www.linkedin.com/in/eberenkoro/">Ebere Nkoro</a> and <a target="blank" href="https://www.linkedin.com/in/osaretin-j-63692093/">Osaretin J</a> for their unparalleled support and seamless organisation, which contributed immensely to the success of this event.`,
        link: "",
        date: "",
        linkText: "View info",
        imgRightText: "Generative AI"
    },
];