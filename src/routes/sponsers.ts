// Packages
import { Router } from 'express';

// Controllers
import sponsersController from "../controllers/sponsers";

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
const sponsers: any = new sponsersController();

router
  .post(Names.CREATE, sponsers.create)
  .get(Names.FIND, sponsers.find)
  .get(Names.FIND_ONE, sponsers.findOne)
  .put(Names.UPDATE, sponsers.update)
  .delete(Names.REMOVE, sponsers.remove);

export default router;

