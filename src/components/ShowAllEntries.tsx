import axios from "axios";
import React, { useEffect, useState } from "react";
import Entry from "./Entry";

const SERVER_URL = process.env.PORT ? "heroku" : "http://localhost:8080";

const ShowAllEntries = ({ entryToAdd }: any) => {
  const [entries, setEntries] = useState<
    {
      id: number;
      date: string;
      title: string;
      text: string;
    }[]
  >([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`${SERVER_URL}/entry`);
        const allEntries = response.data;
        setEntries(allEntries);
      } catch {
        console.log("⭕⭕⭕ERROR⭕⭕⭕");
      }
    })();
  }, []);

  useEffect(() => {
    if (entryToAdd) {
      setEntries((current) => [entryToAdd, ...current]);
    }
  }, [entryToAdd]);

  const displayAllEntries = entries.map((entry) => (
    <Entry
      key={entry.id}
      date={entry.date}
      title={entry.title}
      text={entry.text}
    />
  ));

  return (
    <div>
      <h1>Show all</h1>
      <div>{displayAllEntries}</div>
    </div>
  );
};

export default ShowAllEntries;
