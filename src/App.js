import React from "react";
import TaskList from "./components/TaskList";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Trash from "./pages/Trash";

function App() {
  const [tasksList, setTasksList] = React.useState([
    { key: 1, task: "Create To Do List" },
    { key: 2, task: "Learn TypeScript" },
    { key: 3, task: "Learn Redux Toolkit" },
  ]);

  const [deletedItems, setDeletedItems] = React.useState([]);

  const onDeleteTask = (deletedTask) => {
    setTasksList((prev) => prev.filter((task) => task.key !== deletedTask.key));
    setDeletedItems((prev) => [...prev, deletedTask]);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path=""
          element={
            <Home
              taskList={
                <TaskList tasksList={tasksList} onDeleteTask={onDeleteTask} />
              }
            />
          }
        />
        <Route path="/trash" element={<Trash deletedItems={deletedItems}/>} />
      </Routes>
    </div>
  );
}

export default App;
