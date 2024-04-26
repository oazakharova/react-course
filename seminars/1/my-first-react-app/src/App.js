import logo from "./logo.svg";
import "./App.css";

import Greeting from "./components/Greeting";
import CurrentTime from "./components/CurrentTime";
import EventCard from "./components/EventCard";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting />
        <CurrentTime />
        <EventCard
          eventName="День рождения"
          eventDate="23.12.2024"
          eventPlace="В ресторане"
        />
        <EventCard
          eventName="Новый год"
          eventDate="31.12.2024"
          eventPlace="Дома у телевизора"
        />
      </header>
    </div>
  );
}

export default App;
