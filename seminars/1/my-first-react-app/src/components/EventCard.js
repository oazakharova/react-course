// название, дату и место проведения.

export default function EventCard(props) {
  const eventName = props.eventName;
  const eventDate = props.eventDate;
  const eventPlace = props.eventPlace;

  return (
    <div className="event-card">
      <h3 className="event-card__title">Мероприятие: {eventName}</h3>
      <p className="event-card__date">Дата проведения: {eventDate}</p>
      <p className="event-card__place">Место проведения: {eventPlace}</p>
    </div>
  );
}
