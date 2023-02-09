import React from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
  const [tasksList, setTasksList] = React.useState([
    { key: 1, task: "Create To Do List" },
    { key: 2, task: "Learn TypeScript" },
    { key: 3, task: "Learn Redux Toolkit" },
  ]);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <TaskList tasksList={tasksList} />
      </div>
    </div>
  );
}

export default App;
