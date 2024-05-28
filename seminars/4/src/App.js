import "./App.css";
import Box from "./components/Box";
import List from "./components/List";

function App() {
  const items = ["Пункт 1", "Пункт 2", "Пункт 3"];

  const renderItem = (item, index) => {
    // Пример условного стиля на основе индекса
    const style = { background: index % 2 === 0 ? "green" : "orange" };
    return (
      <li style={style} key={index}>
        {item}
      </li>
    );
  };

  return (
    <div className="App">
      <Box>
        <h1>Задание 1</h1>
        <h3>Вариант 1</h3>
        <p>Текст</p>
        <button>Кнопка</button>
      </Box>
      <Box>
        <h1>Задание 1</h1>
        <h3>Вариант 2</h3>
        <div>Контент</div>
        <div>
          <h6>Подзаголовок</h6>
          <div>Контент</div>
        </div>
      </Box>

      <List items={items} renderItem={renderItem} />
    </div>
  );
}

export default App;
