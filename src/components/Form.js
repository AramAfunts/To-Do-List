import React from "react";

export default function Form({ handleSubmit, taskValue, handleTaskChange }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="valueInput"
        type="text"
        value={taskValue}
        onChange={handleTaskChange}
      />
      <input className="submitInput" type="submit" value="Add Task" />
    </form>
  );
}
