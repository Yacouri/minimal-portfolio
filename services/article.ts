const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// fetch all articles
const getArticles = async () => {
  // console.log(11, NEXT_APP_BASE_URL);
  return await fetch(`${BASE_URL}/articles?username=yacouri`).then((response) =>
    response.json()
  );
};

// fetch article by id
const getArticleById = async (id: string) => {
  return await fetch(`${BASE_URL}/articles/${id}`).then((response) =>
    response.json()
  );
};
export { getArticles, getArticleById };
