import React, { useEffect, useState } from "react";
import Entry from "./Entry";

const ShowAllEntries = () => {
  const [entries, setEntries] = useState<
    {
      date: string;
      title: string;
      text: string;
    }[]
  >([]);

  const list = [
    {
      date: "2022-08-22",
      title: "asdas",
      text: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    },
    {
      date: "2016-01-06",
      title: "NExt",
      text: "ASDKLASLKDHALKSDHJLKASHJD",
    },
    {
      date: "2036-10-15",
      title: "mmmmmm",
      text: "sad234234234234234",
    },
  ];

  useEffect(() => {
    setEntries(list);
  }, []);

  const displayAllEntries = entries.map((entry) => (
    <Entry date={entry.date} title={entry.title} text={entry.text} />
  ));

  return (
    <div>
      <h1>Show all</h1>
      <div>{displayAllEntries}</div>
    </div>
  );
};

export default ShowAllEntries;
