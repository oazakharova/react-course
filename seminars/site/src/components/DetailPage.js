import React from "react";
import { Link, useParams } from "react-router-dom";

function DetailPage({ products }) {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);

  return (
    <div>
      <h1>Detail page</h1>
      <p>Это страница Detail page</p>
      <div>{product.name}</div>
      <div>
        <h6>Описание товара</h6>
        <div>{product.description}</div>
      </div>
      <div>
        <h6>Стоимость товара:</h6>
        <div>{product.price}</div>
      </div>
      <Link to="/">назад</Link>
    </div>
  );
}

export default DetailPage;
