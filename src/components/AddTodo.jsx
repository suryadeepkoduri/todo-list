import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim() == "") {
      alert("Enter a valid input");
      return;
    }
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <>
      <div className="flex justify-center">
        <form onSubmit={addTodoHandler} className="w-full max-w-sm">
          <div className="flex items-center border-b border-teal-500 py-2">
            <input
              type="text"
              placeholder="write Todo item"
              id="inputField"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            />
            <button
              type="submit"
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            >
              ADD
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddTodo;
