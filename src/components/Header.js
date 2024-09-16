import React from "react";

const Header = () => {
    console.log('rendering Header');
  return (
    <h1
      className="f1"
      style={{ fontFamily: "Impact, Charcoal, cursive, sans-serif" }}
    >
      ROBOFRIENDS
    </h1>
  );
};

export default React.memo(Header);