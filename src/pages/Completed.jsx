import React from "react";
import Header from "../components/Header";

export default function Completed({ completedItems }) {
  return (
    <div className="wrapper">
      <Header />
      {completedItems.length > 0 ? (
        completedItems.map((item) => (
          <div key={item.key} className="completedTask">
            <h2>{item.task}</h2>
            <img
              src="img/complete.png"
              alt="completed"
              width={20}
              height={20}
            />
          </div>
        ))
      ) : (
        <div className="emptyCompletedList">
          <h1>You have not completed any tasks yet.</h1>
          <img src="img/empty.png" alt="empty" width={200} height={200} />
        </div>
      )}
    </div>
  );
}
