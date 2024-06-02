import React from "react";

export const UserContext = React.createContext({
  username: "Гость",
  setUsername: () => {},
});

export const ThemeContext = React.createContext({
  theme: "light",
  setTheme: () => {},
});
