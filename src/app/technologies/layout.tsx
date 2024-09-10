import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Amazon Connect - Cloud-Based Contact Center Services",
    description: "Amazon Connect offers scalable, cost-effective cloud-based contact center services with features like chatbots and omnichannel functionality. Contact us to learn more",
    keywords: ["Amazon Connect", "Cloud-Based Contact Center", "Customer Care", "Call Center", "Chatbot Integration", "Scalable Contact Center", "Contact Center Services"],
    alternates: {
        canonical: "https://cloudplexo.com/technologies"
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (<>{children}</>);
}
