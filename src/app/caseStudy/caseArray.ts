import { StaticImageData } from "next/image";
import img1 from "@/assets/casestudies/ican.png";
import img2 from "@/assets/casestudies/liveli.png";
import img3 from "@/assets/casestudies/geria.png";
import img4 from "@/assets/casestudies/ilearncloud.png";
import img5 from "@/assets/casestudies/inttix.png";
import img6 from "@/assets/casestudies/kobo.png";
import img7 from "@/assets/casestudies/jaguar.png";
import img8 from "@/assets/casestudies/bp.png";
import img9 from "@/assets/casestudies/gtco.png";
import img10 from "@/assets/casestudies/fastpay.png";
import img11 from "@/assets/casestudies/dhl.png";
import img12 from "@/assets/casestudies/asml.png";
import img13 from "@/assets/casestudies/mkobo.png";
import img14 from "@/assets/casestudies/billyronks.png";
import img15 from "@/assets/casestudies/alarrt-brand.png";
import img16 from "@/assets/casestudies/talentsync.png";
import img17 from "@/assets/casestudies/ideyfindCover.png";
import img18 from "@/assets/casestudies/cryptosmart.png";
import img19 from "@/assets/casestudies/convexity.png";
import img20 from "@/assets/casestudies/dukia.png";
import img21 from "@/assets/casestudies/fundus.png";
import img22 from "@/assets/casestudies/koboAccHome.png";
import img23 from "@/assets/casestudies/feedxpay.png";
import img24 from "@/assets/casestudies/HighMart.png"

export interface CaseProps {
    image: StaticImageData,
    title: string,
    desc: string,
    link: string
}

