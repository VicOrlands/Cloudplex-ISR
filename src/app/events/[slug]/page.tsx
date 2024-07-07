import { notFound } from 'next/navigation';
import { EventsArray, WebinarArray } from '../eventsArray';
import defaultImg from "@/assets/events/events-video-thumbnail.webp"
import PlaceholderComp from './webinars/placeholderComp';
import Fintech from './fusion/fintechFusion';

type PageProps = {
    params: {
        slug: string;
    };
};

export async function generateStaticParams() {
    let pageData

    pageData = EventsArray.map((webinar) => ({
        slug: webinar.link,
    }))

    if (!pageData) {
        pageData = WebinarArray.map((webinar) => ({
            slug: webinar.slug,
        }))
    }

    return pageData;
}

const WebinarPage: React.FC<PageProps> = ({ params }) => {
    const { slug } = params
    const events = EventsArray.find((event) => event.link === slug);
    const webinar = WebinarArray.find((webinar) => webinar.slug === slug);

    if (!events && !webinar) notFound()

    return events ?
        <Fintech /> :
        <PlaceholderComp
            title={webinar?.name}
            src={webinar?.image || defaultImg}
            alt={webinar?.name || "events img"}
            speakers={webinar?.speakers}
        />
};

export default WebinarPage;
