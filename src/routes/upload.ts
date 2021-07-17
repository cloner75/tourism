// Packages
import { Router } from 'express';

// Controllers
import uploadController from "../controllers/upload";

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
const upload: any = new uploadController();

router
  .post(Names.CREATE, upload.create)
  .get(Names.FIND, upload.find)
  .get(Names.FIND_ONE, upload.findOne)
  .put(Names.UPDATE, upload.update)
  .delete(Names.REMOVE, upload.remove);

export default router;

