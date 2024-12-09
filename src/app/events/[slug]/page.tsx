import { Metadata } from "next";
import NotFound from "@/app/not-found";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { WebinarArray } from "../arrays/webinarArray";
import PlaceholderComp from "./webinars/placeholderComp";
import EventsDetails from "./event-details/EventDetails";
import { fetchContent, fetchEvents } from "@/lib/actions";
import defaultImg from "@/assets/events/events-video-thumbnail.webp";

export const revalidate = 60

export const dynamicParams = true

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const currentEvent = await fetchContent(`events/${params.slug}`);

  const currentWebinar = WebinarArray.find((webinar) => webinar.link === params.slug);

  return {
    title: `${currentEvent ? currentEvent.title : `Webinar: ${currentWebinar?.name}`
      }`,
    description: `${currentEvent ? currentEvent.description : "Join CloudPlexo's webinars for insights into cloud cost savings, edge computing, leveraging cloud solutions for business growth, security foundations, cloud security, and cloud modernization."}`,
    keywords: [
      "Technology updates",
      "Cloud industry insights",
      "Webinars on cloud technology",
      "Industry developments",
      "Cloud trends",
    ],
    alternates: {
      canonical: `https://www.cloudplexo.com/events/${params.slug}`,
    },
  };
}

// link params
export async function generateStaticParams() {
  const events = await fetchEvents()

  const eventsPaths = events.map(({ key }: { key: string }) => ({
    slug: key,
  }));

  const webinarPaths = WebinarArray.map(({ link }) => ({
    slug: link,
  }));

  return [...eventsPaths, ...webinarPaths];
}

const WebinarPage = async ({ params }: { params: { slug: string } }) => {
  const event = await fetchContent(`events/${params.slug}`);

  const webinar = WebinarArray.find((webinar) => webinar.link === params.slug);

  if (!event && !webinar) {
    return <NotFound />
  };

  return (
    <>
      <ToastContainer />

      {webinar ? (
        <PlaceholderComp
          title={webinar?.name}
          src={webinar?.image || defaultImg}
          alt={webinar?.name || "events img"}
          speakers={webinar?.speakers}
        />
      ) : (
        <EventsDetails {...event} key={event.key} />
      )}
    </>
  );
};

export default WebinarPage;
