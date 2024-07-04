import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "CloudPlexo Blog - Your No 1 Source for Cloud Computing Insights",
    description: "Explore CloudPlexo's blog for expert insights on cloud computing, AWS, Azure, and GCP. Stay updated with cloud technology trends",
    keywords: ['Cloud Computing Insights', 'AWS Blog', 'Azure Articles', 'Google Cloud Updates', 'Cloud Technology Trends']
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (<>{children}</>);
}
