// Packages
import { Router } from 'express';

// Controllers
import AboutController from "../controllers/donators";

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
const About: any = new AboutController();

router
  .post(Names.CREATE, About.create)
  .get(Names.FIND, About.find)
  .get(Names.FIND_ONE, About.findOne)
  .put(Names.UPDATE, About.update)
  .delete(Names.REMOVE, About.remove);

export default router;

