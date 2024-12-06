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
}

export async function generateMetadata({
  params
}: BlogProps): Promise<Metadata> {
  const res = await fetch(`https://bw5bt69rjh.execute-api.af-south-1.amazonaws.com/prod/blog/${params.slug}`);
  
  
  if (res.ok){
    const data = await res.json();
    const publishedSlug = data;
  
    if (publishedSlug.published) {
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
