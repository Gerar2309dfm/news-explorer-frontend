import SearchForm from "../SearchForm/SearchForm"
import NewsCardList from "../NewsCardList/NewsCardList"
import About from "../About/About"

function Main({ onSearch, articles, keyword, isLoading, isLoggedIn, onLoginClick, savedArticles, }) {
  return (
    <main className="main">
        <SearchForm onSearch={onSearch}/>

        <NewsCardList 
        articles={articles}
        keyword={keyword}
        isLoading={isLoading}
        isLoggedIn={isLoggedIn}
        onLoginClick={onLoginClick}
        savedArticles={savedArticles}
        />
        
        <About/>
    </main>
  );
}

export default Main ;