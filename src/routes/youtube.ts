// Packages
import { Router } from 'express';

// Controllers
import youtubeController from "../controllers/youtube";

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
const youtube: any = new youtubeController();

router
  .post(Names.CREATE, youtube.create)
  .get(Names.FIND, youtube.find)
  .get(Names.FIND_ONE, youtube.findOne)
  .put(Names.UPDATE, youtube.update)
  .delete(Names.REMOVE, youtube.remove);

export default router;

