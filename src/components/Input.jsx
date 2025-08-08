import React, { useState } from 'react';
import { useTodoStore } from '../Stores/InputStore';
import { AiOutlineDelete } from "react-icons/ai";
import DeleteTodo from './DeleteTodo';
import { CiEdit } from "react-icons/ci";
import { LuSaveAll } from "react-icons/lu";

function Input() {
  const [input, setInput] = useState('');
  const [isDelete, setIsDelete] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null); // <-- holds todo to delete
  const { addTodo, todos, deleteTodo } = useTodoStore();

  const HandleInput = (e) => {
    e.preventDefault();
    addTodo({ id: Date.now(), task: input });
    setInput('');
  };

  const handleDeleteClick = (todo) => {
    setSelectedTodo(todo);
    setIsDelete(true);
  };

  return (
    <div className='flex justify-center items-start min-h-screen bg-gray-100 p-4'>
      <div className='w-full max-w-xl mt-20 flex flex-col gap-12'>

        <form className='flex gap-4' onSubmit={HandleInput}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder='Enter Task...'
            className='flex-grow h-12 border-2 border-black pl-4 rounded-md placeholder:font-semibold focus:outline-none focus:border-cyan-500'
          />
          <button
            type="submit"
            className='h-12 px-6 bg-cyan-500 text-white rounded-md font-bold hover:scale-95 hover:shadow-lg transition-transform'
          >
            Add Task
          </button>
        </form>

        <div className='flex flex-col items-center gap-6'>
          <h1 className='text-2xl font-bold text-gray-800'>Todos List</h1>

          {todos.length === 0 ? (
            <p className='text-red-500 font-semibold'>No tasks added yet.</p>
          ) : (
            <ul className='w-full flex flex-col gap-4'>
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  className='flex justify-between items-center px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md shadow-md transition-all'
                >
                  <span className='truncate'>{todo.task}</span>
                  <button
                    className='hover:text-red-300 transition-colors hover:cursor-pointer'
                    onClick={() => handleDeleteClick(todo)}
                  >
                    <AiOutlineDelete size={20} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

       <DeleteTodo
          isDelete={isDelete}
          set={setIsDelete}
          todo={selectedTodo}
          del={deleteTodo}
        />
    </div>
  );
}

export default Input;
