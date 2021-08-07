// Packages
import { Router } from 'express';

// Controllers
import employeeController from "../controllers/employee";

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
const employee: any = new employeeController();

router
  .post(Names.CREATE, employee.create)
  .get(Names.FIND, employee.find)
  .get(Names.FIND_ONE, employee.findOne)
  .put(Names.UPDATE, employee.update)
  .delete(Names.REMOVE, employee.remove);

export default router;

