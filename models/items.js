module.exports = function (sequelize, DataTypes) {
  var Items = sequelize.define("Items", {
    name: DataTypes.STRING,
    hp: DataTypes.INTEGER,
    attack: DataTypes.INTEGER,
    defense: DataTypes.INTEGER,
    speed: DataTypes.INTEGER,
  });

  return Items;
};
