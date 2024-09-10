
export async function generateMetadata() {
    return {
        title: "CloudPlexo DevOps as a Service - Streamline Your Software Development Lifecycle",
        description: "Discover CloudPlexo's cloud-based DevOps solutions, including CI/CD, consulting, cloud infrastructure design, Kubernetes migration, Infrastructure as Code (IaC), and logging/observability services",
        keywords: ["DevOps as a Service", "Cloud-Based DevOps", "DevOps Solutions", "CI/CD", "DevOps Consulting", "Cloud Infrastructure Design", "Kubernetes Migration", "Infrastructure as Code (IaC)", "Logging and Observability"],
        alternates: {
            canonical: 'https://cloudplexo.com/database-as-a-service',
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
