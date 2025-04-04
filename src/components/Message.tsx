import "../styles/Shared.css";

interface MessageProps {
  message: {
    text: string;
    self?: boolean;
    image?: string;
    altText?: string;
    reaction?: string | null;
    time?: string;
    delivered?: boolean;
  };
  handleClick?: () => void;
}

function Message(props: MessageProps) {
  return (
    <div
      className={`message-container ${props.message.self ? "self" : "other"}`}
      onClick={props.handleClick}
    >
      <p className="message-text">{props.message.text}</p>
      {props.message.image && (
        <img
          className="message-image"
          alt={props.message.altText || "Bild"}
          src={props.message.image}
        />
      )}
      <span className="reaction">{props.message.reaction}</span>
      <span className="time">{props.message.time}</span>
    </div>
  );
}

export default Message;