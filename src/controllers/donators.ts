// Packages
import * as _ from "lodash";
import { Request, Response } from "express";

// Facads 
import Responser from './../helpers/response';

// Models
import DonatorModel from "./../models/donators";


/**
 * @description :: Conversation Controller
 */
class Donator {
  /**
   * @description :: Constructor
   */
  constructor() { }

  /**
   * @description :: Create Donator Controller
   * @param {request} req
   * @param {response} res
   */
  async create(req: Request, res: Response) {
    try {
      const create: any = await DonatorModel.create(req.body);
      return res.send(Responser.generator(200, create));
    } catch (err) {
      return res.status(500).send(Responser.generator(500, err.message));
    }
  }

  /**
   * @description :: Find One Donator Controller
   * @param {request} req
   * @param {response} res
   */
  async findOne(req: Request, res: Response) {
    try {
      let checkDonator: any = await DonatorModel.findOne({ _id: req.params.id });
      if (!checkDonator) {
        return res.status(404).send(Responser.generator(404));
      }
      return res.status(200).send(Responser.generator(200, checkDonator));
    } catch (err) {
      return res.status(500).send(Responser.generator(500, err.message));
    }
  }

  /**
   * @description :: Find Donator Controller
   * @param {request} req
   * @param {response} res
   */
  async find(req: Request, res: Response) {
    try {
      let checkDonator: any = await DonatorModel.findOne(req.query);
      if (!checkDonator) {
        return res.status(200).send(Responser.generator(200, []));
      }
      return res.status(200).send(Responser.generator(200, checkDonator));
    } catch (err) {
      return res.status(500).send(Responser.generator(500, err.message));
    }
  }

  /**
   * @description :: Update Donator Controller
   * @param {request} req
   * @param {response} res
   */
  async update(req: Request, res: Response) {
    try {
      const updateDonator = await DonatorModel.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { new: true }
      );
      if (!updateDonator) {
        return res.status(404).send(Responser.generator(404));
      }
      return res.status(200).send(Responser.generator(200, updateDonator));
    } catch (err) {
      return res.status(500).send(Responser.generator(500, err.message));
    }
  }

  /**
   * @description :: Remove Donator Controller
   * @param {request} req
   * @param {response} res
   */
  async remove(req: Request, res: Response) {
    try {
      const removeDonator = await DonatorModel.remove({ _id: req.params.id });
      if (!removeDonator.n) {
        return res.status(404).send(Responser.generator(404));
      }
      return res.status(200).send(Responser.generator(200));
    } catch (err) {
      return res.status(500).send(Responser.generator(500, err.message));
    }
  }
}

export default Donator;