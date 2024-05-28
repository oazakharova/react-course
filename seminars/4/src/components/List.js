import React from "react";

function List({ items, renderItem }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item, index)}</li>
      ))}
    </ul>
  );
}

export default List;
