
export async function generateMetadata() {
    return {
        title: "FAQ - CloudPlexo's Expert Solutions",
        alternates: {
            canonical: 'https://www.cloudplexo.com/faq',
        },
    };
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (<>{children}</>);
}
