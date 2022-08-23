import React from "react";
// import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

type Entry = {
  id: number;
  user_id: number;
  date: string;
  title: string;
  text: string;
};

const SERVER_URL = "https://app-reciate.herokuapp.com";
// const SERVER_URL = process.env.PORT
//   ? "https://app-reciate.herokuapp.com"
//   : "http://localhost:8080";

const AddEntry = ({ setEntryToAdd, setEntries, entries }: any) => {
  // const navigate = useNavigate();
  const { register, handleSubmit } = useForm<Entry>();

  const onSubmit = handleSubmit((data) => {
    const accessToken = localStorage.getItem("JWToken");
    // setEntryToAdd(data);
    axios
      .post(`${SERVER_URL}/entry`, data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(() => {
        setEntryToAdd(data);
      });
  });

  return (
    <div>
      <h1>Add Entry</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="date">Date</label>
        <input
          {...register("date")}
          type="date"
          name="date"
          id="date"
          defaultValue={new Date().toISOString().split("T")[0]}
        />
        <label htmlFor="title">Title</label>
        <input
          {...register("title")}
          type="text"
          id="title"
          name="title"
          required
        />
        <label htmlFor="text">Text</label>
        <input
          {...register("text")}
          type="text"
          id="text"
          name="text"
          required
        />

        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddEntry;
