import React, { useState } from "react";

export default function TodoList() {
  /*
  Создать компонент TodoList, который позволяет добавлять элементы в список дел
  через текстовое поле ввода.
  Список должен обновляться при добавлении нового дела.
  */

  // состояние для хранения списка дел
  const [todoList, setTodoList] = useState([]);

  // состояние для хранения текущего ввода в текстовом поле
  const [currentTodo, setCurrentTodo] = useState("");

  // обработчик добавления нового дела в список
  const addTodo = (event) => {
    event.preventDefault(); // предотвращение перезагрузки формы
    if (!currentTodo.trim()) return; // игнор пустых строк
    setTodoList([...todoList, currentTodo]); // добавление текущего дела в список
    setCurrentTodo(""); // очистка текстового поля от того, что ввели и добавили
  };

  // обработчик изменения текстового поля
  const updateTodoList = (event) => {
    setCurrentTodo(event.target.value);
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <input type="text" value={currentTodo} onChange={updateTodoList} />
        <button type="submit">Добавить</button>
      </form>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>{todo}</li> // используется индекс как ключ
        ))}
      </ul>
    </div>
  );
}
