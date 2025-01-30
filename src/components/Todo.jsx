import React from "react";
import { useDispatch } from "react-redux";
import { completedTodo, removeTodo } from "@/features/todo/todoSlice";
import { Trash, CircleCheck,Circle, PenLine } from "lucide-react";
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

function Todo({ todo }) {
  const dispatch = useDispatch();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDeleteConfirm = () => {
    dispatch(removeTodo(todo.id));
    setIsDialogOpen(false);
  };

  return (
    <>
      <div className="flex mb-4 items-center">
        <button
          className="flex-no-shrink p-1 ml-2 mr-2 bg-transparent font-semibold rounded"
          onClick={() => dispatch(completedTodo(todo.id))}
        >
          {todo.status ? <CircleCheck color="gray" /> : <Circle/>}
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

        <Button
          className="flex-no-shrink p-2 ml-2  py-2 px-4"
          variant="secondary"
        >
          <PenLine/>
        </Button>

        <Button
          className="flex-no-shrink p-2 ml-2  py-2 px-4"
          onClick={() => setIsDialogOpen(true)}
          variant="destructive"
        >
          <Trash />
        </Button>
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
    </>
  );
}

export default React.memo(Todo);
