import { Op } from "sequelize";
import { IArticleQuery } from "../../interfaces";

const setQuery = (query: IArticleQuery): any => {
  const subs = Object.entries(query).map(([key, value]: [string, any]) => ({
    [key]: { [Op.substring]: value }
  }));

  return { [Op.or]: subs };
};

export { setQuery };
