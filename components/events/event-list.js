import EventItem from "./EventItem";
import styles from "./event-list.module.css";

function EventList({ items }) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <EventItem
          id={item.id}
          key={item.id}
          title={item.title}
          location={item.location}
          date={item.date}
          image={item.image}
        ></EventItem>
      ))}
    </ul>
  );
}

export default EventList;
