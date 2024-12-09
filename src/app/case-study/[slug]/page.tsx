import { Metadata } from 'next';
import NotFound from '@/app/not-found';
import CaseTemplate from './CaseTemplate';
import { fetchCaseStudies, fetchContent } from '@/lib/actions';

export const revalidate = 60

export const dynamicParams = true

export async function generateStaticParams() {
  try {
    const caseStudies = await fetchCaseStudies();

    return caseStudies.map((caseStudy: { slug: string }) => ({
      slug: caseStudy.slug,
    }));

  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    const data = await fetchContent(`case-studies/${params.slug}`);

    if (data?.published) {
      return {
        title: `${data.title} - CloudPlexo's Expert Solutions`,
        description: data.description,
        alternates: {
          canonical: `https://cloudplexo.com/case-study/${data.slug}`,
        },
      };
    }

    return {
      title: 'Case Study Not Found - CloudPlexo',
      description: 'The requested case study could not be found or is not published.',
    };
  } catch (error) {
    return {
      title: 'Error - CloudPlexo',
      description: 'An error occurred while fetching the case study metadata.',
    };
  }
}

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  try {
    const data = await fetchContent(`case-studies/${params.slug}`);

    if (!data?.published) {
      return <NotFound />;
    }

    return <CaseTemplate {...data} key={data.key} />;
    
  } catch (error) {
    return <NotFound />;
  }
}