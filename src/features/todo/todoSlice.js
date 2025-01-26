import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, task: 'Welcome to Todo List', description: 'This is a Simple Todo List app', status: false }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = { id: nanoid(), task: action.payload.task, description: action.payload.description, status: false }
            state.todos.push(newTodo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        completedTodo: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.status = !todo.status;
            }
        },
        updateTodo: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload.id);
            if (todo) {
                todo.text = action.payload.text;
            }
        }
    }
})

export const { addTodo, removeTodo, completedTodo, updateTodo } = todoSlice.actions
export default todoSlice.reducer