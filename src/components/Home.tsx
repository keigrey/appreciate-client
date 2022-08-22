import React from "react";
import AddEntry from "./AddEntry";
import Header from "./Header";
import ShowAllEntries from "./ShowAllEntries";

const Home = () => {
  return (
    <div>
      <Header />
      <AddEntry />
      <ShowAllEntries />
    </div>
  );
};

export default Home;
