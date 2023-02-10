import React from "react";
import Header from "../components/Header";

export default function Home({ taskList }) {
  return (
    <div className="wrapper">
      <Header />
      {taskList}
    </div>
  );
}
