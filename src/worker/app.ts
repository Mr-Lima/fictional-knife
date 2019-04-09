import express from 'express';
import * as bodyParser from 'body-parser';
import Name from '../shared/packages/name';
import List from '../shared/packages/list';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();

    this.app.post('/list/name', (req, res) => {
      const names: Name[] = req.body.list.map((element: string) => {
        return new Name(element);
      });
      console.log('names', names);
      const list = new List(names);
      list.process();
      console.log('processed', list.processedElements);
      res.send({
        list: list.processedElements.map(name => {
          return name.name;
        })
      });
    });
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(
      bodyParser.urlencoded({
        extended: false
      })
    );
  }
}

export default new App().app;
