//change language mode in cmd pallete to javascriptreact to work with autocompletion ofJSX

/* class based component */
/* class App extends React.Component{
  render(){
    return <h1>HELLO ALLWIN KEEP MOTIVATED</h1>
  }
} */
import React from "react"
import './App.css';
import Tasks from './components/Tasks'
import Header from "./components/Header"  //importing Header component from Header.js
import {useState} from 'react'
function App() {
  const [tasks,setTasks] = useState    ([
    {
    id:1,
    text:"ALLWIN",
    virgin:"YES"
    },
    {
    id:2,
    text:"SHAJAL",
    virgin:"YES"
    },
    {
    id:3,
    text:"SUNNY",
    virgin:"NO"
    }
])
const deleteTask = (id)=>{
  setTasks(tasks.filter((tasks)=>tasks.id!==id))  /* setTasks is the method declared in State of tasks */
}

  return (
    <div className="container">
      <Header prop="TaskManager"/> <br/>  
      {/* if else in JSX */}

      {tasks.length>0?  /* if part */
       <Tasks  tasks={tasks} onDelete={deleteTask}/>   
       :"No Tasks To Show"}  {/* else part */}
     
    {/* passing tasks (BSON OBJECT) as prop to Task.js component */}
    {/* onDelete is not a keyword it is just a prop (carries a function) name just like tasks.The function is carried all the way down to individual task*/}
    </div>
  );
}

export default App;
