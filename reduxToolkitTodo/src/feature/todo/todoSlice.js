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
      state.todos=state.todos.filter((todo)=>todo.id!=action.payload
       )
       console.log(action)
     
    },
    updateTodo:(state,action)=>{
      const{id,text}=action.payload
      const utodo=state.todos.find(todo=>todo.id==id)
      
      if(utodo){
        utodo.text=text
        

      }
      
      


       
       
     
    },

  }

})

export const{addTodo, removeTodo, updateTodo}=todoSlice.actions

export default todoSlice.reducer