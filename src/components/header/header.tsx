import useMessagesStore from "../../store/messages";
import NewChatIcon from "../icons/new-chat-icon";
import "./header.css";

const Header = () => {
  const reset = useMessagesStore((state) => state.reset);

  return (
    <div className="header">
      <button onClick={reset} className="new-chat-icon"><NewChatIcon /><span className="tooltiptext">New chat</span></button>
      <div className="chatgpt-text">ChatGPT</div>
      <button className="pill-styling login-button" onClick={() => alert("Coming soon")}>Log in</button>
    </div>
  );
};

export default Header;