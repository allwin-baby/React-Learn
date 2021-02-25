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
  return (
    <div className="container">
      <Header prop="TaskManager"/> <br/>  
     <Tasks  tasks={tasks}/>  {/* passing tasks (BSON OBJECT) as prop to Task.js component */}
    </div>
  );
}

export default App;
