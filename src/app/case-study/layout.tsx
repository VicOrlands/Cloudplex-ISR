import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Modernise and Secure All Processes: Case Studies in Cost Optimization and Savings",
    description: "Explore case studies of organizations optimizing cloud costs and maximizing savings through strategies like AWS credits and resource allocation",
    keywords: ['Cloud Billing Solutions', 'Cloud Cost Optimization', 'AWS Credits', 'Cost Management', 'Cloud Spending', 'Resource Allocation', 'Billing Challenges'],
    alternates: {
        canonical: 'https://www.cloudplexo.com/case-study',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (<>{children}</>);
}
