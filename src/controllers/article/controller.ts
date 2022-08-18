import { Request, Response } from "express";
import { isValidQuery } from "./check";
import { getValidArticles } from "./getter";
import { setQuery } from "./setter";

export class ArticleController {
  constructor(private readonly articleService) {
    this.articleService = articleService;
  }

  async getOneArticle(req: Request, res: Response) {
    try {
      const article = await this.articleService.getOneArticle(req.params.id);
      if (!article) return res.status(404).send("Article not found");

      res.send(article);
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  }

  async getManyArticles(req: Request, res: Response) {
    try {
      if (!isValidQuery(req.query))
        return res
          .status(400)
          .send("Query does not contain 6 valid parameters");

      const parsedQuery = setQuery(req.query);
      const articles = await this.articleService.getManyArticles(parsedQuery);
      const filteredArticles = getValidArticles(articles, req.query);

      res.send(filteredArticles);
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  }
}
