import type { Metadata } from "next";

export async function generateStaticParams() {
    return [{
        slug: "data-analytics"
    }]
}

export const metadata: Metadata = {
    title: "Quantitative Data Analytics for Business | CloudPlexo",
    description: "Transform your business with CloudPlexo's data analytics solutions. Gain actionable insights for strategic decision-making. Explore our analytics services now.",
    keywords: ['data analytics for business', 'data analysis for business', 'quantitative data analysis', 'data analytics aws', 'Data Recycling Services', 'Data Repurposing', 'Data Transformation', 'Data Reuse', 'Data Augmentation']
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (<>{children}</>);
}
