import { createSlice,nanoid} from "@reduxjs/toolkit";

const initialState={
  todos:[{id:1,
    text:"hello world",
    completed:false
  }
]
}


export const todoSlice=createSlice({
  name:'todo',
  initialState,
  reducers:{
    addTodo:(state,action)=>{
      const todo={
        id:nanoid(),
        text:action.payload,
        completed:false
      }
      console.log(action)
      state.todos.push(todo)
    },
    removeTodo:(state,action)=>{
      state.todos=state.todos.filter((todo)=>todo.id!==action.payload
       )
       console.log(action)
     
    },

  }

})

export const{addTodo, removeTodo}=todoSlice.actions

export default todoSlice.reducer