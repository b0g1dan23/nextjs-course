import React from "react";
import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  console.log(featuredEvents);

  return (
    <div>
      <EventList items={featuredEvents}></EventList>
    </div>
  );
}

export default HomePage;