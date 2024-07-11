
export async function generateStaticParams() {
    return [{
        slug: "data-analytics"
    }]
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (<>{children}</>);
}
