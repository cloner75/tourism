// Packages
import * as _ from "lodash";
import { Request, Response } from "express";

// Facads 
import Responser from './../helpers/response';

// Models
import PartnerModel from "./../models/partners";


/**
 * @description :: Conversation Controller
 */
class Partner {
  /**
   * @description :: Constructor
   */
  constructor() { }

  /**
   * @description :: Create Partner Controller
   * @param {request} req
   * @param {response} res
   */
  async create(req: Request, res: Response) {
    try {
      const create: any = await PartnerModel.create(req.body);
      return res.send(Responser.generator(200, create));
    } catch (err) {
      return res.status(500).send(Responser.generator(500, err.message));
    }
  }

  /**
   * @description :: Find One Partner Controller
   * @param {request} req
   * @param {response} res
   */
  async findOne(req: Request, res: Response) {
    try {
      let checkPartner: any = await PartnerModel.findOne({ _id: req.params.id });
      if (!checkPartner) {
        return res.status(404).send(Responser.generator(404));
      }
      return res.status(200).send(Responser.generator(200, checkPartner));
    } catch (err) {
      return res.status(500).send(Responser.generator(500, err.message));
    }
  }

  /**
   * @description :: Find Partner Controller
   * @param {request} req
   * @param {response} res
   */
  async find(req: Request, res: Response) {
    try {
      let checkPartner: any = await PartnerModel.findOne(req.query);
      if (!checkPartner) {
        return res.status(200).send(Responser.generator(200, []));
      }
      return res.status(200).send(Responser.generator(200, checkPartner));
    } catch (err) {
      return res.status(500).send(Responser.generator(500, err.message));
    }
  }

  /**
   * @description :: Update Partner Controller
   * @param {request} req
   * @param {response} res
   */
  async update(req: Request, res: Response) {
    try {
      const updatePartner = await PartnerModel.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { new: true }
      );
      if (!updatePartner) {
        return res.status(404).send(Responser.generator(404));
      }
      return res.status(200).send(Responser.generator(200, updatePartner));
    } catch (err) {
      return res.status(500).send(Responser.generator(500, err.message));
    }
  }

  /**
   * @description :: Remove Partner Controller
   * @param {request} req
   * @param {response} res
   */
  async remove(req: Request, res: Response) {
    try {
      const removePartner = await PartnerModel.remove({ _id: req.params.id });
      if (!removePartner.n) {
        return res.status(404).send(Responser.generator(404));
      }
      return res.status(200).send(Responser.generator(200));
    } catch (err) {
      return res.status(500).send(Responser.generator(500, err.message));
    }
  }
}

export default Partner;