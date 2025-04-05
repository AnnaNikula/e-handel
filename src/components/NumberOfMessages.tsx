
import React, { useMemo } from 'react';

interface MessageType {
    id: number;
    content: string;
}


interface NumberOfMessagesProps {
    messages: MessageType[];
}

function NumberOfmessages(props: NumberOfMessagesProps){
    const numberOfMessages = useMemo(() => {
        return props.messages.length;
    }, [props.messages]);
    // useMemo används för att beräkna antal av meddelande i Vue används computed
    return <p>Konversation består av {numberOfMessages} meddelanden.</p>;
}
export default NumberOfmessages;

//function as it conflicts with React's useMemo.
// Denna komponent används för att beräkna hur många meddelande finns i chatten.