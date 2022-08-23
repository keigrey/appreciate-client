import React, { useEffect, useState } from "react";
import AddEntry from "./AddEntry";
import Header from "./Header";
import ShowAllEntries from "./ShowAllEntries";

type Entry = {
  id: number;
  date: string;
  title: string;
  text: string;
};

const Home = () => {
  const [entryToAdd, setEntryToAdd] = useState<Entry>();
  const [entries, setEntries] = useState<Entry[]>([]);

  // useEffect(() => {
  //   console.log("🥗🥗🥗🥗🥗", entryToAdd);
  // }, [entryToAdd]);

  return (
    <div>
      <Header />
      <AddEntry
        setEntryToAdd={setEntryToAdd}
        entries={entries}
        setEntries={setEntries}
      />
      <ShowAllEntries
        entryToAdd={entryToAdd}
        entries={entries}
        setEntries={setEntries}
      />
    </div>
  );
};

export default Home;
