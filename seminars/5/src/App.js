import "./App.css";
import React from "react";
import { useState } from "react";
import { UserContext, ThemeContext } from "./components/Context";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

import {Provider} from "react-redux";
import {store, profileStore} from "./components/store";
import Counter from "./components/Counter";


function App() {
  const [username, setUsername] = useState("Гость");
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };


  return (
      <UserContext.Provider value={{ username, setUsername }}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <div className={theme}>
            <button onClick={toggleTheme}>Сменить тему</button>
            <button onClick={() => setUsername("Ольга")}>
              Сменить пользователя на Ольга
            </button>
            <Header />
            
            <Provider store={profileStore}><Profile /></Provider>

            <Provider store={store}><Counter /></Provider>

            <Footer />
          </div>
        </ThemeContext.Provider>
      </UserContext.Provider>
  );
}

export default App;
