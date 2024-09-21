import useMessagesStore, { Message } from "../../store/messages";
import AiMessage from "./ai-message";
import "./message.css";
import ChatGPTIcon from "../icons/chatgpt-icon";
import UserMessage from "./user-message";

const MessageContainer = () => {
  const messages: Message[] = useMessagesStore((state) => state.messages);

  if (messages.length === 0) {
    return <div className="no-message"><ChatGPTIcon /></div>
  }

  return (
    <>
      {messages.map((message, index) => (
        <div key={index} className={message.assistant ? 'assistant-message' : 'user-message'}>
          {!message.assistant ? 
          <UserMessage message={message.message} /> : 
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