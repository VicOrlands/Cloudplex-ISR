import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "CloudPlexo's Cloud Solution Webinars - CloudPlexo",
    description: "Join CloudPlexo's webinars for insights into cloud cost savings, edge computing, leveraging cloud solutions for business growth, security foundations, cloud security, and cloud modernization.",
    keywords: ['Technology updates', 'Cloud industry insights', 'Webinars on cloud technology', 'Industry developments', 'Cloud trends'],
    alternates: {
        canonical: 'https://www.cloudplexo.com/events',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (<>{children}</>);
}
