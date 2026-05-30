import { useState } from "react";
import backgroundImage from "../../images/search-background.png";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query.trim()) {
      return;
    }

    onSearch(query);
  };

  return (
    <section
      className="search"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="search__content">
        <h2 className="search__title">
          ¿Qué pasa en el mundo?
        </h2>

        <p className="search__description">
          Encuentra las últimas noticias sobre cualquier tema y guárdalas en tu cuenta personal.
        </p>

        <form
          className="search__form"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Introduce un tema"
            className="search__input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <button
            type="submit"
            className="search__button"
          >
            Buscar
          </button>
        </form>
      </div>
    </section>
  );
}


export default SearchForm;