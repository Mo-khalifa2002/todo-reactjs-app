import React, { useState } from "react";
import { Todo } from "./Todo";

export const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <Todo
              setTodos={setTodos}
              todos={todos}
              key={todo.id}
              todo={todo}
              text={todo.text}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
