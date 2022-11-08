import React from "react";
import one from "../img/attach.png";

const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img src={one} alt="" />
        <div className="userChatInfo">
          <span>Kristhi</span>
          <p>Hellu!</p>
        </div>
      </div>
      <div className="userChat">
        <img src={one} alt="" />
        <div className="userChatInfo">
          <span>Kristhi</span>
          <p>Hellu!</p>
        </div>
      </div>
      <div className="userChat">
        <img src={one} alt="" />
        <div className="userChatInfo">
          <span>Kristhi</span>
          <p>Hellu!</p>
        </div>
      </div>
      <div className="userChat">
        <img src={one} alt="" />
        <div className="userChatInfo">
          <span>Kristhi</span>
          <p>Hellu!</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
