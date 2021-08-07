// Packages
import { Router } from 'express';

// Controllers
import eventController from "../controllers/events";

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
const event: any = new eventController();

router
  .post(Names.CREATE, event.create)
  .get(Names.FIND, event.find)
  .get(Names.FIND_ONE, event.findOne)
  .put(Names.UPDATE, event.update)
  .delete(Names.REMOVE, event.remove);

export default router;

