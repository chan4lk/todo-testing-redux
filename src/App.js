import React, { createRef } from 'react';
import './tailwind.generated.css';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './+state/actions';
import { TodoItem } from './TodoItem';

function App() {
  const dispatch = useDispatch();
  const ref = createRef();
  /**
   * @type {{label: string, completed: boolean}[]} todos The todos
   */
  const todos = useSelector((state) => state.todos);

  /**
   * on Add item
   * @param {React.FormEvent<HTMLButtonElement>} event The submit event
   */
  function addTodoItem(event) {
    event.preventDefault();
    event.stopPropagation();
    dispatch(addTodo(ref.current.value));
    ref.current.value = '';
    return false;
  }
  return (
    <div className="">
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <h1 className="text-grey-darkest">Todo List</h1>
            <form onSubmit={addTodoItem} className="flex mt-4">
              <input
                ref={ref}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-800"
                placeholder="Add Todo"
              />
              <button
                type="submit"
                className="flex-no-shrink p-2 border-2 rounded text-teal-500 border-teal-500 hover:text-teal-800 hover:bg-teal-500"
              >
                Add
              </button>
            </form>
          </div>
          <div>
            {todos.map((todo, index) => {
              return TodoItem(todo, index, dispatch);
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
