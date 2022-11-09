import React from "react";

const Message = () => {
  return (
    <div className="message owner ">
      <div className="messageInfo">
        <img
          src="https://images.pexels.com/photos/675920/pexels-photo-675920.jpeg?cs=srgb&dl=pexels-min-an-675920.jpg&fm=jpg"
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        {/* <img
          src="https://images.unsplash.com/photo-1491616569293-e27f7f4cd41a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFjayUyMG9mJTIwZ2lybHxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt=""
        /> */}
      </div>
    </div>
  );
};

export default Message;
