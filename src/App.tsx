import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import WelcomePage from "./components/WelcomePage";

function App() {
  return (
    // <div className="App">
    //   Hello REact
    //   <Header />
    //   <h1>--------------------</h1>
    //   <Register />
    //   <Login />
    //   <AddEntry />
    //   <ShowAllEntries />
    // </div>
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
