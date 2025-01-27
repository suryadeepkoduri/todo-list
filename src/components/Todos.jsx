import { useSelector, useDispatch } from "react-redux";
import { removeTodo, completedTodo } from "../features/todo/todoSlice";
import { Trash, Square, SquareCheck } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@radix-ui/react-dialog";
import { DialogFooter, DialogHeader } from "./ui/dialog";
import { useState } from "react";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState({});
  const dispatch = useDispatch();

  const handleDelete = (task) => {
    setSelectedTask(task);
    setIsDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (selectedTask) {
      dispatch(removeTodo(selectedTask.id));
      setIsDialogOpen(false);
      setSelectedTask({});
    }
  };

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

                <Button
                  className="flex-no-shrink p-2 ml-2  py-2 px-4"
                  onClick={() => handleDelete(todo)}
                  variant="destructive"
                >
                  <Trash />
                </Button>
              </div>
            ))}

          <Separator className="my-4" />
          <h2 className="font-semibold text-lg mb-4 text-gray-600">
            Completed Tasks
          </h2>

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

                <Button
                  className="flex-no-shrink p-2 ml-2  py-2 px-4"
                  onClick={() => handleDelete(todo)}
                  variant="destructive"
                >
                  <Trash />
                </Button>
              </div>
            ))}
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen} modal={true}>
        <div
          className={
            isDialogOpen ? "fixed inset-0 bg-gray-300 bg-opacity-30 z-10" : ""
          }
        ></div>
        <DialogContent className="flex items-center justify-center fixed top-20 inset-x-0 z-20">
          <div className="w-full max-w-sm p-4 rounded-lg shadow-sm bg-white">
            <DialogHeader>
              <DialogTitle className="font-bold">Delete Task?</DialogTitle>
              <DialogDescription>
                The <span className="font-semibold">{selectedTask.task}</span>{" "}
                task will be permanently deleted
              </DialogDescription>
            </DialogHeader>

            <div className="mt-4">
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="secondary">Cancel</Button>
                </DialogClose>
                <Button variant="destructive" onClick={handleDeleteConfirm}>
                  Delete
                </Button>
              </DialogFooter>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Todos;
