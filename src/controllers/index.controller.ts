import { NextFunction, Request, Response } from 'express';
import { Sequelize } from 'sequelize';
import { Foods } from '../model/food.model';
class IndexController {
  public index = async (req: Request, res: Response, next: NextFunction) => {
    
    const sequelize = new Sequelize({
      dialect: 'mssql',
      dialectModulePath: 'tedious',
      dialectOptions: {
        instanceName: 'DESKTOP-PLPKOQ1',
        trustedConnection: true
      },
      host: 'localhost',
      database: 'FoodDB',
      username: 'homoro',

      password: '1234'
    });
    try {
      // const q = await Food.findAll({});
      await sequelize.sync();
      const q = Foods === sequelize.models.Foods;
      // res.send(q);
      // sequelize
      //   .getQueryInterface()
      //   .showAllTables()
      //   .then((v) => {
      //     res.send(v);
      //   });
      sequelize
        .getQueryInterface()
        .describeTable('Foods')
        .then((v) => {
          res.send({
            match: q,
            tables: v
          });
        });
    } catch (er) {
      res.send({ 'Unable to connect to the database:': er });
    }
  };
}

export default IndexController;
