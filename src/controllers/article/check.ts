import { MIN_QUERY_FIELD_LENGTH } from "../../constants";
import { IArticleQuery, IArticle } from "../../interfaces";

const isValidQuery = (query: IArticleQuery): boolean => {
  if (!query) return false;

  const providedFields = Object.values(query).filter((value: any) => value);
  return providedFields.length >= MIN_QUERY_FIELD_LENGTH;
};

const isArticleValidWithQuery = (
  article: IArticle,
  query: IArticleQuery
): boolean => {
  return (
    Object.keys(query).filter((key: string) =>
      article[key].includes(query[key])
    ).length >= MIN_QUERY_FIELD_LENGTH
  );
};

export { isValidQuery, isArticleValidWithQuery };
