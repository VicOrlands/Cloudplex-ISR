import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { paths } from './paths';
import ClientCaseStudy from './ClientCaseStudy';

type SlugParams = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const res = await fetch('https://bw5bt69rjh.execute-api.af-south-1.amazonaws.com/prod/case-studies/');

  if (res.ok) {

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

  return []
}

export async function generateMetadata({
  params,
}: SlugParams): Promise<Metadata> {
  try {
    const res = await fetch(
      `https://bw5bt69rjh.execute-api.af-south-1.amazonaws.com/prod/case-studies/${params.slug}`
    );

    if (res.ok) {
      const data = await res.json();

      if (data?.published) {
        return {
          title: `${data.title} - CloudPlexo's Expert Solutions`,
          description: data.description,
          alternates: {
            canonical: `https://cloudplexo.com/case-study/${data.slug}`,
          },
        };
      }
    }

    // Fallback metadata for non-OK responses or unpublished case studies
    return {
      title: 'Case Study Not Found - CloudPlexo',
      description: 'The requested case study could not be found or is not published.',
    };
  } catch (error) {
    console.error('Error fetching metadata:', error);

    // Fallback metadata in case of an error
    return {
      title: 'Error - CloudPlexo',
      description: 'An error occurred while fetching the case study metadata.',
    };
  }
}


export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  const res = await fetch(`https://bw5bt69rjh.execute-api.af-south-1.amazonaws.com/prod/case-studies/${params.slug}`);
  if (res.ok) {
    const data = await res.json();
    const caseStudy = data;

    if (!caseStudy?.published) {
      return notFound();
    }

    return <ClientCaseStudy caseStudy={caseStudy} oldCaseStudy={null} />;
  } else {
    return notFound()
  }
}
