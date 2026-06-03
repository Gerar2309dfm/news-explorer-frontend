import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../utils/MainApi";
import { getNews } from "../../utils/NewsApi";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [tooltipMessage, setTooltipMessage] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);

  const openLoginModal = () => {
    setIsRegisterOpen(false);
    setIsLoginOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginOpen(false);
  };

  const openRegisterModal = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  };

  const closeRegisterModal = () => {
    setIsRegisterOpen(false);
  };

  const handleSearch = (query) => {
    setKeyword(query);

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

  const handleLogin = ({ email, password }) => {
  api
    .signin({ email, password })
    .then((data) => {
      localStorage.setItem("jwt", data.token);

      return api.getCurrentUser(data.token);
    })
    .then((user) => {
      setCurrentUser(user);
      setIsLoggedIn(true);

      const token = localStorage.getItem("jwt");

      return api.getArticles(token);
    })
    .then((articles) => {
      setSavedArticles(articles);

      closeLoginModal();
    })
    .catch((err) => {
      console.error(err);

      setTooltipMessage(
        "Correo o contraseña incorrectos"
      );

      setIsTooltipOpen(true);
    });
};

  const handleRegister = ({ email, password, name }) => {
  api
    .signup({
      email,
      password,
      name,
    })
    .then(() => {
      setTooltipMessage(
        "Registro completado con éxito"
      );

      setIsRegisterOpen(false);
      setIsTooltipOpen(true);
    })
    .catch((err) => {
      console.error(err);

      setTooltipMessage(
        "Este correo ya está registrado"
      );

      setIsTooltipOpen(true);
    });
};

  const handleSignOut = () => {
    localStorage.removeItem("jwt");
    setCurrentUser(null);
    setIsLoggedIn(false);
  };

  const handleDeleteArticle = (articleId) => {
  const token = localStorage.getItem("jwt");

  api
    .deleteArticle(articleId, token)
    .then(() => {
      setSavedArticles((articles) =>
        articles.filter(
          (article) => article._id !== articleId
        )
      );
    })
    .catch((err) => {
      console.error(err);
    });
};

  useEffect(() => {
    const token = localStorage.getItem("jwt");

    if (!token) {
      return;
    }

    api
      .getCurrentUser(token)
      .then((user) => {
        setCurrentUser(user);
        setIsLoggedIn(true);

        return api.getArticles(token);
      })

      .then((articles) => {
        setSavedArticles(articles);
      })

      .catch((err) => {
        console.error(err);
        localStorage.removeItem("jwt");
      });
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Header
          onLoginClick={openLoginModal}
          onSignOut={handleSignOut}
          isLoggedIn={isLoggedIn}
        />

        <Routes>
          <Route
            path="/"
            element={
              <Main
                onSearch={handleSearch}
                articles={articles}
                keyword={keyword}
                isLoading={isLoading}
                isLoggedIn={isLoggedIn}
                onLoginClick={openLoginModal}
                savedArticles={savedArticles}
              />
            }
          />

          <Route
             path="/saved-news"
            element={
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
              >
                <SavedNews 
                articles={savedArticles}
                onDeleteArticle={handleDeleteArticle}
                />
              </ProtectedRoute>
            }
          />
        </Routes>

        <Footer />

        <LoginModal
          isOpen={isLoginOpen}
          onClose={closeLoginModal}
          onLogin={handleLogin}
          onRegisterClick={openRegisterModal}
        />

        <RegisterModal
          isOpen={isRegisterOpen}
          onClose={closeRegisterModal}
          onRegister={handleRegister}
          onLoginClick={openLoginModal}
        />

        <InfoTooltip
          isOpen={isTooltipOpen}
          message={tooltipMessage}
          onClose={() => setIsTooltipOpen(false)}
          onLoginClick={() => {
            setIsTooltipOpen(false);
            openLoginModal();
          }}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;