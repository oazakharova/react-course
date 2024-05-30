import React from "react";
import {Link} from "react-router-dom";

function HomePage() {
  return (
    <div>
      <ul>
        <li><Link to="/">Главная страница</Link></li>
        <li><Link to="/about">О нас</Link></li>
      </ul>

      <h1>Главная страница</h1>
      <p>Это главная страница сайта</p>
    </div>
   );
}

export default HomePage;