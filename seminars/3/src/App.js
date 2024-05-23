import React from "react";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import MessagesList from "./components/MessagesList";
import TextDisplayForm from "./components/TextDisplayForm";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  return (
    <div className="App">
      <Greeting name="Sergei" />
      <Greeting name="Olga" />

      <Counter />

      <MessagesList
        messages={[
          { id: 1, text: "Привет, как дела?" },
          { id: 2, text: "Текстовое сообщение?" },
        ]}
      />

      <TextDisplayForm />

      <ThemeSwitcher />
    </div>
  );
}

export default App;
