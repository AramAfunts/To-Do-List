import React from "react";
import Header from "../components/Header";

export default function Trash({ deletedItems }) {
  return (
    <div className="wrapper">
      <Header />
      {deletedItems.map((item) => (
        <div key={item.key} className="deletedTask">
          <h2>{item.task}</h2>
        </div>
      ))}
    </div>
  );
}
