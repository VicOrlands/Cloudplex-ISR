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
  const data = await res.json();

  const publishedBlogs = data.filter((blog: { published: boolean }) => blog.published);
  const publishedSlugs = publishedBlogs.map((pub: { slug: string; }) => ({ slug: pub.slug }));

  const hardcodedSlugs = paths.map(({ url }) => ({ slug: url }))

  return [
    ...publishedSlugs,
    ...hardcodedSlugs
  ];
}

export async function generateMetadata({
  params
}: BlogProps): Promise<Metadata> {
  const res = await fetch('https://bw5bt69rjh.execute-api.af-south-1.amazonaws.com/prod/blog/');
  const data = await res.json();

  const publishedBlog = data.filter((caseStudy: { published: boolean }) => caseStudy.published);
  const publishedSlug = publishedBlog.find((blog: { slug: string; }) => blog.slug === params.slug);

  if (publishedSlug) {
    return {
      title: `${publishedSlug.title} - CloudPlexo's Expert Solutions`,
      description: publishedSlug.description,
      alternates: {
        canonical: `https://cloudplexo.com/case-study/${publishedSlug.slug}`,
      },
    };
  }

  const oldBlog = blogs.find(({ slug }) => slug === params.slug)
  return {
    title: `${oldBlog?.title} - CloudPlexo Blog`,
    description: oldBlog?.desc,
    keywords: [
      params.slug,
      "Cloud Computing Insights",
      "AWS Blog",
      "Azure Articles",
      "Google Cloud Updates",
      "Cloud Technology Trends",
    ],
    alternates: {
      canonical: `https://www.cloudplexo.com/blog/${oldBlog?.slug}`,
    },
  }
}

export default async function Blog({ params }: { params: { slug: string } }) {
  const res = await fetch('https://bw5bt69rjh.execute-api.af-south-1.amazonaws.com/prod/blog');
  const data = await res.json();

  const blog = data.find(({ slug }: { slug: string }) => slug === params.slug);
  const oldBlog = paths.find(({ url }) => url === params.slug);

  if (!blog && !oldBlog) notFound();

  return <BlogClientComponent blog={blog} oldBlog={oldBlog} />;
}
