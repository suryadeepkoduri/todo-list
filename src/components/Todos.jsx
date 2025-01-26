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
            <h1 className="font-semibold text-lg">Tasks</h1>
          </div>
          {todos
            .filter((todo) => !todo.status)
            .map((todo) => (
              <div className="flex mb-4 items-center" key={todo.id}>
                <button
                  className="flex-no-shrink p-1 ml-2 mr-2 bg-transparent font-semibold rounded"
                  onClick={() => dispatch(completedTodo(todo.id))}
                >
                  {todo.status ? <SquareCheck color="gray" /> : <Square />}
                </button>

                <div className="w-full">
                  <p
                    className={
                      !todo.status
                        ? "text-grey-darkest"
                        : "text-gray-700 line-through"
                    }
                  >
                    {todo.task}
                  </p>

                  <p className="text-gray-500 text-sm">{todo.description}</p>
                </div>

                <button
                  className="flex-no-shrink p-2 ml-2 border-2 bg-transparent hover:bg-red-500 text-red-700 
                font-semibold hover:text-white py-2 px-4 border-red-500 hover:border-transparent rounded"
                  onClick={() => dispatch(removeTodo(todo.id))}
                >
                  <Trash />
                </button>
              </div>
            ))}

          <hr className="my-2" />
          <h2 className="font-semibold text-lg mb-4 text-gray-600">Completed Tasks</h2>

          {/*Completed Tasks*/}
          {todos
            .filter((todo) => todo.status)
            .map((todo) => (
              <div className="flex mb-4 items-center" key={todo.id}>
                <button
                  className="flex-no-shrink p-1 ml-2 mr-2 bg-transparent font-semibold rounded"
                  onClick={() => dispatch(completedTodo(todo.id))}
                >
                  {todo.status ? <SquareCheck color="gray" /> : <Square />}
                </button>

                <div className="w-full">
                  <p
                    className={
                      !todo.status
                        ? "text-grey-darkest"
                        : "text-gray-700 line-through"
                    }
                  >
                    {todo.task}
                  </p>

                  <p className="text-gray-500 text-sm">{todo.description}</p>
                </div>

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
