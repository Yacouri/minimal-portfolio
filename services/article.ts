const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// fetch all articles
const getArticles = async () => {
  return await fetch(`${BASE_URL}/articles?username=yacouri`).then(
    (response): Promise<TResponse> => {
      return response.json();
    }
  );
};

// fetch article by id
const getArticleById = async (id: string) => {
  return await fetch(`${BASE_URL}/articles/${id}`).then(
    (response): Promise<TArticleContent> => response.json()
  );
};
export { getArticles, getArticleById };
