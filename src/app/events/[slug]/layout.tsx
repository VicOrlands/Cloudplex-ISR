import { WebinarArray, EventsArray, WebinarProps, EventsProps } from '../eventsArray';

export async function generateStaticParams() {
    return WebinarArray.map((webinar) => ({
        slug: webinar.slug,
    }));
}

interface MetaProps extends WebinarProps, EventsProps { }

export async function generateMetadata({ params }: { params: MetaProps }) {
    const { slug } = params
    const currentEvent = EventsArray.find(event => event.link === slug)
    const currentWebinar = WebinarArray.find(webinar => webinar.slug === slug)

    return {
        title: currentEvent ? currentEvent?.title : currentWebinar?.name,
        description: `Join CloudPlexo's webinars for insights into cloud cost savings, edge computing, leveraging cloud solutions for business growth, security foundations, cloud security, and cloud modernization.`,
        keywords: ['Technology updates', 'Cloud industry insights', 'Webinars on cloud technology', 'Industry developments', 'Cloud trends']
    }
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (<>{children}</>);
}
