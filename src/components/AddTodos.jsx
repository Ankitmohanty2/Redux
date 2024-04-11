import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";


// its used for adding todos
const [input, setInput] = useState("")
// dispatch is used to dispatch actions to the store
const dispatch = useDispatch()

// addTodoHandler is used to add a todo
const addTodoHandler = (e) => {
  e.preventDefault()
  dispatch(addTodo(input))
  setInput("")
}

// AddTodos is a functional component that returns a form with an input field and a button
function AddTodos() {
    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
          <input
            type="text"
            className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Enter a Todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Add Todo
          </button>
        </form>
      )
    }

    export default AddTodos