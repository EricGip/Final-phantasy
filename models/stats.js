module.exports = function(sequelize, DataTypes) {
    var Stats = sequelize.define("Stats", {
      Gil: DataTypes.INTEGER,
      Hp: DataTypes.INTEGER,
      Attack: DataTypes.INTEGER,
      Defense: DataTypes.INTEGER,
      Speed: DataTypes.INTEGER,
      Potion: DataTypes.INTEGER,
    });
  
    Stats.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Stats.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Stats;
  };
  