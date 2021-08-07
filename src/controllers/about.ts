// Packages
import * as _ from "lodash";
import { Request, Response } from "express";

// Facads 
import Responser from './../helpers/response';

// Models
import AboutModel from "./../models/about";


/**
 * @description :: Conversation Controller
 */
class About {
  /**
   * @description :: Constructor
   */
  constructor() { }

  /**
   * @description :: Create About Controller
   * @param {request} req
   * @param {response} res
   */
  async create(req: Request, res: Response) {
    try {
      const create: any = await AboutModel.create(req.body);
      return res.send(Responser.generator(200, create));
    } catch (err) {
      return res.status(500).send(Responser.generator(500, err.message));
    }
  }

  /**
   * @description :: Find One About Controller
   * @param {request} req
   * @param {response} res
   */
  async findOne(req: Request, res: Response) {
    try {
      let checkAbout: any = await AboutModel.findOne({ _id: req.params.id });
      if (!checkAbout) {
        return res.status(404).send(Responser.generator(404));
      }
      return res.status(200).send(Responser.generator(200, checkAbout));
    } catch (err) {
      return res.status(500).send(Responser.generator(500, err.message));
    }
  }

  /**
   * @description :: Find About Controller
   * @param {request} req
   * @param {response} res
   */
  async find(req: Request, res: Response) {
    try {
      let checkAbout: any = await AboutModel.findOne(req.query);
      if (!checkAbout) {
        return res.status(200).send(Responser.generator(200, []));
      }
      return res.status(200).send(Responser.generator(200, checkAbout));
    } catch (err) {
      return res.status(500).send(Responser.generator(500, err.message));
    }
  }

  /**
   * @description :: Update About Controller
   * @param {request} req
   * @param {response} res
   */
  async update(req: Request, res: Response) {
    try {
      const updateAbout = await AboutModel.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { new: true }
      );
      if (!updateAbout) {
        return res.status(404).send(Responser.generator(404));
      }
      return res.status(200).send(Responser.generator(200, updateAbout));
    } catch (err) {
      return res.status(500).send(Responser.generator(500, err.message));
    }
  }

  /**
   * @description :: Remove About Controller
   * @param {request} req
   * @param {response} res
   */
  async remove(req: Request, res: Response) {
    try {
      const removeAbout = await AboutModel.remove({ _id: req.params.id });
      if (!removeAbout.n) {
        return res.status(404).send(Responser.generator(404));
      }
      return res.status(200).send(Responser.generator(200));
    } catch (err) {
      return res.status(500).send(Responser.generator(500, err.message));
    }
  }
}

export default About;