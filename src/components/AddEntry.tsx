import React from "react";

const AddEntry = () => {
  return (
    <div>
      <h1>Add Entry</h1>
      <label htmlFor="date">Date</label>
      <input type="date" name="date" id="date" />
      <label htmlFor="title">Title</label>
      <input type="text" id="title" name="title" />
      <label htmlFor="text">Text</label>
      <input type="text" id="text" name="text" />

      <input type="submit" value="Add" />
    </div>
  );
};

export default AddEntry;
