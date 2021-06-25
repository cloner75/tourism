// Packages
import * as _ from "lodash";
import { Request, Response } from "express";

// Facads 
import Responser from './../helpers/response';

// Models
import EmployeeModel from "./../models/employee";


/**
 * @description :: Conversation Controller
 */
class Employee {
  /**
   * @description :: Constructor
   */
  constructor() { }

  /**
   * @description :: Create Employee Controller
   * @param {request} req
   * @param {response} res
   */
  async create(req: Request, res: Response) {
    try {
      const create: any = await EmployeeModel.create(req.body);
      return res.send(Responser.generator(200, create));
    } catch (err) {
      return res.status(500).send(Responser.generator(500, err.message));
    }
  }

  /**
   * @description :: Find One Employee Controller
   * @param {request} req
   * @param {response} res
   */
  async findOne(req: Request, res: Response) {
    try {
      let checkEmployee: any = await EmployeeModel.findOne({ _id: req.params.id });
      if (!checkEmployee) {
        return res.status(404).send(Responser.generator(404));
      }
      return res.status(200).send(Responser.generator(200, checkEmployee));
    } catch (err) {
      return res.status(500).send(Responser.generator(500, err.message));
    }
  }

  /**
   * @description :: Find Employee Controller
   * @param {request} req
   * @param {response} res
   */
  async find(req: Request, res: Response) {
    try {
      let checkEmployee: any = await EmployeeModel.findOne(req.query);
      if (!checkEmployee) {
        return res.status(200).send(Responser.generator(200, []));
      }
      return res.status(200).send(Responser.generator(200, checkEmployee));
    } catch (err) {
      return res.status(500).send(Responser.generator(500, err.message));
    }
  }

  /**
   * @description :: Update Employee Controller
   * @param {request} req
   * @param {response} res
   */
  async update(req: Request, res: Response) {
    try {
      const updateEmployee = await EmployeeModel.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { new: true }
      );
      if (!updateEmployee) {
        return res.status(404).send(Responser.generator(404));
      }
      return res.status(200).send(Responser.generator(200, updateEmployee));
    } catch (err) {
      return res.status(500).send(Responser.generator(500, err.message));
    }
  }

  /**
   * @description :: Remove Employee Controller
   * @param {request} req
   * @param {response} res
   */
  async remove(req: Request, res: Response) {
    try {
      const removeEmployee = await EmployeeModel.remove({ _id: req.params.id });
      if (!removeEmployee.n) {
        return res.status(404).send(Responser.generator(404));
      }
      return res.status(200).send(Responser.generator(200));
    } catch (err) {
      return res.status(500).send(Responser.generator(500, err.message));
    }
  }
}

export default Employee;