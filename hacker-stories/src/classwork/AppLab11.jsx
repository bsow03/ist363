import { useState } from "react";


function App () {
  const [list, setList] = useState([
    {
      title:'Complete Lab 11',
      objectID: 1,
      status:'incomplete'
    },
    {
      title:'Review JSX Events and State',
      objectID: 2,
      status:'incomplete'
    }]);

    const [taskInput, setTaskInput] = useState("");

    function handleComplete(objectID) {
      const updatedList = list.map(function(item) {
        if (item.objectID === objectID) {
          return { ...item, status: 'completed' };
        }
        return item;
      }); // Line 24      
    setList(updatedList);
    };

    function addTask(taskName) {
      if (taskInput.trim() !== "") {
        const newTask = {
          title: taskInput,
          objectID: list.length + 1,
          status: 'incomplete'
        };
      setList([...list, newTask]);
      setTaskInput("");
      }
    }

  return (
    <div>
      <h1>To-Do List</h1>
      <input 
      type="text" 
      placeholder="Enter a task"
      value={taskInput}
      onChange={(e) => setTaskInput(e.target.value)
      }
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {list.map(function(item) {
          return <li key={item.objectID}>
            <span 
                style={{ 
                  textDecoration: item.status === 'completed' ? 'line-through' : 'none' 
                }}>
            {item.title}
            </span>
            <button onClick={()=> handleComplete(item.objectID)}>❌</button>
            </li>
          ;
        })}
      </ul>

    </div>
  );
}





export default App