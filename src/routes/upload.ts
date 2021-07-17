// Packages
import { Router } from 'express';

// Controllers
import uploadController from "../controllers/upload";

// Middlewares

// Consts
const router = Router();
enum Names {
  UPLOAD = '/upload',
  SHOW = '/show/:id'
}
const upload: any = new uploadController();

router
  .post(Names.UPLOAD, upload.upload)
  .get(Names.SHOW, upload.show);

export default router;

