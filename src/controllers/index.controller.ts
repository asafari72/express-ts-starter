import { NextFunction, Request, Response } from 'express';
class IndexController {
  public index = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send('ok');
    } catch (er) {
      res.send({ 'Unable to connect to the database:': er });
    }
  };
}

export default IndexController;
