import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: JSON.parse(localStorage.getItem('todos')) || "No todo Present add one"
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            };
            state.todos.push(todo);
            // Save the updated todos list to localStorage
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            // Save the updated todos list to localStorage
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
    }
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
