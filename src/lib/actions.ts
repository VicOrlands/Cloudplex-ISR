export async function fetchContent(endpoint: string) {
    const res = await fetch(
        `https://bw5bt69rjh.execute-api.af-south-1.amazonaws.com/prod/${endpoint}/`,
        { cache: "no-store" }
    );

    if (!res.ok) {
        throw new Error(`Failed to fetch content from ${endpoint}`);
    }

    return res.json();
}

// get all published case studies
export async function fetchCaseStudies() {
    const data = await fetchContent("case-studies");
    return data.filter(({ published }: { published: boolean }) => published);
}

// get all published blogs
export async function fetchBlogs() {
    const data = await fetchContent("blog");
    return data.filter(({ published }: { published: boolean }) => published);
}

// get all published events
export async function fetchEvents() {
    const data = await fetchContent("events");
    return data.filter(({ published }: { published: boolean }) => published);
}