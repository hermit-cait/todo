import React, { useEffect, useRef, useState } from "react";

// Monitors focus states of elements in order to toggle the ref "current" status of an element at the right moment

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

function Todo(props) {

  // Sets default html template to viewing mode rather than editing mode

  const [isEditing, setEditing] = useState(false);

  // Displays editing input field as blank

  const [newName, setNewName] = useState("");

  // Sets ref "current" status of elements to null

  const editFieldRef = useRef(null);
  const editButtonRef = useRef(null);

  // Toggles and saves the ref "current" status of an element

  const wasEditing = usePrevious(isEditing);

  // Tracks characters typed in the input field and displays them

  function handleChange(e) {
    setNewName(e.target.value);
  }  

  // Saves edited task name... displays it to the UI... and then toggles the "editing" status of the item

  function handleSubmit(e) {
    e.preventDefault();
    props.editTask(props.id, newName);
    setNewName("");
    setEditing(false);
  }  

  // If a list item is actively being edited this html will determine its content and layout

  const editingTemplate = (
    <form className="editingTemplate" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="visually-hidden" htmlFor={props.id}>
          New name for {props.name}
        </label>
        <input
          id={props.id}
          className="todo-text"
          type="text"
          value={newName}
          onChange={handleChange}
          autoComplete="off"
          placeholder={props.name}
          ref={editFieldRef}
        />
      </div>
      <div className="btn-group-edit">
      <button
        type="button"
        className="btn todo-cancel"
        onClick={() => setEditing(false)}>
        Cancel
        <span className="visually-hidden">renaming {props.name}</span>
      </button>
        <button type="submit" className="btn todo-edit">
          Save
          <span className="visually-hidden">new name for {props.name}</span>
        </button>
      </div>
    </form>
  );

  // If a list item is only being viewed this html will determine its content and layout
  
  const viewTemplate = (
    <div className="viewTemplate">
      <span className="checkbox-wrapper">
        <input
          className="checkbox"
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label className="todo-label" htmlFor={props.id}>
        <span className="todo-name" style={{ textDecoration: props.completed ? "line-through" : "" }}> {props.name}</span>
        </label>
      </span>
      <span className="btn-group-view">
      <button
        type="button"
        className="btn"
        onClick={() => setEditing(true)}
        ref={editButtonRef}>
        Edit <span className="visually-hidden">{props.name}</span>
      </button>
      <button
        type="button"
        className="btn"
        onClick={() => props.deleteTask(props.id)}>
        Delete <span className="visually-hidden">{props.name}</span>
      </button>
      </span>
    </div>
  );

  // This function toggles the focus state between the editing field and the save button

  useEffect(() => {
    if (!wasEditing && isEditing) {
      editFieldRef.current.focus();
    }
    if (wasEditing && !isEditing) {
      editButtonRef.current.focus();
    }
  }, [wasEditing, isEditing]);   

  // Tracks the "editing" status and toggles the html template accordingly

  return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;  

}

export default Todo;

