module.exports = function(sequelize, DataTypes) {
    var Items = sequelize.define("Items", {
      name: DataTypes.STRING,
      Hp: DataTypes.INTEGER,
      Attack: DataTypes.INTEGER,
      Defense: DataTypes.INTEGER,
      Speed: DataTypes.INTEGER,
    });

    return Items;
  };
  