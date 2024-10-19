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
    <div className="message-container">
      {messages.map((message, index) => (
        <div key={index} className={message.assistant ? 'assistant-message' : 'user-message'}>
          {!message.assistant ? 
          <UserMessage message={message} /> : 
          <>
            <div>
              <span className="chatgpt-icon"><ChatGPTIcon /></span>
            </div>
            <span className="message"><AiMessage message={message}/></span>
          </>}
        </div>
      ))}
    </div>
  );
};

export default MessageContainer;