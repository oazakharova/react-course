import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import AddTaskForm from "./components/AddTaskForm";
import TasksList from "./components/TasksList";

const App = () => (
  <Provider store={store}>
    <div>
      <h2>Tasks</h2>
      <AddTaskForm />
      <TasksList />
    </div>
  </Provider>
);

export default App;
