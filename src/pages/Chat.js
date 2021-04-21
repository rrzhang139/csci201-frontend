import React from 'react';
import Top from "../components/chat/top/Top.jsx";
import Window from "../components/chat/window/Window"
import "../styles/chat/Chat.css";

function Chat() {
  return (
    <div>
      <Top title="Chat Page"></Top>
      <Window></Window>
    </div>
  );
}
export default Chat;