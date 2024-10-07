import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ready to supercharge your startup journey? - CLoudPlexo",
    description: "Access free perks and resources to scale your Startup from Africa to the world",
    keywords: ["startup", "africa startup"],
    alternates: {
        canonical: "https://www.cloudplexo.com/startups"
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (<>{children}</>);
}
