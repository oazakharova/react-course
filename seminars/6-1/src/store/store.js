import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../reducers/reducer";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

export default store;
