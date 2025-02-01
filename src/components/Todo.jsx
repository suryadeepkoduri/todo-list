import React from "react";
import { useDispatch } from "react-redux";
import {
  completedTodo,
  removeTodo,
  updateTodo,
} from "@/features/todo/todoSlice";
import { Trash, CircleCheck, Circle, PenLine, Ellipsis } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@radix-ui/react-dialog";
import { DialogFooter, DialogHeader } from "./ui/dialog";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { DropdownMenuSeparator } from "./ui/dropdown-menu";

function Todo({ todo }) {
  const dispatch = useDispatch();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditing, setEditing] = useState(false);

  const handleDeleteConfirm = () => {
    dispatch(removeTodo(todo.id));
    setIsDialogOpen(false);
  };

  const handleTaskEdit = (e) => {
    e.preventDefault();
    const editedTask = e.target.querySelector("#task").value;
    if (!editedTask) {
      alert("Task shouldn't be empty");
      return;
    }
    const task = {
      id: todo.id,
      task: editedTask,
      description: e.target.querySelector("#description").value,
    };

    dispatch(updateTodo(task));
    setEditing(false);
  };

  return (
    <>
      <div className="flex mb-4 items-center">
        <button
          className="flex-no-shrink p-1 ml-2 mr-2 bg-transparent font-semibold rounded"
          onClick={() => dispatch(completedTodo(todo.id))}
        >
          {todo.status ? <CircleCheck color="gray" /> : <Circle />}
        </button>

        <div className="w-full">
          <p
            className={
              !todo.status ? "text-grey-darkest" : "text-gray-700 line-through"
            }
          >
            {todo.task}
          </p>

          <p className="text-gray-500 text-sm">{todo.description}</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="ghost">
              <Ellipsis />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-52 bg-white border rounded-md shadow-sm text-sm p-1">
            <DropdownMenuItem>
              <div
                className="hover:bg-gray-100 p-3 flex gap-3 text-gray-900 cursor-pointer rounded-md"
                onClick={() => setEditing(true)}
              >
                <PenLine size={18} /> Edit Task
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div
                className="hover:bg-gray-100 p-3 flex gap-3 text-red-700 cursor-pointer rounded-md"
                onClick={() => setIsDialogOpen(true)}
              >
                <Trash size={18} /> Delete Task
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Delete Dialog */}
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
                The <span className="font-semibold">{todo.task}</span> task will
                be permanently deleted
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

      {/* Edit Dialog */}
      <Dialog open={isEditing} onOpenChange={setEditing} modal={true}>
        <div
          className={
            isEditing ? "fixed inset-0 bg-gray-300 bg-opacity-30 z-10" : ""
          }
        ></div>
        <DialogContent className="flex items-center justify-center fixed top-20 inset-x-0 z-20">
          <div className="w-full max-w-sm p-4 rounded-lg shadow-sm bg-white">
            <DialogHeader>
              <DialogTitle className="font-bold">Edit Task</DialogTitle>
              <form id="edit-task" onSubmit={handleTaskEdit}>
                <div>
                  <Label htmlFor="task">Task</Label>
                  <Input
                    id="task"
                    type="text"
                    placeholder="Task Name"
                    className="my-2"
                    defaultValue={todo.task}
                  />
                </div>

                <div>
                  <Label htmlFor="description">Description</Label>
                  <Input
                    id="description"
                    type="text"
                    placeholder="Description"
                    className="my-2"
                    defaultValue={todo.description}
                  />
                </div>
              </form>
            </DialogHeader>

            <div className="mt-4">
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="secondary">Cancel</Button>
                </DialogClose>
                <Button form="edit-task" type="submit">
                  Done
                </Button>
              </DialogFooter>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default React.memo(Todo);
