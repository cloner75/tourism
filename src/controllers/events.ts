// Packages
import * as _ from "lodash";
import { Request, Response } from "express";

// Facads 
import Responser from './../helpers/response';

// Models
import EventModel from "./../models/events";


/**
 * @description :: Conversation Controller
 */
class Event {
  /**
   * @description :: Constructor
   */
  constructor() { }

  /**
   * @description :: Create Event Controller
   * @param {request} req
   * @param {response} res
   */
  async create(req: Request, res: Response) {
    try {
      const create: any = await EventModel.create(req.body);
      return res.send(Responser.generator(200, create));
    } catch (err) {
      return res.status(500).send(Responser.generator(500, err.message));
    }
  }

  /**
   * @description :: Find One Event Controller
   * @param {request} req
   * @param {response} res
   */
  async findOne(req: Request, res: Response) {
    try {
      let checkEvent: any = await EventModel.findOne({ _id: req.params.id });
      if (!checkEvent) {
        return res.status(404).send(Responser.generator(404));
      }
      return res.status(200).send(Responser.generator(200, checkEvent));
    } catch (err) {
      return res.status(500).send(Responser.generator(500, err.message));
    }
  }

  /**
   * @description :: Find Event Controller
   * @param {request} req
   * @param {response} res
   */
  async find(req: Request, res: Response) {
    try {
      let checkEvent: any = await EventModel.findOne(req.query);
      if (!checkEvent) {
        return res.status(200).send(Responser.generator(200, []));
      }
      return res.status(200).send(Responser.generator(200, checkEvent));
    } catch (err) {
      return res.status(500).send(Responser.generator(500, err.message));
    }
  }

  /**
   * @description :: Update Event Controller
   * @param {request} req
   * @param {response} res
   */
  async update(req: Request, res: Response) {
    try {
      const updateEvent = await EventModel.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { new: true }
      );
      if (!updateEvent) {
        return res.status(404).send(Responser.generator(404));
      }
      return res.status(200).send(Responser.generator(200, updateEvent));
    } catch (err) {
      return res.status(500).send(Responser.generator(500, err.message));
    }
  }

  /**
   * @description :: Remove Event Controller
   * @param {request} req
   * @param {response} res
   */
  async remove(req: Request, res: Response) {
    try {
      const removeEvent = await EventModel.remove({ _id: req.params.id });
      if (!removeEvent.n) {
        return res.status(404).send(Responser.generator(404));
      }
      return res.status(200).send(Responser.generator(200));
    } catch (err) {
      return res.status(500).send(Responser.generator(500, err.message));
    }
  }
}

export default Event;