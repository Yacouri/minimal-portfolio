const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const getArticles = async () => {
  // console.log(11, NEXT_APP_BASE_URL);
  return await fetch(`${BASE_URL}/articles?username=yacouri`).then((response) =>
    response.json()
  );
};
export { getArticles };
