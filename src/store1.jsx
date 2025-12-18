import { configureStore } from "@reduxjs/toolkit";
import getReducer from './ToDoList/TodoSlicer'
export const store1=configureStore({
    reducer:{
        //add your reducer here
        todoReducer:getReducer
    }
});
