import useMessagesStore, { Message } from "../../store/messages";
import AiMessage from "./ai-message";
import "./message.css";
import ChatGPTIcon from "./chatgpt-icon";

const MessageContainer = () => {
  const messages: Message[] = useMessagesStore((state) => state.messages);

  return (
    <>
      {messages.map((message, index) => (
        <div key={index} className={message.assistant ? 'assistant-message' : 'user-message'}>
          {!message.assistant ? 
          <span className="message">{message.message}</span> : 
          <>
            <span className="chatgpt-icon"><ChatGPTIcon /></span>
            <span><AiMessage message={message}/></span>
          </>}
        </div>
      ))}
    </>
  );
};

export default MessageContainer;