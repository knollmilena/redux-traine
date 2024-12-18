import { configureStore } from '@reduxjs/toolkit';

let countId = 0;

const defaultState = [
    {
        id: countId++,
        text: 'Помыть кота',
        status: true,
    },
];

const todoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: countId++,
                    text: action.text,
                    status: false,
                },
            ];
        case 'DELETE_TODO':
            return state.filter((todo) => todo.id !== action.id);
        case 'CHANGE_DONE':
            return state.map((todo) =>
                todo.id === action.id ? { ...todo, status: !todo.status } : todo
            );
        default:
            return state;
    }
};

export const addTodoItem = (str) => {
    return { type: 'ADD_TODO', text: str };
};

export const delTodo = (id) => {
    return { type: 'DELETE_TODO', id };
};

export const changeStatus = (id) => {
    return { type: 'CHANGE_DONE', id };
};

export const store = configureStore({
    reducer: todoReducer,
    devTools: true,
});
