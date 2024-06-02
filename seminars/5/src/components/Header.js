import React, { useContext } from "react";
import { UserContext } from "./Context";
// import { ThemeContext } from "./Context";

function Header() {
  const { username } = useContext(UserContext);

  return <header>Добрый день, {username}</header>;
}

export default Header;
