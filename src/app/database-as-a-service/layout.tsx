
export async function generateMetadata() {
    return {
        title: "Optimize Your Databases - CloudPlexo Expert Solution",
        alternates: {
            canonical: 'https://www.cloudplexo.com/database-as-a-service',
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
