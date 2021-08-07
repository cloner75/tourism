// Packages
import { Router } from 'express';

// Controllers
import newsController from "../controllers/news";

// Middlewares

// Consts
const router = Router();
enum Names {
  CREATE = '/create',
  FIND_ONE = '/findOne/:id',
  FIND = '/find',
  UPDATE = '/update/:id',
  REMOVE = '/remove/:id',
}
const news: any = new newsController();

router
  .post(Names.CREATE, news.create)
  .get(Names.FIND, news.find)
  .get(Names.FIND_ONE, news.findOne)
  .put(Names.UPDATE, news.update)
  .delete(Names.REMOVE, news.remove);

export default router;

