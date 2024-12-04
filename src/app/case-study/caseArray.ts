import { StaticImageData } from "next/image";
import img1 from "@/assets/casestudies/ican.webp";
import img2 from "@/assets/casestudies/liveli.webp";
import img3 from "@/assets/casestudies/geria.webp";
import img4 from "@/assets/casestudies/ilearncloud.webp";
import img5 from "@/assets/casestudies/inttix.webp";
import img6 from "@/assets/casestudies/kobo.webp";
import img7 from "@/assets/casestudies/jaguar.webp";
import img8 from "@/assets/casestudies/bp.webp";
import img9 from "@/assets/casestudies/gtco.webp";
import img10 from "@/assets/casestudies/fastpay.webp";
import img11 from "@/assets/casestudies/dhl.webp";
import img12 from "@/assets/casestudies/asml.webp";
import img13 from "@/assets/casestudies/mkobo.webp";
import img14 from "@/assets/casestudies/billyronks.webp";
import img15 from "@/assets/casestudies/alarrt-brand.webp";
import img16 from "@/assets/casestudies/talentsync.webp";
import img17 from "@/assets/casestudies/ideyfindCover.webp";
import img18 from "@/assets/casestudies/cryptosmart.webp";
import img19 from "@/assets/casestudies/convexity.webp";
import img20 from "@/assets/casestudies/dukia.webp";
import img21 from "@/assets/casestudies/fundus.webp";
import img22 from "@/assets/casestudies/KoboAcc-logo.webp";
import img23 from "@/assets/casestudies/feedxpay.webp";
import img24 from "@/assets/casestudies/HighMart.webp"
import img25 from "@/assets/casestudies/qpay.webp"
import img26 from "@/assets/casestudies/silicon.webp"
import img27 from "@/assets/casestudies/staycon.webp"
import img28 from "@/assets/casestudies/suba.webp"
import img29 from "@/assets/casestudies/varscon.webp"
import img30 from "@/assets/casestudies/consode.webp"
import img32 from "@/assets/casestudies/mybalance.webp"
import img33 from "@/assets/casestudies/bitbarter.webp"
import img34 from "@/assets/casestudies/ibile.png"

import img221 from "@/assets/reviews/video1.webp";
import img222 from "@/assets/reviews/video2.webp";
import img223 from "@/assets/reviews/Immersion day.webp";
import icanlogo from "@/assets/reviews/ican.webp";
import livelilogo from "@/assets/reviews/liveli.webp";
import gtcologo from "@/assets/partners/GTCO_logo.webp";
import convexityLogo from "@/assets/landing/convexitylogo.webp"
import convexity from "@/assets/landing/convexity-placeholder.webp"
import bitbarterLogo from "@/assets/landing/bitbarter.webp"
import bitbarter from "@/assets/landing/bitbarter-thumbnail.webp"

export interface CaseProps {
    thumbnail: StaticImageData | string,
    title: string,
    description: string,
    slug: string,
    tag: string,
    date?: string,
    content?: string,
    published?: boolean,
    author?: string,
    key?: string,
}

const caseTags: string[] = [
    "Financial Services",
    "E-commerce and Retail",
    "Technology",
    "Telecommunications",
    "Education Tech",
    "Logistics",
    "Energy",
    "Automotive",
    "Social Networking",
    "Health",
]

