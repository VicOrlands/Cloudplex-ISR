import { notFound } from "next/navigation";
import BlogClientComponent from "./BlogClientComponent";
import { paths } from "./paths";
import { Metadata } from "next";
import { blogs } from "../array";

type BlogProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const res = await fetch('https://bw5bt69rjh.execute-api.af-south-1.amazonaws.com/prod/blog/');
  
  if (res.ok){

    const data = await res.json();
  
    const publishedCaseStudies = data.filter((blog: { published: boolean }) => blog.published);
    const publishedSlug = publishedCaseStudies.map((pub: { slug: string; }) => ({ slug: pub.slug }));
  
    return [
        ...publishedSlug,
    ];
  }

  return []
}

export async function generateMetadata({
  params,
}: BlogProps): Promise<Metadata> {
  try {
    const res = await fetch(
      `https://bw5bt69rjh.execute-api.af-south-1.amazonaws.com/prod/blog/${params.slug}`
    );

    if (res.ok) {
      const data = await res.json();

      if (data.published) {
        return {
          title: `${data.title} - CloudPlexo's Expert Solutions`,
          description: data.description,
          alternates: {
            canonical: `https://cloudplexo.com/case-study/${data.slug}`,
          },
        };
      }
    }

    // Return a fallback metadata object if the blog is not published
    return {
      title: 'Blog Not Found - CloudPlexo',
      description: 'The requested blog could not be found or is not published.',
    };
  } catch (error) {
    console.error('Error fetching metadata:', error);

    // Return a fallback metadata object in case of an error
    return {
      title: 'Error - CloudPlexo',
      description: 'An error occurred while fetching the blog metadata.',
    };
  }
}


export default async function Blog({ params }: { params: { slug: string } }) {
  const res = await fetch(`https://bw5bt69rjh.execute-api.af-south-1.amazonaws.com/prod/blog/${params.slug}`);

  if (res.ok){

    const data = await res.json();
  
    const blog = data
  
    if (!blog.published) notFound();
  
    return <BlogClientComponent blog={blog} oldBlog={null} />;

  }
  return notFound()
}
