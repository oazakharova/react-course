import React, { useState } from "react";

export default function Counter() {
  /*
Задание 1.
Создать компонент Counter, который отображает кнопку и число.
Число увеличивается на 1 каждый раз, когда пользователь нажимает на кнопку.

Подсказки:
import React, { useState } from 'react';

const Counter = () => {
// Инициализация состояния счётчика со значением 0

const [count, setCount] = useState(0);

// Функция для увеличения счётчика на 1
const incrementCount = () => {
setCount(count + 1);
};
*/
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={incrementCount}>Увеличить счётчик</button>
      <p>Счётчик: {count}</p>
    </div>
  );
}
