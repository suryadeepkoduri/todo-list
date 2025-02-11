import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, task: 'Welcome to Karma', description: 'A Todo List app', status: false, date: null }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const { task, description, date = null } = action.payload;
            state.todos.push(
                {
                    id: nanoid(),
                    task,
                    description,
                    status: false,
                    date
                }
            );
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        toggleTodoStatus: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.status = !todo.status;
            }
        },
        updateTodo: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload.id);
            if (todo) {
                todo.task = action.payload.task;
                todo.description = action.payload.description;
                todo.date = action.payload.date;
            }
        }
    }
})

export const { addTodo, removeTodo, toggleTodoStatus, updateTodo } = todoSlice.actions
export default todoSlice.reducer