import React from 'react';
import { toggleCompleted, removeTodo } from './+state/actions';
import { useDispatch } from 'react-redux';
export function TodoItem({todo, index}) {
    const dispatch = useDispatch();
    return <div key={todo.label + index} className="flex mb-4 items-center">
      <p className={`${todo.completed ? 'line-through text-green-500' : 'text-grey-800'} w-full `}>{todo.label}</p>
      <button onClick={() => dispatch(toggleCompleted(index))} className={`flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-green-100 text-green-500 border-green-500 hover:bg-green-500`}>
        {!todo.completed ? 'Done' : 'Undone'}
      </button>
      <button onClick={() => dispatch(removeTodo(index))} className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-red-100 hover:bg-red-500">
            Remove
      </button>
    </div>;
  }