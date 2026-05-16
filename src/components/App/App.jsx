import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { getNews } from "../../utils/NewsApi"
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import LoginModal from "../LoginModal/LoginModal";
import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openLoginModal = () => {
  setIsLoginOpen(true);
};

const closeLoginModal = () => {
  setIsLoginOpen(false);
};

    const handleSearch = (query) => {
    setIsLoading(true);

    getNews(query)
      .then((data) => {
        setArticles(data.articles);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

    return (
    <div className="app">
      <Header onLoginClick={openLoginModal} />

      <Routes>
        <Route
          path="/"
          element={
            <Main
              onSearch={handleSearch}
              articles={articles}
              isLoading={isLoading}
            />
          }
        />

        <Route
          path="/saved-news"
          element={<SavedNews />}
        />
      </Routes>

      <Footer />

      <LoginModal
  isOpen={isLoginOpen}
  onClose={closeLoginModal}
/>

    </div>
  );
}

export default App;