
export async function generateMetadata() {
    return {
        title: "Protect Your Digital Assets with CloudPlexo Cybersecurity Services",
        description: "Secure your business with CloudPlexo's advanced cybersecurity services. Safeguard your digital assets with cutting-edge solutions designed to prevent, detect, and respond to cyber threats. Explore our services now!",
        keywords: ['cybersecurity', 'digital asset protection', 'cyber threat prevention', 'cybersecurity services', 'CloudPlexo cybersecurity'],
        alternates: {
            canonical: 'https://www.cloudplexo.com/cybersecurity',
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
