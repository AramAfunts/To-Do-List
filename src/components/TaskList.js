import React from "react";

export default function TaskList({ tasksList, onDeleteTask, onCompleteTask }) {
  return tasksList.map((taskItem) => (
    <div key={taskItem.key} className="task">
      <h2>{taskItem.task}</h2>
      <ul>
        <li>
          <img
            src="/img/uncompleted.png"
            alt="uncompleted"
            width={20}
            height={20}
            onClick={() => {
              onCompleteTask(taskItem);
              console.log(`Task '${taskItem.task}' was completed.`)
            }}
          />
        </li>
        <li>
          <img
            src="/img/trash.png"
            alt="trash"
            width={20}
            height={20}
            onClick={() => {
              onDeleteTask(taskItem);
              console.log(`Item #${taskItem.key} was deleted.`);
            }}
          />
        </li>
      </ul>
    </div>
  ));
}
