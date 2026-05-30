import "./SavedNewsHeader.css";

function SavedNewsHeader() {
  return (
    <section className="saved-news-header">
      <p className="saved-news-header__subtitle">
        Artículos guardados
      </p>

      <h1 className="saved-news-header__title">
        Elise, tienes 5 artículos guardados
      </h1>
    </section>
  );
}

export default SavedNewsHeader;