import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className='todo flex items-center justify-between bg-white rounded p-5 mb-5'>
      <p
        onClick={() => toggleComplete(task.id)}
        className={`${task.complete ? 'completed' : ''}`}
      >
        {task.task}
      </p>
      <div className='space-x-5'>
        <FontAwesomeIcon
          className='cursor-pointer'
          icon={faPenSquare}
          onClick={() => editTodo(task.id)}
        />
        <FontAwesomeIcon
          className='cursor-pointer'
          icon={faTrash}
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};
