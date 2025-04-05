import React, { useState } from "react";
import "../styles/Chatt.css";
import "../styles/Shared.css";

export interface MessageType {
  id: number;
  content: string;
  text?: string;
  time: string;
  self: boolean;
  delivered: boolean;
  reaction: string | null;
  image?: string;
  altText?: string;
}

interface MessageListProps {
  initialMessages: MessageType[];
}

const MessageList: React.FC<MessageListProps> = ({ initialMessages }) => {
  const [messages, setMessages] = useState<MessageType[]>(initialMessages);
  const [messageText, setMessageText] = useState<string>("");
  const [nextId, setNextId] = useState(messages.length + 1);

  function sendMessage() {
    setMessages([
      ...messages,
      {
        delivered: false,
        id: nextId,
        reaction: null,
        self: true,
        content: messageText || "",
        time: new Date().toLocaleTimeString(),
      },
    ]);
    setNextId(nextId + 1);
    setMessageText("");
  }

  const like = (message: MessageType) => {
    setMessages((prevMessages) =>
      prevMessages.map((msg) =>
        msg.id === message.id
          ? { ...msg, reaction: msg.reaction === "👍" ? null : "👍" } 
          : msg
      )
    );
  };

  return (
    <div className="chatt-container">
      <ol className="message-list">
        {messages.map((message) => (
          <li
            key={message.id}
            className={`message-container ${message.self ? "self" : "other"}`}
            onClick={() => like(message)}
          >
            <p className="message-text">{message.content}</p>
            {message.image && (
              <img
                className="message-image"
                alt={message.altText || "Bild"}
                src={message.image}
              />
            )}
            <span className="reaction">{message.reaction}</span>
            <span className="time">{message.time}</span>
          </li>
        ))}
      </ol>
      <div className="message-input">
        <input
          type="text"
          placeholder="Skriv ett meddelande"
          onChange={(event) => setMessageText(event.target.value)}
          value={messageText}
        />
        <button onClick={sendMessage}>Skicka</button>
      </div>
    </div>
  );
};

export default MessageList;