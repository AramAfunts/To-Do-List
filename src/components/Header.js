import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <h1>To Do List</h1>
      </Link>
      <ul>
        <li>
          <Link to="/completed">
            <img
              src="img/uncompleted.png"
              alt="completed"
              width={20}
              height={20}
            />
          </Link>
        </li>
        <li>
          <Link to="/trash">
            <img src="img/trash.png" alt="trash" width={20} height={20} />
          </Link>
        </li>
      </ul>
    </header>
  );
}
