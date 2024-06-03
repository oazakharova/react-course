import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";

function App() {
  return (
    <Provider store={store}>
      <div className="basicStyle">
        <h1>Продуктовый каталог</h1>
        <AddProduct />
        <ProductList />
      </div>
    </Provider>
  );
}

export default App;