const casestudy: CaseProps[] = [
    {
        thumbnail: img28,
        title: "Suba Capital’s Transformation with AWS",
        description: "Suba Capital was on a mission to modernize its wealth management application by moving from a monolithic structure to a flexible, scalable microservices architecture using AWS. This initiative focuses on leveraging Amazon ECS (Elastic Container Service) to manage containers efficiently, ensuring the application is agile, maintainable, and ready for future growth.",
        slug: "suba-case-study",
        tag: "Financial Services"
    },
    // {
    //     thumbnail: img34,
    //     title: "IBILE MFB Case Study",
    //     description: `In the financial sector, building secure, scalable, and resilient infrastructure is crucial. Financial institutions are tasked with the responsibilities of protecting sensitive data, ensuring regulatory compliance, and delivering a seamless experience to customers and as the industry increasingly adopts cloud-based solutions to meet these needs, selecting the right infrastructure becomes vital for optimising performance, controlling costs, and supporting long-term growth.`,
    //     slug: "ibile-mfb-case-study",
    //     tag: "Financial Services",
    // },
    {
        thumbnail: img32,
        title: "Re-Architecting MyBalance’s Infrastructure for Cost Efficiency and Downtime Mitigation",
        description: `MyBalance offers digital tools to help individuals and businesses manage their finances. The platform enables users to track spending, set budgets, and make informed financial decisions. The company’s services cater to a wide range of users, from everyday consumers to small and medium-sized enterprises, enabling them to gain greater control over their financial health.`,
        slug: "rearchitecting-mybalance-infrastructure-for-cost-efficiency-and-downtime-mitigation",
        tag: "Financial Services"
    },
    {
        thumbnail: img30,
        title: "Case Study: Consode’s Strategic ERP Migration to AWS for Enhanced Scalability and Availability",
        description: `Consode Digital, an IT solutions provider, specializes in delivering digital solutions by designing and configuring tailored models that help medium-sized enterprises streamline operations and achieve scalable growth.`,
        slug: "consodes-strategic-erp-migration-to-aws-for-enhanced-scalability-and-availability",
        tag: "Technology"
    },
    {
        thumbnail: img9,
        title:
            "Migration of On-Premise Workload for Financial Institution to AWS Lagos Local Zone for Data Residency Requirements : A Case Study of GT Pensions Managers",
        description: `GT Pensions Managers migrated on-premise workload to Lagos Local Zone for compliance, scalability, security, and efficiency.`,
        slug: "case-study-of-gt-pensions-managers",
        tag: "Financial Services"
    },
    {
        thumbnail: img13,
        title:
            "Mkobo uses CloudPlexo’s SaaS solution -  to discover cost optimization opportunities and security posture.",
        description: `Mkobo Microfinance Bank, based in Nigeria, offers microfinance services to individuals and small businesses, aiming to promote financial inclusion and empower underserved communities.`,
        slug: "mkobo-uses-cloudplexo-saas-solution",
        tag: "Financial Services"
    },
    {
        thumbnail: img10,
        title:
            "PhastPay collaborated with CloudPlexo experts and leveraging on CloudPlexo SaaS solution",
        description: `PhastPay, a Nigerian fintech company, simplifies financial transactions with digital payment solutions for businesses and individuals.`,
        slug: "phastpay-collaborated-with-cloudplexo-experts-and-leveraging-on-cloudplexo-saas-solution",
        tag: "Financial Services"
    },
    {
        thumbnail: img14,
        title:
            "BillyRonks selected CloudPlexo as AWS Advanced partner to provide a Well Architected Review & Remediation",
        description: `BillyRonks Global Ltd, established in 2018, is a global telecoms firm offering Wholesale Carrier Services, Business and Retail Voice, Value Added Services, and more.`,
        slug: "billyronks-selected-cloudplexo-as-aws-advanced-partner",
        tag: "Telecommunications"
    },
    {
        thumbnail: img15,
        title:
            "Alarrt achieves enhanced cost efficiency, elevated security standards, and a highly scalable and efficient infrastructure.",
        description: `Alarrt is the essential companion for your journeys. It's a social app designed to keep you updated about road conditions, disturbances, and emergencies along your route in advance.`,
        slug: "alarrt-achieves-enhanced-cost-efficiency-elevated-security-standards-and-a-highly-scalable-and-efficient-infrastructure",
        tag: "Social Networking"
    },
    {
        thumbnail: img16,
        title: "Talentsync Case study",
        description: `Talentsync, a leading provider of talent network solutions, has experienced phenomenal growth. To meet the demands of their expanding user base and ensure exceptional service, they embarked on a strategic migration from DigitalOcean to AWS.`,
        slug: "talentsync-case-study",
        tag: "Technology"
    },
    {
        thumbnail: img17,
        title: `Ideyfind Optimizes E-commerce Platform for Growth with CloudPlexo's AWS Expertise`,
        description: `Ideyfind, an innovative e-commerce platform, empowers customers to find personalized products and services through AI-powered matching with suitable vendors. As their user base and business demands grew, IdeyFind's on-premises infrastructure encountered limitations, hindering their ability to scale effectively.`,
        slug: "ideyfind-optimizes-e-commerce-platform-for-growth-with-cloudplexo-aws-expertise",
        tag: "E-commerce and Retail"
    },
    {
        thumbnail: img1,
        title:
            "Migrating Web Applications to AWS: A Case Study in the EdTech Sector",
        description: `This case study presents the process of migrating a web application for icanonlinetutors.com - an EdTech company to Amazon Web Services (AWS).`,
        slug: "case-study-in-the-edtech-sector",
        tag: "Education Tech"
    },
    {
        thumbnail: img18,
        title:
            "CryptoSmart collaborates with CloudPlexo for Application Modernisation with Kubernetes",
        description: "CryptoSmart (Bitsave Smart Ltd) is a leading B2B asset management  :company in Africa, focusing on sustainable crypto wealth. Cryptosmart in addition enables businesses to  set up your trading department to solely trade...",
        slug: "cryptosmart-case-study",
        tag: "Financial Services"
    },
    {
        thumbnail: img19,
        title:
            "AWS Case Study: Re-architecting Infrastructure from Monolithic to Microservices for Convexity",
        description: "Convexity Technology Limited stands as a prominent blockchain consultancy firm, not only in Nigeria but also across Africa. At the forefront of their offerings is their groundbreaking solution known as the ‘Convexity Humanitarian Aid Transfer Solution.’",
        slug: "convexity-case-study",
        tag: ""
    },
    {
        thumbnail: img20,
        title:
            "CloudPlexo Rearchitecting Dukia's Infrastructure to Microservices on AWS.",
        description: `Dukia is a digital marketplace redefining the world of NFTs and
    digital ownership. It is an innovative and culturally oriented
    platform where users can surf, design, amass, sell, auction, and
    gift NFTs.`,
        slug: "dukia-case-study",
        tag: "E-commerce and Retail"
    },
    {
        thumbnail: img21,
        title:
            "FundusAI partners with CloudPlexo for Database Migration, Application Migration and Cloud Maturity Service",
        description: "FundusAI embarked on a transformative project to elevate its cloud capabilities using CloudPlexo's AWS Maturity Services. The objectives were to develop an optimized cloud infrastructure on AWS, strengthen security measures, ...",
        slug: "fundusai-case-study",
        tag: "Health"
    },
    {
        thumbnail: img22,
        title:
            "Rearchitecting KoboAccountant's Application Infrastructure to Microservices on AWS",
        description: "KoboAccountant is a financial technology and service company dedicated to revolutionizing the finance and accounting industry in Africa and global markets.",
        slug: "koboaccountant-case-study",
        tag: "Financial Services"
    },
    {
        thumbnail: img23,
        title:
            "FeedXPay - CloudPlexo's Role in the AWS Migration",
        description: "FeedXPay, a leading player in the digital payment solutions sector, was facing the challenge of ensuring robust service availability, reliability, and scalability to meet their growing customer base's demands.",
        slug: "feedxpay-case-study",
        tag: "Financial Services"
    },
    {
        thumbnail: img24,
        title: "HighMart - CloudPlexo's Role in the AWS Migration",
        description: "HighMart, an ecommerce enterprise, sought to enhance its IT infrastructure to support its growing business needs. Faced with the limitations of their existing system, HighMart aimed to migrate to AWS to leverage its robust, scalable, and flexible cloud solutions.",
        slug: "highmart-case-study",
        tag: "E-commerce and Retail"
    },
    {
        thumbnail: img25,
        title: "Qpay - Data Migration: Moving to AWS for Better Service",
        description: "Qpay, a growing company in digital payments, needed to improve its technology to keep up with its expansion. To provide better, more reliable services to its users, Qpay chose to move from Digital Ocean to Amazon Web Services (AWS), leveraging CloudPlexo's expertise.",
        slug: "qpay-case-study",
        tag: "Financial Services"
    },
    {
        thumbnail: img26,
        title: "Silicon Africa - Transitioning to AWS for Better Performance",
        description: "Silicon Africa upgraded its web applications to a highly scalable infrastructure on Amazon Web Services (AWS). The main goal is to ensure 24/7 site availability and reliability to meet the increasing demands of their users. This transition was expertly managed by CloudPlexo, ensuring a smooth and efficient migration process.",
        slug: "silicon-case-study",
        tag: ""
    },
    {
        thumbnail: img27,
        title: "Staycon's AWS Migration for Telecoms Product",
        description: "Staycon transitioned its telecoms product to Amazon Web Services (AWS) to improve availability, reliability, and flexibility. This project supports their nationwide growth goals by leveraging AWS’s powerful services. CloudPlexo expertly managed the entire migration process, ensuring a smooth and efficient transition.",
        slug: "staycon-case-study",
        tag: "Telecommunications"
    },
    {
        thumbnail: img29,
        title: "Customer Case Study: Varscon - Data Migration",
        description: "Varscon, a research and product design company, decided to migrate its infrastructure from Google Cloud Platform (GCP) to Amazon Web Services (AWS). This move aims to enhance service availability, reliability, and flexibility to support Varscon's growth and strategic objectives.",
        slug: "varscon-case-study",
        tag: "Technology"
    },
    {
        thumbnail: img2,
        title: "Liveli Case Study",
        description: `Liveli is a company based in Ontario, Canada. Liveli is a Social Networking and Live Entertainment Hub. Users can share their Lifestyle, Earn real money from posts and contents, stream live events, watch live entertainment and stay connected.`,
        slug: "liveli-case-study",
        tag: "Social Networking"
    },
    {
        thumbnail: img3,
        title: "Geria Case Study",
        description: `Geria is a company based in the United Kingdom. It connects talented software engineers, developers, designers, and project managers from Africa to UK technology companies.`,
        slug: "geria-case-study",
        tag: ""
    },
    {
        thumbnail: img5,
        title: "Inttix Case Study",
        description: `Inttix, an artificial intelligence development company. The company is a Data/AI, Analytical cloud first innovative solutions provider offering intelligent data driven business applications to customers.`,
        slug: "inttix-case-study",
        tag: "Technology"
    },
    {
        thumbnail: img6,
        title: "Kobo Case Study",
        description: `Kobo360 is a company based in Lagos, Nigeria. Kobo360 is Africa’s innovation leader in integrated logistics solutions and truck brokerage services. Kobo360 aggregates end-to-end haulage operations to help cargo owners, truck owners, drivers, ...`,
        slug: "kobo-case-study",
        tag: "Logistics"
    },
    {
        thumbnail: img7,
        title: "Jaguar & Land Rover Case Study",
        description: `JLR, or Jaguar Land Rover, is a British automotive company that specializes in the production of luxury vehicles. JLR is known for its iconic brands, Jaguar and Land Rover, which have a rich heritage and are renowned for their performance, craftsmanship, and...`,
        slug: "jaguar-and-land-rover-case-study",
        tag: "Automotive"
    },
    {
        thumbnail: img8,
        title: "BP Case Study",
        description: `British Petroleum, commonly known as BP, is a multinational oil and gas company headquartered in London, United Kingdom. It is one of the world's largest oil and gas companies and has operations in all areas of the oil and gas industry...`,
        slug: "bp-case-study",
        tag: "Energy"
    },
    {
        thumbnail: img4,
        title: "iLearn Cloud Case Study",
        description: `Ilearncloud is a company based in the United Kingdom. Ilearncloud (ilearncloud.io) is an online learning management platform for learning cloud computing, ilearncloud offers a wide range of high-quality courses taught by experienced instructors.`,
        slug: "ilearncloud-case-study",
        tag: "Education Tech"
    },
    {
        thumbnail: img11,
        title: "",
        description: ``,
        slug: "",
        tag: ""
    },
    {
        thumbnail: img12,
        title: "",
        description: ``,
        slug: "",
        tag: ""
    },
];

