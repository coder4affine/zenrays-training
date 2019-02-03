import * as types from "../constants/actionTypes";

export const loadTodos = () => {
  return dispatch => {
    dispatch({ type: types.LOAD_TODO_REQUEST });
    return fetch("http://localhost:3004/todos")
      .then(res => res.json())
      .then(json => dispatch({ type: types.LOAD_TODO_SUCCESS, payload: json }))
      .catch(err => {
        dispatch({ type: types.LOAD_TODO_ERROR, payload: err });
      });
  };
};

export const addTodo = todo => {
  return dispatch => {
    dispatch({
      type: types.LOAD_TODO_REQUEST,
      meta: {
        throttle: 2000
      }
    });
    return fetch("http://localhost:3004/todos", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(todo)
    })
      .then(res => res.json())
      .then(json =>
        dispatch({
          type: types.ADD_TODO_SUCCESS,
          payload: json,
          meta: {
            throttle: 2000
          }
        })
      )
      .catch(err => dispatch({ type: types.LOAD_TODO_ERROR, payload: err }));
  };
};

export const completeTodo = todo => {
  return dispatch => {
    dispatch({ type: types.LOAD_TODO_REQUEST });
    return fetch(`http://localhost:3004/todos/${todo.id}`, {
      method: "PUT",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(todo)
    })
      .then(res => res.json())
      .then(json => dispatch({ type: types.EDIT_TODO_SUCCESS, payload: json }))
      .catch(err => dispatch({ type: types.LOAD_TODO_ERROR, payload: err }));
  };
};

export const deleteTodo = id => {
  return dispatch => {
    dispatch({ type: types.LOAD_TODO_REQUEST });
    return fetch(`http://localhost:3004/todos/${id}`, {
      method: "DELETE"
    })
      .then(json => dispatch({ type: types.DELETE_TODO_SUCCESS, payload: id }))
      .catch(err => dispatch({ type: types.LOAD_TODO_ERROR, payload: err }));
  };
};

export default {
  loadTodos,
  addTodo,
  completeTodo,
  deleteTodo
};
