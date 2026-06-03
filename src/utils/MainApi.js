const BASE_URL = "https://news-explorer-api.duckdns.org";

class MainApi {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Error: ${res.status}`);
  }

  signup({ name, email, password }) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    }).then(this._checkResponse);
  }

  signin({ email, password }) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then(this._checkResponse);
  }

  getCurrentUser(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(this._checkResponse);
  }
  getArticles(token) {
  return fetch(`${this._baseUrl}/articles`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(this._checkResponse);
}

  saveArticle(article, keyword, token) {
  return fetch(`${this._baseUrl}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      keyword,
      title: article.title,
      text: article.description,
      date: article.publishedAt,
      source: article.source.name,
      link: article.url,
      image: article.urlToImage,
    }),
  }).then(this._checkResponse);
}

  deleteArticle(articleId, token) {
  return fetch(
    `${this._baseUrl}/articles/${articleId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  ).then(this._checkResponse);
}
}

const api = new MainApi(BASE_URL);

export default api;
