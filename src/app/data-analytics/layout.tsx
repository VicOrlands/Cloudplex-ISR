export async function generateMetadata() {
  return {
    title: "Data Analytics for Business & Beginners | CloudPlexo",
    description:
      "CloudPlexo offers tailored data analytics solutions for businesses, demystifying data analysis for beginners and providing robust quantitative data analysis to empower decision-making.",
    keywords: [
      "data analytics for business",
      "data analytics for beginners",
      "quantitative data analytics",
      "data analytics aws",
    ],
    alternates: {
      canonical: "https://www.cloudplexo.com/data-analytics",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
