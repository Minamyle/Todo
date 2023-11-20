import React,{useState} from 'react';

export const EditTodoForm = ({editTodo, task}) => {
    const[value, setValue] =useState(task.task);
  
    const handleSubmit = e =>{
        e.preventDefault();

        editTodo(value, task.id);

        setValue("");
    }
  return (
   <form action="" className='todoForm mb-5' onSubmit={handleSubmit}>
    <input type="text" className='todo-inputs p-3 rounded' placeholder='Update Task' value= {value} onChange={(e)=>setValue(e.target.value)}/>
    <button type='submit' className='todo-btm  p-3 border border-gray-300 rounded'>update Task</button>
   </form>
  )
}
