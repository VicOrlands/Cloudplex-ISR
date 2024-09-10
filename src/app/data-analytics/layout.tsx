
export async function generateMetadata() {
    return {
        title: "CloudPlexo Data Analytics",
        alternates: {
            canonical: 'https://cloudplexo.com/data-analytics',
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
