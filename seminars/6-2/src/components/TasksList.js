import React from "react";
import { connect } from "react-redux";
import { toggleTask, deleteTask } from "../actions/actions";

const TasksList = ({ tasks, dispatch }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li
          key={task.id}
          style={{ textDecoration: task.completed ? "line-through" : "none" }}
        >
          {task.text}
          <button onClick={() => dispatch(toggleTask(task.id))}>Toggle</button>
          <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps)(TasksList);
