import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { paths } from './paths';
import { casestudy } from '../caseArray';
import ClientCaseStudy from './ClientCaseStudy';

type SlugParams = {
    params: {
        slug: string
    }
}

export async function generateStaticParams() {
    const res = await fetch('https://bw5bt69rjh.execute-api.af-south-1.amazonaws.com/prod/case-studies/');
    const data = await res.json();

    const publishedCaseStudies = data.filter((caseStudy: { published: boolean }) => caseStudy.published);
    const publishedSlug = publishedCaseStudies.map((pub: { slug: string; }) => ({ slug: pub.slug }));

    const hardcodedSlugs = paths.map(({ url }) => ({ slug: url }));

    return [
        ...publishedSlug,
        ...hardcodedSlugs,
        { slug: "empowering-climate-decision-making-with-aws-iot-for-climdes" }
    ];
}

export async function generateMetadata({ params }: SlugParams): Promise<Metadata> {
    const res = await fetch('https://bw5bt69rjh.execute-api.af-south-1.amazonaws.com/prod/case-studies/');
    const data = await res.json();

    const publishedCaseStudies = data.filter((caseStudy: { published: boolean }) => caseStudy.published);
    const publishedSlug = publishedCaseStudies.find((pub: { slug: string; }) => pub.slug === params.slug);

    if (publishedSlug) {
        return {
            title: `${publishedSlug.title} - CloudPlexo's Expert Solutions`,
            description: publishedSlug.description,
            alternates: {
                canonical: `https://cloudplexo.com/case-study/${publishedSlug.slug}`,
            },
        };
    }

    const oldCaseStudy = casestudy.find(({ slug }) => slug === params.slug)
    return {
        title: `${oldCaseStudy?.title} - CloudPlexo's Expert Solutions`,
        description: oldCaseStudy?.description,
        alternates: {
            canonical: `https://cloudplexo.com/case-study/${oldCaseStudy?.slug}`,
        },
    };
}

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
    const res = await fetch('https://bw5bt69rjh.execute-api.af-south-1.amazonaws.com/prod/case-studies');
    const data = await res.json();

    const caseStudy = data.find(({ slug }: { slug: string }) => slug === params.slug);
    const oldCaseStudy = paths.find(({ url }) => url === params.slug);

    if (!caseStudy && !oldCaseStudy) {
        return notFound();
    }

    return <ClientCaseStudy caseStudy={caseStudy} oldCaseStudy={oldCaseStudy} />;
}
