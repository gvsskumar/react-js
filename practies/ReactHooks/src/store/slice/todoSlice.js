import {createSlice} from "@reduxjs/toolkit";
let id=0;
const todoSlice = createSlice({
    name:'todo',
    initialState:[],
    reducers:{
        getTodoTask:(state,action)=>{
             
        },
        addTodoTask:(state,action)=>{
            state.push({id:++id,
                title:action.payload.title
                ,status:false})
        },
        editTodoTask:(state,action)=>{
             state.map((todo)=>todo.id===action.payload.id?{id:action.payload.id,title:action.payload.title}:todo)
            
        },
        deleteTodoTask:(state,action)=>{
            const index = state.findIndex((todo)=>todo.id===action.payload.id)
            state.splice(index,1);
        }
    }
})
export const {getTodoTask,addTodoTask,editTodoTask,deleteTodoTask} = todoSlice.actions;
export default todoSlice.reducer;