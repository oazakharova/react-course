export default function Message(props) {
  return (
    <div className="message-wrap">
      <h3 className="message-title">Передан следующий текст:</h3>
      <div className="message-text">{props.message}</div>
    </div>
  );
}
