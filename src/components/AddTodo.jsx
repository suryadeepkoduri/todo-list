import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (task.trim() == "") {
      alert("Enter a valid input");
      return;
    }

    const newTask = {
      task: task,
      description: description,
    };
    dispatch(addTodo(newTask));
    setTask("");
    setDescription("");
  };

  return (
    <>
      <div className="flex justify-center">
        <form
          className="w-full max-w-sm flex flex-col p-3 bg-white shadow-md rounded-md m-3"
          onSubmit={addTodoHandler}
        >
          <input
            type="text"
            placeholder="Winter is Coming"
            className="mb-2 h-10 border border-black focus:outline-none rounded-md p-2 font-medium text-lg"
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />
          <input
            type="text"
            placeholder="Description"
            className="mb-2 h-8 p-2 border border-black rounded-md text-gray-500 focus:outline-none text-base"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <button
            type="submit"
            className="bg-green-500 p-2 rounded-md  text-white focus:outline-none hover:bg-green-600  "
          >
            Add Task
          </button>
        </form>
      </div>
    </>
  );
}

export default AddTodo;
