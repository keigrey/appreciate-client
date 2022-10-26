import React from "react";

const Entry = ({ date, title, text }) => {
  return (
    <div className="card bg-submain m-8 p-8 max-w-sm rounded shadow-lg">
      <div className="container break-words">
        <h1 className="mb-3 font-bold text-dark text-xl">{title}</h1>
        <p className="text-dark text-base">{text}</p>
        <h2 className="mt-3 text-right">{date}</h2>
      </div>
    </div>
  );
};

export default Entry;
