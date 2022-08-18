import { IArticle, IArticleQuery } from "../../interfaces";
import { isArticleValidWithQuery } from "./check";

const getValidArticles = (articles: IArticle[] = [], query: IArticleQuery) => {
  return articles.filter((article: IArticle) =>
    isArticleValidWithQuery(article, query)
  );
};

export { getValidArticles };
