import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Trash from "./pages/Trash";
import Completed from "./pages/Completed";

function App() {
  const [tasksList, setTasksList] = React.useState([
    { key: 1, task: "Create To Do List" },
    { key: 2, task: "Learn TypeScript" },
    { key: 3, task: "Learn Redux Toolkit" },
  ]);

  const [deletedItems, setDeletedItems] = React.useState([]);
  const [completedItems, setCompletedItems] = React.useState([]);

  const onDeleteTask = (deletedTask) => {
    setTasksList((prev) => prev.filter((task) => task.key !== deletedTask.key));
    setDeletedItems((prev) => [...prev, deletedTask]);
  };

  const onCompleteTask = (completedTask) => {
    setTasksList((prev) => prev.filter((task) => task.key !== completedTask.key));
    setCompletedItems((prev) => [...prev, completedTask]);
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
