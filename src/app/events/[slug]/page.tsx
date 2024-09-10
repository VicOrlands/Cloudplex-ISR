import { notFound } from 'next/navigation';
import { EventsArray, WebinarArray } from '../eventsArray';
import defaultImg from "@/assets/events/events-video-thumbnail.webp"
import PlaceholderComp from './webinars/placeholderComp';
import Fintech from './fusion/fintechFusion';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type PageProps = {
    params: {
        slug: string;
    };
};

export interface MetaProps {
    slug: string
}

export async function generateMetadata({ params }: { params: MetaProps }) {
    const { slug } = params
    const currentEvent = EventsArray.find(event => event.link === slug)
    const currentWebinar = WebinarArray.find(webinar => webinar.link === slug)

    return {
        title: `Webinar: ${currentEvent ? currentEvent?.title : currentWebinar?.name}`,
        description: `Join CloudPlexo's webinars for insights into cloud cost savings, edge computing, leveraging cloud solutions for business growth, security foundations, cloud security, and cloud modernization.`,
        keywords: ['Technology updates', 'Cloud industry insights', 'Webinars on cloud technology', 'Industry developments', 'Cloud trends'],
        alternates: {
            canonical: `https://cloudplexo.com/events/${slug}`,
        },
    }
}

// link params
export async function generateStaticParams() {
    const eventsPaths = EventsArray.map(({ link }) => ({
        slug: link || "404"
    }));

    const webinarPaths = WebinarArray.map(({ link }) => ({
        slug: link || "404"
    }));

    return [...eventsPaths, ...webinarPaths];
}

const WebinarPage: React.FC<PageProps> = ({ params }) => {
    const { slug } = params
    const events = EventsArray.find((event) => event.link === slug);
    const webinar = WebinarArray.find((webinar) => webinar.link === slug);

    if (!events && !webinar) notFound()

    return (
        <>
            {events ?
                <Fintech /> :
                <PlaceholderComp
                    title={webinar?.name}
                    src={webinar?.image || defaultImg}
                    alt={webinar?.name || "events img"}
                    speakers={webinar?.speakers}
                />}

            <ToastContainer />
        </>
    )
};

export default WebinarPage;
