import { StaticImageData } from "next/image";

import img1 from "@/assets/reviews/video1.webp";
import img2 from "@/assets/reviews/video2.webp";
import img3 from "@/assets/reviews/Immersion day.webp";
import icanlogo from "@/assets/reviews/ican.webp";
import livelilogo from "@/assets/reviews/liveli.webp";
import gtcologo from "@/assets/partners/GTCO_logo.webp";
import convexityLogo from "@/assets/landing/convexitylogo.webp";
import convexity from "@/assets/landing/convexity-placeholder.webp";
import bitbarterLogo from "@/assets/landing/bitbarter.webp";
import bitbarter from "@/assets/landing/bitbarter-thumbnail.webp";

interface CaseStudyProps {
    id: number;
    image: StaticImageData;
    link: string;
    quote: string;
    logo: StaticImageData;
    speaker: string;
    caselink: string;
    company: string;
}

export const casestudy: CaseStudyProps[] = [
    {
        id: 1,
        image: convexity,
        link: "https://cloudplexo.com/Convexity_Case_Study_Testimonial.mp4",
        quote:
            "“With CloudPlexo, they help you to get a robust solution that will stand the test of time.”",
        company: "Convexity",
        logo: convexityLogo,
        speaker: "CTO | Co-founder",
        caselink: "/case-study/convexity-case-study",
    },
    {
        id: 5,
        image: bitbarter,
        link: "https://cloudplexo.com/BitBarter-Customer-review.mp4",
        quote:
            "“If you have issues around infrastructure layer provisioning & deployment, CloudPlexo might just be the right partner that you need.”",
        company: "Bitbarter",
        logo: bitbarterLogo,
        speaker: "CEO",
        caselink: "/case-study",
    },
    {
        id: 2,
        image: img2,
        link: "https://cloudplexo.com/Liveli-Customer-Sucess.mp4",
        quote:
            "“I would definitely advise anyone anybody to migrate their cloud services with a partner like CloudPlexo.”",
        company: "Liveli",
        logo: livelilogo,
        speaker: "CTO",
        caselink: "/case-study/liveli-case-study",
    },
    {
        id: 3,
        image: img1,
        link: "https://cloudplexo.com/ICAN_ONLINE_TUTORS_final.mp4 ",
        company: "IcanOnline Tutors",
        quote:
            "“We highly recommend CloudPlexo, if  you are having any challenges  with your website and mobile apps”",
        logo: icanlogo,
        speaker: "Founder & CEO",
        caselink: "/case-study/case-study-in-the-edtech-sector",
    },
    {
        id: 4,
        image: img3,
        link: "https://cloudplexo.com/GT_Pension_Immersion+Day_Testimonial.mp4",
        company: "Guarantee Trust Pension Managers",
        quote: `"I had a great time with the CloudPlexo team, learning more about AWS and the cloud"`,
        logo: gtcologo,
        speaker: "Taiwo Owolabi",
        caselink: "/case-study/case-study-of-gt-pensions-managers",
    },
];

export const testimonials: {
    content: string;
    by: string;
}[] = [
        {
            content:
                "CloudPlexo is the best in their league, providing top-notch services for our cloud-based enterprise. Their advanced software identifies vulnerabilities, optimizes cost efficiency, and streamlines resources",
            by: "CTO, PhastPay",
        },
        {
            content:
                "CloudPlexo provides good and quality assistance to IOT, and they are fast in providing solutions to technical problems.",
            by: "CEO, IoT",
        },
        {
            content:
                "CloudPlexo has helped us reduce our cloud cost by up to 30%; and the technical team are very experienced in providing solutions.",
            by: "CTO, Liveli.App",
        },
        {
            content:
                "Upskilling your team in developing data solutions or applications in the cloud leverging cloud native tools count on CloudPlexo. CloudPlexo upskilled our team in deploying a serverless data lake solution in the cloud.",
            by: "Data Manager, Accenture",
        },
        {
            content:
                "Building data driven applications, choosing the right technology, and following best practices in the cloud. CloudPlexo guided our team on the right direction for our data to cloud and pre-empting pitfalls.",
            by: "Senior Data Engineer, BP Oil",
        },
        {
            content:
                "CloudPlexo enables organisations using public clouds to visualize all their cloud spending in one place. The team at cloudPlexo are constantly innovating and we look forward to what they would release next to assist us further with our cloud strategy.",
            by: "CEO, Geria",
        },
        {
            content:
                "CloudPlexo is a tool both finance and developers can use. Having all our cloud environments managed in one consolidated, easy-to-use platform has helped us significantly reduce our AWS bill.",
            by: "Cloud Solutions Manager, Inttix",
        },
        {
            content:
                "CloudPlexo is a tool both finance and developers can use. Having all our cloud environments managed in one consolidated, easy-to-use platform has helped us significantly reduce our AWS bill.",
            by: "CEO, Sentaloe",
        },
    ];