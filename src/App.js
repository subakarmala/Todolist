import React from 'react';
import './App.css';
import TodoApp from './Components/TodoList';

let dateObj=new Date();
    let days=["Sun","Mon","Tue","Wed","Thurs",
    "Fri","Sat"];
    let months=["Jan","Feb","Mar","Apr","May",
    "Jun","July","Aug","Sep","Oct","Nov","Dec"];
    let date=dateObj.getDate();
    let day=days[dateObj.getDay()];
    let month=months[dateObj.getMonth()];


const App = () => {
    return (
        <div className="App">
           <h1>Today <span>{day} {date} {month}</span></h1>
        <span  className="title">Todo List</span><br/>
      <TodoApp/>
        </div>
    )
}

export default App
