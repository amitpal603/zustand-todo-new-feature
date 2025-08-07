import React from 'react';
import { createPortal } from 'react-dom';

function DeleteTodo({ isDelete, set, todo, del }) {
  const modal = document.getElementById('portal');
  if (!modal || !isDelete) return null;

  const handleDelete = () => {
    del(todo.id);   // Call delete function with todo ID
    set(false);     // Close modal
  };

  return createPortal(
    <div
      onClick={() => set(false)}
      className='fixed inset-0  flex justify-center items-center z-50'
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className='w-80 bg-white rounded-md flex flex-col shadow-lg gap-7 p-5'
      >
        <p className='text-center text-lg font-medium'>
          Are you sure you want to <span className='text-red-500 font-bold'>delete</span> this todo?
        </p>

        <div className='flex gap-3 justify-end'>
          <button
            onClick={() => set(false)}
            className='px-4 py-2 border-2 border-black rounded-sm hover:rounded-full hover:bg-green-500 hover:text-white transition'
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className='px-4 py-2 border-2 border-black rounded-sm hover:rounded-full hover:bg-red-500 hover:text-white transition'
          >
            Delete
          </button>
        </div>
      </div>
    </div>,
    modal
  );
}

export default DeleteTodo;
