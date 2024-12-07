import { Metadata } from 'next';
import NotFound from '@/app/not-found';
import ClientCaseStudy from './ClientCaseStudy';

type CaseStudy = {
  slug: string;
  title: string;
  description: string;
  published: boolean;
};

const fetchCaseStudies = async (): Promise<CaseStudy[]> => {
  const res = await fetch('https://bw5bt69rjh.execute-api.af-south-1.amazonaws.com/prod/case-studies/');
  if (!res.ok) {
    throw new Error('Failed to fetch case studies');
  }
  const data = await res.json();
  return data.filter((caseStudy: CaseStudy) => caseStudy.published);
};

export async function generateStaticParams() {
  try {
    const publishedCaseStudies = await fetchCaseStudies();

    return publishedCaseStudies.map((caseStudy) => ({
      slug: caseStudy.slug,
    }));

  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
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

    if (!data?.published) {
      return <NotFound />;
    }

    return <ClientCaseStudy caseStudy={data} />;
  } else {
    return <NotFound />;
  }
}