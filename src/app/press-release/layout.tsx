
export async function generateMetadata() {
    return {
        title: "CloudPlexo Press Release",
        description: "Stay updated on the latest industry developments, news, interviews, and cutting-edge technologies with CloudPlexo's press releases",
        keywords: ['Cloud Industry Updates', 'Cutting-Edge Technologies'],
        alternates: {
            canonical: "https://www.cloudplexo.com/press-release"
        }
    };
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (<>{children}</>);
}
