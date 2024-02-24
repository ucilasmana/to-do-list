import { useState, useReducer, createContext, useEffect } from "react";

import Todo from "./components/Todo";
import AddTodo from './components/Actions/AddTodo'
import Modal from './components/Actions/Modal'
import { modalReducer, tasksReducer } from "./reducers";

export const TodoContext = createContext()

const initialTask = []

const initialModal= {
  show:false, selectedId:null, modalType:null
}

function App() {

  const [tasks, taskDispatch] = useReducer(
  tasksReducer, initialTask, ()=>{
    const localData = localStorage.getItem('state');
    return localData? JSON.parse(localData):initialTask
  })

  const [modal, modalDispatch] = useReducer(
    modalReducer, initialModal)

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(tasks));

  }, [tasks]);


  return (
    <div className="App relative min-h-screen lg:overflow-hidden text-red-600 bg-amber-100">
       <TodoContext.Provider value={{tasks, modal, taskDispatch, modalDispatch}} >
        <AddTodo/>
         <Todo/>
         {modal.show &&<Modal/>}
       </TodoContext.Provider>
    </div>
  );
}

export default App;
