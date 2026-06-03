import bookmarkIcon from "../../images/bookmark.svg";
import bookmarkActiveIcon from "../../images/bookmark-active.svg";
import deleteIcon from "../../images/delete.svg";
import api from "../../utils/MainApi";
import "./NewsCard.css";

function NewsCard({
  article,
  keyword,
  isLoggedIn,
  onLoginClick,
  isSavedNews,
  onDeleteArticle,
  savedArticles = [],
}) {

  const isSaved = savedArticles.some(
    (savedArticle) =>
      savedArticle.link === article.url
  );

  const handleSaveClick = () => {
    if (!isLoggedIn) {
      onLoginClick();
      return;
    }

    if (isSaved) {
      return;
    }

    const token = localStorage.getItem("jwt");

    api
      .saveArticle(article, keyword, token)
      .then((savedArticle) => {
        console.log(
          "Artículo guardado:",
          savedArticle
        );
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleDeleteClick = () => {
    onDeleteArticle(article._id);
  };

  return (
    <article className="card">
      {isSavedNews && (
        <div className="card__keyword">
          {article.keyword}
        </div>
      )}

      <button
        className="card__save-button"
        onClick={
          isSavedNews
            ? handleDeleteClick
            : handleSaveClick
        }
      >
        <img
          src={
            isSavedNews
              ? deleteIcon
              : isSaved
              ? bookmarkActiveIcon
              : bookmarkIcon
    }
        alt={
        isSavedNews
          ? "Eliminar artículo"
          : "Guardar artículo"
        }
        className="card__save-icon"
        />
      </button>

      {!isLoggedIn && !isSavedNews && (
        <div className="card__tooltip">
          Inicia sesion para guardar articulos 
        </div>
      )}

      {isSavedNews && (
        <div className="card__tooltip">
          Eliminar de guardados 
        </div>
      )}

      <img
        src={article.urlToImage || article.image}
        alt={article.title}
        className="card__image"
      />

      <div className="card__content">
        <p className="card__date">
          {new Date(
            article.publishedAt || article.date
          ).toLocaleDateString("es-ES", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>

        <h3 className="card__title">
          {article.title}
        </h3>

        <p className="card__description">
          {article.description || article.text}
        </p>

        <p className="card__source">
          {article.source?.name || article.source}
        </p>
      </div>
    </article>
  );
}

export default NewsCard;