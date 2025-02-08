import { useSelector } from "react-redux";
import { Separator } from "@radix-ui/react-separator";
import Todo from "./Todo";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

function Todos() {
  const todos = useSelector((state) => state.todo.todos);
  const activeTodos = todos.filter((todo) => !todo.status);
  const completedTodos = todos.filter((todo) => todo.status);

  return (
    <>
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <Card className="m-4 w-full lg:w-3/4 lg:max-w-lg p-6">
          <div className="mb-4">
            <h1 className="font-semibold text-lg">
              Tasks<Badge className="ml-3">{activeTodos.length}</Badge>
            </h1>
          </div>
          {activeTodos.map((todo) => (
            <Todo todo={todo} key={todo.id} />
          ))}

          {completedTodos.length > 0 && (
            <div>
              <Separator className="my-4 border" />
              <h2 className="font-semibold text-lg mb-4 text-muted-foreground">
                Completed Tasks{" "}
                <Badge variant="secondary" className="ml-3">
                  {completedTodos.length}
                </Badge>
              </h2>
            </div>
          )}

          {/*Completed Tasks*/}
          {completedTodos.map((todo) => (
            <Todo todo={todo} key={todo.id} />
          ))}
        </Card>
      </div>
    </>
  );
}

export default Todos;
