import EventsDetails from "./EventDetails";
import { EventsArray } from "../../arrays/eventsArray";

export async function generateStaticParams() {
  const eventPath = EventsArray.map(({ link }) => ({
    slug: link || "404",
  }));

  return eventPath;
}

const EventPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const event = EventsArray.find((e) => e.link === slug);

  if (!event) {
    return <div>Event not found</div>;
  }

  return <EventsDetails event={event} />;
};

export default EventPage;
