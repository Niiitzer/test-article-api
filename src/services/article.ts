import { Article } from "../models";

export class ArticleService {
  async getOneArticle(id: number) {
    return Article.findOne({ where: { id } });
  }

  async getManyArticles(query: any) {
    return Article.findAll({ where: { ...query } });
  }
}
