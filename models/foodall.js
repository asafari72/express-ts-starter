/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('foodall', {
    food_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    food_category_Ref: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    food_name: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    food_time: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    food_dificulty: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    food_count: {
      type: DataTypes.STRING,
      allowNull: true
    },
    food_favorite: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    food_note: {
      type: DataTypes.STRING,
      allowNull: true
    },
    food_picType: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    food_new: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'foodall',
    schema: 'dbo'
  });
};
