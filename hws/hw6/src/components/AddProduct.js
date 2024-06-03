import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../actions/actions";

const AddProduct = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [available, setAvailable] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addProduct({
        id: Math.random().toString(36),
        name,
        description,
        price,
        available,
      })
    );
    setName("");
    setDescription("");
    setPrice(0);
    setAvailable(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="basicStyle">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Наименование"
        />
      </div>
      <div className="basicStyle">
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Описание"
        ></textarea>
      </div>
      <div className="basicStyle">
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Цена"
        />
      </div>
      <div className="basicStyle">
        <label>
          <input
            type="checkbox"
            checked={available}
            onChange={(e) => setAvailable(e.target.checked)}
          />
          В наличии
        </label>
      </div>
      <button type="submit">Добавить товар</button>
    </form>
  );
};

export default AddProduct;
