import logo from "./logo.svg";
import "./App.css";

import Counter from "./components/Counter";
import TextInput from "./components/TextInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <Counter />
      <TextInput />
      <TodoList />
    </div>
  );
}

export default App;
