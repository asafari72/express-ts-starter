import { NextFunction, Request, Response } from 'express';
import { Connection, Request as RequestTedious, } from 'tedious'
import { dbConfig } from '../global/db.config'

var connection = new Connection(dbConfig);
class IndexController {
  public index = async (req: Request, res: Response, next: NextFunction) => {
    try {
      var request = new RequestTedious(
        'SELECT * FROM dbo.TodoItems;',
        function (err, rowCount, rows) {
          if (err) {
            res.send(err)
          } 
        });

      // Print the rows read
      var result = "";
      request.on('row', function (columns) {
        columns.forEach(function (column) {
          if (column.value === null) {
            console.log('NULL');
          } else {
            result += column.value + " ";
          }
        });
        res.send(result)
        result = "";
      });

      // Execute SQL statement
      connection.execSql(request);

    } catch (er) {
      res.send({ 'Unable to connect to the database:': er });
    }
  };
}

export default IndexController;
