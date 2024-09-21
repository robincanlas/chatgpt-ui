import { useState } from "react";
import useMessagesStore, { Message, MessagesStore } from "../../store/messages";
import { v4 as uuidv4 } from 'uuid';
import TextareaAutosize from 'react-textarea-autosize';
import "./user-input.css";

// const staticAiMessage = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
const staticAiMessage = "hellooowwwwwwwwwww";

const UserInput = () => {
  const { addMessage, setRequestToGPT, requestToGPT }: MessagesStore = useMessagesStore((state) => state);
  const [, setUserMessage] = useState<string>('');
  
  const onMessage = (message: Message) => {
    addMessage(message);

    setRequestToGPT(true);
    setTimeout(() => {
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
      {/* <textarea 
      disabled={requestToGPT}
      name="user-input" 
      placeholder="Type your message here" 
      onChange={(e) => setUserMessage(e.currentTarget.value)} 
      onKeyUp={(e) => {
        if (e.key === 'Enter' && e.currentTarget.value.trim() !== '') {
          onMessage({ 
            id: uuidv4(),
             message: e.currentTarget.value, 
             assistant: false
            });
          e.currentTarget.value = '';
        }
      }} /> */}

      <TextareaAutosize 
        disabled={requestToGPT}
        name="user-input" 
        placeholder="Type your message here" 
        onChange={(e) => setUserMessage(e.currentTarget.value)} 
        onKeyUp={(e) => {
          if (e.key === 'Enter' && e.currentTarget.value.trim() !== '') {
            onMessage({ 
              id: uuidv4(),
                message: e.currentTarget.value, 
                assistant: false
              });
            e.currentTarget.value = '';
          }
        }} />
    </div>
  );
};

export default UserInput;