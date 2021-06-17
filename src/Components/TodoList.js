import React, { useState } from 'react';
import './TodoList.css';

const TodoApp = () => {
    const[task,setTask]=useState("");
    const[tasklist,setTaskList]=useState([]);
    const HandleChange=(e)=>{
        setTask(e.target.value);
        
    }
    const AddTask=()=>{
 if(task!==''){
    const taskDetails={
        id:Math.floor(Math.random()*1000),
        value:task,
        isCompleted:false,
    }
        setTaskList([...tasklist,taskDetails]);
       
     }
     
    
}
const DeteleTask=(e,id)=>{
e.preventDefault()
setTaskList(tasklist.filter((task)=>task.id!==id));
}
const CompleteTask=(e,id)=>{
    e.preventDefault()
    const element=tasklist.findIndex((element)=> element.id===id);
    const newTasklist=[...tasklist];
    newTasklist[element]={
        ...newTasklist[element],
        isCompleted:true,
    }
    setTaskList(newTasklist);

}
    // console.log("tasklist",tasklist)
    return (
        <div className="todo">
            <input type="text" name="text" id="text"  onChange={(e) => { HandleChange(e) }}  placeholder="Add task..." />
            <button className="add-btn" onClick={AddTask}>Add</button>
            {tasklist !== [] ?
                <ul>
                    {tasklist.map(task =>
                        <li className={task.isCompleted?"crosstext":"listitem"}>{task.value}
                        <button className="complete" onClick={(e)=>CompleteTask(e,task.id)}>Complete</button>
                        <button className="delete" onClick={e=>DeteleTask(e,task.id)}>Delete</button>
                        </li>
                    )}
                    </ul>
            : null}

        </div>
    );
}

export default TodoApp;
