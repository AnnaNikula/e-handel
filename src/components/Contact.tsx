import React from "react";
import "../styles/Chatt.css"; 
import "../styles/Shared.css"; 
import MessageList, { MessageType } from "./MessageList";

const Contact: React.FC = () => {
  const initialMessages: MessageType[] = [
    {
      delivered: true,
      id: 1,
      reaction: "👍", //Jhon förklarat att det kräver Hantering av State, Typing, Rendering och css, i MessageList finns funktion, p webbsida like genom klika på meddelandet inte bästa UX men 
      self: true,
      content: "Hej! test?",
      time: "12:00",
    },
    {
      delivered: true,
      id: 2,
      reaction: null,
      self: false,
      content: "Hej! jag är här.",
      time: "12:01",
    },
  ];

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Kontaktuppgifter</h2>
        <p>Telefon: 03-54 567 89</p>
        <p>Email: trades@outlook.se</p>
        <p>Adress: Viktoriagatan 36, Göteborg 41125</p>
        <p>Ni är välkomna att kontakta oss!</p>
      </div>
      <div className="contact-chat">
        <MessageList initialMessages={initialMessages} />
      </div>
    </div>
  );
};

export default Contact;
