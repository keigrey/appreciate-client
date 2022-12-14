import axios from "axios";
import React, { useEffect, useState } from "react";
import Entry from "./Entry";

// const SERVER_URL = "https://app-reciate.herokuapp.com";
const SERVER_URL = "http://localhost:8080";

// const SERVER_URL = process.env.PORT
//   ? "https://app-reciate.herokuapp.com/"
//   : "http://localhost:8080";
// const accessToken = localStorage.getItem("JWToken");
console.log("π’π’π’π’π’π’π’π’π’π’π’π’π’π’π’π’π’π’π’π’");
console.log(process.env.PORT);

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
        console.log("β­β­β­ERRORβ­β­β­");
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
      date={entry.date.substring(0, 10).split("-").join("/")}
      title={entry.title}
      text={entry.text}
    />
  ));

  return (
    <div className="">
      <div className="flex flex-col-reverse">{displayAllEntries}</div>
    </div>
  );
};

export default ShowAllEntries;