interface ReviewProps {
    id: number,
    image: StaticImageData,
    link: string,
    title: string | null,
    quote: string,
    logo: StaticImageData,
    speaker: string,
    caselink: string,
    company: string | null
}

const reviews: ReviewProps[] = [
    {
        id: 1,
        image: convexity,
        link: "https://cloudplexo.com/Convexity_Case_Study_Testimonial.mp4",
        quote:
            "“With CloudPlexo, they help you to get a robust solution that will stand the test of time.”",
        company: null,
        title: null,
        logo: convexityLogo,
        speaker: "CTO | Co-founder - Convexity",
        caselink: "/case-study/convexity-case-study",
    },
    {
        id: 5,
        image: bitbarter,
        link: "https://cloudplexo.com/BitBarter-Customer-review.mp4",
        quote:
            "“If you have issues around infrastructure layer provisioning & deployment, CloudPlexo might just be the right partner that you need.”",
        company: null,
        title: null,
        logo: bitbarterLogo,
        speaker: "CEO Bitbarter",
        caselink: "/case-study",
    },
    {
        id: 2,
        image: img222,
        link: "https://cloudplexo.com/Liveli-Customer-Sucess.mp4",
        quote:
            "“I would defintely advise anyone anybody to migrate their cloud services with a partner like CloudPlexo.”",
        company: null,
        title: null,
        logo: livelilogo,
        speaker: "CTO Liveli",
        caselink: "/case-study/liveli-case-study",
    },
    {
        id: 3,
        image: img221,
        link: "https://cloudplexo.com/ICAN_ONLINE_TUTORS_final.mp4 ",
        company: null,
        title: "CTO of Liveli",
        quote:
            "“We highly recommend CloudPlexo, if  you are having any challenges  with your website and mobile apps”",
        logo: icanlogo,
        speaker: "Founder & CEO of IcanOnline Tutors",
        caselink: "/case-study/case-study-in-the-edtech-sector",
    },
    {
        id: 4,
        image: img223,
        link: "https://cloudplexo.com/GT_Pension_Immersion+Day_Testimonial.mp4",
        company: "Guarantee Trust Pension Managers",
        title: "CloudPlexo Immersion Day",
        quote: `"I had a great time with the CloudPlexo team, learning more about AWS and the cloud"`,
        logo: gtcologo,
        speaker: "Taiwo Owolabi",
        caselink: "/case-study/case-study-of-gt-pensions-managers",
    },
];

export { casestudy, caseTags, reviews };
