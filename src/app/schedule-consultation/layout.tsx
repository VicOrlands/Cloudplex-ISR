import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Book a Free Consultation with Data Transformation Experts - CLoudPlexo",
    description: "Schedule a free consultation with CloudPlexo's data transformation experts. Discuss your data optimization and AI strategies",
    keywords: ["Data Transformation Free Consultation", "Consultation Booking", "Expert Meeting Request", "Data Strategy Discussion"],
    alternates: {
        canonical: "https://cloudplexo.com/schedule-consultation"
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (<>{children}</>);
}
