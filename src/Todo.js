import React from "react";

export default function Todo() {
  return (
    <li className="todo">
          <span className="checkbox-wrapper">
            <input id="todo-0" type="checkbox" defaultChecked={true} />
            <label className="todo-label" htmlFor="todo-0">
              Eat
            </label>
          </span>
          <span className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Eat</span>
            </button>
            <button type="button" className="btn">
              Delete <span className="visually-hidden">Eat</span>
            </button>
          </span>
        </li>
  );
}

