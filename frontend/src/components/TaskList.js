import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))
      ) : (
        <p>No tasks to show</p>
      )}
    </>
  );
};

export default TaskList;
