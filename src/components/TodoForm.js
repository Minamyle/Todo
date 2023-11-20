import React,{useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const[value, setValue] =useState("");
  
    const handleSubmit = e =>{
        e.preventDefault();

        addTodo(value);

        setValue("");
    }
  return (
   <form action="" className='mb-5' onSubmit={handleSubmit}>
    <input type="text" className='todo-inputs p-5 rounded' placeholder='what is the task today?' value= {value} onChange={(e)=>setValue(e.target.value)}/>
    <button type='submit' className='todo-btm  border border-gray-300 rounded  p-5 font-bold'>Add Task</button>
   </form>
  )
}
