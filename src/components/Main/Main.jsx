import SearchForm from "../SearchForm/SearchForm"
import NewsCardList from "../NewsCardList/NewsCardList"
import About from "../About/About"

function Main({ onSearch, articles, isLoading }) {
  return (
    <main className="main">
        <SearchForm onSearch={onSearch}/>

        <NewsCardList 
        articles={articles}
        isLoading={isLoading}
        />
        
        <About/>
    </main>
  );
}

export default Main ;