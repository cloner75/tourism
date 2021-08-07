// Packages
import { Router } from 'express';

// Controllers
import partnersController from "../controllers/partners";

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
const partners: any = new partnersController();

router
  .post(Names.CREATE, partners.create)
  .get(Names.FIND, partners.find)
  .get(Names.FIND_ONE, partners.findOne)
  .put(Names.UPDATE, partners.update)
  .delete(Names.REMOVE, partners.remove);

export default router;

