// Packages
import { Router } from 'express';

// Controllers
import usersController from "../controllers/user";

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
const users: any = new usersController();

router
  .post(Names.CREATE, users.create)
  .get(Names.FIND, users.find)
  .get(Names.FIND_ONE, users.findOne)
  .put(Names.UPDATE, users.update)
  .delete(Names.REMOVE, users.remove);

export default router;

