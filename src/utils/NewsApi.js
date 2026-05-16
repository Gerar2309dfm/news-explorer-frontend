const apiKey = "2db3c795723a4a7ab19a24b4fb30f01b";

const baseUrl = "https://nomoreparties.co/news/v2/everything";

export function getNews(query) {
  const currentDate = new Date();

  const pastDate = new Date();
  pastDate.setDate(currentDate.getDate() - 7);

  const from = pastDate.toISOString();
  const to = currentDate.toISOString();

  return fetch(
    `${baseUrl}?q=${query}&from=${from}&to=${to}&pageSize=100&apiKey=${apiKey}`
  ).then((res) => {
    if (!res.ok) {
      throw new Error("Error al obtener noticias");
    }

    return res.json();
  });
}