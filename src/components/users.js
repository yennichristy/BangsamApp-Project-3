import React from "react";
import bangsam from "../assets/icons/user-page/bangsam_full.png";

const User = () => {
  return (
    <div className="user">
      <div className="user_left">
        <img src={bangsam} alt="Bangsam"></img>
      </div>
      <div className="user_right"></div>
    </div>
  );
};

export default User;
