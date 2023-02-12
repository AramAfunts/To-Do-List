import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Trash from "./pages/Trash";
import Completed from "./pages/Completed";

function App() {
  const [tasksList, setTasksList] = React.useState([]);
  const [deletedItems, setDeletedItems] = React.useState([]);
  const [completedItems, setCompletedItems] = React.useState([]);
  const [taskValue, setTaskValue] = React.useState("");

  const onDeleteTask = (deletedTask) => {
    setTasksList((prev) => prev.filter((task) => task.key !== deletedTask.key));
    setDeletedItems((prev) => [...prev, deletedTask]);
  };

  const onCompleteTask = (completedTask) => {
    setTasksList((prev) =>
      prev.filter((task) => task.key !== completedTask.key)
    );
    setCompletedItems((prev) => [...prev, completedTask]);
  };

  const handleTaskChange = (e) => {
    setTaskValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tasksList.length > 0) {
      if (taskValue.length <= 40 && taskValue.length > 0) {
        let newTaskKey = Math.max(...tasksList.map((task) => task.key)) + 1;
        let newTask = { key: newTaskKey, task: taskValue };
        setTasksList((prev) => [...prev, newTask]);
        setTaskValue("");
      } else {
        setTaskValue("");
        alert("Task length must be more than 0 and less than 40 symbols.");
      }
    } else {
      if (taskValue.length <= 40 && taskValue.length > 0) {
        let newTaskKey = 1;
        let newTask = { key: newTaskKey, task: taskValue };
        setTasksList((prev) => [...prev, newTask]);
        setTaskValue("");
      } else {
        setTaskValue("");
        alert("Task length must be more than 0 and less than 40 symbols.");
      }
    }
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path=""
          element={
            <Home
              tasksList={tasksList}
              onDeleteTask={onDeleteTask}
              onCompleteTask={onCompleteTask}
              taskValue={taskValue}
              handleTaskChange={handleTaskChange}
              handleSubmit={handleSubmit}
            />
          }
        />
        <Route
          path="/completed"
          element={<Completed completedItems={completedItems} />}
        />
        <Route path="/trash" element={<Trash deletedItems={deletedItems} />} />
      </Routes>
    </div>
  );
}

export default App;
