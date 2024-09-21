import useMessagesStore from "../../store/messages";
import NewChatIcon from "../icons/new-chat-icon";
import "./header.css";

const Header = () => {
  const reset = useMessagesStore((state) => state.reset);

  return (
    <div className="header">
      <div className="left-section">
        <button onClick={reset} className="new-chat-icon"><NewChatIcon /><span className="tooltiptext">New chat</span></button>
        <div className="chatgpt-text desktop">ChatGPT</div>
      </div>
      <div className="chatgpt-text tablet">ChatGPT</div>
      <div className="right-section">
        <button className="pill-styling login-button" onClick={() => alert("Coming soon")}>Log in</button>
        <button className="pill-styling login-button signup-button desktop" onClick={() => alert("Coming soon")}>Sign up</button>
      </div>
    </div>
  );
};

export default Header;