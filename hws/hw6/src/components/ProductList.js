import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeProduct, updateProduct } from "../actions/actions";

const ProductList = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeProduct(id));
  };

  const handleToggleAvailable = (id) => {
    const productToUpdate = products.find((product) => product.id === id);
    if (productToUpdate) {
      dispatch(
        updateProduct({
          ...productToUpdate,
          available: !productToUpdate.available,
        })
      );
    }
  };

  return (
    <div>
      <h2>Товары</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div>
              <strong>{product.name}</strong> - ${product.price} -{" "}
              {product.available ? "В наличии" : "Не в наличии"}
            </div>
            <div>{product.description}</div>
            <button onClick={() => handleRemove(product.id)}>Удалить</button>
            <button onClick={() => handleToggleAvailable(product.id)}>
              {product.available
                ? "Отметить как 'Не в наличии'"
                : "Отметить как 'В наличии'"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
