import React, { useState } from "react";
import Form from "./components/Form";
import Todo from "./components/Todo";
import Clear from "./components/Clear";
import { nanoid } from "nanoid";

function App(props) {

  const [tasks, setTasks] = useState(props.tasks);

  // Creates a new task... gives it a unique id... sets it's status to "not completed"... and finally appends it to the existing task list

  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
  }    

  // Allows a task name to be changed and then updates the task list

  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {     
      // Searches task list for unique id 
      if (id === task.id) {        
        // Spread operator prints new list with updated task name
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  // Selects a task and then switches it between the completed and uncompleted state

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {   
      // Searches task list for unique id 
      if (id === task.id) {
        // Spread operator prints new list with updated completion status
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  // Delete task with a filter method which returns all tasks except the one with the provided id

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  } 

  // Clears list by saving a blank array to the variable

  function clearItems() {
    setTasks([]);
  }

  // The Todo component contains all the necessary data relevant to each list entry... it also contains all the possible functions that may be used to manipulate it
    
  const taskList = tasks.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));     

  // Base html for app

  return (
    <div className="app-wrapper">
      <h1>to-do list</h1>
      <Form addTask={addTask} />
      <ul
        role="list"
        className="list"
        aria-labelledby="list-heading">
        {taskList}
      </ul>      
      <Clear clearItems={clearItems} />
    </div>
  );
}

export default App;
