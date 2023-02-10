import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <h1>To Do List</h1>
      </Link>
      <Link to="/trash">
        <img src="/img/trash.png" alt="trash" width={20} height={20} />
      </Link>
    </header>
  );
}
