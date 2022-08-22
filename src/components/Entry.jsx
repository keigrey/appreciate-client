import React from "react";

const Entry = ({ date, title, text }) => {
  return (
    <div>
      <h1>------------------Entry-------------</h1>
      <h2>{date}</h2>
      <h2>{title}</h2>
      <h2>{text}</h2>
    </div>
  );
};

export default Entry;
