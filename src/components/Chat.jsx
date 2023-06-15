import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
import { UilVideo } from '@iconscout/react-unicons'
import { UilUserPlus } from '@iconscout/react-unicons'
import { UilEllipsisH } from '@iconscout/react-unicons'

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span className="user-name">{data.user?.displayName}</span>
        <div className="chatIcons">
          <span><UilVideo/></span> 
          <span><UilUserPlus/></span>
          <span><UilEllipsisH/></span>
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;
