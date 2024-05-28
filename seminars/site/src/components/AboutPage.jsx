import React from "react";
import {Link} from "react-router-dom";

function AboutPage() {
  return (
    <div>
      <ul>
        <li><Link to="/">Главная страница</Link></li>
        <li><Link to="/about">О нас</Link></li>
      </ul>

      <h1>О нас</h1>
      <p>Это страница о нас</p>
    </div>
   );
}

export default AboutPage;