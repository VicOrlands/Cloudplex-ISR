import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "CloudPlexo AWS Cloud - Expert Cloud Solutions",
    description: "CloudPlexo AWS Cloud offers expert cloud solutions for businesses to run efficient, cost-optimized, and reliable cloud environments. Explore our services!",
    keywords: ['Efficient Cloud Management', 'Cost-Optimized Cloud Services', 'Reliable AWS Solutions'],
    alternates: {
        canonical: 'https://cloudplexo.com/aws-partnership',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (<>{children}</>);
}
