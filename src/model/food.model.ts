import { Sequelize, DataTypes, Model } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'mssql',
  dialectModulePath: 'tedious',
  dialectOptions: {
    instanceName: 'DESKTOP-PLPKOQ1',
    trustedConnection: true
  },
  host: 'localhost',
  database: 'master',
  username: 'homoro',
  password: '1234'
});
// export const Food = sequelize.define('food', {
//   // Model attributes are defined here
//   food_ID: {
//     type: DataTypes.INTEGER,
//     allowNull: false
//   },
//   food_category_Ref: {
//     type: DataTypes.INTEGER
//   },
//   food_name: {
//     type: DataTypes.STRING
//   },
//   food_time: {
//     type: DataTypes.INTEGER
//   },
//   food_dificulty: {
//     type: DataTypes.INTEGER
//   },
//   food_count: {
//     type: DataTypes.STRING
//   },
//   food_favorite: {
//     type: DataTypes.BOOLEAN
//   },
//   food_note: {
//     type: DataTypes.STRING
//   },
//   food_picType: {
//     type: DataTypes.INTEGER
//   },
//   food_new: {
//     type: DataTypes.BOOLEAN
//   }
// });
export class Foods extends Model {}


Foods.init(
  {
    ID: {
      type: DataTypes.INTEGER
    },
    CategoryRef: {
      type: DataTypes.INTEGER
    },
    Name: {
      type: DataTypes.STRING
    },
    Time: {
      type: DataTypes.INTEGER
    },
    Dificulty: {
      type: DataTypes.INTEGER
    },
    Count: {
      type: DataTypes.STRING
    },
    Favorite: {
      type: DataTypes.BOOLEAN
    },
    Note: {
      type: DataTypes.STRING
    },
    PicType: {
      type: DataTypes.INTEGER
    },
    New: {
      type: DataTypes.BOOLEAN
    }
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Foods', // We need to choose the model name,
    timestamps: false
  }
);
