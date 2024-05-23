import PropTypes from "prop-types";

function Message({ text }) {
  return <li>{text}</li>;
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
};

function Messageslist({ messages }) {
  return (
    <ul>
      {messages.map((message) => {
        return <Message key={message.id} text={message.text} />;
      })}
    </ul>
  );
}

Messageslist.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Messageslist;

// const messages = [
//   { id: 1, text: "Привет, как дела?" },
//   { id: 2, text: "Текстовое сообщение?" },
// ];
