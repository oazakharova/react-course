import React, {useContext} from "react";
import { ThemeContext } from "./Context";

function Footer() {
  const { theme } = useContext(ThemeContext);

  return <footer className={theme}>(c) Все права защищены.</footer>;
}

export default Footer;
