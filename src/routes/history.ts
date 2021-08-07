// Packages
import { Router } from 'express';

// Controllers
import historyController from "../controllers/history";

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
const history: any = new historyController();

router
  .post(Names.CREATE, history.create)
  .get(Names.FIND, history.find)
  .get(Names.FIND_ONE, history.findOne)
  .put(Names.UPDATE, history.update)
  .delete(Names.REMOVE, history.remove);

export default router;

