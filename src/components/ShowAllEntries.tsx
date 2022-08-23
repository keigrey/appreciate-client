import axios from "axios";
import React, { useEffect, useState } from "react";
import Entry from "./Entry";

const SERVER_URL = process.env.PORT
  ? "https://app-reciate.herokuapp.com/"
  : "http://localhost:8080";
// const accessToken = localStorage.getItem("JWToken");

const ShowAllEntries = ({ entryToAdd, setEntries, entries }: any) => {
  // const [entries, setEntries] = useState<
  //   {
  //     id: number;
  //     date: string;
  //     title: string;
  //     text: string;
  //   }[]
  // >([]);

  useEffect(() => {
    (async () => {
      try {
        const accessToken = localStorage.getItem("JWToken");
        const response = await axios.get(`${SERVER_URL}/entry`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const allEntries = response.data;

        setEntries(allEntries);
      } catch {
        console.log("⭕⭕⭕ERROR⭕⭕⭕");
      }
    })();
  }, [entryToAdd]);

  // useEffect(() => {
  //   if (entryToAdd) {
  //     setEntries((current) => [entryToAdd, ...current]);
  //   }
  // }, [entryToAdd]);

  const displayAllEntries = entries.map((entry: any) => (
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
