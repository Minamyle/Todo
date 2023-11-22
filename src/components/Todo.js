import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  const handleToggleComplete = () => {
    toggleComplete(task.id);
  };

  return (
    <div
      className={`todo flex items-center justify-between bg-white rounded p-5 mb-5 ${
        task.completed ? "completed" : ""
      }`}
    >
      <p
        onClick={handleToggleComplete}
        className={`${task.completed ? "line-through" : ""}`}
      >
        {task.task}
      </p>
      <div className="flex flex-row">
        <FaEdit
          className="cursor-pointer w-[100%]"
          onClick={() => editTodo(task.id)}
        />
        <MdDeleteForever
          className="cursor-pointer w-[100%]"
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};
