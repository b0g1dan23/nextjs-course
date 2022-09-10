import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/event-list";

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents,
    },
    revalidate: 1800,
  };
}

function HomePage({ featuredEvents }) {
  return (
    <div>
      <EventList items={featuredEvents}></EventList>
    </div>
  );
}

export default HomePage;
