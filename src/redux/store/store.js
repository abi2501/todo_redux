import { configureStore } from "@reduxjs/toolkit"
import todoReducer from '../slicers/todoSlice'

const store = configureStore({
    reducer: {
        rxTodo: todoReducer
    }
});
export default store;
