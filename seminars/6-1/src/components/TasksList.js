import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTask } from "../actions/actions";

const TasksList = () => {
  const tasks = useSelector((state) => state.tasks.tasks); // Изменим на state.tasks.tasks если state.tasks является объектом, содержащим массив tasks
  const dispatch = useDispatch();

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.description}
          <button onClick={() => dispatch(removeTask(task.id))}>Удалить</button>
        </li>
      ))}
    </ul>
  );
};

export default TasksList;
