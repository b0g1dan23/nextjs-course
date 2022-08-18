import React from "react";
import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/EventsSearch";
import { useRouter } from "next/router";

function EventsAllPage() {
  const events = getAllEvents();
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <div>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </div>
  );
}

export default EventsAllPage;
