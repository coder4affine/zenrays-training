import React from "react";
import PropTypes from "prop-types";

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      {todos.map(todo => (
        <div
          key={todo.id}
          style={{ display: "flex", flexDirection: "row", flex: 1, width: 400 }}
        >
          <input
            type="checkbox"
            defaultChecked={todo.isDone}
            onChange={() => completeTodo(todo)}
          />
          <span
            style={{
              flex: 1,
              display: "flex",
              textDecoration: todo.isDone ? "line-through" : "none"
            }}
          >
            {todo.text}
          </span>
          <input
            type="button"
            value="Delete"
            onClick={() => deleteTodo(todo.id)}
          />
        </div>
      ))}
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired
};

export default TodoList;
