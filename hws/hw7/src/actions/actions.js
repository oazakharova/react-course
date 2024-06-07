export const LOAD_TASKS = "LOAD_TASKS";

export const loadTasks = () => ({
  type: LOAD_TASKS,
});

// Для реализации функции loadTasksFromLocalStorage она должна быть написана
// в отдельном модуле - в data/tasks.js, где будет осуществляться загрузка задач
// и доступ к локальному хранилищу.
// После этого она может быть импортирована в reducer.js
// и использована для загрузки задач из локального хранилища

//
export const ADD_TASK = "ADD_TASK";
export const REMOVE_TASK = "REMOVE_TASK";

export const addTask = (description) => ({
  type: ADD_TASK,
  payload: {
    id: Date.now(),
    description,
    isCompleted: false,
  },
});

export const removeTask = (id) => ({
  type: REMOVE_TASK,
  payload: id,
});
