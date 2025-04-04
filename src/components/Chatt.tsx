import MessageList, { MessageType } from "./MessageList";
import "../styles/Chatt.css";
import "../styles/Shared.css";

function Chatt() {
  const initialMessages: MessageType[] = [
    {
      delivered: true,
      id: 1,
      reaction: "👍",
      self: true,
      content: "Hej!",
      time: "12:00",
    },
    {
      delivered: true,
      id: 2,
      reaction: null,
      self: false,
      content: "Hej Sötness!",
      time: "12:01",
    },
    {
      delivered: true,
      id: 3,
      reaction: null,
      self: false,
      content: "Hej då!",
      time: "12:02",
    },
  ];

  return <MessageList initialMessages={initialMessages} />;
}

export default Chatt;