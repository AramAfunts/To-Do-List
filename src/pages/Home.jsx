import React from "react";
import Header from "../components/Header";
import TaskList from "../components/TaskList";
import Form from "../components/Form";
import Modal from "../components/Modal";

export default function Home({
  tasksList,
  onDeleteTask,
  onCompleteTask,
  taskValue,
  handleTaskChange,
  handleSubmit,
  isModalOpened,
  onCloseModal,
}) {
  return (
    <div className="wrapper">
      <Header />
      {isModalOpened && <Modal onCloseModal={onCloseModal} />}
      <Form
        taskValue={taskValue}
        handleTaskChange={handleTaskChange}
        handleSubmit={handleSubmit}
      />
      {tasksList.length > 0 ? (
        <TaskList
          tasksList={tasksList}
          onDeleteTask={onDeleteTask}
          onCompleteTask={onCompleteTask}
        />
      ) : (
        <div className="emptyTasksList">
          <h1>You don't have any tasks to do.</h1>
          <img src="img/good.png" alt="good" width={200} height={200} />
        </div>
      )}
    </div>
  );
}
