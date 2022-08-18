import express from "express";
import { ArticleController } from "./controllers";
import { ArticleService } from "./services";

const router = express.Router();
const articleController = new ArticleController(new ArticleService());

router.get(
  "/articles",
  articleController.getManyArticles.bind(articleController)
);
router.get(
  "/articles/:id",
  articleController.getOneArticle.bind(articleController)
);

export default router;
