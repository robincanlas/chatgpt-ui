import { useState } from "react";
import useMessagesStore, { MessagesStore } from "../../store/messages";
import { v4 as uuidv4 } from 'uuid';
import TextareaAutosize from 'react-textarea-autosize';
import "./user-input.css";
import EnterIcon from "../icons/enter-icon";

const staticAiMessage = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

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