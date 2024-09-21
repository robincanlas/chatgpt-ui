import { useState } from "react";
import useMessagesStore, { MessagesStore } from "../../store/messages";
import { v4 as uuidv4 } from 'uuid';
import TextareaAutosize from 'react-textarea-autosize';
import "./user-input.css";
import EnterIcon from "../icons/enter-icon";

const staticAiMessage = "Hello, thank you for your interest in this demo of the ChatGPT user interface. Please note that it currently does not connect to any backend services and is still under development. We appreciate your understanding.";

const UserInput = () => {
  const { addMessage, setRequestToGPT, requestToGPT }: MessagesStore = useMessagesStore((state) => state);
  const [message, setUserMessage] = useState<string>('');
  
  const onMessage = () => {
    addMessage({ 
      id: uuidv4(),
      message: message, 
      assistant: false
    });

    setRequestToGPT(true);
    setTimeout(() => {
      // Reset user message
      setUserMessage('');
      // GPT mock response
      addMessage({
        id: uuidv4(), 
        message: staticAiMessage, 
        assistant: true,
      });
      setRequestToGPT(false);
    }, 1000);

  };

  return (
    <div className="user-input">
      <span>
        <TextareaAutosize 
          disabled={requestToGPT}
          name="user-input" 
          placeholder="Type your message here" 
          value={message}
          onChange={(e) => setUserMessage(e.currentTarget.value)} 
        />
        <button 
          disabled={message.trim() === ''}
          onClick={() => {
            onMessage()
          }} className="enter-icon"><EnterIcon /></button>
      </span>
    </div>
  );
};

export default UserInput;