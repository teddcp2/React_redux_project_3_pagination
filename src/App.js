import React from "react";
import "./styles.css";
import Lists from "./components/lists";
import Pagination from "./components/pagination";
import Dropdown from "./components/dropdown";

export default function App() {
  return (
    <div className="App ui container segment middle">
      <h2 className="ui header content center">Project 3 [react + redux ] </h2>
      <div className="separator">
        <span>
          Rows - <Dropdown />
        </span>
        <Pagination />
      </div>
      <Lists />
    </div>
  );
}
