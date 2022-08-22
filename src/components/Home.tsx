import React, { useEffect, useState } from "react";
import AddEntry from "./AddEntry";
import Header from "./Header";
import ShowAllEntries from "./ShowAllEntries";

type Entry = {
  user_id: number;
  date: string;
  title: string;
  text: string;
};

const Home = () => {
  const [entryToAdd, setEntryToAdd] = useState<Entry>();

  // useEffect(() => {
  //   console.log("🥗🥗🥗🥗🥗", entryToAdd);
  // }, [entryToAdd]);

  return (
    <div>
      <Header />
      <AddEntry setEntryToAdd={setEntryToAdd} />
      <ShowAllEntries entryToAdd={entryToAdd} />
    </div>
  );
};

export default Home;
