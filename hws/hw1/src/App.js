import logo from "./logo.svg";
import "./App.css";

import Message from "./components/Message";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Message message="Привет, мир" />
        <Message message="Как дела, мир" />
        <Message message="Пока, мир" />
      </header>
    </div>
  );
}

export default App;
