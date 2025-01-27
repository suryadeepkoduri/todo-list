import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Label } from "./ui/label";

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
      <div className="flex justify-center mt-2">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Add Task</CardTitle>
            <CardDescription>Add task to complete it later</CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={addTodoHandler} id="add-task">
              <div>
                <Label htmlFor="task">Task</Label>
                <Input
                  id="task"
                  type="text"
                  placeholder="Add Task"
                  className="my-2"
                  onChange={(e) => setTask(e.target.value)}
                  value={task}
                />
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  type="text"
                  placeholder="Add Description"
                  className="my-2"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                />
              </div>
            </form>
          </CardContent>

          <CardFooter className="flex float-end">
            <Button form="add-task" type="submit">
              Add Task
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default AddTodo;
