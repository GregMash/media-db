module.exports = function (sequelize, DataTypes) {
    let VideoGame = sequelize.define("VideoGame", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        
    });
    VideoGame.associate = (models) => {
        VideoGame.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return VideoGame;
};