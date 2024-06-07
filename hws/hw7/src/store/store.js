import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../reducer/reducer";
import { middleware } from "../middleware/middleware";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

export default store;
