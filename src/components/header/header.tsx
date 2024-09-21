import NewChatIcon from "../icons/new-chat-icon";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="new-chat-icon"><NewChatIcon /><span className="tooltiptext">New chat</span></div>
      <div className="chatgpt-text">ChatGPT</div>
      <button className="pill-styling login-button" onClick={() => alert("Coming soon")}>Log in</button>
    </div>
  );
};

export default Header;