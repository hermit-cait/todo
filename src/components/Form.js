import React, { useState } from "react";

function Form(props) {

  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }  

  /* function handleSubmit(e) {
    e.preventDefault();
    props.addTask(name);
    setName("");
  } */  

  function handleSubmit(e) {
    e.preventDefault();
    if (name === "") {
      return null
    } else {
      props.addTask(name);
      setName("");
    }
  } 

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
          <button type="submit" className="btn-add">
            Add
          </button>          
        </div>        
      </form>
    );
}

export default Form;
