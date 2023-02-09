import React from 'react'

export default function TaskList({ tasksList }) {
  return (
   tasksList.map((taskItem) => 
        <div key={taskItem.key} className="task">
        <h2>{taskItem.task}</h2>
        <ul>
          <li>
            <img src="/img/uncompleted.png" alt="uncompleted" width={20} height={20} />
          </li>
          <li>
            <img src="/img/trash.png" alt="trash" width={20} height={20} />
          </li>
        </ul>
      </div>
    )
  )
}
