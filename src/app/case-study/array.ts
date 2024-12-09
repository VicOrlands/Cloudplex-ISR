import { StaticImageData } from "next/image";
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

export { caseTags, reviews };
