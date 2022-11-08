import React from "react";
import one from "../img/attach.png";

const Search = () => {
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
