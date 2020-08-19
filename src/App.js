import React from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import CardList from "./components/CardList";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <CardList />
    </div>
  );
}