const casestudy: CaseProps[] = [
    {
        image: img9,
        title:
            "Migration of On-Premise Workload for Financial Institution to AWS Lagos Local Zone for Data Residency Requirements : A Case Study of GT Pensions Managers",
        desc: `GT Pensions Managers migrated on-premise workload to Lagos Local Zone for compliance, scalability, security, and efficiency.`,
        link: "case-study-of-gt-pensions-managers",
    },
    {
        image: img13,
        title:
            "Mkobo uses CloudPlexo’s SaaS solution -  to discover cost optimization opportunities and security posture.",
        desc: `Mkobo Microfinance Bank, based in Nigeria, offers microfinance services to individuals and small businesses, aiming to promote financial inclusion and empower underserved communities.`,
        link: "mkobo-uses-cloudplexo-saas-solution",
    },
    {
        image: img10,
        title:
            "PhastPay collaborated with CloudPlexo experts and leveraging on CloudPlexo SaaS solution",
        desc: `PhastPay, a Nigerian fintech company, simplifies financial transactions with digital payment solutions for businesses and individuals.`,
        link: "phastpay-collaborated-with-cloudplexo-experts-and-leveraging-on-cloudplexo-saas-solution",
    },
    {
        image: img14,
        title:
            "BillyRonks selected CloudPlexo as AWS Advanced partner to provide a Well Architected Review & Remediation",
        desc: `BillyRonks Global Ltd, established in 2018, is a global telecoms firm offering Wholesale Carrier Services, Business and Retail Voice, Value Added Services, and more.`,
        link: "billyronks-selected-cloudplexo-as-aws-advanced-partner",
    },
    {
        image: img15,
        title:
            "Alarrt achieves enhanced cost efficiency, elevated security standards, and a highly scalable and efficient infrastructure.",
        desc: `Alarrt is the essential companion for your journeys. It's a social app designed to keep you updated about road conditions, disturbances, and emergencies along your route in advance.`,
        link: "alarrt-achieves-enhanced-cost-efficiency-elevated-security-standards-and-a-highly-scalable-and-efficient-infrastructure",
    },
    {
        image: img16,
        title: "Talentsync Case study",
        desc: `Talentsync, a leading provider of talent network solutions, has experienced phenomenal growth. To meet the demands of their expanding user base and ensure exceptional service, they embarked on a strategic migration from DigitalOcean to AWS.`,
        link: "talentsync-case-study",
    },
    {
        image: img17,
        title: `Ideyfind Optimizes E-commerce Platform for Growth with CloudPlexo's AWS Expertise`,
        desc: `Ideyfind, an innovative e-commerce platform, empowers customers to find personalized products and services through AI-powered matching with suitable vendors. As their user base and business demands grew, IdeyFind's on-premises infrastructure encountered limitations, hindering their ability to scale effectively.`,
        link: "ideyfind-optimizes-e-commerce-platform-for-growth-with-cloudplexo-aws-expertise",
    },
    {
        image: img1,
        title:
            "Migrating Web Applications to AWS: A Case Study in the EdTech Sector",
        desc: `This case study presents the process of migrating a web application for icanonlinetutors.com - an EdTech company to Amazon Web Services (AWS).`,
        link: "case-study-in-the-edtech-sector",
    },
    {
        image: img18,
        title:
            "CryptoSmart collaborates with CloudPlexo for Application Modernisation with Kubernetes",
        desc: "CryptoSmart (Bitsave Smart Ltd) is a leading B2B asset management  :company in Africa, focusing on sustainable crypto wealth. Cryptosmart in addition enables businesses to  set up your trading department to solely trade...",
        link: "cryptosmart-case-study",
    },
    {
        image: img19,
        title:
            "AWS Case Study: Re-architecting Infrastructure from Monolithic to Microservices for Convexity",
        desc: "Convexity Technology Limited stands as a prominent blockchain consultancy firm, not only in Nigeria but also across Africa. At the forefront of their offerings is their groundbreaking solution known as the ‘Convexity Humanitarian Aid Transfer Solution.’",
        link: "convexity-case-study",
    },
    {
        image: img20,
        title:
            "CloudPlexo Rearchitecting Dukia's Infrastructure to Microservices on AWS.",
        desc: `Dukia is a digital marketplace redefining the world of NFTs and
    digital ownership. It is an innovative and culturally oriented
    platform where users can surf, design, amass, sell, auction, and
    gift NFTs.`,
        link: "dukia-case-study",
    },
    {
        image: img21,
        title:
            "FundusAI partners with CloudPlexo for Database Migration, Application Migration and Cloud Maturity Service",
        desc: "FundusAI embarked on a transformative project to elevate its cloud capabilities using CloudPlexo's AWS Maturity Services. The objectives were to develop an optimized cloud infrastructure on AWS, strengthen security measures, ...",
        link: "fundusai-case-study",
    },
    {
        image: img22,
        title:
            "Rearchitecting KoboAccountant's Application Infrastructure to Microservices on AWS",
        desc: "KoboAccountant is a financial technology and service company dedicated to revolutionizing the finance and accounting industry in Africa and global markets.",
        link: "koboaccountant-case-study",
    },
    {
        image: img23,
        title:
            "FeedXPay - CloudPlexo's Role in the AWS Migration",
        desc: "FeedXPay, a leading player in the digital payment solutions sector, was facing the challenge of ensuring robust service availability, reliability, and scalability to meet their growing customer base's demands.",
        link: "feedxpay-case-study",
    },
    {
        image: img24,
        title: "HighMart - CloudPlexo's Role in the AWS Migration",
        desc: "HighMart, an ecommerce enterprise, sought to enhance its IT infrastructure to support its growing business needs. Faced with the limitations of their existing system, HighMart aimed to migrate to AWS to leverage its robust, scalable, and flexible cloud solutions.",
        link: "highmart-case-study"
    },
    {
        image: img2,
        title: "Liveli Case Study",
        desc: `Liveli is a company based in Ontario, Canada. Liveli is a Social Networking and Live Entertainment Hub. Users can share their Lifestyle, Earn real money from posts and contents, stream live events, watch live entertainment and stay connected.`,
        link: "liveli-case-study",
    },
    {
        image: img3,
        title: "Geria Case Study",
        desc: `Geria is a company based in the United Kingdom. It connects talented software engineers, developers, designers, and project managers from Africa to UK technology companies.`,
        link: "geria-case-study",
    },
    {
        image: img5,
        title: "Inttix Case Study",
        desc: `Inttix, an artificial intelligence development company. The company is a Data/AI, Analytical cloud first innovative solutions provider offering intelligent data driven business applications to customers.`,
        link: "inttix-case-study",
    },
    {
        image: img6,
        title: "Kobo Case Study",
        desc: `Kobo360 is a company based in Lagos, Nigeria. Kobo360 is Africa’s innovation leader in integrated logistics solutions and truck brokerage services. Kobo360 aggregates end-to-end haulage operations to help cargo owners, truck owners, drivers, ...`,
        link: "kobo-case-study",
    },
    {
        image: img7,
        title: "Jaguar & Land Rover Case Study",
        desc: `JLR, or Jaguar Land Rover, is a British automotive company that specializes in the production of luxury vehicles. JLR is known for its iconic brands, Jaguar and Land Rover, which have a rich heritage and are renowned for their performance, craftsmanship, and...`,
        link: "jaguar-and-land-rover-case-study",
    },
    {
        image: img8,
        title: "BP Case Study",
        desc: `British Petroleum, commonly known as BP, is a multinational oil and gas company headquartered in London, United Kingdom. It is one of the world's largest oil and gas companies and has operations in all areas of the oil and gas industry...`,
        link: "bp-case-study",
    },
    {
        image: img4,
        title: "iLearn Cloud Case Study",
        desc: `Ilearncloud is a company based in the United Kingdom. Ilearncloud (ilearncloud.io) is an online learning management platform for learning cloud computing, ilearncloud offers a wide range of high-quality courses taught by experienced instructors.`,
        link: "ilearncloud-case-study",
    },
    {
        image: img11,
        title: "",
        desc: ``,
        link: "",
    },
    {
        image: img12,
        title: "",
        desc: ``,
        link: "",
    },
];

export { casestudy };
