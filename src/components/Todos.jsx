import { useSelector, useDispatch } from "react-redux";
import { removeTodo, completedTodo } from "../features/todo/todoSlice";
import { Trash, Square, SquareCheck } from "lucide-react";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <h1 className="text-grey-darkest">Todo List</h1>
          </div>
          {todos.map((todo) => (
            <div className="flex mb-4 items-center" key={todo.id}>
              <button
                className="flex-no-shrink p-1 ml-2 mr-2 bg-transparent font-semibold rounded"
                onClick={() => dispatch(completedTodo(todo.id))}
              >
                {todo.status ? <SquareCheck color="gray"/> : <Square />}
              </button>

              <p className={!todo.status?"w-full text-grey-darkest":"w-full text-gray-700 line-through"}>{todo.text}</p>
              
              <button
                className="flex-no-shrink p-2 ml-2 border-2 bg-transparent hover:bg-red-500 text-red-700 
                font-semibold hover:text-white py-2 px-4 border-red-500 hover:border-transparent rounded"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                <Trash />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Todos;
