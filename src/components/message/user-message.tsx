import useScrollIntoLastMessage from "../../hooks/useScrollIntoLastMessage";
import useScrollIntoView from "../../hooks/useScrollIntoView";
import { Message } from "../../store/messages";
import "./message.css";

interface UserMessageProps {
  message: Message;
}

const UserMessage = ({
  message
}: UserMessageProps) => {
  const { elementRef, instantScrollIntoView } = useScrollIntoView();
  useScrollIntoLastMessage(message, () => instantScrollIntoView());

  return <span ref={elementRef} className="message pill-styling">{message.message}</span>;
};

export default UserMessage;