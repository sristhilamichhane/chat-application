import React from "react";
import { useState } from "react";
import one from "../img/attach.png";

const Search = () => {
  const [userName, setUsername] = useState("");
  const [user, setUser] = useState("");
  const [err, setErr] = useState("");
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" />
      </div>
      <div className="userChat">
        <img src={one} alt="" />
        <div className="userChatInfo">
          <span>Kristhi</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
