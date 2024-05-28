import React from "react";
import { Link } from "react-router-dom";

function ListPage({ products }) {
  return (
    <div>
      <h1>List page</h1>
      <p>Это страница List page</p>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <Link to={`/products/${product.id}`}>{product.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ListPage;
