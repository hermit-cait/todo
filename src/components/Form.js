import React, { useState } from "react";

function Form(props) {

  // Displays editing input field as blank

  const [name, setName] = useState("");

  // Tracks characters typed in the input field and displays them

  function handleChange(e) {
    setName(e.target.value);
  } 

  // Only allows a task to be submitted if the field is not empty

  function handleSubmit(e) {
    e.preventDefault();
    if (name === "") {
      return null
    } else {
      props.addTask(name);
      setName("");
    }
  }

  // Base html for the form

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
        <label htmlFor="new-todo-input" className="new-todo-input">
          <h2>Add a task:</h2>
        </label>
        <div className="input-wrapper">
          <input
            type="text"
            id="new-todo-input"
            className="input"
            name="text"
            autoComplete="off"
            value={name}
            onChange={handleChange}
          />
          <button 
            type="submit" 
            className="btn-add">
            Add
          </button>          
        </div>        
      </form>
    );
}

export default Form;
