import { createContext, useReducer, useContext } from 'react';

// This context will be used to share state/variables across multiple components
const TodoContext = createContext();

// This is the provider component that will wrap around any components needing access to the shared state.
// Example usage: 
// <TodoProvider>
//   <Add />
//   <TodoList />
// </TodoProvider>
// All components wrapped inside <TodoProvider> will have access to the shared state via this context.
const TodoProvider = ({ children }) => {

    // Define the shareable state
    const intialState = {
        todos: [] // State that will be across on the 3 components

    }

    // For each of the component define the method/action
    // The data passed from the component [payload]

    // Add - 'ADD_TODO' , new TodoItem as object to be added inside the state
    // TodoList - > simply read value from the state
    // TodoItem -  'REMOVE_TODO', pass id to be filtered from the state

    const todoReducer = (state, action) => {
        switch (action.type) {
            case 'ADD_TODO':
                return {
                    ...state,
                    todos: [...state.todos, action.payload] // Spread operator to add the new payload (todo item) in exsting array
                }

            case 'REMOVE_TODO':
                return {
                    ...state,
                    todos: state.todos.filter(val=> val.id !== action.payload.id) 
                    // Using filter, to remove the passed id from the state
                }

            default:
                return state;

        }
    }
    // The state and methods , can be called from the shared components (children)
    // Using  useReducer, it will combine the state and methods to be access from the children
    const [state, dispatch] = useReducer(todoReducer, intialState);
    return <TodoContext.Provider value={{state,dispatch}}>
        {children}
    </TodoContext.Provider>

};

// Verification to ensure that state and dispatch is called within the Context

const useTodo  = () => {
    const context = useContext(TodoContext); //It is not called within <TodoContext.Provider>
    if (!context){
        throw new Error('useTodo must be called within TodoProvider')
    }
    return context
}

export { TodoProvider , useTodo};