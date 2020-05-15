import React from 'react';
import './tailwind.generated.css';
import './App.css';
function App() {
  return (
    <div className="">
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <h1 className="text-grey-darkest">Todo List</h1>
            <div className="flex mt-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-800"
                placeholder="Add Todo"
              />
              <button className="flex-no-shrink p-2 border-2 rounded text-teal-500 border-teal-500 hover:text-teal-800 hover:bg-teal-500">
                Add
              </button>
            </div>
          </div>
          <div>
            <div className="flex mb-4 items-center">
              <p className="w-full text-grey-darkest">
                Add another component to Tailwind Components
              </p>
              <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-green-800 text-green-500 border-green-500 hover:bg-green-500">
                Done
              </button>
              <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-red-800 hover:bg-red-500">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
