import { useState } from "react";

import NewsCard from "../NewsCard/NewsCard";

import notFound from "../../images/not-found.svg";

import "./NewsCardList.css";

function NewsCardList({ articles = [], keyword, isLoading, isLoggedIn,
   onLoginClick, isSavedNews, onDeleteArticle, savedArticles = [], }) {
  const [visibleCards, setVisibleCards] = useState(3);

  const handleShowMore = () => {
    setVisibleCards(visibleCards + 3);
  };

  if (isLoading) {
    return (
      <section className="preloader">
        <div className="preloader__circle"></div>

        <p className="preloader__text">
          Buscando noticias...
        </p>
      </section>
    );
  }

  if (!isLoading && articles.length === 0) {
  return (
    <section className="not-found">
      <img
        src={notFound}
        alt="No se encontraron resultados"
        className="not-found__image"
      />

      <h2 className="not-found__title">
        No se encontró nada
      </h2>

      <p className="not-found__text">
        Lo sentimos, pero no hay nada que coincida con tus términos de búsqueda.
      </p>
    </section>
  );
}

  return (
    <section className="cards">
      {!isSavedNews && (
      <h2 className="cards__title">
        Resultados de búsqueda
      </h2>
      )}

      <div className="cards__list">
        {articles.slice(0, visibleCards).map((article) => (
          <NewsCard
            key={article._id || article.url}
            article={article}
            keyword={keyword}
            isLoggedIn={isLoggedIn}
            onLoginClick={onLoginClick}
            isSavedNews={isSavedNews}
            onDeleteArticle={onDeleteArticle}
            savedArticles={savedArticles}
          />
        ))}
      </div>

      {visibleCards < articles.length && (
        <button
          className="cards__button"
          onClick={handleShowMore}
        >
          Mostrar más
        </button>
      )}
    </section>
  );
}

export default NewsCardList;