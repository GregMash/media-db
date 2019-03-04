module.exports = function (sequelize, DataTypes) {
    let Movie = sequelize.define("Movie", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        
    });
    Movie.associate = (models) => {
        Movie.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Movie;
};