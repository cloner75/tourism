// Packages
import * as mongoose from "mongoose";
import { urlencoded, json } from "body-parser";
import * as cors from "cors";
import * as dotEnv from 'dotenv';
import { verify } from './jwt';

// Routes
import Router from '../routes';

/**
 * 
 */
class Connection {
  app = null;
  express = null;

  constructor(express: any) {
    dotEnv.config();
    this.app = express();
    this.express = express;
  }

  /**
   * TODO Return app
   * @param {any} express
   */
  appSetting(): any {
    this.app.use('/', this.express.static('view'));
    this.app.use(json());
    this.app.use(urlencoded({ extended: true }));
    this.app.use((err, req, res, next) => {
      if (err) {
        return res.sendStatus(400);
      }
      next();
    });
    this.app.use(cors());
    this.app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
      res.setHeader('Access-Control-Allow-Credentials', true);

      if (req.headers.authorization) {
        req.user = verify(req.headers.authorization);
      }
      next();
    });
  };

  /**
   *  TODO Connection Mongo
   * @param {number} port
   * @param {string} host
   * @param {string} dbName
   */
  mongoConnection(
    name: string,
    port: number,
    host: string
  ): void {
    mongoose.connect(
      `mongodb://${host}:${port}/${name}`,
      {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true,
      },
      (err) => {
        if (err) {
          console.log("🤯 Mongo Is Down");
        } else {
          console.log(`🚀 Mongo Is Runnign On Port: ${Number(port)}`);
        }
      }
    );
  };

  /**
   *  TODO Server Runner
   * @param {any} app
   * @param {number} port
   * @param {string} message
   */
  startServer(): void {
    const { PORT, MONGO_NAME, MONGO_PORT, MONGO_HOST } = process.env;
    this.app.listen(PORT, () => {
      console.log(`🚀 App Is Running On Port: `, PORT);
      this.mongoConnection(
        MONGO_NAME,
        Number(MONGO_PORT),
        MONGO_HOST
      );
    });
  };

  Router(): void {
    this.app.use('/authorization', Router.authorization);
  }
}
export default Connection;

