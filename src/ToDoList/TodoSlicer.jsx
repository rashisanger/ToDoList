import { createSlice,nanoid } from "@reduxjs/toolkit"

const initialState={
    todoitem:JSON.parse(localStorage.getItem("todos"))||[{id:1,text:"Your to do list"}]
}
export const TodoSlicer=createSlice({
    name:'todoexample',
    initialState,
    reducers:{
        addtodo:(state,action)=>{
            let newTodoitem={
                id:nanoid(),
                text:action.payload
            }
            state.todoitem.push(newTodoitem);
            localStorage.setItem("todos",JSON.stringify(state.todoitem));
        },
        deletetodo:(state,action)=>{
            state.todoitem=state.todoitem.filter((u)=>u.id!=action.payload)
            localStorage.setItem("todos",JSON.stringify(state.todoitem));
        }
    }
})
export const {addtodo,deletetodo}=TodoSlicer.actions;
export default TodoSlicer.reducer;