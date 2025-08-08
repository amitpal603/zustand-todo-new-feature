import {create} from 'zustand'


export const   useTodoStore = create((set) => ({
    todos : [],
    complete: false,

    addTodo: (value) => set((state) => ({todos: [...state.todos,value]})),
    deleteTodo: (id) => set((state) => ({todos : state.todos.filter((todo) => todo.id !== id)})),
    upDate:(id,value) => set((state) => ({
        todos : state.todos.map((todo) => todo.id === id ? {...state,...value} : todo)
    }))
}))

