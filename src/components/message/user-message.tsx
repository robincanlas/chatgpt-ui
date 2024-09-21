import "./message.css";

interface UserMessageProps {
  message: string;
}

const UserMessage = ({
  message = ''
}: UserMessageProps) => {
  return <span className="message pill-styling">{message}</span>;
};

export default UserMessage;