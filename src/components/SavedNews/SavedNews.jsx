import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";

import "./SavedNews.css";

function SavedNews({ articles, onDeleteArticle }) {
  return (
    <section className="saved-news">
      <SavedNewsHeader 
       articles={articles} />
      <NewsCardList 
       articles={articles}
       isSavedNews={true} 
       onDeleteArticle={onDeleteArticle}
       />
    </section>
  );
}

export default SavedNews;