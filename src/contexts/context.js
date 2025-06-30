import { createContext,useContext } from "react";

export const Todocontext = createContext({
    todos :[
        {
            id : 1,
            todo : "",
            isCompleted : false
        },
    ],
    addTodo : (todo)=>{},
    updateTodo : (todo,id)=>{},
    deleteTodo : (id)=>{},
    toggleCompleted : (id)=>{}
});

export const TodoProvider = Todocontext.Provider;

export function useTodo(){
    return useContext(Todocontext);
}