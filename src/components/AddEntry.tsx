import React from "react";
// import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

type Entry = {
  date: string;
  title: string;
  text: string;
};

const AddEntry = () => {
  // const navigate = useNavigate();
  const { register, handleSubmit } = useForm<Entry>();

  const onSubmit = handleSubmit((data) => {
    // alert(JSON.stringify(data));
    console.log(data);
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
