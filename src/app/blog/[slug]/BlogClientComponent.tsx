"use client"

import BlogTemplate from "./BlogTemplate";

const BlogClientComponent = ({ blog, oldBlog }: any) => {
    if (oldBlog) return oldBlog.comp

    return <BlogTemplate key={blog?.key} {...blog} />
};

export default BlogClientComponent;