import React from "react";
import AddEntry from "./components/AddEntry";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import ShowAllEntries from "./components/ShowAllEntries";

function App() {
  return (
    <div className="App">
      Hello REact
      <Header />
      <h1>--------------------</h1>
      <Register />
      <Login />
      <AddEntry />
      <ShowAllEntries />
    </div>
  );
}

export default App;
