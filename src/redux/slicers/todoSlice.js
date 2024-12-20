import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'

const todoReducer = createSlice({
    name: "rxTodo",
    initialState: {
        todoList: {
        }
    },
    reducers: {
        addTodo: (state, action) => {
            addNewTodo(state, action.payload.todoText);
        },
        enableEditMode: (state, action) => {
            changeEditMode(state, action.payload.id);
        },
        editTodoText: (state, action) => {
            updateTodoText(state, action.payload.id, action.payload.todoText);
        },
        changeTodoStatus: (state, action) => {
            updateTodoStatus(state, action.payload.id);
        },
        deleteTodo: (state, action) => {
            removeTodo(state, action.payload.id);
        }
    }
});

const addNewTodo = (state, todoText) => {
    const id = uuid();
    const todoList = {
        ...state.todoList,
        [id]: {
            "todoText": todoText,
            "editingEnabled": false,
            "isCompleted": false
        }
    }
    state.todoList = todoList;
}

const changeEditMode = (state, id) => {
    state.todoList[id].editingEnabled = !state.todoList[id].editingEnabled
}

const updateTodoText = (state, id, todoText) => {
    state.todoList[id].todoText = todoText
    state.todoList[id].editingEnabled = !state.todoList[id].editingEnabled
}

const updateTodoStatus = (state, id) => {
    state.todoList[id].isCompleted = !state.todoList[id].isCompleted
}

const removeTodo = (state, id) => {
    delete state.todoList[id]
}

export const { addTodo } = todoReducer.actions;
export default todoReducer.reducer;
