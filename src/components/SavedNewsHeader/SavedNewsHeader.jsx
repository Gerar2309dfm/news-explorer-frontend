import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import "./SavedNewsHeader.css";

function SavedNewsHeader({ articles }) {
  const currentUser = useContext(
    CurrentUserContext
  );

  const keywords = [
  ...new Set(
    articles.map((article) => article.keyword)
  ),
];

let keywordsText = "";

  if (keywords.length === 1) {
  keywordsText = keywords[0];
    } else if (keywords.length === 2) {
       keywordsText = `${keywords[0]} y ${keywords[1]}`;
        } else if (keywords.length >= 3) {
        keywordsText = `${keywords[0]}, ${keywords[1]} y ${
         keywords.length - 2
        } más`;
}

  return (
    <section className="saved-news-header">
      <p className="saved-news-header__subtitle">
        Artículos guardados
      </p>

      <h1 className="saved-news-header__title">
        {currentUser?.name}, tienes{" "}
        {articles.length} artículos guardados
      </h1>
      <p className="saved-news-header__keywords">
        Por palabras clave:{" "}
        <span className="saved-news-header__keywords-bold">
          {keywordsText}
        </span>
    </p>
    </section>
  );
}

export default SavedNewsHeader;