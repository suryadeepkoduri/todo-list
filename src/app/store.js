import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice'


const loadState = () => {
    try {
        const serializedState = localStorage.getItem("todos");
        return serializedState ? JSON.parse(serializedState) : undefined;
    } catch (error) {
        console.error("Error loading state form local storage", error);
        return undefined;
    }
};

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("todos", serializedState);
    } catch (error) {
        console.error("Error saving state to local storage", error);
    }
}


const preLoadedState = { todo: loadState() };

export const store = configureStore({
    reducer: { todo: todoReducer },
    preloadedState: preLoadedState
})

store.subscribe(() => {
    saveState(store.getState().todo)
})
