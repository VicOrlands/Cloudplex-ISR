import Image from 'next/image';
import styles from "./styles.module.css"
import { notFound } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Whitepaper } from '../whitepaperArray';
import Contact from '@/app/events/[slug]/webinars/contact';

type PageProps = {
    params: {
        slug: string;
    };
};

interface MetaProps {
    slug: string
}

const MoreInfo = [
    "The Cloud Space",
    "Types of Cloud",
    "The Choice of Cloud from Financial Perspective",
    "Cloud Services",
    "Cloud Computing Components",
    "Cloud Security",
    "The Cloud Adoption Framework",
];

export async function generateMetadata({ params }: { params: MetaProps }) {
    const { slug } = params
    const currentPaper = Whitepaper.find(paper => paper.link === slug)

    return {
        title: `${currentPaper?.name} - CloudPlexo Whitepaper`,
        description: `Read CloudPlexo's whitepaper on securing data and gain insights into cloud space, types of cloud, financial considerations, cloud services, cloud computing components, security, and the cloud adoption framework.`,
        keywords: [currentPaper?.keyword, "CloudPlexo cloud space", "CloudPlexo cloud security"],
        alternates: {
            canonical: `https://www.cloudplexo.com/whitepaper/${slug}`,
        },
    }
}

export async function generateStaticParams() {
    const whitepaperLink = Whitepaper.map(({ link }) => ({
        slug: link || "404"
    }));

    return whitepaperLink;
}

const WhitepaperPage: React.FC<PageProps> = ({ params }) => {
    const { slug } = params
    const paper = Whitepaper.find(({ link }) => link === slug)

    if (!paper) notFound()

    return (
        <>
            <ToastContainer />

            <section className={styles["whitepaper"]}>
                <div className={styles["header-parent"]}>
                    <Image
                        src={paper.image}
                        alt={paper.name}
                    />

                    <div>
                        <h1>{paper.name}</h1>
                        <p>{paper.desc}</p>
                    </div>
                </div>

                <div className={styles["flex-ends"]}>
                    <div className={styles["text-container"]}>
                        <h2>Learn More From Cloudplexo About Cloud Migration and gain knowledge on:</h2>
                        {MoreInfo.map((info, index) => (
                            <ul key={index}>
                                <li>
                                    <i>{tick}</i> <span>{info}</span>
                                </li>
                            </ul>
                        ))}
                    </div>

                    <Contact />
                </div>
            </section>
        </>
    )
};

export default WhitepaperPage;

const tick = (
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect width="20" height="20" rx="4" fill="#516BEB" />
        <path
            d="M16.6668 5L7.50016 14.1667L3.3335 10"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
