// Packages
import { Router } from 'express';

// Controllers
import visionController from "../controllers/visions";

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
const vision: any = new visionController();

router
  .post(Names.CREATE, vision.create)
  .get(Names.FIND, vision.find)
  .get(Names.FIND_ONE, vision.findOne)
  .put(Names.UPDATE, vision.update)
  .delete(Names.REMOVE, vision.remove);

export default router;

