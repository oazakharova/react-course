import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../reducers/reducer";

export default configureStore({
  reducer: {
    products: productsReducer,
  },
});
