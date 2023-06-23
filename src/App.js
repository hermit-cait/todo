import React, { useState } from "react";
import Form from "./components/Form";
import Todo from "./components/Todo";
import Clear from "./components/Clear";
import { nanoid } from "nanoid";

function App(props) {

  const [tasks, setTasks] = useState(props.tasks);

  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
  }    

  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        //
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  } 

  function clearItems() {
    setTasks([]);
  }
    
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
