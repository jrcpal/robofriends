import React from "react";

const Card = ({robot}) => {
  const { id, name, username, email } = robot;

  return (
    <div className="bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5">
      <img
        alt="photo"
        src={`https://robohash.org/${id}?200x200`}
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
