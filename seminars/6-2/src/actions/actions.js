// Action Types
export const ADD_TASK = "ADD_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";
export const DELETE_TASK = "DELETE_TASK";

// Action Creators
export const addTask = (text) => ({
  type: ADD_TASK,
  payload: text,
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: id,
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
});
