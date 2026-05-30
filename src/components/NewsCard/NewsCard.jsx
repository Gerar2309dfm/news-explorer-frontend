import bookmarkIcon from "../../images/bookmark.svg";
import "./NewsCard.css";

function NewsCard({ article }) {
  return (
    <article className="card">
      <button className="card__save-button">
        <img
          src={bookmarkIcon}
          alt="Guardar artículo"
          className="card__save-icon"
        />
      </button>
      
      <img
        src={article.urlToImage}
        alt={article.title}
        className="card__image"
      />

      <div className="card__content">
        <p className="card__date">
          {new Date(article.publishedAt).toLocaleDateString(
            "es-ES",
            {
               day: "numeric",
                month: "long",
              year: "numeric",
            }
          )}
        </p>

        <h3 className="card__title">
          {article.title}
        </h3>

        <p className="card__description">
          {article.description}
        </p>

        <p className="card__source">
          {article.source.name}
        </p>
      </div>
    </article>
  );
}

export default NewsCard;