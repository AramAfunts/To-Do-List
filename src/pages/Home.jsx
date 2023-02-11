import React from "react";
import Header from "../components/Header";
import TaskList from "../components/TaskList";

export default function Home({ tasksList, onDeleteTask, onCompleteTask }) {
  return (
    <div className="wrapper">
      <Header />
      {tasksList.length > 0 ? (
        <TaskList
          tasksList={tasksList}
          onDeleteTask={onDeleteTask}
          onCompleteTask={onCompleteTask}
        />
      ) : (
        <div className="emptyTasksList">
          <h1>You don't have any tasks to do.</h1>
          <img src="/img/good.png" alt="good" width={200} height={200} />
        </div>
      )}
    </div>
  );
}
