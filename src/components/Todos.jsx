import { useSelector } from "react-redux";
import { Separator } from "@radix-ui/react-separator";
import Todo from "./Todo";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const activeTodos = todos.filter((todo) => !todo.status);
  const completedTodos = todos.filter((todo) => todo.status);

  return (
    <>
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <h1 className="font-semibold text-lg">Tasks</h1>
          </div>
          {activeTodos
            .map((todo) => (
              <Todo todo={todo} key={todo.id} />
            ))}

          <Separator className="my-4" />
          <h2 className="font-semibold text-lg mb-4 text-gray-600">
            Completed Tasks
          </h2>

          {/*Completed Tasks*/}
          {completedTodos
            .map((todo) => (
              <Todo todo={todo} key={todo.id} />
            ))}
        </div>
      </div>
    </>
  );
}

export default Todos;
