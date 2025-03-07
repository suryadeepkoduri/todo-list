import React from "react";
import { useDispatch } from "react-redux";
import {
  removeTodo,
  toggleTodoStatus,
  updateTodo,
} from "@/features/todo/todoSlice";
import {
  Trash,
  CircleCheck,
  Circle,
  PenLine,
  Ellipsis,
  CalendarIcon,
  X,
} from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "./ui/dialog";
import { DialogFooter, DialogHeader } from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Badge } from "./ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";

function Todo({ todo }) {
  const dispatch = useDispatch();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditing, setEditing] = useState(false);
  const [date, setDate] = useState(() => {
    if (todo.date) {
      return new Date(todo.date);
    } else {
      return null;
    }
  });

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
      date: date ? date.toISOString() : null,
    };

    dispatch(updateTodo(task));
    setEditing(false);
  };

  return (
    <>
      <div className="flex mb-4 items-start">
        <button
          className="flex-no-shrink p-1 mr-1"
          onClick={() => dispatch(toggleTodoStatus(todo.id))}
        >
          {todo.status ? (
            <CircleCheck color="gray" size={22} />
          ) : (
            <Circle size={22} />
          )}
        </button>

        <div className="w-full">
          <p
            className={
              !todo.status
                ? "text-foreground"
                : "text-muted-foreground line-through"
            }
          >
            {todo.task}
          </p>

          <p className="text-muted-foreground text-sm">{todo.description}</p>
          {todo.date && (
            <Badge variant="secondary" className="mt-2 rounded-sm">
              {new Date(todo.date).toDateString()}
            </Badge>
          )}
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="ghost">
              <Ellipsis />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-52">
            <DropdownMenuItem onClick={() => setEditing(true)}>
              <div className="flex gap-3 cursor-pointer p-1">
                <PenLine size={18} /> Edit Task
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setIsDialogOpen(true)}>
              <div className="flex gap-3 text-destructive cursor-pointer p-1">
                <Trash size={18} /> Delete Task
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Delete Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen} modal={true}>
        <DialogContent>
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
        </DialogContent>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog open={isEditing} onOpenChange={setEditing} modal={true}>
        <DialogContent>
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
            <div className="flex">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost">
                    {date ? date.toDateString() : <CalendarIcon />}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    disabled={(d) =>
                      d < new Date(new Date().setHours(0, 0, 0, 0))
                    }
                  />
                </PopoverContent>
              </Popover>
              {date && (
                <Button variant="ghost" onClick={() => setDate(null)}>
                  <X />
                </Button>
              )}
            </div>
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
        </DialogContent>
      </Dialog>
    </>
  );
}

export default React.memo(Todo);
