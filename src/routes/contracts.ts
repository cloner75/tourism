// Packages
import { Router } from 'express';

// Controllers
import ContractsController from "../controllers/contracts";

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
const Contracts: any = new ContractsController();

router
  .post(Names.CREATE, Contracts.create)
  .get(Names.FIND, Contracts.find)
  .get(Names.FIND_ONE, Contracts.findOne)
  .put(Names.UPDATE, Contracts.update)
  .delete(Names.REMOVE, Contracts.remove);

export default router;

