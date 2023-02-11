import React from "react";
import Header from "../components/Header";

export default function Trash({ deletedItems }) {
  return (
    <div className="wrapper">
      <Header />
      {deletedItems.length > 0 ? (
        deletedItems.map((item) => (
          <div key={item.key} className="deletedTask">
            <h2>{item.task}</h2>
          </div>
        ))
      ) : (
        <div className="emptyDeletedList">
          <h1>You don't have any deleted tasks.</h1>
          <img src="/img/empty.png" alt="empty" width={200} height={200} />
        </div>
      )}
    </div>
  );
}
