import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";

import "./SavedNews.css";

function SavedNews() {
  return (
    <section className="saved-news">
      <SavedNewsHeader />
      <NewsCardList />
    </section>
  );
}

export default SavedNews;