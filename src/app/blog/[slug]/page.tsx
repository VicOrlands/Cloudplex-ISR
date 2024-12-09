import { Metadata } from "next";
import NotFound from "@/app/not-found";
import BlogTemplate from "./BlogTemplate";
import { fetchBlogs, fetchContent } from '@/lib/actions';

export const revalidate = 60

export const dynamicParams = true

export async function generateStaticParams() {
  try {
    const publishedSlug = await fetchBlogs();

    return publishedSlug.map((caseStudy: { slug: string }) => ({
      slug: caseStudy.slug,
    }));

  } catch (error) {
    console.error('Error generating static params:', error);
    return []
  }
}

export async function generateMetadata({
  params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    const data = await fetchContent(`blog/${params.slug}`);

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
      title: 'Blog Not Found - CloudPlexo',
      description: 'The requested blog could not be found or is not published.',
    };
  } catch (error) {
    return {
      title: 'Error - CloudPlexo',
      description: 'An error occurred while fetching the blog metadata.',
    };
  }
}

export default async function Blog({ params }: { params: { slug: string } }) {
  const res = await fetch(`https://bw5bt69rjh.execute-api.af-south-1.amazonaws.com/prod/blog/${params.slug}`);

  try {
    const data = await fetchContent(`blog/${params.slug}`);

    if (!data.published) {
      return <NotFound />;
    }

    return <BlogTemplate key={data.key} {...data} />

  } catch (error) {
    return <NotFound />
  }
}
