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
    const res = await fetch(`https://bw5bt69rjh.execute-api.af-south-1.amazonaws.com/prod/case-studies/${params.slug}`);
    const data = await res.json();

    if (res.ok){
        const publishedSlug = data
    
    
        if (publishedSlug?.published) {
            return {
                title: `${publishedSlug.title} - CloudPlexo's Expert Solutions`,
                description: publishedSlug.description,
                alternates: {
                    canonical: `https://cloudplexo.com/case-study/${publishedSlug.slug}`,
                },
            };
        }
    }

}

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
    const res = await fetch(`https://bw5bt69rjh.execute-api.af-south-1.amazonaws.com/prod/case-studies/${params.slug}`);
    if (res.ok){
        const data = await res.json();
        console.log(data)
    
        const caseStudy = data;
    
        if (!caseStudy?.published) {
            return notFound();
        }
    
        return <ClientCaseStudy caseStudy={caseStudy} oldCaseStudy={null} />;

    } else{

        return notFound()
    }
}
