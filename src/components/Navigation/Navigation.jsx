import { useState } from "react";
import { Link } from "react-router-dom";

import menuIcon from "../../images/menu.svg";
import closeIcon from "../../images/close.svg";

import "./Navigation.css";

function Navigation({ onLoginClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navigation">
      <button
        className="navigation__menu-button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <img
          src={isMenuOpen ? closeIcon : menuIcon}
          alt="Menú"
        />
      </button>

      <ul
        className={`navigation__list ${
          isMenuOpen ? "navigation__list_opened" : ""
        }`}
      >
        <li>
          <Link
            to="/"
            className="navigation__item"
          >
            Inicio
          </Link>
        </li>

        <li>
          <Link
            to="/saved-news"
            className="navigation__item"
          >
            Artículos guardados
          </Link>
        </li>

        <li>
          <button
            className="navigation__button"
            onClick={onLoginClick}
          >
            Iniciar sesión
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;